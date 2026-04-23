<template>
  <!-- Componente: Parallax.vue -->
  <div class="parallax">
    <div class="parallax__contente" id="parallax__id">
      <img v-if="awaitParallax" class="parallax__img" src="inicio/white/mobile-background__parallax.webp" alt="">

      <div class="parallax__dark" v-else>
        <img src="inicio/black/red-planet.jpg" class="sobre__planet--1" alt="" width="600" height="600" loading="lazy">
        <img src="inicio/black/earth.png" class="sobre__planet--2" alt="" width="600" height="600" loading="lazy">
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  props: ["booleanTheme"],

  data() {
    return {
      stopParallax: true,
      awaitParallax: false,
    }
  },

  watch: {
    booleanTheme(newVal) {
      setTimeout(() => this.awaitParallax = newVal, 1000);
    },
  },

  mounted() {
    this.awaitParallax = this.booleanTheme
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        this.stopParallax = entry.isIntersecting ? true : false 
      });
    });

    document.querySelectorAll('.experiencia__rocha').forEach((obj) => {
      const inner = obj.querySelector('img');
      if (!inner) return;

      let currentX = 0;
      let currentY = 0;
      let currentRotate = 0;
      let targetX = 0;
      let targetY = 0;
      let targetRotate = 0;
      let animationFrame = null;
      const maxMove = 14;
      const maxRotate = 4;
      const strength = 0.10;
      const ease = 0.07;

      const animate = () => {
        currentX += (targetX - currentX) * ease;
        currentY += (targetY - currentY) * ease;
        currentRotate += (targetRotate - currentRotate) * ease;

        inner.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) rotate(${currentRotate}deg)`;

        const isMoving =
          Math.abs(targetX - currentX) > 0.05 ||
          Math.abs(targetY - currentY) > 0.05 ||
          Math.abs(targetRotate - currentRotate) > 0.05;

        if (isMoving) animationFrame = requestAnimationFrame(animate);
        else animationFrame = null;
      };

      const startAnimation = () => {
        if (!animationFrame) animationFrame = requestAnimationFrame(animate);
      };

      obj.addEventListener('mousemove', (event) => {
        const rect = obj.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const deltaX = x - centerX;
        const deltaY = y - centerY;

        targetX = Math.max(Math.min(-deltaX * strength, maxMove), -maxMove);
        targetY = Math.max(Math.min(-deltaY * strength, maxMove), -maxMove);

        targetRotate = Math.max(
          Math.min((-deltaX / centerX) * maxRotate, maxRotate),
          -maxRotate
        );

        startAnimation();
      });

      obj.addEventListener('mouseleave', () => {
        targetX = 0;
        targetY = 0;
        targetRotate = 0;
        startAnimation();
      });
    });
    
    const main = document.querySelector('.container')
    const y = main.getBoundingClientRect().top + window.scrollY;
    observer.observe(main)
    window.addEventListener('scroll', () => {
      if (this.stopParallax) {
        this.parallaxEffect(document.getElementById('parallax__id'), y)
      }
    }) 
  },
  methods: {
    parallaxEffect(element, positionY) {
      const topPosition = ((window.scrollY / 1.5) - positionY)
      element.style.transform = `translateY(${topPosition}px)`
    },
  }
}
</script>

<style scoped>

.parallax {
  position: absolute;
  height: 100%;
  width: 100%;
  min-height: 100%;
  overflow: hidden;
}

.parallax__contente {
  position: absolute;
  top: 0;
  left: 0;
  height: max-content;
  width: 100%;
  min-height: 100%;
  min-width: 1000px;
}

.parallax__img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.whiteTheme .parallax__img {
  display: initial;
}

.parallax__dark {
  position: absolute;
  width: 100%;
  min-width: 100%;
  min-height: 100%;
}

.sobre__planet--1 {
  position: absolute;
  bottom: 1000px;
  left: -100px;
  width: 800px;
  height: 800px;
  object-fit: contain;
  z-index: 1;
  filter: blur(4px);
}

.sobre__planet--2 {
  position: absolute;
  filter: blur(4px);
  bottom: 600px;
  right: -3vw;
  width: 550px;
  height: 550px;
  object-fit: contain;
  z-index: 4;
}

@media screen and (max-width: 1000px) {

  .sobre__planet--1 {
    width: 500px;
    transform: translateY(200px);
  }

  .sobre__planet--2 {
    right: -8px;
  }

}

@media only screen and (max-width: 500px) {

  .sobre__planet--1 {
    width: 400px;
    bottom: -315px;
  }

  .sobre__planet--2 {
    width: 400px;
    right: -70px;
  }

}
</style>