<template>
  <Teleport to="body">
  <div ref="dialog" class="popup" :class="{ 'popup__closing': closing }" @click.self="closeThisPopup" v-if="renderImg" role="dialog" aria-modal="true" aria-labelledby="popup-title">
    <button ref="closeButton" class="popup__close" aria-label="Close popup" @click="closeThisPopup">&#10005;</button>
    <div v-if="navigationCount > 1 && !zoomImage" class="popup__pass--container">
      <button :aria-label="galleryProject ? 'Next media' : 'Next project'" @click="passImg('next')" class="popup__pass popup__right">&#62;</button>
      <button :aria-label="galleryProject ? 'Previous media' : 'Previous project'" @click="passImg('back')" class="popup__pass popup__left">&#60;</button>
    </div>

    <div v-show="!zoomImage || zoomReturning" ref="overlay" class="popup__overlay" @click.self="closeThisPopup">

      <!-- Imagens -->

      <div class="popup__content" :key="contentKey">
        <div class="popup__head">
          <h2 id="popup-title" class="popup__title">{{ renderImg.name }}</h2>
          <div v-if="renderImg.description" v-html="renderImg.description"></div>
          <p v-if="galleryProject" class="popup__counter" aria-live="polite">{{ indexImg + 1 }} / {{ navigationCount }}</p>
          <p v-if="renderImg.ano" class="popup__year">{{ renderImg.ano }}</p>
        </div>
        <div class="popup__container">
          <div class="popup__action--ctn" v-if="renderImg.link || renderImg.github">
            <div class="popup__action">
              <a v-if="renderImg.link" class="popup__action--button" :href="renderImg.link" target="_blank" rel="noopener noreferrer">View online</a>
              <a class="popup__action--button" v-if="renderImg.github" :href="renderImg.github"
                target="_blank" rel="noopener noreferrer">Github</a>
            </div>
          </div>
          <div v-for="img in renderImg.paths" :key="img.img" class="loading" :class="{ 'loading--on': !loadedMedia[img.img] }">
            <p class="loading__loader">Loading</p>

            <button v-if="img.type == undefined" class="popup__image-button" aria-label="Zoom in on image" @click="openZoom($event, img)">
              <img class="popup__imgs" :src="`/projetos/${img.img}`" :alt="img.alt" @load="stopLoading(img.img)" @error="stopLoading(img.img)" height="500" width="600">
            </button>
            
            <video v-else autoplay muted playsinline width="850" loop class="popup__imgs popup__video" @loadeddata="stopLoading(img.img)" @error="stopLoading(img.img)">
              <source :src="`/projetos/${img.img}`" :type="`video/${img.type}`">
            </video>
          </div>
        </div>
      </div>
    </div>
    <template v-if="zoomImage">
      <div ref="zoomViewport" class="popup__zoom-viewport" :class="{ 'popup__zoom-viewport--dragging': zoomDrag }"
        tabindex="0" aria-label="Zoomed image. Click to return to normal size" @click.stop="handleZoomClick" @keydown.enter.prevent="closeZoom" @keydown.space.prevent="closeZoom"
        @pointerdown="startZoomDrag" @pointermove="moveZoomDrag" @pointerup="endZoomDrag" @pointercancel="endZoomDrag" @lostpointercapture="endZoomDrag">
        <img ref="zoomedImage" class="popup__zoom-image" :src="`/projetos/${zoomImage.img}`" :alt="zoomImage.alt" :style="{ width: zoomWidth + 'px' }" draggable="false">
      </div>
    </template>
  </div>
  </Teleport>
</template>

<script>
import { myProjectsData } from '../constants/myProjectsData.js'
import { myHobbiesData } from '../constants/myHobbiesData.js'

export default {
  name: 'Popup',
  emits: ['closePopup'],
  props: {
    elemento: Object,
    galleryProject: Object,
    initialIndex: { type: Number, default: 0 }
  },
  data() {
    return {
      items: [...myProjectsData, ...myHobbiesData],
      indexImg: 0,
      loadedMedia: {},
      closing: false,
      zoomImage: null,
      zoomReturning: false,
      zoomWidth: 0,
      zoomDrag: null
    }
  },
  computed: {
    navigationCount() {
      return this.galleryProject ? this.galleryProject.gallery.length : this.items.length
    },
    contentKey() {
      return this.galleryProject ? this.galleryProject.gallery[this.indexImg]?.src : this.renderImg?.id
    },
    renderImg() {
      if (!this.galleryProject) return this.items[this.indexImg]
      const project = this.galleryProject
      const media = project.gallery[this.indexImg]
      if (!media) return null
      return {
        name: project.title,
        link: project.links?.online,
        github: project.links?.github,
        paths: [{ img: media.src, alt: media.alt || project.title, type: media.type === 'video' ? media.mimeType?.replace(/^video\//, '') || 'mp4' : undefined }]
      }
    }
  },
  mounted() {
    this.indexImg = this.galleryProject
      ? Math.max(0, Math.min(this.initialIndex, this.navigationCount - 1))
      : Math.max(0, this.items.findIndex(item => item.id === this.elemento?.id))
    this.previousOverflow = document.body.style.overflow
    this.previousFocus = document.activeElement
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', this.handleKeydown)
    this.$nextTick(() => this.$refs.closeButton?.focus())
  },
  beforeUnmount() {
    clearTimeout(this.closeTimer)
    this.zoomAnimation?.cancel()
    document.removeEventListener('keydown', this.handleKeydown)
    document.body.style.overflow = this.previousOverflow
    this.previousFocus?.focus()
  },
  methods: {
    openZoom(event, image) {
      if (this.closing || this.zoomImage) return
      const source = event.currentTarget.querySelector('img')
      if (!source.naturalWidth) return
      const bounds = source.getBoundingClientRect()
      const keyboard = event.detail === 0
      const x = keyboard ? 0.5 : (event.clientX - bounds.left) / bounds.width
      const y = keyboard ? 0.5 : (event.clientY - bounds.top) / bounds.height
      this.zoomTrigger = event.currentTarget
      this.zoomWidth = Math.max(source.naturalWidth, bounds.width * 2)
      this.zoomImage = image
      this.$nextTick(() => {
        const viewport = this.$refs.zoomViewport
        viewport.scrollLeft = x * this.zoomWidth - viewport.clientWidth / 2
        viewport.scrollTop = y * this.zoomWidth * source.naturalHeight / source.naturalWidth - viewport.clientHeight / 2
        viewport.focus({ preventScroll: true })
        this.animateZoom(this.$refs.zoomedImage, bounds)
      })
    },
    animateZoom(image, bounds, returning = false) {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      const rect = image.getBoundingClientRect()
      this.zoomAnimation?.cancel()
      const fitted = { transform: `translate(${bounds.left - rect.left}px, ${bounds.top - rect.top}px) scale(${bounds.width / rect.width})` }
      const enlarged = { transform: 'translate(0, 0) scale(1)' }
      this.zoomAnimation = image.animate(returning ? [enlarged, fitted] : [fitted, enlarged], {
        duration: 320,
        easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
        fill: returning ? 'forwards' : 'none'
      })
      return this.zoomAnimation
    },
    async closeZoom() {
      if (!this.zoomImage || this.zoomReturning || this.closing) return
      this.zoomAnimation?.finish()
      this.zoomReturning = true
      this.zoomDrag = null
      await this.$nextTick()
      const source = this.zoomTrigger?.querySelector('img')
      const image = this.$refs.zoomedImage
      if (source && image) {
        const animation = this.animateZoom(image, source.getBoundingClientRect(), true)
        if (animation) {
          try { await animation.finished } catch { return }
        }
      }
      this.zoomImage = null
      this.zoomReturning = false
      this.zoomDrag = null
      this.$nextTick(() => this.zoomTrigger?.focus())
    },
    startZoomDrag(event) {
      if (!event.isPrimary || event.button !== 0 || this.zoomReturning || this.closing) return
      this.zoomAnimation?.finish()
      this.zoomDragged = false
      const viewport = event.currentTarget
      this.zoomDrag = { x: event.clientX, y: event.clientY, left: viewport.scrollLeft, top: viewport.scrollTop }
      viewport.setPointerCapture(event.pointerId)
    },
    moveZoomDrag(event) {
      if (!this.zoomDrag) return
      if (Math.hypot(event.clientX - this.zoomDrag.x, event.clientY - this.zoomDrag.y) > 5) this.zoomDragged = true
      event.currentTarget.scrollLeft = this.zoomDrag.left - (event.clientX - this.zoomDrag.x)
      event.currentTarget.scrollTop = this.zoomDrag.top - (event.clientY - this.zoomDrag.y)
    },
    endZoomDrag() {
      this.zoomDrag = null
    },
    handleZoomClick() {
      if (this.zoomDragged) {
        this.zoomDragged = false
        return
      }
      this.closeZoom()
    },
    stopLoading(id) {
      this.loadedMedia[id] = true
    },
    closeThisPopup() {
      if (this.closing) return
      this.closing = true
      this.closeTimer = setTimeout(() => this.$emit('closePopup'), 300)
    },
    passImg(direction) {
      if (this.closing || this.navigationCount < 2) return
      this.zoomImage = null
      this.zoomDrag = null
      const step = direction === 'next' ? 1 : -1
      this.indexImg = (this.indexImg + step + this.navigationCount) % this.navigationCount
      this.$nextTick(() => this.$refs.overlay?.scrollTo({ top: 0 }))
    },
    handleKeydown(event) {
      if (event.key === 'Escape') {
        if (this.zoomImage) this.closeZoom()
        else this.closeThisPopup()
      }
      if (this.zoomImage && event.key.startsWith('Arrow')) {
        event.preventDefault()
        const movement = { ArrowRight: [100, 0], ArrowLeft: [-100, 0], ArrowDown: [0, 100], ArrowUp: [0, -100] }[event.key]
        if (movement) this.$refs.zoomViewport.scrollBy(...movement)
      } else if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault()
        this.passImg(event.key === 'ArrowRight' ? 'next' : 'back')
      }
      if (event.key === 'Tab') {
        const buttons = [...this.$refs.dialog.querySelectorAll('button, a[href]')].filter(button => button.getClientRects().length)
        const first = buttons[0]
        const last = buttons[buttons.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last?.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first?.focus()
        }
      }
    }
  }
}
</script>
<style>
.popup__head b {
  font-weight: 600;
}

.popup__head * {
  color: var(--creme) !important;
}
</style>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(6px);
  width: 100%;
  height: 100dvh;
  overflow: hidden;
  z-index: 9999;
  animation: openPopup forwards .3s;
}

@keyframes openPopup {
  from {
    opacity: 0
  }

  to {
    opacity: 1
  }
}

.popup__closing {
  animation: closingPopup forwards .3s;
  pointer-events: none;
}

@keyframes closingPopup {
  from {
    opacity: 1
  }

  to {
    opacity: 0
  }
}

.popup__overlay {
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100%;
  overflow: auto;
}

@keyframes popup {
  from {
    transform: translatey(-30px);
    opacity: 0;
  }

  to {
    transform: translatey(0);
    opacity: 1;
  }
}

.popup__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: min(1200px, calc(100% - 200px));
  min-height: 86vh;
  height: max-content;
  background: #1f1f1f;
  margin: 50px 0;
  animation: popup .3s forwards;
}

.popup__imgs {
  width: 100%;
  height: auto;
  display: block;
}

.popup__image-button {
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: zoom-in;
}

.popup__zoom-viewport {
  position: absolute;
  inset: 0;
  overflow: auto;
  cursor: grab;
  touch-action: none;
  overscroll-behavior: contain;
}

.popup__zoom-viewport--dragging { cursor: grabbing; }

.popup__zoom-image {
  display: block;
  max-width: none;
  height: auto;
  margin: 0 auto;
  user-select: none;
  transform-origin: top left;
}

.popup__video {
  pointer-events: none;
}

.loading {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.popup__container {
  height: max-content;
  width: 100%;
}

/* Texto carregando */

.loading--on .loading__loader::before,
.loading--on .loading__loader {
  display: flex !important;
}

.loading__loader {
  display: none;
  position: absolute;
  align-items: center;
  justify-content: center;
}

.loading__loader::before {
  content: '';
  display: none;
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  border-style: dotted;
  border-color: var(--creme);
  border-width: 5px;
  animation: rotation 14s infinite linear;
}

@keyframes rotation {
  from {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(360deg)
  }
}

/* Espada */

.loading--on::after {
  content: '';
  position: absolute;
  transform: rotate(6deg);
  height: calc(100% + 100px);
  width: 20px;
  filter: blur(20px);
  background: gray;
  animation: repet 3s infinite;
}

@keyframes repet {
  from {
    left: -100px
  }

  to {
    left: calc(100% + 100px)
  }
}

.loading--on::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  animation: loading 10s infinite;

}

@keyframes loading {
  from {
    transform: rotate(0)
  }

  to {
    transform: rotate(360)
  }
}

.popup__close {
  position: fixed;
  top: 20px;
  right: 20px;
  background: none;
  font-size: 22px;
  font-weight: 300;
  border: none;
  transition: .2s;
  z-index: 2;
  text-shadow: 1px 1px 2px black;
  cursor: pointer;
  color: var(--creme);
}

.popup__close:hover {
  color: gray;
  transition: .2s;
}

.popup__pass--container {
  z-index: 3;
  pointer-events: none;
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
}

.popup__pass {
  pointer-events: auto;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(114, 114, 114, 0.2);
  border-radius: 50%;
  border: 2px solid;
  border-color: rgb(44, 44, 44) rgb(44, 44, 44) black black;
  width: 60px;
  height: 60px;
  color: var(--creme);
  font-size: 32px;
  font-weight: 200;
  cursor: pointer;
}

.popup__pass * {
  transition: .2s;
}

.popup__left {
  transition: .2s;
  left: 40px;
}

.popup__right {
  transition: .2s;
  right: 40px;
}

.popup__right:hover {
  right: 34px;
}

.popup__left:hover {
  left: 34px;
}

.popup__head {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 29px;
  font-weight: 300;
}

.popup__year {
  margin-top: 30px;  
}

.popup__action--ctn {
  position: sticky;
  width: 100%;
  padding-top: 20px;
  height: 0;
  top: -18px;
  z-index: 1;
}

.popup__action {
  position: absolute;
  display: flex;
  margin: 20px;
  gap: 10px;
}

.popup__action--button {
  background: #1f1f1f;
  border-radius: 50px;
  padding: 6px 14px;
  font-size: 16px;
  color: var(--creme);
  transition: .2s;
  text-decoration: none;
  cursor: pointer;
  border: none;
}

.popup__action--button:hover {
  transition: .2s;
  background: var(--vermelho);
  color: black;
}

.popup__title {
  width: 100%;
  font-size: 28px;
  font-weight: 600;
}

@media screen and (max-width: 1000px) {
  .popup__title {
    font-size: 20px;
  }

  .popup__action {
    position: relative;
    justify-content: flex-start;
  }

  .popup__content {
    margin: 60px 0 100px;
    width: calc(100% - 32px);
  }

  .popup__pass--container {
    top: auto;
    bottom: 45px;
  }
}

@media screen and (max-width: 700px) {
  h1 {
    font-size: 20px;
  }

  .popup__head p {
    font-size: 14px;
  }

  .popup__head {
    padding: 20px;
  }

}
.popup__counter { color: var(--creme); font-size: 14px; }
.popup button:focus-visible, .popup a:focus-visible { outline: 2px solid var(--creme); outline-offset: 4px; }
@media (prefers-reduced-motion: reduce) {
  .popup, .popup__content, .loading::before, .loading::after, .loading__loader::before { animation: none; }
}
</style>
