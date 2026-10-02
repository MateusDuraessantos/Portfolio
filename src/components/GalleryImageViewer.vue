<template>
  <Teleport to="body">
    <dialog ref="dialog" class="image-viewer" :aria-label="alt" @cancel.prevent="close"
      @keydown="handleKeydown" @click.self="close">
      <div class="image-viewer__toolbar">
        <span id="image-viewer-help">{{ zoomed ? 'Drag or scroll to explore · Click to fit' : 'Click image to zoom' }} · Esc or double click to close</span>
        <button ref="closeButton" type="button" aria-label="Close image" @click="close">✕</button>
      </div>
      <div ref="viewport" class="image-viewer__viewport" @click.self="close">
        <img ref="image" :src="src" :alt="alt" :style="imageStyle" :class="{ 'is-zoomed': zoomed, 'is-dragging': dragging }"
          role="button" tabindex="0" :aria-label="zoomed ? 'Fit image to screen' : 'Zoom into image'"
          aria-describedby="image-viewer-help" draggable="false" @load="measureImage"
          @click.stop="scheduleZoom" @dblclick.stop.prevent="close" @keydown.enter.prevent="toggleZoom()"
          @pointerdown="startDrag" @pointermove="moveDrag" @pointerup="endDrag"
          @pointercancel="endDrag" @lostpointercapture="endDrag"
          @keydown.space.prevent="toggleZoom()" />
      </div>
    </dialog>
  </Teleport>
</template>

<script>
export default {
  name: 'GalleryImageViewer',
  props: {
    src: { type: String, required: true },
    alt: { type: String, required: true }
  },
  emits: ['close'],
  data() {
    return { zoomed: false, dragging: false, closing: false, naturalWidth: 0, naturalHeight: 0, viewportWidth: 0, viewportHeight: 0 }
  },
  computed: {
    fitWidth() {
      if (!this.naturalWidth || !this.naturalHeight) return 0
      return Math.min(this.viewportWidth, this.viewportHeight * this.naturalWidth / this.naturalHeight)
    },
    imageStyle() {
      if (!this.fitWidth) return {}
      return { width: `${this.zoomed ? Math.max(this.naturalWidth, this.fitWidth * 2) : this.fitWidth}px` }
    }
  },
  mounted() {
    this.previousFocus = document.activeElement
    this.previousFocusVisible = this.previousFocus?.matches(':focus-visible')
    this.previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    this.$refs.dialog.showModal()
    this.measureViewport()
    window.addEventListener('resize', this.measureViewport)
    this.$refs.closeButton.focus()
    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!this.reducedMotion) {
      this.dialogAnimation = this.$refs.dialog.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 180, easing: 'ease-out' })
    }
  },
  beforeUnmount() {
    clearTimeout(this.clickTimer)
    this.imageAnimation?.cancel()
    this.dialogAnimation?.cancel()
    window.removeEventListener('resize', this.measureViewport)
    const trigger = this.previousFocus
    if (trigger?.isConnected && !this.previousFocusVisible) {
      // Escape switches the browser to keyboard focus styling, even after a mouse click.
      trigger.setAttribute('data-restored-pointer-focus', '')
      const restoreFocusStyle = () => {
        trigger.removeAttribute('data-restored-pointer-focus')
        trigger.removeEventListener('blur', restoreFocusStyle)
        trigger.removeEventListener('keydown', restoreFocusStyle)
      }
      trigger.addEventListener('blur', restoreFocusStyle)
      trigger.addEventListener('keydown', restoreFocusStyle)
    }
    this.$refs.dialog.close()
    document.body.style.overflow = this.previousOverflow
    if (this.previousFocus?.isConnected) {
      this.previousFocus.focus({ preventScroll: true })
    }
  },
  methods: {
    measureViewport() {
      this.imageAnimation?.cancel()
      this.viewportWidth = this.$refs.viewport.clientWidth
      this.viewportHeight = this.$refs.viewport.clientHeight
    },
    measureImage(event) {
      this.naturalWidth = event.target.naturalWidth
      this.naturalHeight = event.target.naturalHeight
      this.measureViewport()
    },
    scheduleZoom(event) {
      clearTimeout(this.clickTimer)
      if (this.suppressClick || this.closing || event.detail > 1) return
      const rect = event.target.getBoundingClientRect()
      const point = { x: (event.clientX - rect.left) / rect.width, y: (event.clientY - rect.top) / rect.height }
      this.clickTimer = setTimeout(() => this.toggleZoom(point), 180)
    },
    async toggleZoom(point = { x: 0.5, y: 0.5 }) {
      clearTimeout(this.clickTimer)
      if (this.closing || !this.fitWidth) return
      const image = this.$refs.image
      const previousRect = image.getBoundingClientRect()
      this.imageAnimation?.cancel()
      this.zoomed = !this.zoomed
      await this.$nextTick()
      const viewport = this.$refs.viewport
      if (!viewport) return
      viewport.scrollLeft = this.zoomed ? image.clientWidth * point.x - viewport.clientWidth / 2 : 0
      viewport.scrollTop = this.zoomed ? image.clientHeight * point.y - viewport.clientHeight / 2 : 0
      if (!this.reducedMotion) {
        const nextRect = image.getBoundingClientRect()
        this.imageAnimation = image.animate([
          { transform: `translate(${previousRect.left - nextRect.left}px, ${previousRect.top - nextRect.top}px) scale(${previousRect.width / nextRect.width})` },
          { transform: 'translate(0, 0) scale(1)' }
        ], { duration: 320, easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)' })
      }
    },
    startDrag(event) {
      if (event.pointerType !== 'mouse' || event.button !== 0 || this.closing) return
      this.suppressClick = false
      if (!this.zoomed) return
      clearTimeout(this.clickTimer)
      this.imageAnimation?.finish()
      const viewport = this.$refs.viewport
      this.drag = { id: event.pointerId, x: event.clientX, y: event.clientY, left: viewport.scrollLeft, top: viewport.scrollTop }
      event.currentTarget.setPointerCapture(event.pointerId)
      event.preventDefault()
    },
    moveDrag(event) {
      if (!this.drag || event.pointerId !== this.drag.id) return
      const dx = event.clientX - this.drag.x
      const dy = event.clientY - this.drag.y
      if (!this.dragging && Math.hypot(dx, dy) < 4) return
      this.dragging = true
      this.suppressClick = true
      this.$refs.viewport.scrollLeft = this.drag.left - dx
      this.$refs.viewport.scrollTop = this.drag.top - dy
    },
    endDrag(event) {
      if (!this.drag || event.pointerId !== this.drag.id) return
      this.drag = null
      this.dragging = false
      if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId)
    },
    async close() {
      if (this.closing) return
      this.closing = true
      clearTimeout(this.clickTimer)
      this.dialogAnimation?.cancel()
      if (!this.reducedMotion) {
        this.dialogAnimation = this.$refs.dialog.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 160, easing: 'ease-in', fill: 'forwards' })
        try { await this.dialogAnimation.finished } catch { return }
      }
      this.$emit('close')
    },
    handleKeydown(event) {
      if (event.key === 'Escape') {
        event.preventDefault()
        this.close()
      }
    }
  }
}
</script>

<style scoped>
.image-viewer {
  position: fixed;
  inset: 0;
  width: 100%;
  max-width: none;
  height: 100%;
  height: 100dvh;
  max-height: none;
  margin: 0;
  padding: 0;
  border: 0;
  background: #090909;
  color: #fff;
  box-sizing: border-box;
}
.image-viewer::backdrop { background: #090909; }
.image-viewer__toolbar {
  height: 60px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  font-size: 12px;
  color: #bdbdbd;
}
.image-viewer__toolbar button {
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
.image-viewer__viewport {
  display: flex;
  width: 100%;
  height: calc(100% - 60px);
  overflow: auto;
  overscroll-behavior: contain;
}
.image-viewer__viewport img {
  display: block;
  flex: none;
  max-width: none;
  height: auto;
  margin: auto;
  align-self: flex-start;
  cursor: zoom-in;
  transform-origin: top left;
  user-select: none;
  -webkit-user-drag: none;
}
.image-viewer__viewport img.is-zoomed { cursor: grab; }
.image-viewer__viewport img.is-dragging { cursor: grabbing; }
.image-viewer :focus-visible { outline: 2px solid #ef3e46; outline-offset: -2px; }
</style>
