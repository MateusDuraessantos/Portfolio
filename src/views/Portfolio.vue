<template>
    <div>
        <div class="grid">
            <div class="cards anime_scrollReveal" @click="upPopup($event, index)" v-for="(img, index) in imgs" :key="index">
                <div class="cards__name">{{ img.name }}</div>
                <img class="cards__imagens" :src="img.paths[0]">
            </div>
        </div>

        <div class="popup__background" id="animation" v-if="popup" @click="upPopup">
            <div class="popup__overflow">

                <div class="container-loading" v-if="loading">
                    <span>loading...</span>
                    <div class="loading"></div>
                </div>

                <div class="popup__content" id="img_port" style="opacity: 0;">
                    <img class="popup__img" v-for="coisas in imgs[indexImg].paths" @load="loadingImg" :src="coisas">
                </div>

                <button class="popup__close">✕</button>
            </div>
        </div>
    </div>
</template>

<script>
import { imagens } from './imagensDados.js'
import ScrollReveal from 'scrollreveal';

export default {
    name: 'Portfolio',
    data() {
        return {
            imgs: imagens,
            popup: false,
            indexImg: null,
            loading: true,
            number: 0,
        }
    },
    mounted() {
        const sr = ScrollReveal();
        window.sr = ScrollReveal({ reset: false })
        sr.reveal('.anime_scrollReveal', {
            duration: 2000,
            opacity: 0,
            scale: 0.9,
            delay: 500
        });
    },
    methods: {
        upPopup(event, index) {
            const clicked = event.target.classList[0]
            if (event.currentTarget.classList[0] == 'cards') {
                this.indexImg = index
                document.body.style.overflow = 'hidden'
                this.popup = !this.popup
            }
            else if (document.body.style.overflow == 'hidden' && clicked == 'popup__close' || clicked == 'popup__overflow') {
                document.body.removeAttribute('style')
                this.popup = !this.popup
                /* Loading */
                this.loading = true
                this.number = 0
                document.getElementById('img_port').setAttribute('style', 'opacity: 1;')
            }
        },
        loadingImg() {
            this.number = this.number + 1
            if (this.number == this.imgs[this.indexImg].paths.length) {
                this.loading = false
                document.getElementById('img_port').removeAttribute('style')
                document.getElementById('animation').classList.add('popup__animation')
            }
        }
    }
}

</script>
<style scoped>
.anime_scrollReveal {
    visibility: hidden;
}

.grid {
    width: calc(100% - 40px);
    display: grid;
    gap: 30px;
    margin: auto;
}

@media only screen and (min-width: 1601px) {
    .grid {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
}

@media only screen and (max-width: 1600px) {
    .grid {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
}


@media only screen and (max-width: 1280px) {
    .grid {

        grid-template-columns: 1fr 1fr 1fr;
    }
}

@media only screen and (max-width: 1000px) {
    .grid {

        grid-template-columns: 1fr 1fr;
    }
}

@media only screen and (max-width: 700px) {
    .grid {

        grid-template-columns: 1fr;
    }
}

.cards {
    display: flex;
    flex-direction: column-reverse;
    position: relative;
    color: white;
    width: 100%;
    height: 300px;
    overflow: hidden;
    cursor: pointer;
    border-radius: 10px;
}

.cards__name {
    display: flex;
    align-items: center;
    background: rgb(255, 255, 255, 0.05);
    backdrop-filter: blur(6px);
    position: absolute;
    border-radius: 50px;
    padding: 10px 20px;
    line-height: 18px;
    font-size: 14px;
    min-height: 40px;
    width: calc(100% - 20px);
    margin: 10px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    z-index: 1;
}

.cards__imagens {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    transition: .6s;
}

.cards:hover .cards__imagens {
    transform: scale(1.05);
    transition: .6s;
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
    column-count: 2;
    gap: 10px;
    margin: auto;
    background: #1f1f1f;
    width: 80vw;
    margin-bottom: 100px;
}

.popup__overflow {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: scroll;
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
    animation-name: loading-2357e87e;
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
</style>