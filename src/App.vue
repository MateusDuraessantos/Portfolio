<template>
  <div>


    <!-- Boas vindas -->

    <div class="boasVindas" v-if="hide">
      <div class="boasVindas__background">
        <p class="boasvindas__porcentagem">{{ loadingHellow }}%</p>
      </div>
    </div>

    <!--  -->

    <Header class="header" id="header" @remove-link="removeClass" :dadoBol="hiddenHeader" />
    <router-view @nome-evento="tratarEvento" @loading-holl-page="loadingOla" />
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
      hiddenHeader: true,
      loadingHellow: 0,
      velocity: 80,
      teste: null,
      hide: false,
    }
  },

  mounted() {
    this.favIcon()

   
      this.loadingOla()
    

    document.body.style.overflow = 'hidden'
  },
  methods: {

    loadingOla(fasterVideo, inicio) {

      if (inicio) {
        this.teste = true
        this.hide = true
      } else {
        this.hide
      }

      if (fasterVideo) {
        this.velocity = 25
      }
      if (this.teste) {

        if (this.loadingHellow < 100) {
          this.loadingHellow = this.loadingHellow + 1
          console.log(this.loadingHellow)
          setTimeout(() => {
            this.loadingOla()
          }, this.velocity);
        }
        if (this.loadingHellow == 100) {
          document.querySelector('.boasVindas').classList.add('boasVindas__animation')

          document.body.style.overflowY = 'overlay'
        }
      }





    },
    removeClass() {
      document.getElementById('header').classList.remove('show')

    },

    tratarEvento(showingup) {

      if (showingup) {
        this.hiddenHeader = false

      } else {
        this.hiddenHeader = true
      }
    },

    favIcon() {
      const newLink = document.createElement("link")
      newLink.setAttribute('rel', 'icon')
      newLink.setAttribute('href', 'eu.png')
      document.head.appendChild(newLink)
    }
  }
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

/* Boas vindas */

.boasVindas {
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 10;
  top: 0;
}

.boasVindas__background {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.267);
  background: black;
  width: 100%;
  height: 100%;
}

.boasvindas__porcentagem {
  font-size: 3rem;
  text-shadow: none;
  font-weight: 300;
}

.boasVindas__animation {
  transform: translatex(100vw);
  animation-name: ola;
  animation-duration: 2s;
  animation-fill-mode: forwards;
}

@keyframes ola {
  0% {
    transform: translatex(0);
  }

  10% {
    transform: translatex(0);
  }

  100% {
    transform: translatex(100vw);

  }

}

/*  */

.header {
  opacity: 1;
  transition: .2s
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
  color: #E0D9CE;
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

/* Popup  */

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
  column-count: 2;
  gap: 6px;
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
  display: flex;
  flex-direction: column;
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
  width: 90px;
  height: 90px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
  transition: .2s;
  z-index: 12;
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
  color: #b5b5b5;
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
    font-size: 1.3vw !important;
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
  body {
    margin-top: 80px;
  }

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
</style>