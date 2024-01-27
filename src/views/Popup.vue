<template>
    <div class="popup__background" @click="close">
        <div class="popup__overflow popup__animation" id="animation">
            <div class="container-button">
                <button class="changeProject back" @click="changeProjectDesign('back')">
                    <p>←</p>
                </button>
                <button class="changeProject next" @click="changeProjectDesign('next')">
                    <p>→</p>
                </button>
            </div>
            <div class="container-loading" v-if="loading">
                <span>carregando</span>
                <div class="loading"></div>
            </div>
            <div class="popup__content" id="img_portrato">
                <div class="popup__mobile--description">
                    <div class="link__grid">
                        <a :href="imgs[indexImgPopup].link" target="_blank" v-if="imgs[indexImgPopup].link"
                            class="link__container">
                            Website online
                            <img class="link__img" src="external.svg" alt="Link para o webiste desse projeto" loading="lazy">
                        </a>
                        <a :href="imgs[indexImgPopup].github" target="_blank" v-if="imgs[indexImgPopup].github"
                            class="link__container">
                            GitHub
                            <img class="link__img" src="github_logo.svg" alt="Link para o Github desse projeto" loading="lazy">
                        </a>
                    </div>
                    <div class="description">
                        <h1 class="h1__popup">{{ imgs[indexImgPopup].name }}</h1>
                    </div>
                </div>
                <div class="popup__container--mobile">
                    <div class="description">
                        <p>{{ imgs[indexImgPopup].description }}</p>
                    </div>

                    <!-- REATIVAR LOADING -->
                    <!-- REATIVAR LOADING -->
                    <!-- REATIVAR LOADING -->
                    <!-- REATIVAR LOADING -->
                    <!-- REATIVAR LOADING -->

                <Carrossel
                    :index="indexImgPopup"
                    :whiteImages="whiteImages"
                    :keyComponent="'popup'"
                />

                <!--  <div class="popup__mobile">
                    <div class="popup__carrossel--count">
                        <p>{{ indexImgPopup }}</p>/
                        <p>{{ imgs[indexImgPopup].paths.length }}</p>
                    </div>
                    <div class="popup__carrossel">
                        <img class="popup__img" v-for="coisas in imgs[indexImgPopup].paths" width="300" height="600"
                            :alt="coisas.alt" @load="loadingImg" :src="`projetos/${coisas.img}`" loading="lazy">
                    </div>
                </div> -->
                </div>
            </div>
            <button class="popup__close">✕</button>
        </div>
    </div>
</template>

<script>
import { imagens } from './destaque.js'
import Carrossel from './Carrossel'

import { useStore } from 'vuex'
export default {
    name: 'popup',
    props: {
        indexImg: Number,
        whiteImages: String,
    },
    components: {
        Carrossel
    },
    data() {
        return {
            store: useStore(),
            imgs: imagens,
            removeTimer: null,
            indexImgPopup: 0,
            number: 0, // Verifica quantas imagens foram carregadas
            loading: true,

        }
    },
    mounted() {
        this.indexImgPopup = this.$store.state.popupIndex
        document.body.style.overflow = 'hidden'
    },
    methods: {
        close(event) {
            const closers = ['popup__close', 'popup__overflow']
            if (this.store.state.popup && closers.some(obj => event.target.classList[0] === obj)) {
                document.body.style.overflow = ''
                document.querySelector('#img_portrato').classList.add('popup__close--animation-opacity')
                document.querySelector('.popup__background').classList.add('popup__close--animation-blur')
                setTimeout(() => {
                    this.loading = true
                    this.$store.commit('upPopup', false)
                }, 1000);
            }
        },
        loadingImg() {
            this.number = this.number + 1
            if (this.number == this.imgs[this.indexImgPopup].paths.length) {
                document.getElementById('animation').classList.add('popup__animation')
                this.loading = false
                document.getElementById('img_portrato').style.opacity = 1
                this.number = 0
            }
        },
        changeProjectDesign(value) {
            clearTimeout(this.removeTimer)
            this.loading = true
            const img_portrato = document.getElementById('img_portrato')
            img_portrato.setAttribute('style', 'opacity: 0')
            if (value == 'back') {
                if (this.indexImgPopup > 0) {
                    this.indexImgPopup--
                } else {
                    this.indexImgPopup = imagens.length - 1
                }
            }
            if (value == 'next') {
                if (this.indexImgPopup < imagens.length - 1) {
                    this.indexImgPopup++
                } else {
                    this.indexImgPopup = 0
                }
            }
            img_portrato.classList.add('popup__animation')
            this.removeTimer = setTimeout(() => {
                img_portrato.classList.remove('popup__animation')
            }, 1000);
            img_portrato.setAttribute('style', 'opacity: 1')
        },
    }
}
</script>

<style>
.description h1,
.description p {
    padding: 20px 0;
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
    backdrop-filter: blur(20px);
    background: rgba(0, 0, 0, 0.8);
    animation-name: animation_opacity;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    opacity: 0;
}

.popup__content {
    position: relative;
    display: flex;
    flex-direction: column;
    background: #1f1f1f;
    width: 80vw;
    max-width: 1200px;
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
    width: 70px;
    height: 70px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(12px);
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
    transition: .2s;
    z-index: 12;
}

.changeProject p {
    color: #E0D9CE !important;
    font-size: 24px !important;
}

.back {
    left: 32px;
}

.next {
    right: 32px;
}

.back:hover {
    left: 26px;
    transition: .2s;
}

.next:hover {
    right: 26px;
    transition: .2s;
}

.popup__overflow {
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
    font-weight: 400;
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

.popup__img {
    width: 100%;
    object-fit: cover;
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

.popup__carrossel--count {
    display: none;
}

.popup__animation {
    animation-name: popup__background--animation;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    opacity: 1;
    display: flex;
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

.popup__close--animation-blur {
    animation-name: close-popup-blur;
    animation-duration: 1s;
    animation-fill-mode: forwards;
}

@keyframes close-popup-blur {
    0% {
        opacity: 1;
        backdrop-filter: blur(20px);
        background: rgba(0, 0, 0, 0.8);
        overflow: hidden;
    }

    50% {
        backdrop-filter: blur(0px);
    }

    100% {
        overflow: hidden;
        backdrop-filter: blur(0px);
        background: rgba(0, 0, 0, 0);
        opacity: 0;
    }
}

.popup__close--animation-opacity {
    animation-name: close-popup-opacity;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    backdrop-filter: blur(20px);
}

@keyframes close-popup-opacity {
    from {
        transform: translateY(0);
        opacity: 1;
    }

    to {
        transform: translateY(-60px);
        opacity: 0;
    }
}

@media only screen and (max-width: 900px) {

    .description {
        padding: 20px;
    }

    .container-button {
        display: none;
    }

    .container-button {
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
        height: 100%;
        margin: 0;
    }

    .popup__mobile--description {
        display: flex;
        flex-direction: column-reverse;
        padding: 10px 0;
        gap: 10px;
    }

    .popup__background {
        padding: 0;
    }

    .description p {
        padding-bottom: 20px;
    }

    .description {
        padding: 0 20px;
    }

    .link__grid {
        height: initial;
        justify-content: flex-start;
        transform: none;
    }

    .popup__overflow {
        height: 100%;
    }

    .popup__img {
        height: 100%;
        height: 100%;
    }

    .popup__overflow {
        padding-top: 0;
    }

    .popup__container--mobile {
        display: flex;
        flex-direction: column;
        overflow: auto;
        width: 100%;
        height: 100%;
    }

    .h1__popup {
        font-size: 16px;
    }

    .popup__mobile {
        position: relative;
        height: 100%;
    }

    .popup__carrossel {
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
        overflow: auto;
    }

    .popup__carrossel--count {
        position: absolute;
        display: flex;
        align-items: center;
        right: 10px;
        top: 10px;
        gap: 4px;
        border-radius: 50vw;
        padding: 4px 12px;
        height: max-content;
        z-index: 1;
    }

}
</style>