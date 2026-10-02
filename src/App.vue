<template>
  <main>
    <Header
      @turn-on="turnOn"
      :removeLinkVer="removeLinkVer"
      :booleanTheme="booleanTheme"
      class="header"
      id="header"
      @remove-link="removeClass"
      :dadoBol="hiddenHeader"
    />
    <router-view :boolean-theme="booleanTheme" />
  </main>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'App',
  components: { Header },
  data() {
    return {
      removeLinkVer: true,
      booleanTheme: new Date().getHours() >= 6 && new Date().getHours() < 18,
      hiddenHeader: true,
    }
  },
  mounted() {
    this.turnBackgroundWhite(0)
  },
  beforeUnmount() {
    clearTimeout(this.backgroundTimer)
  },
  methods: {
    turnOn() {
      this.booleanTheme = !this.booleanTheme
      this.turnBackgroundWhite(1000)
    },
    turnBackgroundWhite(timer) {
      clearTimeout(this.backgroundTimer)
      this.backgroundTimer = setTimeout(() => {
        document.body.classList.toggle('whiteTheme', this.booleanTheme)
        document.body.style.background = this.booleanTheme ? 'var(--body_color)' : ''
      }, timer)
    },
    removeClass() {
      document.getElementById('header').classList.remove('header__show')
    },
  }
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

*::selection {
  background: #ff2f3a;
  color: white;
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

.g-max__width {
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

@media screen and (max-width: 1280px) {
  .g-max__width {
    width: calc(100% - 100px) !important;
  }
}
@media screen and (max-width: 1000px) {
  *::-webkit-scrollbar {
    width: 0;
    height: 7px;
    background: transparent;
  }

  .g-max__width {
    width: calc(100% - 50px) !important;
  }
}

@media screen and (max-width: 700px) {

  .g-max__width {
    width: calc(100% - 14px) !important;
  }
}


@media only screen and (max-width: 400px) {
  html {
    font-size: 14px;
  }
}
</style>