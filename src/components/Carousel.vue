<template>
  <div class="carousel">
    <div ref="buttonsAnchor" class="carousel__buttons">
      <div class="carousel__controls" :class="{ 'carousel__controls--visible': controlsVisible }" :style="controlsStyle">
      <button id="button__l" aria-label="Projeto anterior" @click="slide('left', 'stop')" class="carousel__button--left">
        &#60;
      </button>

      <button id="button__r" aria-label="Próximo projeto" @click="slide('right', 'stop')" class="carousel__button--right">
        &#62;
      </button>
      </div>
    </div>

    <div
      class="carousel__container"
      id="carousel__slide"
      @touchstart.passive="startTouch"
      @touchmove.passive="moveTouch"
      @touchend.passive="endTouch"
      @touchcancel.passive="cancelTouch"
      @click.capture="preventDragClick"
    >
      <router-link
        class="carousel__thumb" v-for="(img, index) in myProjectsData"
        :key="img.slug"
        :to="{ name: 'project', params: { slug: img.slug } }" img_default
        :id="index"
      >
        <div class="carousel__hover">Open project</div>
        <img :src="`/projetos/${img.thumb.img}`" :alt="img.thumb.alt">
      </router-link>
    </div>
  </div>
</template>

<script>
import { datasProjects } from '@/projects-datas/datas.ts'
export default {
  name: 'Carousel',
  data() {
    return {
      myProjectsData: Object.entries(datasProjects).map(([slug, project]) => ({ ...project, slug })),
      carrosselInterval: '',
      initItem: Number,
      touchGesture: null,
      suppressClickUntil: 0,
      initial: 2,
      controlsVisible: false,
      controlsStyle: {},
      controlsFrame: null,
    }
  },
  mounted() {
    this.slide()
    this.updateControlsPosition()
    window.addEventListener('scroll', this.scheduleControlsPosition, { passive: true })
    window.addEventListener('resize', this.scheduleControlsPosition)
    this.controlsObserver = new ResizeObserver(this.scheduleControlsPosition)
    this.controlsObserver.observe(this.$el)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.scheduleControlsPosition)
    window.removeEventListener('resize', this.scheduleControlsPosition)
    this.controlsObserver?.disconnect()
    cancelAnimationFrame(this.controlsFrame)
  },

  methods: {
    scheduleControlsPosition() {
      if (this.controlsFrame !== null) return
      this.controlsFrame = requestAnimationFrame(() => {
        this.controlsFrame = null
        this.updateControlsPosition()
      })
    },

    updateControlsPosition() {
      const carousel = this.$el.getBoundingClientRect()
      const anchor = this.$refs.buttonsAnchor.getBoundingClientRect()
      const fixedCenter = window.innerHeight - 48
      const naturalCenter = anchor.top + anchor.height / 2
      const featuredCard = this.$el.querySelector('[frame_size="big"]')?.getBoundingClientRect()
      // Reveal once the main card reaches the middle of the viewport.
      const revealPoint = window.innerHeight * 0.55
      this.controlsVisible = (featuredCard?.top ?? carousel.top) <= revealPoint && carousel.bottom > 0
      this.controlsStyle = this.controlsVisible && naturalCenter > fixedCenter
        ? {
          position: 'fixed',
          top: `${fixedCenter - 24}px`,
          left: `${anchor.left}px`,
          width: `${anchor.width}px`,
          height: '48px',
        }
        : {}
    },

    slide(param) {
      if (param != undefined) {
        this.initial = Math.max(0, Math.min(
          this.myProjectsData.length - 1,
          this.initial + (param == 'left' ? -1 : 1)
        ))
      }

      let positions = (2 - this.initial) * 25
      this.img_defaults()?.forEach(obj => {
        obj.removeAttribute('frame_size')
        obj.style.transform = ''
        const index = Number(obj.id)
        let classTag = ''
        if (index == this.initial) classTag = 'big'
        if (index == this.initial - 1 || index == this.initial + 1) classTag = 'middle'

        obj.style.left = `${positions}%`
        positions += 25
        obj?.setAttribute('frame_size', classTag)
      })
      
      this.littleAjustmentOnSpacing()
      this.hideButtons()
    },
    
    startTouch(event) {
      this.cancelTouch()
      if (event.touches.length !== 1) return
      const touch = event.touches[0]
      this.touchGesture = {
        id: touch.identifier,
        startX: touch.clientX,
        startY: touch.clientY,
        axis: null,
        moved: false,
      }
    },

    moveTouch(event) {
      if (event.touches.length !== 1) {
        this.cancelTouch()
        return
      }
      this.trackTouch(event.touches[0])
    },

    trackTouch(touch) {
      const gesture = this.touchGesture
      if (!gesture || touch.identifier !== gesture.id) return
      const x = Math.abs(touch.clientX - gesture.startX)
      const y = Math.abs(touch.clientY - gesture.startY)
      if (Math.max(x, y) < 12) return
      gesture.moved = true
      // Lock the first clear direction so a vertical scroll cannot become a swipe.
      if (!gesture.axis) {
        if (y >= x) gesture.axis = 'vertical'
        else if (x >= y * 1.5) gesture.axis = 'horizontal'
      }
    },

    endTouch(event) {
      const gesture = this.touchGesture
      if (!gesture) return
      const touch = Array.from(event.changedTouches).find(item => item.identifier === gesture.id)
      if (!touch) {
        this.cancelTouch()
        return
      }
      this.trackTouch(touch)
      const x = touch.clientX - gesture.startX
      const y = touch.clientY - gesture.startY
      if (gesture.moved) this.suppressClickUntil = Date.now() + 500
      this.touchGesture = null
      if (event.touches.length || gesture.axis !== 'horizontal') return
      if (Math.abs(x) < 60 || Math.abs(x) < Math.abs(y) * 1.5) return
      this.slide(x < 0 ? 'right' : 'left')
    },

    cancelTouch() {
      if (this.touchGesture?.moved) this.suppressClickUntil = Date.now() + 500
      this.touchGesture = null
    },

    preventDragClick(event) {
      if (Date.now() < this.suppressClickUntil) {
        event.preventDefault()
        event.stopPropagation()
      }
    },

    indexCenter() {
      return Number(document.querySelector('[frame_size="big"]')?.id)
    },

    img_defaults() {
      return document.querySelectorAll('[img_default]')
    },

    littleAjustmentOnSpacing() {
      const spacing = document.querySelectorAll('[frame_size="middle"]')
      const operator = (i) => (i == 0 && this.initial != 0) ?  '-' : '+'
      spacing.forEach((obj, i) => obj.style.transform = `translatex(calc(-50% ${operator(i)} 26px))`)
    },
    
    hideButtons() {
      const [l, r] = [document.getElementById('button__l'), document.getElementById('button__r')]
      l.style.display = this.indexCenter() == 0 ? 'none' : ''
      r.style.display = this.indexCenter() == this.img_defaults()?.length - 1 ? 'none' : ''
    }
  }
}

</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

/* CARROSSEL */

.carousel {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 800px;
  width: 100%;
  overflow: hidden;
}

.carousel * {
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  transition: .2s;
}

.carousel__container {
  position: relative;
  display: flex;
  align-items: center;
  width: calc(100% - 300px);
  max-width: 1028px;
  height: 100%;
  cursor: pointer;
  transition: .2s;
}

.carousel__thumb {
  cursor: pointer;
  transition: .2s;
}

.carousel__hover {
  content: '';
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin: auto;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7));
  backdrop-filter: blur(4px);
  transition: .2s;
  z-index: 4;
  color: var(--creme) !important;
  opacity: 0;
}

@media (hover: hover) and (pointer: fine) {
  .carousel__hover:hover {
    transition: .2s;
    opacity: 1;
  }
}

@media (hover: none), (pointer: coarse) {
  .carousel__hover {
    display: none;
  }
}

[img_default] {
  position: absolute;
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 200px;
  height: 438px;
  border-radius: 30px;
  width: 200px;
  height: 438px;
  transform: translatex(-50%);
  box-shadow: 3px 3px 30px rgba(0, 0, 0, 0.4);
  border: 2px solid black;
  object-position: top;
  outline: 2px solid #2c2c2c;
}

[img_default] img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

[frame_size="middle"] {
  display: flex !important;
  width: 240px;
  height: 542px;
  z-index: 1;
}

[frame_size="big"] {
  display: flex !important;
  width: 296px;
  height: 638px;
  border-radius: 36px;
  z-index: 3;
}

[frame_size="big"] img {
  z-index: 3;
}

.carousel__buttons {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 450px;
  border-radius: 30px;
  height: 100%;
}

.carousel__controls {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  z-index: 5;
  pointer-events: none;
  opacity: 0;
  transform: translateY(12px);
  transition: opacity .3s ease, transform .3s ease;
}

.carousel__controls--visible {
  opacity: 1;
  transform: translateY(0);
}

.carousel__controls--visible button {
  pointer-events: auto;
}

@media (prefers-reduced-motion: reduce) {
  .carousel__controls {
    transition: none;
    transform: none;
  }
}

.carousel__button--left,
.carousel__button--right {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: var(--creme) !important;
  z-index: 3;
  transition: .2s;
  cursor: pointer;
  font-size: 32px;
  font-weight: 200;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  transition: .2s;
  background: rgba(0, 0, 0, 0.6);
  background-image: linear-gradient(var(--blue_00), #102c55);
  border: 2px solid;
  border-color: rgb(44, 44, 44) rgb(44, 44, 44) black black;
  z-index: 4;
}

.carousel__button--left img,
.carousel__button--right img {
  width: 30px;
  height: 30px;
}

.carousel__button--left {
  left: 0;
}

.carousel__button--right {
  right: 0;
}

.carousel__button--left:hover,
.carousel__button--right:hover {
  backdrop-filter: blur(10px);
  transition: .2s;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
}

@media screen and (max-width: 1000px) {
  [img_default]::before {
    display: none;
  }

  [img_default] {
    display: none;
    box-shadow: none;
    border: none;
    outline: none;
  }

  .carousel__container {
    touch-action: pan-y pinch-zoom;
  }

  .carousel__hover {
    display: none;
  }

  .carousel__thumb[frame_size="middle"] {
    box-shadow: 0 8px 20px rgba(0, 0, 0, .35);
  }

  .carousel__thumb[frame_size="big"] {
    box-shadow: 0 16px 36px rgba(0, 0, 0, .6), 0 0 16px rgba(0, 0, 0, .35);
  }
}

@media screen and (max-width: 450px) {
  .carousel__buttons {
    width: calc(100% - 20px);
  }

  [img_default] {
    display: none;
  }

}
</style>
