<template>
  <div>
    <Header class="header" />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Header,
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
  margin-top: 11vw;
  width: 100vw;
  overflow-y: overlay;
  overflow-x: hidden;

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

button {
  background: none;
  border: none;
  cursor: pointer;
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

@media only screen and (max-width: 1280px) {
  html {
    font-size: 16px;
  }
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

.popup__animation .popup__overflow {
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
  gap: 10px;
  background: #1f1f1f;
  width: 80vw;
  margin-bottom: 100px;
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
  box-shadow: 5px 5px 5px black;
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
  width: 100px;
  height: 100px;
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
  font-size: 22px;
  border-radius: 50%;
  background: rgb(68, 68, 68);
  width: 34px;
  height: 34px;
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
