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

<style scoped>
/* Home-only adjustments: keep the desktop composition intact. */
@media screen and (max-width: 700px) {
  #background {
    --home-gutter: clamp(16px, 5vw, 24px);
  }

  #background :deep(.g-max__width) {
    width: calc(100% - var(--home-gutter) * 2) !important;
  }

  #background :deep([id^="link_ancor__"]) {
    scroll-margin-top: 80px;
  }

  #background :deep(.banner) {
    min-height: 100svh;
    padding: 92px 0 24px;
    gap: 24px;
    justify-content: center;
  }

  #background :deep(.banner__ctn) {
    position: relative;
    inset: auto;
    margin: auto;
    padding: 36px 20px 24px;
    gap: 12px;
    border-radius: 24px;
  }

  #background :deep(.banner__column--2) {
    width: 100%;
    min-width: 0;
  }

  #background :deep(.banner__description) {
    gap: 12px;
  }

  #background :deep(.banner__container) {
    gap: 10px;
  }

  #background :deep(.banner__ola) {
    font-size: 18px;
    line-height: 1.5;
  }

  #background :deep(.banner__nome) {
    font-size: clamp(26px, 7vw, 34px);
    line-height: 1.2;
    text-wrap: balance;
  }

  #background :deep(.banner__content) {
    font-size: clamp(16px, 4.5vw, 19px);
    line-height: 1.5;
  }

  #background :deep(.banner__social) {
    margin-top: 4px;
    gap: 20px;
  }

  #background :deep(.banner__redes) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
  }

  #background :deep(.banner__camadas) {
    width: min(100%, 240px);
    padding: 100px 0;
  }

  #background :deep(.designed_by) {
    position: relative;
    bottom: auto;
    order: 1;
    padding: 0 var(--home-gutter);
    font-size: 11px;
    line-height: 1.6;
  }

  #background :deep(.designed_by strong) {
    font-size: inherit;
  }

  #background :deep(.abordo__img) {
    min-height: 0;
    height: clamp(360px, 110vw, 560px);
    object-position: center;
  }

  #background :deep(.abordo__p) {
    margin-top: 40px;
    max-width: 280px;
    text-align: center;
    text-wrap: balance;
    line-height: 1.6;
    color: var(--creme) !important;
  }

  .whiteTheme #background :deep(.abordo__p) {
    color: black !important;
  }

  #background :deep(.experiencia) {
    padding: 64px 0;
  }

  #background :deep(.experiencia > h2),
  #background :deep(.others > h2) {
    font-size: clamp(24px, 6vw, 30px);
    line-height: 1.3;
    text-align: center;
  }

  #background :deep(.experiencia > p) {
    margin-top: 8px;
  }

  #background :deep(.experiencia__rocha) {
    z-index: 0;
    pointer-events: none;
    --sky-scale: 0.65;
  }

  #background :deep(.experiencia > h2),
  #background :deep(.experiencia > p) {
    position: relative;
    z-index: 1;
  }

  #background :deep(.carousel) {
    height: auto;
    padding: 28px 0 64px;
  }

  #background :deep(.carousel__container) {
    width: calc(100% - var(--home-gutter) * 2);
    height: clamp(380px, 120vw, 520px);
  }

  #background :deep(.carousel__thumb) {
    width: min(64vw, 260px);
    height: 82%;
    border-radius: 24px;
  }

  #background :deep(.carousel__thumb[frame_size="big"]) {
    width: min(72vw, 280px);
    height: 100%;
    border-radius: 28px;
  }

  #background :deep(.carousel__buttons) {
    inset: auto 0 0;
    width: 112px;
    height: 48px;
    margin: auto;
    z-index: 5;
  }

  #background :deep(.carousel__button--left),
  #background :deep(.carousel__button--right) {
    width: 48px;
    height: 48px;
  }

  #background :deep(.others) {
    padding: 24px 0 0;
  }

  #background :deep(.others__grid) {
    padding-top: 28px;
    gap: 20px;
    grid-template-columns: minmax(0, 1fr);
  }

  #background :deep(.others__card) {
    height: auto;
    aspect-ratio: 4 / 3;
    overflow: hidden;
  }

  #background :deep(.others__img) {
    display: block;
  }

  #background :deep(.experience) {
    padding: 72px 0 0;
  }

  #background :deep(.experience__elements) {
    padding: 28px 20px;
    gap: 28px;
  }

  #background :deep(.experience__container) {
    gap: 20px;
  }

  #background :deep(.experience__redes) {
    padding: 0;
    gap: 24px;
  }

  #background :deep(.experience__redes a) {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 44px;
    min-height: 44px;
  }

  #background :deep(.experience__text) {
    gap: 20px;
    overflow-wrap: break-word;
  }

  #background :deep(.experience__text p) {
    font-size: 15px;
    line-height: 1.7;
  }

  #background :deep(.experience__text p *) {
    font-size: inherit;
    line-height: inherit;
  }

  #background :deep(.experience__experiencia) {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px 8px;
  }

  #background :deep(.experience__ctn) {
    width: auto !important;
    height: auto;
    min-width: 0;
  }

  #background :deep(.experience__ctn p) {
    font-size: 12px;
    line-height: 1.5;
    margin-top: 8px;
  }

  #background .message {
    height: auto;
    padding: 88px var(--home-gutter) 72px;
    gap: 16px;
  }

  #background .message__title {
    font-size: 24px;
    line-height: 1.4;
    text-wrap: balance;
  }

  #background .message__me {
    font-size: 20px;
  }

}
</style>
