<template>
  <div class="project-parallax" aria-hidden="true">
    <div ref="layer" class="project-parallax__layer">
      <img class="project-parallax__planet project-parallax__planet--red" src="/inicio/black/red-planet.jpg" alt="" width="600" height="600" decoding="async">
      <img class="project-parallax__planet project-parallax__planet--earth" src="/inicio/black/earth.png" alt="" width="600" height="600" decoding="async">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectParallax',
  mounted() {
    this.motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    this.motionPreference.addEventListener('change', this.scheduleUpdate)
    window.addEventListener('scroll', this.scheduleUpdate, { passive: true })
    window.addEventListener('resize', this.scheduleUpdate)
    this.updatePosition()
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.scheduleUpdate)
    window.removeEventListener('resize', this.scheduleUpdate)
    this.motionPreference.removeEventListener('change', this.scheduleUpdate)
    cancelAnimationFrame(this.animationFrame)
  },
  methods: {
    scheduleUpdate() {
      if (this.animationFrame) return
      this.animationFrame = requestAnimationFrame(() => {
        this.animationFrame = null
        this.updatePosition()
      })
    },
    updatePosition() {
      const pageTop = this.$el.getBoundingClientRect().top + window.scrollY
      const offset = this.motionPreference.matches ? 0 : Math.max(0, window.scrollY - pageTop) / 1.5
      this.$refs.layer.style.transform = `translate3d(0, ${offset}px, 0)`
    },
  },
}
</script>

<style scoped>
.project-parallax {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

.project-parallax__layer {
  position: absolute;
  inset: 0;
}

.project-parallax__planet {
  position: absolute;
  object-fit: contain;
  filter: blur(4px);
  opacity: 0.65;
}

.project-parallax__planet--red {
  top: 280px;
  left: -180px;
  width: 800px;
  height: 800px;
}

.project-parallax__planet--earth {
  top: 950px;
  right: -3vw;
  width: 550px;
  height: 550px;
}

@media (max-width: 800px) {
  .project-parallax__planet--red {
    left: -180px;
    width: 500px;
    height: 500px;
  }

  .project-parallax__planet--earth {
    right: -100px;
    width: 400px;
    height: 400px;
  }
}
</style>
