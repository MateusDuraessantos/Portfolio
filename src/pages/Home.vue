<template>
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
          <img :src="`/inicio/${smile}/smile.svg`">
        </div>
      </div>
      
      <!-- BANNER -->
      <Banner :greeting="greeting" :whiteIcons="whiteIcons" />

      <!-- ABOARD -->
      <Aboard :whiteImages="whiteImages" />

      <div class="container">
        <Parallax :booleanTheme="booleanTheme" />

        <!-- PORTIFOLIO -->
        <Portfolio :white-images="whiteImages" />

        <!-- Hobbies -->
        <Hobbies
          :white-images="whiteImages"
          @upPopup="upPopup"
        />

        <Animation />

        <!-- EXPERIENCE -->
        <Experience :whiteIcons="whiteIcons" />

        <!-- CONTACT -->
        <section>
          <h5 class="message">
          <p class="message__title"><b>Did you enjoy the tour?</b></p>
          <button class="message__contact" @click="commons.scrollDown('link_ancor__contact')">
              <p class="message__me">Contact me!</p>
              <p class="message__arrow">></p>
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
</template>

<script>
import Hobbies from '@/components/Hobbies'
import Banner from '@/components/Banner'
import Footer from '@/components/Footer.vue'
import Aboard from '@/components/Aboard.vue'
import Portfolio from '@/components/Portfolio.vue'
import Popup from '@/components/Popup.vue'
import Parallax from '@/components/Parallax.vue'
import Animation from '@/components/Animation.vue'
import Carousel from '@/components/Carousel.vue'
import { commons } from '@/utils/commons'
import Experience from '@/components/Experience.vue';

export default {
  name: 'Home',
  props: { booleanTheme: Boolean },
  components: { Hobbies, Banner, Footer, Popup, Parallax, Aboard, Experience, Animation, Carousel, Portfolio },
  data() {
    return {
      commons,
      imageIndex: Object,
      handleUpPopup: false,
      whatTimeIs: null,
      smile: 'black',
      blockClicked: '',
      whiteIcons: 'whiteicons',
      whiteImages: 'black',
      footerVisible: true,
      greeting: null,
      widthSize: undefined,
    }
  },
  watch: {
    booleanTheme() {
      this.changeImagens(1000)
      this.overflow(2000)
    },
  },
  mounted() {
    this.isDay() // Checks the current time to set the theme of the elements
    this.overflow(0)
    this.changeImagens(0)
    this.haveAGoodDay()
    this.widthSize = window.screen.availWidth
  },
  methods: {

    upPopup(obj) {
      this.imageIndex = obj
      this.handleUpPopup = !this.handleUpPopup
    },

    isDay() {
      this.whatTimeIs = new Date().getHours()
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
    

    
    overflow(timer) { // Triggers the overflow to change the theme.
      const overflow = document.getElementById('themeOverflow')
      overflow.setAttribute('class', 'blackOverflow')

      if (this.booleanTheme == true) setTimeout(() => overflow.removeAttribute('class'), timer);
      else {
        overflow.setAttribute('class', 'whiteOverflow')
        setTimeout(() => overflow.removeAttribute('class'), timer);
      }
    },
    
    haveAGoodDay() {
      const date = new Date().getHours()
      if (date >= 0 && date < 5) this.greeting = 'Hello,'
      else if (date >= 5 && date < 12) this.greeting = 'Good morning!'
      else if (date >= 12 && date < 18) this.greeting = 'Good afternoon!'
      else this.greeting = 'Good evening!'
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
        this.whiteIcons = this.booleanTheme ? 'blackicons' : 'whiteicons' // Change the thumbnail path
      }, timer);
    },
  },
}
</script>

<style>
.whiteTheme h1, .whiteTheme h2, .whiteTheme h3, .whiteTheme h4, .whiteTheme p, .whiteTheme p * {
  color: #000;
}
</style>

<style scoped>
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

.message {
  position: relative;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  z-index: 2;
}

.message__title {
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5);
  z-index: 1;
  font-size: 28px;
}

.message__contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;  
  z-index: 2;
  transition: .2s;
}

.message__me {
  font-weight: 400;
  font-size: 22px;
  transition: .4s !important;
}

.message__contact:hover .message__me,
.message__contact:hover .message__arrow {
  color: gray;
  transition: .3s !important;
}

.message__arrow {
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

.container__background {
  position: relative;
}

.container::before {
  background-image: linear-gradient(black, transparent);
}

.container::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 200px;
  background-image: linear-gradient(transparent, black);
  bottom: 0;
  z-index: 2;
  pointer-events: none;
}

.container__background--container {
  position: relative;
  display: none;
}

/* White Theme */

.whiteTheme * {
  color: var(--text-color);
  text-shadow: none;
}

.whiteTheme {
  transition: .2s;
}

.whiteTheme .frase {
  color: #a87c7c !important;
}

.whiteTheme .carrossel__background img {
  box-shadow: none;
}

.whiteTheme .container::before,
.container::before {
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

.whiteTheme .container::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 200px;
  background-image: linear-gradient(transparent, var(--body_color));
  bottom: 0;
  z-index: 2;
  pointer-events: none;
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

.whiteTheme .message h6 {
  text-shadow: none;
  color: #8f5245;
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


@media screen and (max-width: 1000px) {
  /* Destaque */
  .destaque__card {
    height: 400px; 
    border-radius: 20px;
  }

  .mesa {
    grid-area: initial;
  }
}

</style>