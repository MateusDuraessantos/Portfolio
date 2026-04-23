<template>
  <main>
    <!-- POPUP -->
    <Popup
      v-if="handleUpPopup"
      :elemento="imageIndex"
      @close-popup="handleUpPopup = false"
    />

    <div id="background">
      <div id="themeOverflow"></div>
      <div id="overflow">
        <div class="overflowPort">
          <img :src="`inicio/${smile}/smile.svg`">
        </div>
      </div>
      
      <Header
        @tun-on="turnOn"
        :removeLinkVer="removeLinkVer"
        :booleanTheme="booleanTheme"
        class="header"
        id="header"
        @remove-link="removeClass"
        :dadoBol="hiddenHeader"
      />

      <!-- BANNER -->
      <Banner :saldacao="saldacao" :whiteIcons="whiteIcons" />

      <!-- ABORDO -->
      <Abordo :whiteImages="whiteImages" />

      <div class="container">
        <Parallax
          :booleanTheme="booleanTheme" 
        />

        <!-- EXPERIÊNCIA -->
        <Experiencia
          :white-images="whiteImages"
          @upPopup="upPopup"
        />

        <!-- OUTROS -->
        <div class="outros">
          <h2>Some hobbies</h2>
          <div class="outros__grid max__width">
            <img class="outros__shadow" src="/shadow.svg" alt="">
            <!-- Cards -->
            <div
              :class="`${item.class} outros__card`"
              v-for="item in imagens.carrossel_02"
            >
              <div
                class="outros__clique"
                @click="upPopup(item, 'carrossel_02')"
              >
                See project
              </div>
              <img class="outros__img" :src="`projetos/${item.thumb.white}-${whiteImages}.jpg`" alt="">
            </div>
          </div>
        </div>
        
        <!-- SOBRE -->
        <Sobre :whiteIcons="whiteIcons" />

        <!-- CONTATO -->
        <section>
          <h5 class="mensagem">
            <p class="mensagem__title"><b>Did you enjoyed the tour?</b></p>
            <button class="mensagem__contact" @click="commons.scrollDown('contato')">
              <p class="mensagem__me">Contact me!</p>
              <p class="mensagem__arrow">></p>
            </button>
          </h5>
        </section>

      </div>
    
      <!-- FOOTER -->
      <Footer
        :whiteImages="whiteImages"
        :footerVisible="footerVisible"
        :blockClicked="blockClicked"
      />

    </div>
  </main>
</template>

<script>
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Footer from '@/components/Footer.vue'
import Abordo from '@/components/Abordo.vue'
import Sobre from '@/components/Sobre.vue'
import Popup from '@/components/Popup.vue'
import Parallax from '@/components/Parallax.vue'
import Experiencia from '@/components/Experiencia.vue'
import Animation from '@/components/Animation.vue'
import Carrossel from '@/components/Carrossel.vue'
import { imagens } from '@/constants/destaque.js'
import { commons } from '@/utils/commons'

export default {
  name: 'App',
  components: { Header, Banner, Footer, Popup, Parallax, Abordo, Sobre, Animation, Carrossel, Experiencia },
  data() {
    return {
      commons,
      imagens: imagens,
      removeLinkVer: true,
      imageIndex: Object,
      handleUpPopup: false,
      whatTimeIs: null,
      hiddenHeader: true,
      booleanTheme: true,
      smile: 'black',
      blockClicked: '',
      whiteIcons: 'whiteicons',
      whiteImages: 'black',
      footerVisible: true,
      saldacao: null,
      widthSize: undefined,
    }
  },
  watch: {
    booleanTheme() {
      this.changeImagens(1000)
    },
  },
  mounted() {
    this.isDay() // Verifica o horário para setar o tema dos elementos
    this.turnBackgroundWhite(0)
    this.overflow(0)
    this.keepWhiteOnReload(0)
    this.changeImagens(0)
    this.haveAGoodDay()
    window.addEventListener('resize', this.widthScreen)
    this.widthSize = window.screen.availWidth

    
  },
  methods: {

    upPopup(obj, array) {
      this.imageIndex = { obj, array }
      this.handleUpPopup = !this.handleUpPopup
    },

    removeLinkVerFunc() {
      this.removeLinkVer = !this.removeLinkVer
    },

    isDay() {
      this.whatTimeIs = new Date().getHours()
      this.booleanTheme = this.whatTimeIs < 6 || this.whatTimeIs >= 18 ? false : true // Se for true o tema fica branco
      // this.booleanTheme = true
      const overflow = document.getElementById('overflow')
      if (this.booleanTheme == true) {
        overflow.classList.add('whiteoverflows')
        this.smile = 'white'
        setTimeout(() => overflow.classList.remove('whiteoverflows'), 1250);
      } else {
        overflow.classList.add('blackoverflows')
        this.smile = 'black'
        setTimeout(() => overflow.classList.remove('blackoverflows'), 1250);
      }
    },
    
    turnOn() {
      this.booleanTheme = !this.booleanTheme
      this.turnBackgroundWhite(1000)
      this.overflow(2000)
    },
    
    overflow(timer) { // Aciona o overflow para alteração do tema 
      const overflow = document.getElementById('themeOverflow')
      overflow.setAttribute('class', 'blackOverflow')

      if (this.booleanTheme == true) setTimeout(() => overflow.removeAttribute('class'), timer);
      else {
        overflow.setAttribute('class', 'whiteOverflow')
        setTimeout(() => overflow.removeAttribute('class'), timer);
      }
    },
    
    turnBackgroundWhite(timer) {
      // Altera a cor do background global 
      if (this.booleanTheme == true) setTimeout(() => document.body.style.background = 'var(--body_color)', timer);
      else setTimeout(() => document.body.removeAttribute('style'), timer);
    },
    
    removeClass() {
      document.getElementById('header').classList.remove('header__show')
    },
    
    haveAGoodDay() {
      const date = new Date().getHours()
      if (date >= 0 && date < 5) this.saldacao = 'Hello,'
      else if (date >= 5 && date < 12) this.saldacao = 'Good morning!'
      else if (date >= 12 && date < 18) this.saldacao = 'Good afternoon!'
      else this.saldacao = 'Good evening!'
    },
    changeImagens(timer) {
      this.booleanTheme == true ? 
        setTimeout(() => {
          this.blockClicked = 'blackicons'
          this.whiteImages = 'white'
          this.footerVisible = false
        }, timer) :
        setTimeout(() => {
          this.blockClicked = 'whiteicons'
          this.whiteImages = 'black'
          this.footerVisible = true
        }, timer);

      this.keepWhiteOnReload(timer)
    },
    
    keepWhiteOnReload(timer) {
      setTimeout(() => {
        document.body.classList.toggle('whiteTheme', this.booleanTheme)
        this.whiteIcons = this.booleanTheme ? 'blackicons' : 'whiteicons' //Altera o path das thumbs
      }, timer);
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Xanh+Mono:ital@0;1&display=swap');

/* font-family: 'Poppins', sans-serif; */
html {
  font-size: 16px;
}

#app {
  width: 100vw;
  overflow-x: hidden;
}

body {
  position: relative;
  overflow: overlay;
  background: black;
  width: 100vw;
  overflow-y: overlay;
  overflow-x: hidden;
}

button {
  cursor: pointer;
  background: none;
  border: none;
}

img {
  user-select: none;
}

:root {
  --linear-after-1: #f1f1f1;
  --body_color: rgb(224 205 204);
  --linear-after: rgb(168 171 192);
  --border-color: #2c2c2c;
  --shadow-color: black;
  --text-color: black;
  --creme: #E0D9CE;
  --vermelho: rgb(255, 54, 54);
  --sky-scale: 0.9;
}

a {
  cursor: pointer;
  position: relative;
}

p {
  font-size: 16px;
}

* {
  font-family: 'Poppins', sans-serif;
  color: var(--creme);
  margin: 0;
  box-sizing: border-box;

}

*::-webkit-scrollbar {
  width: 7px;
  height: 7px;
  background: transparent;
}

*::-webkit-scrollbar-track {
  display: none;
}

*::-webkit-scrollbar-thumb {
  background-color: #474747;
  border-radius: 6px;
}

.max__width {
  position: relative;
  max-width: 1300px;
  width: calc(100% - 200px);
  margin: auto;
}

.g-glass {
  -webkit-backdrop-filter: blur(30px) !important;
  backdrop-filter: blur(30px);
  box-shadow: 4px 4px 24px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
}

.g-glass::before {
  position: absolute;
  content: '';
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transform: scale(1.2);
  opacity: 0.3;
  pointer-events: none;
  background-image: url('../public/noise.png');
}

/* white theme */
.blackOverflow {
  background: black;
}

.whiteOverflow {
  background: white;
}

.whiteOverflow,
.blackOverflow {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  opacity: 0;
  transition: .2s;
  animation-name: changingTheme;
  animation-duration: 2s;
  pointer-events: none;
}

@keyframes changingTheme {
  0% { opacity: 0 } 
  50% { opacity: 1 }
  100% { opacity: 0 }
}

/* Animação ao carregar a página */

.overflowPort {
  display: none;
}

.whiteoverflows .overflowPort,
.blackoverflows .overflowPort {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: none;
}

.whiteoverflows,
.blackoverflows {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  height: 100vh;
  opacity: 1;
  animation-name: animationOverflow;
  animation-duration: 1.25s;
  animation-fill-mode: forwards;
  width: 100vw;
}

@keyframes animationOverflow {
  0% { opacity: 1 }

  50% { opacity: 1 }

  100% { opacity: 0 }
}

.blackoverflows .overflowPort {
  background: black;
}

.whiteoverflows {
  background: var(--creme);
  background: white;
}

.popup__close--animation-blur .popup__overflow {
  overflow: hidden;
}

/* Header */
.header {
  opacity: 1;
  transition: .5s;
}

.whiteTheme .header {
  background: hsla(0, 0%, 100%, .4);
}

.header__show {
  opacity: 0;
  transition: .2s
}

main {
  position: relative;
  transition: .2s;
  overflow: hidden;
}

.container {
  position: relative;
}

/* Mensagem */

.mensagem {
  position: relative;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  z-index: 2;
}

.mensagem__title {
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5);
  z-index: 1;
  font-size: 28px;
}

.mensagem__contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;  
  z-index: 2;
  transition: .2s;
}

.mensagem__me {
  font-weight: 400;
  font-size: 22px;
  transition: .4s !important;
}

.mensagem__contact:hover .mensagem__me,
.mensagem__contact:hover .mensagem__arrow {
  color: gray;
  transition: .3s !important;
}

.mensagem__arrow {
  font-size: 30px;
  height: 40px;
  width: 40px;
  margin: auto;
  overflow: hidden;
  animation: arrow 2s infinite;
}

@keyframes arrow {
  0% { transform: translateY(-5px) rotate(90deg) }
  50%{ transform: translateY(15px) rotate(90deg) }
  100% { transform: translateY(-5px) rotate(90deg) }
}

.whiteTheme .mensagem h6 {
  text-shadow: none;
  color: #8f5245;
}

.title--line {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--creme);
  font-size: 22px;
  font-weight: 700;
  width: 100%;
  text-align: center;
  height: 100px;
  z-index: 5;
}

@media screen and (max-width: 1000px) {
  
  .experiencia__rocha--5 { 
    display: none;
  }

  :root {
      --sky-scale: 1.4
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
}

/* OUTROS */

.outros {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  z-index: 5;
}

.outros__alguns {
  width: 100%;
  text-align: center;
  font-size: 22px;
  color: var(--creme);
}

.destaque__grid_1 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 100px 100px 0 100px;
}

.outros__grid {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  max-width: 1000px;
  padding: 100px 0;
}

.outros__shadow {
  display: none;
  pointer-events: none;
} 

.outros__card {
  position: relative;
  width: 100%;
  height: 400px;
}

.destaque__card {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  width: 100%;
  height: 800px;
  box-shadow: 5px 3px 15px rgba(0, 0, 0, 0.2);
}

.whiteTheme .outros__shadow {
  display: block;
  position: absolute;
  top: 90px;
  left: 40px;
  width: 1520px;
  z-index: -1;
}

.whiteTheme .outros__card {
  box-shadow: 25px 24px 45px rgb(59 25 25 / 28%);
}

.mesa {
  grid-area: mesa;
}

.outros__clique {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: var(--creme) !important;
  opacity: 0;
  z-index: 1;
  transition: .2s;
  cursor: pointer;
}

.outros__card:hover .outros__clique {
  transition: .2s;
  opacity: 1;
}

.destaque__card:hover .outros__clique {
  transition: .2s;
  opacity: 1;
}

.outros__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Banner */

.whiteTheme .banner::before {
  content: '';
  background-image: linear-gradient(transparent, var(--linear-after-1));
  height: 200px;
  bottom: 0;
  width: 100%;
  position: absolute;
}

.whiteTheme .banner::after {
  background-image: linear-gradient(#e2e0e7, transparent);
}

.whiteTheme .abordo::after {
  content: '';
  position: absolute;
  height: 200px;
  width: 100%;
  top: 0;
  z-index: 2;
  background-image: linear-gradient(var(--linear-after-1), transparent);
}

.whiteTheme .abordo::before {
  content: '';
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  background-image: linear-gradient(transparent, var(--linear-after));
}


/*  */

.banner__social {
  display: flex;
  width: max-content;
  margin-top: 20px;
  gap: 20px;
}

.banner__redes--img {
  cursor: pointer;
  transition: .2s;
  width: 40px;
  height: 40px;
}

.img--1 {
  padding-left: 0;
}

.banner__redes {
  transition: .2s;
}

.banner__social:hover .banner__redes:not(:hover) {
  opacity: 0.2;
  transition: .2s;
}

@media screen and (max-width: 1280px) {
  .max__width {
    width: calc(100% - 100px) !important;
  }
}

@media screen and (max-width: 1000px) {

  .max__width {
    width: calc(100% - 50px) !important;
  }

  *::-webkit-scrollbar {
    width: 0;
    height: 7px;
    background: transparent;
  }

  .whiteTheme .outros__shadow {
    display: none;
  } 
  
  /* Destaque */
  
  .destaque__card {
    height: 400px; 
    border-radius: 20px;
  }

  /* Outro */

  .destaque__grid_1,
  .outros__grid {
    padding: 0;
    padding-top: 60px;
    gap: 8px;
  }
  
  .outros__card {
    height: 260px;
  }

  .outros__grid {
    grid-template: initial;
  }
  
  .mesa {
    grid-area: initial;
  }
}

/* Mobile version */

@media screen and (max-width: 700px) {

  .max__width {
    width: calc(100% - 14px) !important;
  }
}


@media only screen and (max-width: 400px) {
  html {
    font-size: 14px;
  }
}

/* White Theme */

.whiteTheme * {
  color: var(--text-color);
  text-shadow: none;
}

.whiteTheme {
  transition: .2s;
}

.whiteTheme .banner {
  background-image: url('../public/inicio/white/banner__white.jpg');
}

.whiteTheme .frase {
  color: #a87c7c !important;
}

.whiteTheme .carrossel__background img {
  box-shadow: none;
}

.container__background {
  position: relative;
}

.whiteTheme .container::before, .container::before{
  content: '';
  position: absolute;
  height: 100px;
  width: 100%;
  top: 0;
  z-index: 2;
}

.whiteTheme .container::before {
  background-image: linear-gradient(var(--linear-after), transparent);
}

.container::before {
  background-image: linear-gradient(black, transparent);
}

.whiteTheme .container::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 200px;
  background-image: linear-gradient(transparent, var(--body_color));
  bottom: 0;
  z-index: 2;
}

.container::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 200px;
  background-image: linear-gradient(transparent, black);
  bottom: 0;
  z-index: 2;
}

.container__background--container {
  position: relative;
  display: none;
}

.whiteTheme .container__background--container {
  position: absolute;
  display: initial;
  width: 100%;
  height: 100%;
}

.whiteTheme .container__background::after {
  content: '';
  display: initial;
  position: absolute;
  height: 200px;
  bottom: 100%;
  width: 100%;
  background-image: linear-gradient(transparent, var(--linear-after));
  z-index: 2;
}
</style>