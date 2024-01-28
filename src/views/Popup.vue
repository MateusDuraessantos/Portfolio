<template>
    <div class="popup__background" @click="close">
        <div class="popup__overflow popup__animation" id="animation">
            <div class="popup__content" id="img_portrato">
                <div class="popup__container--mobile">
                    <Carrossel
                        :widthSize="widthSize"
                        :index="indexImgPopup"
                        :whiteImages="whiteImages"
                        :keyComponent="'popup'"
                    />
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
        widthSize: Number,
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
    min-height: 800px;
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

.popup__overflow {
    align-items: flex-start;
    justify-content: center;
    overflow-y: overlay;
    height: 100%;
    padding-top: 100px;
}


@keyframes loadingAnime {
    from {
        left: -200px;
    }
    to {
        left: 130%;
    }
}

@keyframes loading {
    from {
        transform: rotate(0);
    }

    to {
        transform: rotate(360deg);
    }
}

/*  */


.popup__img {
    width: 100%;
    height: 100%;
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
    z-index: 2;
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
}


</style>