<template>
    <div>
        <section class="programacao section" id="portfolio">
            <div class="max__width">
                <p class="experiencia">Alguns trabalhos que fiz</p>
                <p class="card__destaques">Destaques:</p>
            </div>
            <div class="card__grid--mobile">
                <div class="card__grid" @touchmove.passive="moveTouch" @touchstart.passive="startCarrossel"
                    @touchend="endCarrossel" style="transform: translateX(0vw)">
                    <div v-for="(img, index) in imgs" :class="`card ${img.class} card-carrossel card-carrossel-id-${index}`"
                        :key="index" @click="upPopup($event, index, 'true')">
                        <img v-if="img.thumb.default" width="400" height="300" class="card__img" loading="lazy"
                            :src="`projetos/${img.thumb.default}`" :alt="img.alt">
                        <img v-else class="card__img" width="400" height="300" loading="lazy"
                            :src="`projetos/${img.thumb.white}-${whiteImages}.jpg`" :alt="img.alt">
                        <div class="card__description">
                            <div class="card__data">
                                <p> {{ img.name }}</p>
                            </div>
                            <button class="card__btn">ver</button>
                        </div>
                    </div>
                </div>
                <div class="carrossel__count">
                    <div :class="`carrossel__current carrossel--${index}`" v-for="(count, index) in imgs" />
                </div>
            </div>
            <div class="carrossel">
                <button class="carrossel__controlls carrossel--left" @click="startCarrossel('voltar')">Voltar</button>
                <button class="carrossel__controlls carrossel--right" @click="startCarrossel('avancar')">Avançar</button>
            </div>
        </section>
        <PopupCarrossel class="popup__background" v-if="popup" @click="upPopup" :indexImg="indexImg" />
    </div>
</template>


<script>
import { ref, onMounted } from 'vue' 
import { imagens } from './destaque.js'
import PopupCarrossel from './PopupCarrossel.vue'

export default {
    setup() {
        let initialClickX = ref(0)
        let initialClickY = ref(0)
        let inicialTransform = ref(0)
        let willchange = ref(false)
        let positionInicial = ref(0)
        let blockBodyScroll = ref(true)
        const imgs = imagens

        const moveTouch = (event) => {
            const element = document.querySelector('.card__grid')
            const slideWidth = String(event.touches[0].clientX).split('.')[0] - initialClickX.value
            const slideHeight = event.touches[0].clientY - initialClickY.value
            const widthSum = inicialTransform.value + slideWidth * .17

            if (parseInt(slideWidth / slideHeight).toString() != 0 && blockBodyScroll.value == true || blockBodyScroll.value == 'justVerticalScrollAllowed') { // Se o scroll começou na horizontal, bloqueia o scroll da vertical e vise-versa
                document.querySelector('body').style.overflowY = 'hidden'
                widthSum <= 0 && element.style.transform.split('(')[1].split('vw)')[0] > imgs.length * 100 * -1 + 90 ? element.style.transform = `translateX(${widthSum}vw)` : null
                blockBodyScroll.value = 'justVerticalScrollAllowed'
            } else if (blockBodyScroll.value || blockBodyScroll.value == 'justHorizontalScrollAllowed') {
                blockBodyScroll.value = 'justHorizontalScrollAllowed'
            }
        }

        let carrosselSelected = ref(0)
        const more = (value) => document.querySelector(`.carrossel--${value}`).classList.add('carrossel__current--gray')
        const less = (value) => document.querySelector(`.carrossel--${value}`).classList.remove('carrossel__current--gray')

        const carrosselFocus = (changer) => {
            if (changer == 'right') less(carrosselSelected.value), carrosselSelected.value++, more(carrosselSelected.value)
            if (changer == 'left') less(carrosselSelected.value), carrosselSelected.value--, more(carrosselSelected.value)
            if (changer == 'init') document.querySelector('.carrossel__current').classList.add('carrossel__current--gray')
        }

        onMounted(() => {
            carrosselFocus('init')
        })

        const endCarrossel = (e) => {
            const element = document.querySelector('.card__grid')

            const arrastoCursor = 20 // Define quantos pixeis o touch tem que arrastado para mudar de imagem
            let widthScroll = Number(element.style.transform.split('(')[1].split('vw)')[0]) // Distancia que a imagem foi arrastada
            let stopScroll = widthScroll > imgs.length * 100 * -1 + 100 // Impede o scroll No final

            if (widthScroll && stopScroll) {
                if (initialClickX.value > e.changedTouches[0].clientX && initialClickX.value - e.changedTouches[0].clientX > arrastoCursor) {
                    positionInicial.value += -100
                    carrosselFocus('right')
                }
                else if (initialClickX.value - e.changedTouches[0].clientX < -arrastoCursor) {
                    positionInicial.value += 100
                    carrosselFocus('left')
                }
            }
            element.style.transform = `translateX(${positionInicial.value}vw)`
            willchange.value = false
            initialClickX.value = 0
            inicialTransform.value = 0
            blockBodyScroll.value = true
            document.querySelector('body').style.overflowY = 'initial'
        }

        const startCarrossel = (e) => {
            const element = document.querySelector('.card__grid')
            positionInicial.value = Number(element.style.transform.split('(')[1].split('vw)')[0])

            if (e != 'avancar' && e != 'voltar') {
                initialClickY.value = Number(String(e.touches[0].clientY).split('.')[0])
                initialClickX.value = Number(String(e.touches[0].clientX).split('.')[0])
                inicialTransform.value = Number(document.querySelector('.card__grid').style.transform.split('vw')[0].split('translateX(')[1])
            }

            if (e == 'avancar' && imgs.length - 1 > carrosselSelected.value) {
                less(carrosselSelected.value)
                carrosselSelected.value++
                more(carrosselSelected.value)
                document.querySelector('.card__grid').style.transform = `translateX(-${carrosselSelected.value}00vw)`
            } else if (e == 'voltar' && carrosselSelected.value > 0) {
                less(carrosselSelected.value)
                carrosselSelected.value--
                more(carrosselSelected.value)
                document.querySelector('.card__grid').style.transform = `translateX(-${carrosselSelected.value}00vw)`
            }
        }

        return {
            imgs,
            moveTouch,
            endCarrossel,
            startCarrossel,
        }
    },
    components: {
        PopupCarrossel
    },
    props: {
        whiteImages: String
    },
    data() {
        return {
            indexImg: 0,
            popup: false,
            loading: true,
        }
    },
    methods: {
        upPopup(event, index) {
            const elementos = ['popup__close',  'container-button', 'card']
            const clicked = event.target.classList[0]
            elementos.forEach(obj => {
                if (event.currentTarget.classList[0] == obj) {
                    this.indexImg = index
                    document.body.style.overflow = 'hidden'
                    this.popup = !this.popup
                } else if (document.body.style.overflow == 'hidden' && clicked == obj) {
                    this.blockTimer = false
                    document.querySelector('#img_portrato').classList.add('popup__close--animation-opacity')
                    document.querySelector('.popup__background').classList.add('popup__close--animation-blur')
                    setTimeout(() => {
                        document.body.style.overflow = ''
                        this.popup = !this.popup
                        this.loading = true
                        document.querySelector('.popup__background').classList.remove('popup__close--animation-blur')
                        document.querySelector('#img_portrato').classList.remove('popup__close--animation-opacity')
                    }, 1000);
                }
            })
        },
    }
}
</script>

<style>
.programacao {
    position: relative;
    z-index: 1;
    padding-top: 120px;
    margin-bottom: 300px
}

.carrossel {
    display: none;
    justify-content: center;
    gap: 20px;
    margin: auto;
    margin-top: 20px;
}

.carrossel__count {
    display: flex;
    position: absolute;
    margin: auto;
    gap: 10px;
    bottom: 20px;
    justify-content: center;
    width: 100%;
}

.carrossel__current {
    background: #d7d7d7;
    border-radius: 50%;
    width: 6px;
    height: 6px;
}

.carrossel__current--gray {
    background: #414141;
}

.carrossel__controlls {
    position: relative;
    background: #2c2c2c;
    width: 100px;
    padding: 10px 20px;
    z-index: 2;
    border: none;
    transition: .2s;
    cursor: pointer;
}

.whiteTheme .carrossel__controlls {
    background: white;
}

.carrossel__controlls:hover {
    background: rgb(74, 74, 74);
    color: white;
    transition: .2s;
}

.carrossel--left {
    border-radius: 50px 0 0 50px;
}

.carrossel--right {
    border-radius: 0 50px 50px 0;
}

.figure__design {
    grid-area: des;
    width: 76%;
    margin: auto;
}

.experiencia {
    max-width: max-content;
    width: 100%;
    padding: 12px 20px;
    background: #1f1f1f;
    border-radius: 10vw;
    text-align: center;
}

.experiencia strong {
    font-weight: 600;
}
.card__description {
    opacity: 0;
    transition: .2s;
}

.card:hover .card__description {
    opacity: 1;
    transition: .2s;
}

.card__destaques {
    display: flex;
    align-items: center;
    font-weight: 400;
    height: 60px;
    padding-left: 12px;
    color: rgb(172, 172, 172);
    z-index: 2;
}

.card {
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 500px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 6px 6px 14px rgba(0, 0, 0, 0.2);
}

.card:hover .card__img {
    transform: scale(1.04);
    transition: .3s;
}

.card__grid {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    margin: auto;
    transition: .2s;
    grid-template-areas:
        'mesa mesa teclakey'
        ' .   tre  teclakey'
        'tcc  tre     .    '
        'tcc   .      .    '
}

.grid-area-height {
    height: 1000px;
}

.tcc {
    grid-area: tcc;
}

.tre {
    grid-area: tre;
}

.mesa {
    grid-area: mesa;
    height: 500px;
}

.teclakey {
    grid-area: teclakey;
}

.card__img {
    width: 100%;
    height: 100%;
    transition: .3s;
    object-fit: cover;
}

.card__description {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    border-radius: 10vw;
    padding: 0 4px;
    bottom: 10px;
    height: 52px;
    width: calc(100% - 20px);
    margin: auto;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(9px);
    z-index: 2;
}

.card__btn {
    background: rgba(0, 0, 0, 0.4);
    border-radius: 10vw;
    width: max-content;
    padding: 0 24px;
    font-size: 14px;
    height: 44px;
    transition: .3s;
    border: none;
}

.card__btn:hover {
    background: rgba(255, 255, 255, 0.7);
    color: black !important;
    transition: .3s
}

.card__data {
    display: flex;
    flex-direction: column;
    padding: 0 0 0 1.6vw;
}

.card__data p {
    font-size: 14px;
}

.card__data p,
.card__btn {
    color: var(--creme) !important;
}

@media screen and (max-width: 1000px) {
    
    .experiencia {
        padding: 8px 18px;
    }
    
    .card__description {
        display: none;
    }

}
@media screen and (max-width: 850px) {

    .card__data {
        padding-left: 20px;
    }

    .grid-area-height,
    .card__img,
    .card__grid {
        height: 60vh;
    }

    .card__grid--mobile {
        position: relative;
        width: 100vw;
        overflow: hidden;
    }

    .card__grid {
        display: flex;
        width: max-content;
    }

    .card__grid {
        position: relative;
    }

    .card {
        overflow: initial;
        width: 100vw
    }

    .carrossel {
        display: flex;
    }
}

@media screen and (max-width: 400px) {

    .max__width {
        width: calc(100% - 10px);
    }
}

.whiteTheme .experiencia {
    background: #E7E7E7;
    color: var(--text-color);
}

</style>