<template>
  <div id="background">
    <div id="themeOverflow"></div>
    <div id="overflow">
      <div class="overflowPort">
        <img :src="`inicio/${smile}/smile.svg`">
      </div>
    </div>
    <Header @tun-on="turnOn" :removeLinkVer="removeLinkVer" :booleanTheme="booleanTheme" class="header" id="header"
      @remove-link="removeClass" :dadoBol="hiddenHeader" />

    <router-view :booleanTheme="booleanTheme" @remove-link-ver="removeLinkVerFunc" @nome-evento="tratarEvento"
      @loading-holl-page="loadingOla" />
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Header,
  },
  data() {
    return {
      removeLinkVer: true,
      whatTimeIs: null,
      hiddenHeader: true,
      //Se true o tema fica branco 
      booleanTheme: null,
      hide: false,
      smile: '',
    }
  },
  mounted() {
    this.transitionAnimation()
    this.isDay()
    this.favIcon()
    this.turnBackgroundWhite(0)
    this.overflow(0)
  },
  methods: {
    login(){
      this.$gtag.event('login', { method: 'Google' })
    },
    transitionAnimation() {
      const overflow = document.getElementById('overflow')

      if (this.booleanTheme == true) {
        overflow.classList.add('whiteoverflows')
        this.smile = 'white'
        setTimeout(() => {
          overflow.classList.remove('whiteoverflows')
        }, 1250);
      }
      else {
        overflow.classList.add('blackoverflows')
        this.smile = 'sky'
        setTimeout(() => {
          overflow.classList.remove('blackoverflows')
        }, 1250);
      }
    },
    removeLinkVerFunc() {
      this.removeLinkVer = !this.removeLinkVer
    },
    isDay() {
      this.whatTimeIs = new Date().getHours()

      if (this.whatTimeIs <= 5 || this.whatTimeIs > 18) {
        this.booleanTheme = false
      }
      else {
        this.booleanTheme = true
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

      if (this.booleanTheme == true) {

        setTimeout(() => {
          overflow.removeAttribute('class')
        }, timer);
      }
      else {
        overflow.setAttribute('class', 'whiteOverflow')
        setTimeout(() => {
          overflow.removeAttribute('class')
        }, timer);
      }
    },
    turnBackgroundWhite(timer) {
      // Altera a cor do background global 
      if (this.booleanTheme == true) {

        setTimeout(() => {
          document.body.style.background = 'white'
        }, timer);
      }
      else {
        setTimeout(() => {
          document.body.removeAttribute('style')
        }, timer);
      }
    },
    removeClass() {
      document.getElementById('header').classList.remove('show')
    },
    tratarEvento(showingup) {
      if (showingup) {
        this.hiddenHeader = false
      }
      else {
        this.hiddenHeader = true
      }
    },
    favIcon() {
      const newLink = document.createElement("link")
      newLink.setAttribute('rel', 'icon')
      newLink.setAttribute('href', 'eu.png')
      document.head.appendChild(newLink)
    }
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

/* font-family: 'Poppins', sans-serif; */
body {
  overflow: overlay;
  background: black;
  font-size: 16px;
  width: 100vw;
  overflow-y: overlay;
  overflow-x: hidden;
}

:root {
  --creme: #E0D9CE
}

img {
  user-select: none;
}

/*  */

.header {
  opacity: 1;
  transition: .2s;
}

.show {
  opacity: 0;
  transition: .2s
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


/* link popup */

.link__grid {
    display: flex;
    justify-content: flex-end;
    padding-right: 1vw;
    gap: 1vw;
    position: sticky;
    margin-left: 1vw;
    top: -88px;
    transform: translatey(12px);
    height: 0;
}

.link__grid a {
  color: var(--creme) !important;
}

.link__container {
    height: 38px;
    border: 1px solid gray;
    opacity: 1;
    display: flex;
    align-items: center;
    width: max-content;
    padding: 0.4vw 1vw 0.4vw 1.2vw;
    text-decoration: none;
    gap: 0.6vw;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 10vw;
    backdrop-filter: blur(15px);
    transition: .2s;
}

.link__img {
    width: 1.2vw;
    min-width: 20px;
    margin: auto;
    z-index: 2;
    transition: .2s;
}

.link__container:hover {
    background-color: rgba(0, 0, 0, 0.7);
    transition: .2s;
}

/* Popup  */

.description h1, .description p {
    padding: 1.2vw;
    color: #E0D9CE !important;
}

.h1__popup {
    font-size: 1.4rem;
    font-weight: 600;
    width: 70%;
}

.popup__background {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  animation-name: animation_opacity;
  animation-duration: 1s;
  animation-fill-mode: forwards;

}

@keyframes animation_opacity {

  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.popup__animation {
  animation-name: popup__background--animation;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

@keyframes popup__background--animation {
  from {
    opacity: 0;
    margin-top: -50px;
  }

  to {
    opacity: 1;
    margin-top: 0;
  }
}

.popup__content {
  position: relative;
  display: flex;
  flex-direction: column;

  background: #1f1f1f;
  width: 80vw;
  margin-bottom: 100px;
}

.changes {
  background: none;
  border: none;
  position: absolute;
  right: 2.5vw;
  top: 12vh;
  font-size: 1rem;
}

.changes__container {
  display: grid;
  grid-template-columns: max-content max-content;
  gap: 0.24vw;
  align-items: center;
  justify-content: center;
  margin-bottom: 6px;
}

.changes__square {
  background: #b70000;
  border-radius: 0.2vw;
  padding: 0.8vw;
  width: 100%;
  max-width: 3.5vw;
}

.column__vertical {
  display: initial;
  column-count: 2 !important;
}

.container-button {
  visibility: hidden;
  position: fixed;
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
}

button {
  cursor: pointer;
}

.changeProject {
  visibility: visible;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 5vw;
  height: 5vw;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
  transition: .2s;
  z-index: 12;
}

.changeProject p {
  color: #E0D9CE !important;
}

.back {
  left: 2vw;
}

.next {
  right: 2vw;
}

.back:hover {
  left: 1.8vw;
  transition: .2s;
}

.next:hover {
  right: 1.8vw;
  transition: .2s;
}

.popup__overflow {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow-y: overlay;
  height: 100%;
  padding-top: 100px;
}

.container-loading {
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
}

.container-loading span {
  font-size: 15px;
  font-weight: 300;
  color: #b5b5b5 !important;
}

.loading {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 9px dotted rgb(183 183 183);
  z-index: 1;
  animation-name: loading;
  animation-duration: 12s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  border-spacing: 17px;
}



@keyframes loading {

  from {
    transform: rotate(0);
  }

  to {

    transform: rotate(360deg);
  }
}

.popup__img {
  width: 100%;
}

.popup__close {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 20px;
  top: 20px;
  font-size: 24px;
  width: 34px;
  height: 34px;
  border: none;
  background: none;
  color: var(--creme) !important;
}

@media only screen and (min-width: 1981px) {
  html {
    font-size: 30px;
  }
}

@media only screen and (max-width: 1980px) {
  html {
    font-size: 22px;
  }
}

@media only screen and (min-width: 1280px) {
  html {
    font-size: 1.2vw !important;
  }

  .popup__close {
    font-size: 3vw;
    right: 2.4vw;
    top: 2.4vw;
  }

  .changeProject {
    width: 5vw;
    height: 5vw;
  }


  .container-loading span {
    font-size: 1rem;
  }

  .loading {
    width: 10vw;
    height: 10vw;
    border-spacing: 12vw;

    border: 0.64vw dotted rgb(183 183 183);
  }


}

@media only screen and (max-width: 1279px) {
  html {
    font-size: 16px;
  }
}

@media only screen and (max-width: 800px) {

  /* Popup */

  .container-button {
    /* display: none; */
    z-index: 11;
  }

  .changeProject {
    width: 40px;
    height: 40px;
    font-size: 1rem;
    box-shadow: none;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
  }

  .popup__content {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .popup__overflow {
    padding: 0;
  }
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
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  transition: 1s;
  opacity: 0;
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

.blackoverflows {
  background: black;
}

.whiteoverflows {
  background: white;
}

@keyframes animationOverflow {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
</style>