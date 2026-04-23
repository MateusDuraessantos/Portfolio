<template>
  <!-- Componente: Aboard.vue -->
  <div class="abordo">
    <div class="abordo__container max__width">
      <p class="abordo__p">Fasten your seatbeals and come aboard</p>
    </div>
    <img class="abordo__img" :src="`inicio/${whiteImages}/abordo.webp`" width="1000" height="700" alt="">
  </div>
</template>

<script>
export default {
  props: ['whiteImages']
}
</script>

<style scoped>
.abordo {
  position: relative;
  display: flex;
  justify-content: center;
  height: max-content;
  z-index: 2;
}

.abordo__img {
  width: 100%;
  height: 100%;
  min-height: 800px;
  object-fit: cover;
}

.abordo__nuvens {
  position: absolute;
  width: 100%;
  height: max-content;
  object-fit: contain;
  bottom: 0;
}

.abordo__container {
  position: absolute;
  display: flex;
  align-items: center;
  height: 100%;
  z-index: 3;
  pointer-events: none;
}

.abordo__p {
  text-shadow: 4px 3px 5px rgba(0, 0, 0, 0.2) !important;
  font-weight: 700;
}

.abordo__p,
.abordo__p * {
  color: var(--creme) !important;
  font-size: 22px;
}

/* .whiteTheme .abordo:after {
  content: "";
  display: initial;
  bottom: 100%;
  position: absolute;
  height: 200px;
  width: 100%;
  background: red;
  background-image: linear-gradient(transparent, var(--linear-after));
  z-index: 20;
} */

@media screen and (max-width: 1000px) {
  .abordo__p, .whiteTheme .abordo__p * {
    color: black !important;
  }
  
  .abordo__container {
    justify-content: center;
    align-items: initial;
  }

  .abordo__p {
    font-size: 18px;
    margin-top: 60px;
  }

  
}

</style>