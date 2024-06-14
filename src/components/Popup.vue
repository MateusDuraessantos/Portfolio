<template>
    <div class="popup" @click="closeThisPopup" v-if="renderImg">
        <button class="popup__close">✕</button>
        <div class="popup__pass--container">
            <button @click="passImg('next')" class="popup__pass popup__right">&#62;</button>
            <button @click="passImg('back')" class="popup__pass popup__left">&#60;</button>
        </div>

        <div class="popup__overlay" id="overlay" v-if="clearPopup">

            <!-- Imagens -->
            
            <div class="popup__content">
                
                
                <div class="popup__head">
                    <h2 class="popup__title">{{ renderImg.name }}</h2>
                    <p>{{ renderImg.description }}</p>
                </div>
                <div class="popup__container">
                    <div class="popup__action--ctn" v-if="renderImg.link">
                        <div class="popup__action">
                            <a class="popup__action--button" :href="renderImg.link" target="_blank">Ver online</a>
                            <a class="popup__action--button" :href="renderImg.github" target="_blank">Github</a>
                        </div>
                    </div>
                    <div
                        v-for="img in renderImg.paths"
                        class="loading loading--on"
                        :id="img.img"
                    >
                        <p class="loading__loader">Carregando</p>
                        <img class="popup__imgs" :src="`projetos/${img.img}`" :alt="img.alt" @load="stopLoading(img.img)">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { imagens } from './destaque.js'

export default {
    name: 'popup',
    props: {
        elemento: Object
    },
    data() {
        return {
            imagens: imagens,
            imagensObj: null,
            indexImg: 0,
            renderImg: null,
            clearPopup: true
        }
    },
    mounted() {
        this.imagensObj = this.imagens[this.elemento.array]
        this.indexImg = this.imagens[this.elemento.array].findIndex(elem => elem.id == this.elemento.obj.id) // Pega o index do objeto
        this.renderImg = this.imagens[this.elemento.array][this.indexImg]
        document.body.style.overflow = 'hidden'
    },
    methods: {
        stopLoading(id){
            document.getElementById(id).classList.remove('loading--on')
        },
        closeThisPopup(event) {
            let clickable = ['popup__close', 'popup', 'popup__overlay']
            clickable.forEach(obj => {
                if (obj == event.target.classList[0]) {
                    document.querySelector('.popup').classList.add('popup__closing')
                    setTimeout(() => {
                        this.$emit('closePopup')
                        document.body.style.overflow = ''
                    }, 1000)
                }
            })
        },
        passImg(param) {
            this.clearPopup = false
            setTimeout(() => this.clearPopup = true, 500)

            if(param == 'next') this.indexImg = this.indexImg < this.imagens[this.elemento.array].length - 1 ? this.indexImg + 1 : 0
            if(param == 'back') this.indexImg = this.indexImg == 0 ? this.imagens[this.elemento.array].length - 1 : this.indexImg - 1
            
            this.renderImg = this.imagens[this.elemento.array][this.indexImg] // Re atribui os valores 
        }
    }
}
</script>

<style scoped>
.popup {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(0, 0, 0, 0.7);
    backdrop-filter: blur(6px);
    width: 100%;
    height: 100vh;
    overflow: hidden;
    z-index: 6;
    animation: openPopup forwards 1s;
}

@keyframes openPopup {
    from { opacity: 0 }
    to { opacity: 1 }
}

.popup__closing {
    animation: closingPopup forwards 1s;
}

@keyframes closingPopup {
    from { opacity: 1 }
    to { opacity: 0 }
}

.popup__overlay {
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100%;
    overflow: auto;
}

@keyframes popup {
    from {
        transform: translatey(-30px);
        opacity: 0;
    }
    to {
        transform: translatey(0);
        opacity: 1;
    }
}

.popup__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 1000px;
    height: 100%;
    background: #1f1f1f;
    margin-top: 50px;
    animation: popup-6be7b2a8 .5s forwards;
}

.popup__imgs {
    width: 100%;
}

.loading {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.popup__container {
    height: max-content;
    margin-bottom: 100px;
}

/* Texto carregando */

.loading--on .loading__loader::before, .loading--on .loading__loader {
    display: flex !important;
}

.loading__loader {
    display: none;
    position: absolute;
    align-items: center;
    justify-content: center;
}

.loading__loader::before {
    content: '';
    display: none;
    position: absolute;
    align-items: center;
    justify-content: center;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    border-style: dotted;
    border-color: var(--creme);
    border-width: 5px;
    animation: rotation 14s infinite linear;
}

@keyframes rotation {
    from { transform: rotate(0deg) }
    to { transform: rotate(360deg) }
}

/* Espada */

.loading--on::after {
    content: '';
    position: absolute;
    transform: rotate(6deg);
    height: calc(100% + 100px);
    width: 20px;
    filter: blur(20px);
    background: gray;
    animation: repet 3s infinite;
}

@keyframes repet {
    from { left: -100px }
    to { left: calc(100% + 100px) }
}

.loading--on::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
    animation: loading 10s infinite;
 
}

@keyframes loading {
    from { transform: rotate(0) }
    to { transform: rotate(360) }
}

.popup__close {
    position: fixed;
    top: 20px;
    right: 20px;
    background: none;
    font-size: 22px;
    font-weight: 300;
    border: none;
    transition: .2s;
    z-index: 2;
    text-shadow: 1px 1px 2px black;
}

.popup__close:hover {
    color: gray;
    transition: .2s;
}

.popup__pass--container {
    position: fixed;
    display: flex;
    align-items: center;
    width: 100%;
}

.popup__pass {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(114, 114, 114, 0.2);
    border-radius: 50%;
    width: 60px;
    height: 60px;
    color: var(--creme);
    font-size: 22px;
    cursor: pointer;
}

.popup__pass * {
    transition: .2s;
}

.popup__left {
    transition: .2s;
    left: 40px;
}

.popup__right {
    transition: .2s;
    right: 40px;
}

.popup__right:hover {
    right: 34px;
}

.popup__left:hover {
    left: 34px;
}

.popup__head {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 29px;
}

.popup__action--ctn {
    position: sticky;
    width: 100%;
    padding-top: 20px;
    height: 0;
    top: -18px;
    z-index: 1;
}

.popup__action {
    position: absolute;
    display: flex;
    margin: 20px;
    gap: 10px;
}

.popup__action--button {
    background: #1f1f1f;
    border-radius: 50px;
    padding: 6px 14px;
    font-size: 16px;
    color: var(--creme);
    transition: .2s;
    text-decoration: none;
    cursor: pointer;
    border: none;
}

.popup__action--button:hover {
    transition: .2s;
    background: var(--vermelho);
    color: black;
}

.popup__title {
    width: 100%;
    font-size: 32px;
    font-weight: 700;
}

@media screen and (max-width: 1000px){
    .popup__title {
        font-size: 20px;
    }

    .popup__action {
        position: relative;
        justify-content: flex-start;
    }

    .popup__content {
        margin: 0;
    }

    .popup__pass--container {
        display: none;
    }
}

@media screen and (max-width: 700px) {
    h1 {
        font-size: 20px;
    }

    .popup__head p {
        font-size: 14px;
    }

    .popup__head {
        padding: 20px;
    }
    
}

</style>