<template>
    <div class="popup" @click="closeThisPopup" v-if="renderImg">
        <button class="popup__close">✕</button>
        <div class="popup__pass--container">
            <button @click="passImg('next')" class="popup__pass popup__right">&#62;</button>
            <button @click="passImg('back')" class="popup__pass popup__left">&#60;</button>
        </div>

        <div class="popup__overlay" id="overlay" v-if="clearPopup">
            <div class="popup_head">
                <h1>{{ renderImg.name }}</h1>
                <p>{{ renderImg.description }}</p>
            </div>
            <div class="popup__container">
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
            const element = document.getElementById(id)
            console.log(element);
            element.classList.remove('loading--on')
        },
        closeThisPopup(event) {
            const eventTarget = event.target
            let clickable = ['popup__close', 'popup']
            clickable.forEach(obj => {
                if (obj == eventTarget.classList[0]) {
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

            if (param == 'next') {
                this.indexImg = this.indexImg < this.imagens[this.elemento.array].length - 1 ? this.indexImg + 1 : 0
            } else if (param == 'back') {
                this.indexImg = this.indexImg == 0 ? this.imagens[this.elemento.array].length : this.indexImg - 1
            }
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
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
    z-index: 6;
    animation: openPopup forwards 1s;
}

@keyframes openPopup {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.popup__closing {
    animation: closingPopup forwards 1s;
}

@keyframes closingPopup {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}

.popup__overlay {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 1000px;
    height: max-content;
    top: 0;
    background: #1f1f1f;
    margin-top: 50px;
    animation: popup .5s forwards;
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
    border-color: white;
    border-width: 5px;
    animation: rotation 14s infinite linear;
}

@keyframes rotation {
    from {
        transform: rotate(0deg);
    }
    to {
        
        transform: rotate(360deg);
    }
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
    from {
        left: -100px;
    }
    to {
        left: calc(100% + 100px);
    }
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
    from {
        transform: rotate(0);
    }

    to {
        transform: rotate(360);
    }
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
    color: white;
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

.popup_head {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 29px;
}
</style>