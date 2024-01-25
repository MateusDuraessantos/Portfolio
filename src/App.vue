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

        <!-- Se booleanTheme for true o tema fica branco  -->
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
            booleanTheme: true, // Se booleanTheme for true o tema fica branc
            smile: 'black',
        }
    },
    mounted() {
        this.isDay()
        this.turnBackgroundWhite(0)
        this.overflow(0)
    },
    methods: {
        removeLinkVerFunc() {
            this.removeLinkVer = !this.removeLinkVer
        },
        isDay() {
            this.whatTimeIs = new Date().getHours()
            this.booleanTheme = this.whatTimeIs < 5 || this.whatTimeIs > 18 ? false : true
            const overflow = document.getElementById('overflow')
            if (this.booleanTheme == true) {
                overflow.classList.add('whiteoverflows')
                this.smile = 'white'
                setTimeout(() => {
                    overflow.classList.remove('whiteoverflows')
                }, 1250);
            } else {
                overflow.classList.add('blackoverflows')
                this.smile = 'black'
                setTimeout(() => {
                    overflow.classList.remove('blackoverflows')
                }, 1250);
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
            } else {
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
                    document.body.style.background = '#e8dede'
                }, timer);
            } else {
                setTimeout(() => {
                    document.body.removeAttribute('style')
                }, timer);
            }
        },
        removeClass() {
            document.getElementById('header').classList.remove('show')
        },
        tratarEvento(showingup) {
            this.hiddenHeader = showingup ? false : true
        }
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

:root {
    --creme: #E0D9CE
}

img {
    user-select: none;
}

/*  */

.header {
    opacity: 1;
    transition: .5s;
}

.show {
    opacity: 0;
    transition: .2s
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

/* link popup */

.link__grid {
    display: flex;
    justify-content: flex-end;
    padding-right: 14px;
    gap: 14px;
    position: sticky;
    margin-left: 14px;
    top: -88px;
    transform: translatey(12px);
    height: 0;
}

.link__grid a {
    color: var(--creme) !important;
}

.link__container {
    height: 38px;
    opacity: 1;
    display: flex;
    align-items: center;
    width: max-content;
    padding: 0 14px 0 16px;
    text-decoration: none;
    gap: 10px;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 10vw;
    backdrop-filter: blur(15px);
    transition: .2s;
}

.link__container:hover {
    background: rgba(107, 107, 107, 0.6);
    transition: .2s;
}

.link__img {
    width: 20px;
    min-width: 20px;
    margin: auto;
    z-index: 2;
    transition: .2s;
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

.blackoverflows .overflowPort {
    background: black;
}

.whiteoverflows {
    background: white;
}

@media only screen and (max-width: 400px) {
    html {
        font-size: 14px;
    }
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

.popup__close--animation-blur .popup__overflow {
    overflow: hidden;
}

@keyframes loading {
    from {
        transform: rotate(0);
    }

    to {
        transform: rotate(360deg);
    }
}

@keyframes animation_opacity {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
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


@media screen and (max-width: 1280px) {
    .max__width {
        width: calc(100% - 100px);
    }
}


@media screen and (max-width: 1000px) {

    .max__width {
        width: calc(100% - 50px);
    }

}
@media only screen and (max-width: 400px) {

    .max__width {
        width: calc(100% - 10px);
    }
}
</style>