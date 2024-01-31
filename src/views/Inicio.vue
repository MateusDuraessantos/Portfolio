<template>
    <div id="main">
        <!-- Inicio -->
        <header class="inicio">
            <div class="max__width" id="inicio">
                <p class="designed_by">
                    Designed by Mateus Durães dos Santos - 2023
                </p>
                <div class="inicio__description">
                    <div class="inicio__container">
                        <p class="mim__ola">{{ saldacao }}</p>
                        <h2 class="mim__nome">Meu nome é Mateus Durães dos Santos,</h2>
                    </div>
                    <br>
                    <div class="redes">
                        <a href="https://www.behance.net/mateusduraes" target="_blank">
                            <img class="redes__img img--1" :src="`icons/${whiteIcons}/behance__fill.svg`" width="58" height="34" alt="logo Behance" loading="lazy">
                        </a>
                        <a href="https://www.linkedin.com/in/mateus-dur%C3%A3es-dos-santos/" target="_blank">
                            <img class="redes__img" :src="`icons/${whiteIcons}/linkedin.svg`" width="58" height="34" alt="logo Linkedin" loading="lazy">
                        </a>
                        <a href="https://github.com/MateusDuraessantos" target="_blank">
                            <img class="redes__img" :src="`icons/${whiteIcons}/github__fill.svg`" width="58" height="34" alt="logo Github" loading="lazy">
                        </a>
                    </div>
                    <br>
                    <div class="inicio__content">
                        <p>Eu trabalho para oferecer bons websites com programação e design.</p>
                    </div>
                </div>
            </div>
            <img src="square1.svg" class="square__left" alt="">
            <img src="square0.svg" class="square__right" alt="">
        </header>

        <!-- BACKGROUND -->
        <div class="background__parallax">
            <img class="parallax--img" id="parallax" :src="`inicio/${whiteImages}/background__parallax.webp`" alt="">
        </div>

        <!-- BUBBLES -->
        <div class="bubble__container" id="bubbles__observer">
            <img class="bubble bubble__left" src="bubble1.svg" alt="">
            <div class="bubble bubble__right"></div>
        </div>

        <!-- PORTFÓLIO -->
        <div class="max__width">
            <p class="experiencia">Alguns trabalhos que fiz</p>
            <p class="card__destaques">Destaques:</p>
        </div>
        
        <Carrossel
            style="position: relative;"
            :whiteImages="whiteImages"
            :keyComponent="'inicio'"
        />

        <!-- POPUP -->
        <Popup
            v-if="this.$store.state.popup"
            :indexImg="this.$store.state.popup"
            :whiteImages="whiteImages"
            :widthSize="widthSize"
        />

        <!-- FAÇA UM ORÇAMENTO -->
        <Servicos :whiteImages="whiteImages" />

        <!--  -->

        <section class="mensagem">
            <p>A arte imita a natureza.</p>
        </section>

        <!-- SOBRE -->
        <Sobre :whiteIcons="whiteIcons" />

        <!-- FOOTER -->

        <FooterElements :whiteImages="whiteImages" :footerVisible="footerVisible" :blockClicked="blockClicked" />
        
    </div>
</template>

<script>
import FooterElements from './Footer.vue'
import Carrossel from './Carrossel.vue'
import Sobre from './Sobre.vue'
import Popup from './Popup.vue'
import Servicos from './Servicos.vue'

export default {
    name: 'Inicio',
    props: {
        booleanTheme: Boolean
    },
    components: {
        FooterElements,
        Carrossel,
        Popup,
        Sobre,
        Servicos,
    },
    data() {
        return {
            blockClicked: '',
            blockTimer: true,
            blurTimeout: '',
            whiteIcons: 'whiteicons',
            whiteImages: 'black',
            footerVisible: true,
            saldacao: null,
            widthSize: undefined,
        }
    },
    watch: {
        booleanTheme() {
            this.changeImagens(1000)
        },
    },
    mounted() {
        this.keepWhiteOnReload(0)
        this.changeImagens(0)
        this.haveAGoodDay()

        const scrolling = [ //elementos que serão ativados
            { id: 'planets-earth', value: 0.4, position: -2200 },
            { id: 'planets-red', value: 0.4, position: -1700 },
            { id: 'parallax', value: 0.4, position: -200 },
            { id: 'bubbles__observer', value: 0.4, position: 1200 },
        ]

        const parallaxScroll = (element) => document.getElementById(element.id).style.top = `${window.scrollY * element.value + element.position}px`

        if (window.screen.availWidth > 1000) {
            scrolling.forEach(element => {
                parallaxScroll(element) // Define o valor inicia de acordo com o scroll inicial
                window.addEventListener('scroll', () => {
                    parallaxScroll(element)
                })
            });
        }
        
        window.addEventListener('resize', this.widthScreen)
        this.widthSize = window.screen.availWidth
        
    },
    methods: {
        widthScreen(){ // Verifica o tamanho da tela para trocar entre o popup padrão ou carrossel
            this.widthSize = window.screen.availWidth
        },
        scrollDown(ancora) {
            window.scrollTo({
                top: document.getElementById(ancora).offsetTop,
                behavior: 'smooth'
            })
        },
        haveAGoodDay() {
            const date = new Date().getHours()
            if (date >= 0 && date < 5) {
                this.saldacao = 'Olá,'
            } else if (date >= 5 && date < 12) {
                this.saldacao = 'Bom dia!'
            } else if (date >= 12 && date < 18) {
                this.saldacao = 'Boa tarde!'
            } else {
                this.saldacao = 'Boa noite!'
            }
        },
        changeImagens(timer) {
            if (this.booleanTheme == true) {
                setTimeout(() => {
                    this.blockClicked = 'blackicons'
                    this.whiteImages = 'white'
                    this.footerVisible = false
                }, timer);
            } else {
                setTimeout(() => {
                    this.blockClicked = 'whiteicons'
                    this.whiteImages = 'black'
                    this.footerVisible = true
                }, timer);
            }
            this.keepWhiteOnReload(timer)
        },
        keepWhiteOnReload(timer) {
            setTimeout(() => {
                //Altera o path das thumbs
                if (this.booleanTheme == true) {
                    document.getElementById('main').setAttribute('class', 'whiteTheme')
                    this.whiteIcons = 'blackicons'
                } else {
                    document.getElementById('main').removeAttribute('class')
                    this.whiteIcons = 'whiteicons'
                }
            }, timer);
        },
    }
}
</script>

<style>
:root {
    --border-color: #2c2c2c;
    --shadow-color: black;
    --text-color: black;
}

.designed_by {
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 10px;
    font-size: 12px;
    color: rgb(105, 110, 128);
    font-weight: 400;
}

#main {
    position: relative;
    transition: .2s;
}

.background__parallax {
    position: absolute;
    display: flex;
    align-items: flex-start;
    top: 100vh;
    left: 0;
    width: 100%;
    height: calc(100% - 100vh);
    transform: translateY(-400px);
    overflow: hidden;
}

.parallax--img {
    position: absolute;
    width: 1700px;
    object-fit: cover;
    filter: blur(4px);
}

.whiteTheme .parallax--img {
    width: 100%;
    height: 100%;
    filter: blur(0);
}

/* Mensagem */

.mensagem {
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 800px;
}

.mensagem p {
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5);
    z-index: 1;
}

.whiteTheme .mensagem h6 {
    text-shadow: none;
    color: #8f5245;
}
</style>

<style scoped>
.linkPadding {
    padding-top: 120px;
}

/*  */


a {
    cursor: pointer;
    position: relative;
}

p {
    text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5);
    font-size: 1rem;
}

/* Bubbles */

.bubble__container {
    position: absolute;
    width: 100vw;
    left: 0;
    top: 0;
    z-index: 0;
}

.bubble {
    z-index: 1;
    display: flex;
    align-items: center;
    position: relative;
    width: 100vw;
    object-fit: contain;
    height: 550px;
    position: absolute;
    z-index: 0;
}

.whiteTheme .bubble__right {
    background-image: url('../../public/inicio/white/birds.svg');
    margin-top: 300px;
    width: 300px;
}

.bubble__left {
    left: 0;
    width: 140px;
    top: 100px;
    /* background: red; */
}

.bubble__right {
    width: 140px;
    right: 0;
    object-fit: contain;
    background-image: url('../../public/inicio/black/lua.png');
    background-repeat: no-repeat;
    background-size: contain;
}

/* Orçamento */


/*  */

.inicio {
    display: flex;
    align-items: center;
    align-items: center;
    min-height: 600px;
    position: relative;
    margin-bottom: 100px;
    gap: 4vw;
    background-image: url('../../public/inicio/black/banner_sky.jpg');
    background-size: cover;
}

.inicio::after,
.inicio::before {
    content: '';
    position: absolute;
    width: 100%;
}

.inicio::before {
    background-image: linear-gradient(transparent, black);
    height: 100px;
    bottom: 0;
}

.whiteTheme .inicio::before {
    background-image: linear-gradient(transparent, #e2e0e7);
}

.whiteTheme .inicio::after {
    background-image: linear-gradient(#e2e0e7, transparent);
}

.inicio::after {
    top: 100%;
    height: 300px;
    background-image: linear-gradient(black, transparent);
}

.inicio__description {
    width: 100%;
    margin: auto;
    z-index: 1;
    text-align: center;
}

.inicio__container {
    display: flex;
    flex-direction: column;
    font-size: 1.9rem;
}

.inicio__content {
    font-weight: 400;
    font-size: 1rem;
}

.mim__ola {
    font-size: 1.6rem;
}

.mim__nome {
    font-size: 2.3rem;
}

.square__right {
    right: 0;
}

.square__left {
    left: 0;
}

.square__right,
.square__left {
    position: absolute;
    width: 80px;
    z-index: 1;
}

/*  */

.redes {
    display: flex;
    width: max-content;
    margin: auto;
    gap: 20px;
}

.redes__img {
    cursor: pointer;
    transition: .2s;
    width: 40px;
    height: 40px;
}

.img--1 {
    padding-left: 0;
}

.redes:hover .redes__img:not(:hover) {
    opacity: 0.6;
    transition: .2s;
}


@media screen and (max-width: 1000px) {

    .parallax--img {
        transform: translate(-300px, 1000px);
        width: 1400px;
    }

    .inicio {
        grid-template-columns: 100px 1fr 100px;
    }
    .square__left,
    .square__right,
    .bubble {
        display: none;
    }
    .inicio__container {
        gap: 12px;
        line-height: 24px;
    }

    .mim__nome,
    .mim__ola {
        font-size: 1.2rem;
    }

}

/* Mobile version */

@media only screen and (max-width: 500px) {
    .inicio {
        display: flex;
        justify-content: center;
        margin: 0;
    }
}

/* White Theme */

.whiteTheme * {
    color: var(--text-color);
    text-shadow: none;
}

.whiteTheme {
    transition: .2s;
}

.whiteTheme .inicio {
    background-image: url('../../public/inicio/white/banner__white.jpg');
}

.whiteTheme .frase {
    color: #a87c7c !important;
}

.inicio {
    min-height: 100vh;
    z-index: 1;
}

.inicio .max__width {
    display: flex;
    align-items: center;
    position: relative;
    height: 100vh;
}
</style>