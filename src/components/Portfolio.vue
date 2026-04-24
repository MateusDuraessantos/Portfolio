<template>
  <!-- Componente: Portfolio.vue -->
  <div class="experiencia" id="link_ancor__portfolio">

    <h2>My portfolio</h2>
    <p>just a few</p>

        <div
          v-for="i in 11"
          :class="`experiencia__rocha experiencia__rocha--${i}`"
        >
          <img :src="`inicio/${whiteImages}/rochas/intersect_${i}.png`" :alt="`Rocha ${i}`">
        </div>
    
    <!-- CARROSSEL -->
    <Carousel @upPopup="emitpopupUp" />

  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'

export default {
  components: { Carousel },
  props: ['whiteImages'],
  methods: {
    emitpopupUp(obj) {
      this.$emit('upPopup', obj)
    }
  }
}
</script>

<style scoped>
.experiencia {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 200px 0 100px 0;
}

.experiencia__container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.experiencia__rocha {
  position: absolute;
  z-index: 4;
  animation-duration: 12s;
  animation-iteration-count: infinite;
}

.experiencia__rocha img {
  display: block;
  width: 100%;
  height: auto;
  will-change: transform;
  transform: translate3d(0, 0, 0);
}

.experiencia__rocha-img {
  display: block;
  width: 100%;
  height: auto;
  transition: transform .2s ease;
  will-change: transform;
}

.experiencia__rocha--1 {
  width: 20%;
  max-width: 300px;
  top: -29%;
  right: 40vw;
  animation-name: sky_04;
}

.experiencia__rocha--2 {
  width: 10%;
  max-width: 200px;
  top: 34%;
  right: 27vw;
  animation-name: sky_01;
}

.experiencia__rocha--3 {
  width: 15%;
  max-width: 250px;
  right: 19vw;
  top: 10%;
  animation-name: sky_02;
}

.experiencia__rocha--4 {
  width: 16%;
  max-width: 260px;
  left: 4vw;
  top: 4%;
  animation-name: sky_02;
}

.experiencia__rocha--5 {
  width: 30%;
  max-width: 400px;
  bottom: -30%;
  left: 0;
  animation-name: sky_08;
  z-index: 6;
}

.experiencia__rocha--6 {
  width: 30%;
  max-width: 400px;
  right: -130px;
  top: 10%;
  animation-name: sky_13;
}

.experiencia__rocha--7 {
  width: 13%;
  max-width: 230px;
  bottom: 0;
  left: 54vw;
  animation-name: sky_11;
}

.experiencia__rocha--8 {
  width: 30%;
  max-width: 400px;
  left: -150px;
  top: 0;
  animation-name: sky_08;
}

.experiencia__rocha--9 {
  width: 30%;
  max-width: 400px;
  left: -7vw;
  bottom: 2%;
  animation-name: sky_01;
}

.experiencia__rocha--10 {
  width: 30%;
  max-width: 400px;
  left: 19vw;
  top: -16%;
  animation-name: sky_04;
}

.experiencia__rocha--11 {
  width: 30%;
  max-width: 400px;
  bottom: 0;
  right: -5vw;
  animation-name: sky_06
}

.experiencia__rocha--12 {
  width: 20%;
  max-width: 300px;
  top: 1656px;
  right: 1vw;
  animation-name: sky_08;
}

@keyframes sky_01 {
  0% { transform: scale(var(--sky-scale)) translate(0, 0) }
  20% { transform: scale(var(--sky-scale)) translate(0, 0) }
  45% { transform: scale(var(--sky-scale)) translate(-30px, -40px) }
  75% { transform: scale(var(--sky-scale)) translate(10px, -60px) }
  100% { transform: scale(var(--sky-scale)) translate(0, 0) }
}

@keyframes sky_02 {
  0% { transform: scale(var(--sky-scale)) translate(0, 0) }
  15% { transform: scale(var(--sky-scale)) translate(-60px, 0) }
  35% { transform: scale(var(--sky-scale)) translate(-60px, -20px) }
  75% { transform: scale(var(--sky-scale)) translate(-60px, 20px) }
  100% { transform: scale(var(--sky-scale)) translate(0, 0) }
}

@keyframes sky_04 {
  0% { transform: scale(var(--sky-scale)) translate(0, 0) }
  50% { transform: scale(var(--sky-scale)) translate(30px, 40px) }
  100% { transform: scale(var(--sky-scale)) translate(0, 0) }
}

@keyframes sky_08 {
  0% { transform: scale(var(--sky-scale)) translate(0, 0) }
  35% { transform: scale(var(--sky-scale)) translate(20px, 50px) }
  70% { transform: scale(var(--sky-scale)) translate(-35px, 60px) }
  100% { transform: scale(var(--sky-scale)) translate(0, 0) }
}

@keyframes sky_11 {
  0% { transform: scale(var(--sky-scale)) translate(0, 0) }
  50% { transform: scale(var(--sky-scale)) translate(20px, 0) }
  75% { transform: scale(var(--sky-scale)) translate(0px, -30px) }
  90% { transform: scale(var(--sky-scale)) translate(20px, 0) }
  100% { transform: scale(var(--sky-scale)) translate(0, 0) }
}

@keyframes sky_13 {
  0% { transform: scale(var(--sky-scale)) translatey(0) }
  10% { transform: scale(var(--sky-scale)) translatey(0) }
  35% { transform: scale(var(--sky-scale)) translatey(60px) }
  90% { transform: scale(var(--sky-scale)) translatey(0) }
  100% { transform: scale(var(--sky-scale)) translatey(0) }
}

@keyframes sky_y {
  0% { transform: translatey(0) }
  50% { transform: translatey(60px) }
  100% { transform: translatey(0) }
}
</style>