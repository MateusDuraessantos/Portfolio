<template>
    <div>
        <div class="grid">
            <div class="cards" @click="upPopup($event, index)" v-for="(img, index) in imgs" :key="index">
                <div class="cards__name">{{ img.name }}</div>
                <img class="cards__imagens" :src="img.paths[0]">
            </div>
        </div>

        <div class="popup__background" v-if="popup" @click="upPopup">
            <div class="popup__overflow">
                <button class="popup__close">✕</button>

                <div class="popup__content">

                    <span>

                        <img class="popup__img" v-for="coisas in imgs[indexImg].paths" :src="coisas">

                    </span>
                </div>
            </div>
        </div>

        <br>
        <br>
        <br>
        <br>
        {{ imgs }}

    </div>
</template>

<script>
import { imagens } from './imagensDados.js'

export default {
    name: 'Portfolio',
    data() {
        return {
            imgs: imagens,
            popup: false,
            indexImg: null,
        }
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
            }
        },
    }
}

</script>
<style>
.grid {
    width: calc(100% - 40px);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 30px;
    margin: auto;
}

.cards {
    display: flex;
    flex-direction: column-reverse;
    position: relative;
    color: white;
    width: 100%;
    height: 300px;

    cursor: pointer;
}

.cards__name {
    display: flex;
    align-items: center;
    height: 40px;
    background: rgb(255, 255, 255, 0.05);
    backdrop-filter: blur(6px);
    z-index: 1;
    position: absolute;
    border-radius: 50px;
    padding-left: 20px;
    width: calc(100% - 20px);
    margin: 10px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
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
    transform: scale(1.02);
    transition: .3s;
}

.popup__background {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
}

.popup__content {
    margin: auto;
    background: gray;
    width: 80vw;
    margin-bottom: 100px;
}

.popup__overflow {
    overflow-y: scroll;
    height: 100%;
    padding-top: 100px;
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