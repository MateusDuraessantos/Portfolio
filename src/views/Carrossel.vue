<template>
    <div :class="`${keyComponent == 'popup' ? `modifier` : ''}`">

        <!-- DESCRIÇÃO DE CADA PROJETO -->
        <div v-if="keyComponent == 'popup' && widthSize > 900">
            <DescriptionPopup :VIf="imagens[indexImgPopup]" />
        </div>

        <!--  -->
        <section class="programacao" id="portfolio" v-if="keyComponent == 'inicio' || widthSize < 900">
            <div class="carrossel">
                <button class="carrossel__controlls" @click="startCarrossel('voltar')">←</button>
                <button class="carrossel__controlls" @click="startCarrossel('avancar')">→</button>
            </div>
            <div class="card__grid--mobile">
                <div :class="`card__grid card__grid--${keyComponent}`" @touchmove.passive="moveTouch"
                    @touchstart.passive="startCarrossel" @touchend="endCarrossel" style="transform: translateX(0vw)">
                    <div v-for="(img, index) in imagens"
                        :class="`card ${img.class} card-carrossel card-carrossel-id-${index}`"
                        @click="keyComponent == 'inicio' ? ($store.commit('upPopup', true), indexToUpPopup(index)) : null">
                        <span v-if="keyComponent == 'inicio'" class="inicio__ctn--loading">
                            <Loadings
                                :loadId="`loading__id_inicio--${index + 100}_${index}`"
                                :loadAlt="img"
                                :loadSrc="`projetos/${img.thumb.default ? `${img.thumb.default}` : `${img.thumb.white}-${whiteImages}.jpg`}`"
                                :loadClass="`card__img`"
                            />
                        </span>
                        <div v-else-if="rechargeOnPass">
                            <div class="inicio__ctn--loading" v-for="(coisas, indexPop) in imagens[indexImgPopup].paths">
                                <div v-if="indexPop == 0" style="height: max-content;">
                                    <!-- Bloqueia que faça vários v-fors em cima da descrição -->
                                    <DescriptionPopup :VIf="img" />
                                </div>

                                 <Loadings
                                    :loadId="`loading__id_desk--${indexPop}_${index}`"
                                    :loadAlt="coisas"
                                    :loadSrc="`projetos/${coisas.img}`"
                                    :loadClass="`popup__img segundo`"
                                />
                            </div>
                        </div>
                        <!-- HOVER FAIXA COM NOME DO PROJETO -->
                        <div class="card__description">
                            <div class="card__data">
                                <p> {{ img.name }}</p>
                            </div>
                            <button class="card__btn">ver</button>
                        </div>
                    </div>
                </div>
                <div class="carrossel__count">
                    <div :class="`carrossel__current carrossel__current--${keyComponent} carrossel--${index}--${keyComponent}`"
                        v-for="(count, index) in imagens" />
                </div>
            </div>
        </section>

        <div v-else-if="widthSize > 900 && keyComponent == 'popup'" class="popup__desktop">
            <div class="carrossel">
                <button class="carrossel__controlls" @click="startCarrossel('voltar')">←</button>
                <button class="carrossel__controlls" @click="startCarrossel('avancar')">→</button>
            </div>
            <div v-if="rechargeOnPass">
                <div style="position: relative;" v-for="(coisas, testesxte) in imagens[indexImgPopup].paths">
                    <Loadings
                        :loadId="`loading__id--${testesxte}`"
                        :loadAlt="coisas"
                        :loadSrc="`projetos/${coisas.img}`"
                        :loadClass="`popup__img terceiro`"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue'
import { imagens } from './destaque.js'
import { useStore } from 'vuex'
import DescriptionPopup from '../components/DescriptionPopup.vue'
import Loadings from '../components/Loadings.vue'

export default {
    components: {
        DescriptionPopup,
        Loadings,
    },
    setup(props) {
        let initialClickX = ref(0)
        let initialClickY = ref(0)
        let inicialTransform = ref(0)
        let willchange = ref(false)
        let positionInicial = ref(0)
        let carrosselSelected = ref(0)
        let blockBodyScroll = ref(true)
        let keyComponentElement = `.card__grid--${props.keyComponent}`
        let store = useStore()
        let indexImgPopup = ref(0)
        let block = ref(true)
        let rechargeOnPass = ref(true)

        onMounted(() => {
            indexImgPopup.value = store.state.popupIndex //  Atualiza a varriável para as próximas transições
            blockTouch()
            if (block.value) {
                carrosselFocus('init')
                if (props.keyComponent == 'popup') {
                    carrosselSelected.value = store.state.popupIndex //  Atualiza a varriável para as próximas transições
                    positionInicial.value = Number(store.state.popupIndex + '00') // Atualiza a var para as próximas transições 

                    document.querySelector(keyComponentElement).style.transform = `translateX(-${store.state.popupIndex}00vw)` // Atualiza a posição inicial 
                    document.querySelector('.carrossel__current--popup').classList.remove('carrossel__current--gray')
                    document.querySelector(`.carrossel--${store.state.popupIndex}--${props.keyComponent}`).classList.add('carrossel__current--gray') // Atualiza o marcador da imagem selecionada
                }
            }
        })

        const blockTouch = () => {
            window.screen.availWidth > 900 && props.keyComponent == 'popup' ? block.value = false : block.value = true
        }

        window.addEventListener('resize', blockTouch)

        const more = (value) => document.querySelector(`.carrossel--${value}--${props.keyComponent}`).classList.add('carrossel__current--gray')
        const less = (value) => document.querySelector(`.carrossel--${value}--${props.keyComponent}`).classList.remove('carrossel__current--gray')

        const carrosselFocus = (changer) => {
            if (changer == 'right') less(carrosselSelected.value), carrosselSelected.value++, more(carrosselSelected.value)
            if (changer == 'left') less(carrosselSelected.value), carrosselSelected.value--, more(carrosselSelected.value)
            if (changer == 'init') document.querySelector(`.carrossel__current--${props.keyComponent}`).classList.add('carrossel__current--gray')
        }

        const moveTouch = (event) => {
            if (block.value) {
                const element = document.querySelector(keyComponentElement)
                const slideWidth = String(event.touches[0].clientX).split('.')[0] - initialClickX.value
                const slideHeight = event.touches[0].clientY - initialClickY.value
                const widthSum = inicialTransform.value + slideWidth * .17

                if (parseInt(slideWidth / slideHeight).toString() != 0 && blockBodyScroll.value == true || blockBodyScroll.value == 'justVerticalScrollAllowed') { // Se o scroll começou na horizontal, bloqueia o scroll da vertical e vise-versa
                    document.querySelector('body').style.overflowY = 'hidden'
                    widthSum <= 0 && element.style.transform.split('(')[1].split('vw)')[0] > imagens.length * 100 * -1 + 90 ? element.style.transform = `translateX(${widthSum}vw)` : null
                    blockBodyScroll.value = 'justVerticalScrollAllowed'
                } else if (blockBodyScroll.value || blockBodyScroll.value == 'justHorizontalScrollAllowed') {
                    blockBodyScroll.value = 'justHorizontalScrollAllowed'
                }
            }
        }

        const startCarrossel = (e) => { // Muda os projetos pelos botões
            if (block.value) { // Bloqueia touch
                const element = document.querySelector(keyComponentElement)
                positionInicial.value = Number(element.style.transform.split('(')[1].split('vw)')[0])

                if (e != 'avancar' && e != 'voltar') {
                    initialClickY.value = Number(String(e.touches[0].clientY).split('.')[0])
                    initialClickX.value = Number(String(e.touches[0].clientX).split('.')[0])
                    inicialTransform.value = Number(document.querySelector(keyComponentElement).style.transform.split('vw')[0].split('translateX(')[1])
                }

                if (e == 'avancar' && carrosselSelected.value < imagens.length - 1) {
                    less(carrosselSelected.value)
                    carrosselSelected.value++
                    indexImgPopup.value++
                    more(carrosselSelected.value)
                    document.querySelector(keyComponentElement).style.transform = `translateX(-${carrosselSelected.value}00vw)`
                } else if (e == 'voltar' && carrosselSelected.value > 0) {
                    less(carrosselSelected.value)
                    carrosselSelected.value--
                    indexImgPopup.value--
                    more(carrosselSelected.value)
                    document.querySelector(keyComponentElement).style.transform = `translateX(-${carrosselSelected.value}00vw)`
                }
            } else { // Se for versão desktop, apenas os botões alteram as imagens
                if (e == 'avancar' && indexImgPopup.value < imagens.length - 1) {
                    carrosselSelected.value++
                    indexImgPopup.value++

                } else if (e == 'voltar' && indexImgPopup.value > 0) {
                    carrosselSelected.value--
                    indexImgPopup.value--
                }
            }

            if (e.target == undefined && props.keyComponent == 'popup' && carrosselSelected.value > 0 && indexImgPopup.value < imagens.length - 1 ) { // Ativa apenas no popup
                rechargeOnPass.value = false // Destroi o componente para refazer as animações
                document.getElementById('img_portrato').classList.remove('popup__animation')
                document.getElementById('img_portrato').style.opacity = 0
                setTimeout(() => {
                    document.getElementById('img_portrato').style.opacity = 1
                    document.getElementById('img_portrato').classList.add('popup__animation')
                    rechargeOnPass.value = true
                    document.querySelector('.popup__content').classList.add('popup__animation')
                }, 500);
            }
        }

        const endCarrossel = (e) => {
            const element = document.querySelector(keyComponentElement)
            const arrastoCursor = 90 // Define quantos pixeis o touch tem que arrastado para mudar de imagem
            let widthScroll = Number(element.style.transform.split('(')[1].split('vw)')[0]) // Distancia que a imagem foi arrastada
            let stopScroll = widthScroll > imagens.length * 100 * -1 + 100 // Impede o scroll No final

            if (widthScroll && stopScroll) {
                if (initialClickX.value > e.changedTouches[0].clientX && initialClickX.value - e.changedTouches[0].clientX > arrastoCursor) {
                    positionInicial.value += -100
                    carrosselFocus('right')
                    indexImgPopup.value++
                }
                else if (initialClickX.value - e.changedTouches[0].clientX < -arrastoCursor) {
                    indexImgPopup.value--
                    positionInicial.value += 100
                    carrosselFocus('left')
                }
            }
            element.style.transform = `translateX(${positionInicial.value}vw)`
            willchange.value = false
            initialClickX.value = 0
            inicialTransform.value = 0
            blockBodyScroll.value = true
            props.keyComponent != 'popup' ? document.body.style.overflowY = 'initial' : null
        }

        const indexToUpPopup = (index) => {
            this.$store.commit('indexToPopup', index)
        }

        return {
            store,
            rechargeOnPass,
            imagens,
            indexImgPopup,
            indexToUpPopup,
            moveTouch,
            endCarrossel,
            startCarrossel,
        }
    },
    props: {
        whiteImages: String,
        keyComponent: String,
        index: Number,
        widthSize: Number,
    },
    methods: {
        indexToUpPopup(index) {
            this.$store.commit('indexToPopup', index)
        },
    }
}
</script>

<style>
.programacao {
    position: relative;
    z-index: 1;
}

.carrossel {
    display: flex;
    position: absolute;
    justify-content: space-between;
    gap: 20px;
    margin: auto;
    width: 100%;
    bottom: 20px;
    z-index: 11;
    padding: 0 50px;
    pointer-events: none;
}
@media screen and (min-width: 1001px) {
    .carrossel {
        display: none;
    }
}

.carrossel__count {
    display: none;
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
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: rgb(67 67 67 / 50%);
    backdrop-filter: blur(7px);
    width: 60px;
    height: 60px;
    padding-bottom: 4px;
    z-index: 2;
    transition: .2s;
    cursor: pointer;
    border: none;
    border-radius: 50%;
    font-size: 24px !important;
    pointer-events: initial !important;
    text-shadow: 0 0 8px black;
}

.carrossel__controlls:hover {
    background: rgb(74, 74, 74);
    color: white;
    transition: .2s;
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
    position: relative;
    display: flex;
    justify-content: center;
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
    background: #1f1f1f;
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

/* Loading */

.popup__desktop .carrossel {
    display: flex;
    position: fixed;
    left: 0;
    top: calc(50vh - 18px);
    justify-content: space-between;
    gap: 20px;
    margin: auto;
    width: 100%;
    z-index: 11;
    padding: 0 50px;
}

.popup__mobile .carrossel {
    position: fixed;
}

@import './modifier.css';

.inicio__ctn--loading {
    position: relative;
    width: 100%;
}

@media screen and (max-width: 1000px) {

    .carrossel__count {
        display: flex;
    }

    .experiencia {
        padding: 8px 18px;
    }

    .card__description {
        display: none;
    }

    .card__data {
        padding-left: 20px;
    }

    .grid-area-height,
    .card__img,
    .card__grid {
        height: 80vh;
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
        width: 100vw;
        height: 100%;
    }
}

.whiteTheme .experiencia {
    background: #E7E7E7;
    color: var(--text-color);
}
</style>