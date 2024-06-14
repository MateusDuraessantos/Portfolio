<template>
  <div id="background">
    <div id="themeOverflow"></div>
    <div id="overflow">
      <div class="overflowPort">
        <img :src="`inicio/${smile}/smile.svg`">
      </div>
    </div>

    <Navegacao
      @tun-on="turnOn"
      :removeLinkVer="removeLinkVer"
      :booleanTheme="booleanTheme"
      class="header"
      id="header"
      @remove-link="removeClass"
      :dadoBol="hiddenHeader"
    />

    <!-- Se booleanTheme for true o tema fica branco  -->
    <div id="main">

      <header class="banner" id="inicio">
        <p class="designed_by">
          Designed by <strong>Mateus Durães dos Santos</strong> - {{ new Date().getFullYear() }}
        </p>
        <div class="banner__ctn max__width">
          <br>
          <div class="banner__column--2">
           
            <div class="banner__description">
              <div class="banner__container">
                <p class="banner__ola">{{ saldacao }}</p>
                <h1 class="banner__nome">Meu nome é Mateus,</h1>
              </div>
              <div class="banner__content">
                <p>e trabalho com design e programação.</p>
              </div>
              <div class="banner__social">
                <a class="banner__redes img--1" href="https://www.behance.net/mateusduraes" target="_blank">
                  <img
                    class="banner__redes--img" :src="`icons/${whiteIcons}/behance__fill.svg`"
                    width="58"
                    height="34"
                    alt="logo Behance"
                    loading="lazy"
                  >
                </a>
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
      </header>

      <!-- ABORDO -->

      <div class="abordo">
        <div class="abordo__container max__width">
          <p class="abordo__p"><strong>Aperte os cintos e entre abordo</strong></p>
        </div>
        <img class="abordo__img" :src="`inicio/${whiteImages}/abordo.webp`" alt="">
      </div>

      <div class="container__background" id="portfolio">
          <div class="container__background--img">
            <div class="container__background--body">
              <img class="container__background--img" src="inicio/white/background__parallax.webp" alt="">
          </div>
        </div>

        <!-- PORTFÓLIO -->
        <div class="experiencia">
          <img class="experiencia__rocha experiencia__rocha--0" :src="`inicio/${whiteImages}/rochas/intersect_00.png`" alt="">
          <img class="experiencia__rocha experiencia__rocha--1" :src="`inicio/${whiteImages}/rochas/intersect_01.png`" alt="">
          <img class="experiencia__rocha experiencia__rocha--2" :src="`inicio/${whiteImages}/rochas/intersect_02.png`" alt="">
          <img class="experiencia__rocha experiencia__rocha--3" :src="`inicio/${whiteImages}/rochas/intersect_03.png`" alt="">
          <img class="experiencia__rocha experiencia__rocha--4" :src="`inicio/${whiteImages}/rochas/intersect_04.png`" alt="">
          <img class="experiencia__rocha experiencia__rocha--5" :src="`inicio/${whiteImages}/rochas/intersect_05.png`" alt="">
          <img class="experiencia__rocha experiencia__rocha--6" :src="`inicio/${whiteImages}/rochas/intersect_06.png`" alt="">
          <img class="experiencia__rocha experiencia__rocha--7" :src="`inicio/${whiteImages}/rochas/intersect_07.png`" alt="">
          <img class="experiencia__rocha experiencia__rocha--8" :src="`inicio/${whiteImages}/rochas/intersect_08.png`" alt="">
          <img class="experiencia__rocha experiencia__rocha--9" :src="`inicio/${whiteImages}/rochas/intersect_09.png`" alt="">
          <img class="experiencia__rocha experiencia__rocha--10" :src="`inicio/${whiteImages}/rochas/intersect_10.png`" alt="">
          <img class="experiencia__rocha experiencia__rocha--11" :src="`inicio/${whiteImages}/rochas/intersect_11.png`" alt="">
          <div class="max__width">
            <p class="experiencia__container"><strong>Alguns web projetos que trabalhei</strong></p>
          </div>
          <div class="carrossel">
            <div class="carrossel__content">
              <div class="carrossel__slide">
                <div
                  :id="`carrossel__${index}`"
                  v-for="(el, index) in imagens.carrossel_01"
                  @click="carrossel"
                  @touchstart="touthPositions"
                  @touchend="touthPositions"
                  carrossel__item
                  >
                    <div class="carrossel__popup"
                      @click="upPopup(el, 'carrossel_01')"
                    >
                      Clique aqui
                    </div>
                    <div class="carrossel__background">
                      <img class="" :src="`projetos/${el.thumb.default}`" alt="">
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <!-- OUTROS -->
        <div class="outros">
          <p class="outros__alguns"><b>Alguns outros</b></p>
          <div class="outros__grid max__width">
              <!-- Cards -->
              <div
                :class="`${item.class} outros__card`"
                v-for="item in imagens.carrossel_02"
              >
                <div
                  class="outros__clique"
                  @click="upPopup(item, 'carrossel_02')"
                >
                  Ver projeto
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
            <p class="mensagem__title"><b>Curtiu o passeio?</b></p>
            <p class="mensagem__arrow">Entre em contato para mais!</p>
          </h5>
        </section>
      </div>

      <!-- FOOTER -->

      <FooterElements :whiteImages="whiteImages" :footerVisible="footerVisible" :blockClicked="blockClicked" />

    </div>

    <!-- POPUP -->

    <Popup
      v-if="handleUpPopup"
      :elemento="imageIndex"
      @close-popup="handleUpPopup = false"
    />

  </div>
</template>

<script>
import Navegacao from './components/Navegacao'
import FooterElements from './components/Footer.vue'
import Sobre from './components/Sobre.vue'
import Popup from './components/Popup.vue'
import { imagens } from './components/destaque.js'

export default {
  name: 'App',
  components: {
    Navegacao,
    Popup,
    FooterElements,
    Sobre,

  },
  data() {
    return {
      imagens: imagens,
      removeLinkVer: true,
      imageIndex: Object,
      handleUpPopup: false,
      whatTimeIs: null,
      hiddenHeader: true,
      booleanTheme: true,
      smile: 'black',
      blockClicked: '',
      blockTimer: true,
      blurTimeout: '',
      whiteIcons: 'whiteicons',
      whiteImages: 'black',
      footerVisible: true,
      saldacao: null,
      widthSize: undefined,
      touchSlided: [],
      initItem: 2,
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
    this.carrossel()
  },
  methods: {
    upPopup(obj, array){
      this.imageIndex = {
        obj: obj,
        array: array
      }
      this.handleUpPopup = !this.handleUpPopup
    },
    removeLinkVerFunc() {
      this.removeLinkVer = !this.removeLinkVer
    },
    /* Carrossel */
    touthPositions(event){
      if(event.type == 'touchstart') this.touchSlided = []

      this.touchSlided.push(event.changedTouches[0].clientX)
      const limiteSlide = 50 // Define quantos pixeis o touch deve alcançar para poder ativar a animação 
      let gSlide = this.touchSlided[0] - this.touchSlided[1] > limiteSlide || this.touchSlided[0] - this.touchSlided[1] < -limiteSlide

      if(this.touchSlided[0] > this.touchSlided[1] && gSlide) { // Avança um item no carrossel
        this.initItem = this.initItem < imagens.carrossel_01.length - 1 ? this.initItem + 1 : this.initItem
        if(event.type == 'touchend') this.carrossel(null, this.initItem)
      }
      console.log(this.touchSlided[0] < this.touchSlided[1] && gSlide);
      if(this.touchSlided[0] < this.touchSlided[1] && gSlide) { // Retrocede um item no carrossel
        this.initItem = this.initItem != 0 ? this.initItem - 1 : this.initItem
        if(event.type == 'touchend') this.carrossel(null, this.initItem)
      };
    },
    carrossel(event, touch) {
      const elementOnSpot = touch != undefined ? touch : 2 // Altera qual o item em destaque
      const eventID = event ? Number(event.currentTarget.id.split('__')[1]) : elementOnSpot // Pega a posição do item clicado
      const all = document.querySelectorAll('[carrossel__item]') // Pega todos os itens
      all.forEach(obj => obj.removeAttribute('class')) // Limpa a classe de todos os itens
      const itemsLength = Number(all[all.length - 1].id.split('__')[1]) // Conta quantos itens tem

      const R = eventID == itemsLength ? eventID : eventID + 1
      const L = eventID == 0 ? eventID : eventID - 1

      let slideR 
      R == itemsLength ? null : slideR = R + 1

      let slideL 
      L == 0 ? L : slideL = L - 1

      let position

      if(slideR == 4 && slideL == 0) position = 0
      else if(slideR <= 4) {
        let positionL
        if(slideR == 3) positionL = -1
        if(slideR == 2) positionL = -2.3 // .3 = Ajuste fino de posicionamento
        position = -197 * positionL
      }
      else if(slideL >= 1) position = -197 * (slideL + 0.025) // 0.025 = Ajuste fino de posicionamento 
      document.querySelector('.carrossel__slide').style.transform = `translatex(${position}px)`
      document.getElementById(`carrossel__${R}`).classList.add('carrossel--between')
      document.getElementById(`carrossel__${L}`).classList.add('carrossel--between')
      if(event){
        event.currentTarget.removeAttribute('class') 
        event.currentTarget.classList.add('carrossel--center')
      }
      else document.getElementById(`carrossel__${elementOnSpot}`).classList.add('carrossel--center')
    },

    /*  */

    isDay() {
      this.whatTimeIs = new Date().getHours()
      this.booleanTheme = this.whatTimeIs < 6 || this.whatTimeIs >= 18 ? false : true // Se for true o tema fica branco
      // this.booleanTheme = false
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
      if (this.booleanTheme == true)  setTimeout(() => document.body.style.background = 'var(--body_color)', timer);
      else setTimeout(() => document.body.removeAttribute('style'), timer);
    },
    removeClass() {
      document.getElementById('header').classList.remove('header__show')
    },
    tratarEvento(showingup) {
      this.hiddenHeader = showingup ? false : true
    },
    widthScreen() { // Verifica o tamanho da tela para trocar entre o popup padrão ou carrossel
      this.widthSize = window.screen.availWidth
    },
    scrollDown(ancora) {
      window.scrollTo({
        top: document.getElementById(ancora).offsetTop,
        behavior: 'smooth'
      })
    },
    haveAGoodDay() {
      const date = new Date().getHours()
      if (date >= 0 && date < 5) this.saldacao = 'Olá,'
      else if (date >= 5 && date < 12) this.saldacao = 'Bom dia!'
      else if (date >= 12 && date < 18) this.saldacao = 'Boa tarde!'
      else this.saldacao = 'Boa noite!'
    },
    changeImagens(timer) {
      if (this.booleanTheme == true) {
        setTimeout(() => {
          this.blockClicked = 'blackicons'
          this.whiteImages = 'white'
          this.footerVisible = false
        }, timer);
      } else {
        setTimeout(() => {
          this.blockClicked = 'whiteicons'
          this.whiteImages = 'black'
          this.footerVisible = true
        }, timer);
      }
      this.keepWhiteOnReload(timer)
    },
    keepWhiteOnReload(timer) {
      setTimeout(() => {
        //Altera o path das thumbs
        if (this.booleanTheme == true) {
          document.getElementById('main').setAttribute('class', 'whiteTheme')
          this.whiteIcons = 'blackicons'
        } else {
          document.getElementById('main').removeAttribute('class')
          this.whiteIcons = 'whiteicons'
        }
      }, timer);
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

/* font-family: 'Poppins', sans-serif; */
html {
  font-size: 16px;
}

#app {
  width: 100vw;
  overflow-x: hidden;
}

body {
  overflow: overlay;
  background: black;
  width: 100vw;
  overflow-y: overlay;
  overflow-x: hidden;
}

button {
  cursor: pointer;
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
  font-size: 1rem;
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

.header__show {
  opacity: 0;
  transition: .2s
}

/*  */
.designed_by {
  position: absolute;
}

.designed_by, .designed_by strong {
  width: 100%;
  text-align: center;
  bottom: 10px;
  font-size: 12px;
  color: rgb(105, 110, 128);
  font-weight: 400;
}

.designed_by strong {
  font-weight: 600;
}

#main {
  position: relative;
  transition: .2s;
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

.mensagem__arrow {
  display: flex;
  justify-content: center;
  position: relative;  
  z-index: 2;
  font-weight: 400;
  font-size: 22px;
}

.mensagem__arrow::before {
  content: '>';
  font-size: 30px;
  position: absolute;
  bottom: -40px;
  animation: arrow 2s infinite;
}

@keyframes arrow {
  0% { transform: translateY(0) rotate(90deg) }
  50%{ transform: translateY(20px) rotate(90deg) }
  100% { transform: translateY(0) rotate(90deg) }
}

.whiteTheme .mensagem h6 {
  text-shadow: none;
  color: #8f5245;
}

/* Abordo */

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

.abordo__container {
  position: absolute;
  display: flex;
  align-items: center;
  height: 100%;
  z-index: 3;
}

.abordo__p, .abordo__p * {
  color: var(--creme) !important;
  font-size: 22px;
}

/* Expêriencia */
.experiencia {
  position: relative;
  padding: 400px 0 100px 0;
}

.experiencia__container {
  position: relative;
  color: var(--creme);
  font-size: 22px;
  width: 100%;
  text-align: center;
  margin-bottom: 100px;
  z-index: 5;
}

.experiencia__rocha {
  position: absolute;
  z-index: 4;
  animation-duration: 32s;
  animation-iteration-count: infinite;
  pointer-events: none;
}

.experiencia__rocha--0 {
  width: 20%;
  max-width: 300px;
  top: 0;
  right: 40vw;
  animation-name: sky_04;
}
.experiencia__rocha--1 {
  width: 10%;
  max-width: 200px;
  top: 34%;
  right: 27vw;
  animation-name: sky_01;
}
.experiencia__rocha--2 {
  width: 15%;
  max-width: 250px;
  right: 19vw;
  top: 10%;
  animation-name: sky_02;
}
.experiencia__rocha--3 {
  width: 16%;
  max-width: 260px;
  left: 4vw;
  top: 27%;
  animation-name: sky_02;
}
.experiencia__rocha--4 {
  width: 30%;
  max-width: 400px;
  bottom: -30%;
  left: 0;
  animation-name: sky_08;
}
.experiencia__rocha--5 {
  width: 30%;
  max-width: 400px;
  right: -130px;
  top: 10%;
  animation-name: sky_13;
}
.experiencia__rocha--6 {
  width: 13%;
  max-width: 230px;
  bottom: 0;
  left: 45vw;
  animation-name: sky_11;
}
.experiencia__rocha--7 {
  width: 30%;
  max-width: 400px;
  left: -150px;
  top: 4%;
  animation-name: sky_08;
}
.experiencia__rocha--8 {
  width: 30%;
  max-width: 400px;
  left: -7vw;
  bottom: 2%;
  animation-name: sky_01;
}
.experiencia__rocha--9 {
  width: 30%;
  max-width: 400px;
  left: 19vw;
  top: 16%;
  animation-name: sky_04;
}
.experiencia__rocha--10 {
  width: 30%;
  max-width: 400px;
  bottom: 0;
  right: 3vw;
  animation-name: sky_11;
}
.experiencia__rocha--11 {
  width: 20%;
  max-width: 300px;
  top: 1156px;
  left: 26vw;
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

@media screen and (max-width: 1000px) {

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



/* Carrossel */

.carrossel {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
}

.carrossel__content * {
  transition: .5s;
}

.carrossel__content {
  position: relative;
  overflow: hidden;
}

.carrossel__content, .carrossel__slide {
  height: 800px;
}

.carrossel__slide {
  display: flex;
  width: 100vw;
  margin: auto;
  max-width: 1200px;
  justify-content: space-between;
  align-items: center;
}

[carrossel__item] {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 200px;
  height: 400px;
  cursor: pointer;
}

[carrossel__item].carrossel--center{ /* Permite o hover aparecer */
  overflow: initial;
}

[carrossel__item] .carrossel__background img, .carrossel__background::before {
  border-radius: 40px;
}

.carrossel__background {
  display: flex;
  justify-content: center;
  position: absolute;
  width: 95%;
  height: 100%;
  pointer-events: none;
}

.carrossel__background::before {
  position: absolute;
  content: '';
  box-shadow: inset 1px 2px 2px gray;
  width: 100%;
  height: 100%;
  z-index: 3;
}

.carrossel__background img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-position: top;
  object-fit: cover;
  box-shadow: 3px 3px 12px rgba(0, 0, 0, 1);
  outline: 3px solid #363636;
  border: 8px black solid;
}
.carrossel--between {
  min-width: 248px;
  height: 500px;
}

.carrossel--center {
  min-width: 300px;
  height: 600px;
}

.carrossel__popup {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
  background: rgba(0, 0, 0, 0.5);
  font-size: 24px;
  margin: auto;
  height: 100%;
  text-align: center;
  color: var(--creme) !important;
  width: calc(100% - 16px);
  border-radius: 60px;
  z-index: 2;
  text-decoration: underline;
  opacity: 0;
  transition: .2s;
  pointer-events: none;
}

.carrossel__popup:hover {
  transition: .2s;
  text-decoration: initial;
}

.carrossel--center:hover .carrossel__popup {
  pointer-events: initial;
  opacity: 1;
  transition: .2s;
  transition-delay: 0.15s;
}

.carrossel--center .carrossel__background img,
.carrossel--center .carrossel__background::before {
  border-radius: 60px;
}

.carrossel--between .carrossel__background img,
.carrossel--between .carrossel__background::before {
  border-radius: 50px;
}

.carrossel__background::after {
  position: absolute;
  content: '';
  margin: auto;
  background: black;
  height: 18px;
  box-shadow: inset 0px -1px 2px gray;
  border-radius: 0 0 10px 10px;
  width: 58px;
  z-index: 2;
  top: 8px;
  width: 89px;
}

/* OUTROS */

.outros {
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

.outros__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  grid-template: 
  'butterfly null'
  'butterfly mesa';
  padding: 100px;
}

.outros__card {
  position: relative;
  border-radius: 50px;
  overflow: hidden;
  width: 100%;
  height: 400px;
}

.mesa {
  grid-area: mesa;
}

.butterfly {
  grid-area: butterfly;
  height: 100%;
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

.outros__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Banner */

.banner {
  display: flex;
  align-items: center;
  min-height: 600px;
  position: relative;
  gap: 4vw;
  background-image: url('../public/inicio/black/banner_sky.jpg');
  background-size: cover;
  min-height: 100vh;
  z-index: 3;
}

.banner__column--2 {
  display: flex;
  align-items: center;
  min-height: 600px;
  position: relative;
  margin-bottom: 100px;
}

.banner__ctn {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.banner__img {
  position: absolute;  
  left: -10vw;
  width: 55vw;
}

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
  height: 200px;
  width: 100%;
  top: 100%;
  z-index: 2;
  background-image: linear-gradient(var(--linear-after), transparent);
}

.banner__description {
  width: 100%;
  margin: auto;
  padding-top: 60px;
  z-index: 1;
}

.banner__container {
  display: flex;
  flex-direction: column;
  font-size: 1.9rem;
}

.banner__content {
  font-weight: 400;
  font-size: 1rem;
}

.banner__ola {
  font-size: 1.6rem;
}

.banner__nome {
  font-size: 2.3rem;
}

/*  */

.banner__social {
  display: flex;
  width: max-content;
  margin-top: 20px;
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
  padding: 10px;
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

  /* Banner */
  .banner__ctn {
    display: flex;
    flex-direction: column;
  }

  .banner__description {
      text-align: center;
      justify-content: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
  }
  .banner__social {
    align-items: center;
  }

  .banner {
    grid-template-columns: 100px 1fr 100px;
  }

  .banner__container {
    gap: 12px;
    line-height: 24px;
  }

  .banner__nome,
  .banner__ola {
    font-size: 28px;
  }
  
  /* Abordo */

  .abordo__p, .abordo__p * {
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

  /* Outro */

  .outros__grid {
    display: flex;
    flex-direction: column;
    padding: 0;
    padding-top: 60px;
    gap: 8px;
  }

  .outros__card {
    border-radius: 20px;
  }

  /* Carrossel */

  .experiencia {
    position: relative;
    padding: 200px 0;
  }

  .carrossel__slide {
    justify-content: center;
    margin-left: 200px;
  }

}

/* Mobile version */

@media screen and (max-width: 700px) {

  .max__width {
    width: calc(100% - 14px) !important;
  }
}

@media screen and (max-width: 500px) {
  .banner {
    display: flex;
    justify-content: center;
    margin: 0;
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

 .experiencia::before {
  display: none;
}

.whiteTheme .experiencia::before {
  content: '';
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(90deg,black, rgba(0,0,0,0.5), transparent, transparent, rgba(0,0,0,0.5), black);
  z-index: 3;
  pointer-events: none;
}


.whiteTheme .carrossel__background img  {
  box-shadow: none;
}

.container__background {
  position: relative;
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


.whiteTheme .container__background--body::before {
  content: '';
  position: absolute;
  top: 0;
  width: 100%;
  height: 200px;
  background-image: linear-gradient(var(--body_color), transparent);
  z-index: 1;
}

.container__background--body {
  position: absolute;
  display: flex;
  align-items: flex-end;
  bottom: 0;
  width: 100%;
}

.container__background--img {
  display: none;
  width: 100%;
  min-height: max-content;
  min-width: 1200px;
}

.whiteTheme .container__background--img{
  display: initial;
}

.grneowg::before {
  content: '';
  position: absolute;
  top: 0;
  height: 200px;
  width: 100%;
  background: yellow;
  z-index: 2;
}

.whiteTheme .container__background::after {
  content: '';
  display: initial;
  position: absolute;
  height: 200px;
  bottom: 100%;
  width: 100%;
  background-image: linear-gradient(transparent, var(--linear-after));
  z-index: 3;
}

.whiteTheme .container__background::before {
  position: absolute;
  content: '';
  background-image: linear-gradient(transparent, var(--body_color));
  bottom: 0;
  height: 400px;
  width: 100%;
  pointer-events: none;
  z-index: 1;
}
</style>