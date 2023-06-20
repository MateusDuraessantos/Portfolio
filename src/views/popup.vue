<template>
    <div class="popup__background" id="animation" @click="upPopup">
        <div class="popup__overflow">

            <div class="container-loading" v-if="false">
                <span>carregando</span>
                <div class="loading"></div>
            </div>

            <div class="popup__content" id="img_port" style="opacity: 0;">
                <img class="popup__img" v-for="coisas in imgs[indexImg].paths" @load="loadingImg" :src="coisas">
            </div>

            <button class="popup__close">✕</button>
        </div>
    </div>
</template>

<script>

import { imagens } from './imagensDados.js'
export default {
    props: {
        indexteste: Number,
    },

    data() {
        return {
            imgs: imagens,
            popup: false,
            indexImg: 1,
            loading: true,
            number: 0,
        }
    },
    methods: {
        upPopup(event) {
            const clicked = event.target.classList[0]

            if (document.body.style.overflow == 'hidden' && clicked == 'popup__close' || clicked == 'popup__overflow') {
                document.body.removeAttribute('style')
                this.popup = !this.popup
                /* Loading */
                this.loading = true
                this.number = 0
                document.getElementById('img_port').setAttribute('style', 'opacity: 1;')
            }
        },
    }
}
</script>

<style scoped>
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
    background: #1f1f1f;
    width: 80vw;
    margin-bottom: 100px;
}

.popup__overflow {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    overflow-y: overlay;
    height: 100%;
    padding-top: 100px;
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