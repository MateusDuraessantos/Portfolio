<template>
  <div class="carousel">
    <div class="carousel__buttons">
      <button id="button__l" @click="slide('left', 'stop')" class="carousel__button--left">
        &#60;
      </button>

      <button id="button__r" @click="slide('right', 'stop')" class="carousel__button--right">
        &#62;
      </button>
    </div>

    <div
      class="carousel__container"
      id="carousel__slide"
      @touchstart="slideOnTouth"
      @touchend="slideOnTouth"
    >
      <div class="carousel__thumb" v-for="(img, index) in imagens" @click="upPopup(img, 'carrossel_01')" img_default
        :id="index"
      >
        <div class="carousel__hover">
          Open project
        </div>
        <img :src="`projetos/${img.thumb.img}`" :alt="img.thumb.alt">
      </div>
    </div>
  </div>
</template>

<script>
import { imagens } from '../constants/destaque.js'
export default {
  name: 'Carrossel',
  data() {
    return {
      imagens: imagens.carrossel_01,
      carrosselInterval: '',
      initItem: Number,
      touchSlided: [],
      initial: 2,
      slideAutomaticoTimer: null,
    }
  },
  mounted() {
    this.slide()
    this.slideAutomatico()
  },

  methods: {
    slide(param, stop) {
      if (stop == 'stop') {
        clearInterval(this.slideAutomaticoTimer)
        setTimeout(() => this.slideAutomatico(), 5000);
      }
      if(param != undefined) this.initial += param == 'left' ? -1 : 1

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
    
    slideOnTouth(event) {
      if (event.type == 'touchstart') this.touchSlided = []
      this.touchSlided.push(event.changedTouches[0].clientX)
      const limiteSlide = 50 // Define quantos pixeis o touch deve alcançar para poder ativar a animação 
      let gSlide = this.touchSlided[0] - this.touchSlided[1] > limiteSlide || this.touchSlided[0] - this.touchSlided[1] < -limiteSlide
      
      if (!gSlide && event.type != 'touchend') return
      if (this.touchSlided[0] > this.touchSlided[1] && this.indexCenter() < this.img_defaults()?.length - 1) this.slide('right')
      if (this.touchSlided[0] < this.touchSlided[1] && this.indexCenter() != 0) this.slide('left')
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
    
    slideAutomatico() {
      for (let i = 1; i < 1000; i++) { clearInterval(i) } // A little trick 
      let changeDirection = 'right'
      
      this.slideAutomaticoTimer = setInterval(() => {
        if (this.indexCenter() == this.img_defaults()?.length - 1) changeDirection = 'left'
        else if (this.indexCenter() == 0) changeDirection = 'right'
        this.slide(changeDirection)
      }, 2000);
    },
    
    hideButtons() {
      const [l, r] = [document.getElementById('button__l'), document.getElementById('button__r')]
      l.style.display = this.indexCenter() == 0 ? 'none' : ''
      r.style.display = this.indexCenter() == this.img_defaults()?.length - 1 ? 'none' : ''
    },
    
    upPopup(obj, array) {
      this.$emit('upPopup', obj, array)
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

.carousel__hover:hover {
  transition: .2s;
  opacity: 1;
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