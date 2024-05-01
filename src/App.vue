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

      <header class="banner">
        <p class="designed_by">
          Designed by Mateus Durães dos Santos - {{ new Date().getFullYear() }}
        </p>
        <div class="banner__ctn max__width" id="inicio">
          <br>
          <div class="banner__column--2">
           
            <div class="banner__description">
              <div class="banner__container">
                <p class="banner__ola">{{ saldacao }}</p>
                <h2 class="banner__nome">Meu nome é Mateus,</h2>
              </div>
              <div class="banner__content">
                <p>E trabalho com design e programação.</p>
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


      <!-- PORTFÓLIO -->
      <div class="experiencia" id="portfolio">

        <img class="experiencia__rocha experiencia__rocha--0" src="\inicio\black\rochas\intersect-0.png" alt="">
        <img class="experiencia__rocha experiencia__rocha--1" src="\inicio\black\rochas\intersect-1.png" alt="">
        <img class="experiencia__rocha experiencia__rocha--2" src="\inicio\black\rochas\intersect-2.png" alt="">
        <img class="experiencia__rocha experiencia__rocha--3" src="\inicio\black\rochas\intersect-3.png" alt="">
        <img class="experiencia__rocha experiencia__rocha--4" src="\inicio\black\rochas\intersect-4.png" alt="">
        <img class="experiencia__rocha experiencia__rocha--5" src="\inicio\black\rochas\intersect-5.png" alt="">
        <img class="experiencia__rocha experiencia__rocha--6" src="\inicio\black\rochas\intersect-6.png" alt="">
        <img class="experiencia__rocha experiencia__rocha--7" src="\inicio\black\rochas\intersect-7.png" alt="">
        <img class="experiencia__rocha experiencia__rocha--8" src="\inicio\black\rochas\intersect-8.png" alt="">
        <img class="experiencia__rocha experiencia__rocha--9" src="\inicio\black\rochas\intersect-9.png" alt="">
        <img class="experiencia__rocha experiencia__rocha--10" src="\inicio\black\rochas\intersect-10.png" alt="">
        <img class="experiencia__rocha experiencia__rocha--11" src="\inicio\black\rochas\intersect-11.png" alt="">

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
              <img class="outros__img" :src="`projetos/${item.thumb.white}-${smile}.jpg`" alt="">
            </div>

        </div>
      </div>
      
      <!-- SOBRE -->

      <Sobre :whiteIcons="whiteIcons" />
      
      <!--  -->

      <section class="mensagem">
        <p class="mensagem__title"><b>Curtiu o passeio?</b></p>
        <p class="mensagem__arrow">Entre em contato para mais!</p>
      </section>
      <!-- FOOTER -->

      <FooterElements :whiteImages="whiteImages" :footerVisible="footerVisible" :blockClicked="blockClicked" />

    </div>

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
      blockClickWhileTouch: true,
    }
  },
  watch: {
    booleanTheme() {
      this.changeImagens(1000)
    },
  },
  mounted() {
    this.isDay()
    this.turnBackgroundWhite(0)
    this.overflow(0)
    this.keepWhiteOnReload(0)
    this.changeImagens(0)
    this.haveAGoodDay()
    window.addEventListener('resize', this.widthScreen)
    this.widthSize = window.screen.availWidth
    this.carrossel()

    console.clear()
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
      this.blockClickWhileTouch = false
      if(event.type == 'touchend') this.blockClickWhileTouch = true

      this.touchSlided.push(event.changedTouches[0].clientX)
      const limiteSlide = 50 // Define quantos pixeis o touch deve alcançar para poder ativar a animação 
      let gSlide = this.touchSlided[0] - this.touchSlided[1] > limiteSlide || this.touchSlided[0] - this.touchSlided[1] < -limiteSlide

      if(this.touchSlided[0] > this.touchSlided[1] && gSlide) { // Avança um item no carrossel
        this.initItem = this.initItem < imagens.carrossel_01.length - 1 ? this.initItem + 1 : this.initItem
        this.carrossel(null, this.initItem)
      }
      if(this.touchSlided[0] < this.touchSlided[1] && gSlide) { // Retrocede um item no carrossel
        this.carrossel()
        this.initItem = this.initItem != 0 ? this.initItem - 1 : this.initItem
        this.carrossel(null, this.initItem)
      };
    },
    carrossel(event, touch) {
      if(this.blockClickWhileTouch) {
        this.touchSlided = []
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
        else if(slideL >= 1) position = -197 * (slideL + 0.025 /* 0.025 = Ajuste fino de posicionamento */)
        document.querySelector('.carrossel__slide').style.transform = `translatex(${position}px)`
        document.getElementById(`carrossel__${R}`).classList.add('carrossel--between')
        document.getElementById(`carrossel__${L}`).classList.add('carrossel--between')
        if(event){
          event.currentTarget.removeAttribute('class') 
          event.currentTarget.classList.add('carrossel--center')
        }
        else document.getElementById(`carrossel__${elementOnSpot}`).classList.add('carrossel--center')
      }
    },

    /*  */

    isDay() {
      this.whatTimeIs = new Date().getHours()
      // this.booleanTheme = this.whatTimeIs < 5 || this.whatTimeIs > 18 ? false : true
      this.booleanTheme = false // Se booleanTheme for true o tema fica branco
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
    overflow(timer) {
      // Aciona o overflow para alteração do tema 
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
      if (this.booleanTheme == true)  setTimeout(() => document.body.style.background = '#e8dede', timer);
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
  --border-color: #2c2c2c;
  --shadow-color: black;
  --text-color: black;
  --creme: #E0D9CE;
  --vermelho: rgb(255, 54, 54);
}

a {
  cursor: pointer;
  position: relative;
}

p {
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5);
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
  background: var(--creme);
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
  width: 100%;
  text-align: center;
  bottom: 10px;
  font-size: 12px;
  color: rgb(105, 110, 128);
  font-weight: 400;
}

#main {
  position: relative;
  transition: .2s;
}

/* Mensagem */

.mensagem {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 400px;
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
  height: 90vh;
  min-height: 1000px;
  z-index: 1;
}

.abordo__img {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.abordo__container {
  display: flex;
  align-items: center;
  position: relative;
  z-index: 2;
  height: 100%;
}

.abordo__p {
  color: var(--creme);
  /* font-size: 22px; */
}

/* Expêriencia */

.experiencia {
  position: relative;
  padding: 400px 0;
}

.experiencia::before {
  content: '';
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(90deg,black, rgba(0,0,0,0.5), transparent, transparent, rgba(0,0,0,0.5), black);
  z-index: 3;
  pointer-events: none;
}

.experiencia__container {
  color: var(--creme);
  font-size: 22px;
  width: 100%;
  text-align: center;
  margin-bottom: 100px;
}

.experiencia__rocha {
  position: absolute;
}

.experiencia__rocha--0 {
  width: 20%;
  max-width: 300px;
  top: 0;
  right: 40vw;
}
.experiencia__rocha--1 {
  width: 10%;
  max-width: 200px;
  top: 34%;
  right: 27vw;
}
.experiencia__rocha--2 {
  width: 15%;
  max-width: 250px;
  right: 19vw;
  top: 10%;
}
.experiencia__rocha--3 {
  width: 16%;
  max-width: 260px;
  left: 4vw;
  top: 27%;
}
.experiencia__rocha--4 {
  width: 30%;
  max-width: 400px;
  bottom: -30%;
  left: 20vw;
}
.experiencia__rocha--5 {
  width: 30%;
  max-width: 400px;
  right: -130px;
  top: 10%;
}
.experiencia__rocha--6 {
  width: 13%;
  max-width: 230px;
  bottom: 0;
  left: 45vw;
}
.experiencia__rocha--7 {
  width: 30%;
  max-width: 400px;
  left: -150px;
  top: 4%;
}
.experiencia__rocha--8 {
  width: 30%;
  max-width: 400px;
  left: -7vw;
  bottom: 2%;
}
.experiencia__rocha--9 {
  width: 30%;
  max-width: 400px;
  left: 19vw;
  top: 16%;
}
.experiencia__rocha--10 {
  width: 30%;
  max-width: 400px;
  bottom: 100px;
  right: 3vw;
}
.experiencia__rocha--11 {
  width: 20%;
  max-width: 300px;
  top: 1156px;
  left: 26vw;
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
  z-index: 1;
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

.banner::after,
.banner::before {
  content: '';
  position: absolute;
  width: 100%;
}

.banner::before {
  background-image: linear-gradient(transparent, black);
  height: 100px;
  bottom: 0;
}

.whiteTheme .banner::before {
  background-image: linear-gradient(transparent, #e2e0e7);
}

.whiteTheme .banner::after {
  background-image: linear-gradient(#e2e0e7, transparent);
}


.banner__description {
  width: 100%;
  margin: auto;
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


</style>