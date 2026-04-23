<template>
  <!-- Componente: Banner.vue -->
  <div class="banner" id="inicio">
    <p class="designed_by">
      Designed by <strong>Mateus Durães dos Santos</strong> - {{ new Date().getFullYear() }}
    </p>
    <div class="banner__ctn g-glass max__width">

      <p class="banner__name">Mateus Durães dos Santos</p>

      <div class="banner__camadas">
        <div class="banner__el banner__camada--1">
          <img class="banner__camada--img" src="camada_1.svg" alt=""></div>
        <div class="banner__el banner__camada--2">
          <img class="banner__camada--img" src="camada_2.svg" alt=""></div>
        <div class="banner__el banner__camada--3">
          <img class="banner__camada--img" src="camada_3.svg" alt=""></div>
      </div>

      <div class="banner__column--2">
        <div class="banner__description">
          <div class="banner__container">
            <p class="banner__ola">{{ saldacao }}</p>
            <h1 class="banner__nome">My name is Mateus,</h1>
          </div>
          <div class="banner__content">
            <p>I'm a software engineer!</p>
          </div>
          <div class="banner__social">
            <a class="banner__redes" href="https://www.linkedin.com/in/mateus-dur%C3%A3es-dos-santos/" target="_blank">
              <img
                class="banner__redes--img" :src="`icons/${whiteIcons}/linkedin.svg`"
                width="58"
                height="34"
                alt="logo Linkedin"
                loading="lazy"
              >
            </a>
            <a class="banner__redes" href="https://github.com/MateusDuraessantos" target="_blank">
              <img
                class="banner__redes--img"
                :src="`icons/${whiteIcons}/github__fill.svg`"
                width="58"
                height="34"
                alt="logo Github" loading="lazy"
              >
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["saldacao", "whiteIcons"],
}
</script>

<style scoped>

.banner {
  display: flex;
  align-items: center;
  min-height: 600px;
  position: relative;
  gap: 4vw;
  background-image: url('../../public/inicio/black/banner_sky.jpg');
  background-size: cover;
  min-height: 100vh;
  z-index: 3;
}

.banner__content p {
  font-weight: 400;
  font-size: 20px;
}

.banner__name {
  position: absolute;
  left: 30px;
  top: 30px;
}

.banner__ctn {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
  padding: 140px 80px;
  align-items: center;
}

.banner__camadas {
  position: relative;
  height: 120px;
}

@keyframes jump {
  0% {
    transform: translateY(0);
  }
  60% {
    transform: translateY(20px);
  }
  90% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(0);
  }
}

.banner__camada--img {
  width: 100%;
  height: max-content;
}

.banner__el {
  display: flex;
  align-items: center;
  position: absolute;
  height: 2px;
}

.banner__camada--1 {
  top: 0%;
  animation: jump infinite 5s;
  animation-delay: 0;
}

.banner__camada--2 {
  top: 50%;
  animation: jump infinite 5s;
  animation-delay: .6s;
}

.banner__camada--3 {
  top: 100%;
  animation: jump infinite 5s;
  animation-delay: 1.2s;
}

.banner__column--2 {
  display: flex;
  align-items: center;
  position: relative;
}

.banner__img {
  position: absolute;  
  left: -10vw;
  width: 55vw;
}
.designed_by {
  position: absolute;
}

.designed_by,
.designed_by strong {
  width: 100%;
  text-align: center;
  bottom: 10px;
  font-size: 12px;
  font-weight: 400;
}

.designed_by strong {
  font-weight: 600;
}

@media screen and (max-width: 1000px) {
  .banner__ctn {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 10px;
    height: 100%;
  }
}

</style>