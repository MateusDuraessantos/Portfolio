<template>
    <section>
        <div class="grid">
            <div class="cards" @click="upPopup($event, index)" v-for="(img, index) in imgs" :key="index">
                <div class="cards__container_name">
                    <p class="card__text">{{ img.name }}</p>
                </div>
                <img class="cards__imagens" :src="img.paths[0]">
            </div>
        </div>

        <div class="popup__background" id="animation" v-if="popup" @click="upPopup">
            <div class="popup__overflow">
                <div class="container-button">
                    <button class="changeProject back" @click="changeProject('back')">←</button>
                    <button class="changeProject next" @click="changeProject('next')">→</button>
                </div>

                <div class="container-loading" v-if="loading">
                    <span>carregando</span>
                    <div class="loading"></div>
                </div>

                <div class="popup__content" id="img_port" style="opacity: 0;">
                    <img class="popup__img" v-for="coisas in imgs[indexImg].paths" @load="loadingImg" :src="coisas">
                </div>

                <button class="popup__close">✕</button>
            </div>
        </div>
    </section>
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
            loading: true,
            number: 0,
        }
    },
    mounted() {
        this.scrolltoTop()
    },
    methods: {
        scrolltoTop() {
            this.$nextTick(() => {
                window.scrollTo(0, 0);
            });
        },
        upPopup(event, index) {
            const clicked = event.target.classList[0]
            if (event.currentTarget.classList[0] == 'cards') {
                this.indexImg = index
                document.body.style.overflow = 'hidden'
                this.popup = !this.popup
            }
            else if (document.body.style.overflow == 'hidden' && clicked == 'popup__close' || clicked == 'popup__overflow' || clicked == 'container-button') {
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

                //O setTimeout ajuda a evitar pulos de imagens enquanto estão carregando no browser
                setTimeout(() => {
                    this.loading = false
                    document.getElementById('img_port').removeAttribute('style')
                }, 100)

                document.getElementById('animation').classList.add('popup__animation')
            }
        },
        changeProject(value) {

            this.number = 0
            document.getElementById('img_port').setAttribute('style', 'opacity: 0;')

            this.loading = true
            if (value == 'back') {
                if (this.indexImg == 0) {
                    this.indexImg = this.imgs.length - 1
                } else {
                    this.indexImg--
                }
            }
            if (value == 'next') {
                if (this.indexImg == this.imgs.length - 1) {
                    this.indexImg = 0
                } else {
                    this.indexImg++
                }
            }
        },
    }
}

</script>
<style scoped>
section {
    margin-bottom: 100px;
}

.grid {
    width: 100%;
    display: grid;
    gap: 10px;
    margin: auto;
}



.cards {
    display: flex;
    flex-direction: column-reverse;
    position: relative;
    color: white;
    width: 100%;
    height: 20vw;
    overflow: hidden;
    cursor: pointer;
    border-radius: 10px;
}


.cards__container_name {
    display: flex;
    opacity: 0;
    align-items: center;
    position: absolute;
    padding: 14px 20px;
    padding-top: 26px;
    height: 74px;
    width: 100%;
    background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    z-index: 1;
    transition: .6s;
}

.cards:hover .cards__container_name {
    opacity: 1;
    transition: .6s;

}

.card__text {
    font-weight: 500;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
    line-height: 1.1rem;
    font-size: 0.9rem;
    text-align: center;
    color: rgb(235, 235, 235);
}

.cards__imagens {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    transition: .4s;
}

.cards:hover .cards__imagens {
    transform: scale(1.05);
    transition: .4s;
}

@media only screen and (min-width: 1601px) {
    .grid {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
}

@media only screen and (max-width: 1600px) {
    .grid {
        grid-template-columns: 1fr 1fr 1fr;
    }
}

@media only screen and (max-width: 1000px) {
    .grid {
        gap: 2vw;
    }
}

@media only screen and (max-width: 800px) {

    .cards__container_name {
        display: none;
    }

    .grid {
        width: calc(100% - 20px);
        gap: 1.2vw;
    }

    .cards {
        height: 28vw;
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

/* Mobile version */

@media only screen and (max-width: 400px) {
    .grid {
        gap: 3px;
    }
}
</style>