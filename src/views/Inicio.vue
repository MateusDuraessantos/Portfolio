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
        <Carrossel :whiteImages="whiteImages" />

        <!-- POPUP -->
        <Popup v-if="this.$store.state.popup" />

        <!-- FAÇA UM ORÇAMENTO -->
        <section class="max__width" id="facaumorcamento">
            <div class="orcamento">
                <h1>Serviços:</h1>
                <img :src="`inicio/${whiteImages}/colors.svg`" class="orcamento__colors" alt="" loading="lazy">
                <img :src="`inicio/${whiteImages}/texts.svg`" class="orcamento__text" alt="" loading="lazy">
                <img :src="`inicio/${whiteImages}/tools.svg`" class="orcamento__tools" alt="" loading="lazy">
                <div class="orcamento__card--container">
                    <div :class="`orcamento__card ${cards.class}`" v-for="cards in cardsOrcamento">
                        <div>
                            <p><strong>{{ cards.title }}</strong></p>
                            <br>
                            <span>
                                <span v-for="infos in cards.card">
                                    <div class="li">
                                        <div style="display: flex; flex-direction: column; gap: 2px;">
                                            <p><strong>{{ infos.oferta }}</strong></p>
                                            <p style="font-size: 14px;">{{ infos.beneficio }}</p>
                                        </div>
                                    </div>
                                </span>
                            </span>
                        </div>
                        <button href="#contato" class="orcamento__btn" @click="scrollDown('contato')">Contate-me</button>
                    </div>
                </div>
            </div>
        </section>

        <section class="mensagem">
            <p>A arte imita a natureza.</p>
        </section>

        <!-- SOBRE -->
        <section class="section sobre" id="sobre">
            <div class="max__width">
                <img src="inicio/black/red-planet.jpg" id="planets-red" class="sobre__planet--1" alt="" loading="lazy">
                <img src="inicio/black/earth.png" id="planets-earth" class="sobre__planet--2" alt="" loading="lazy">

                <div class="sobre__elements">
                    <div class="sobre__container">
                        <div class="sobre__redes">
                            <a href="https://www.behance.net/mateusduraes" target="_blank">
                                <img class="sobre__icon--redes" :src="`icons/${whiteIcons}/behance__fill.svg`" width="40" height="40" alt="logo Behance" loading="lazy">
                            </a>
                            <a href="https://github.com/MateusDuraessantos" target="_blank">
                                <img class="sobre__icon--redes" :src="`icons/${whiteIcons}/github__fill.svg`" width="40" height="40" alt="logo Github" loading="lazy">
                            </a>
                            <a href="https://www.linkedin.com/in/mateus-dur%C3%A3es-dos-santos/" target="_blank">
                                <img class="sobre__icon--redes" :src="`icons/${whiteIcons}/linkedin.svg`" width="40" height="40" alt="logo Linkedin" loading="lazy">
                            </a>
                        </div>
                        <p>
                            Sou um designer graduado pela Universidade Presbiteriana Mackenzie, especializado em UX/UI. Com
                            dois anos de experiência profissional, utilizando tecnologias como CSS, JavaScript e Vue.js.
                            Atualmente, ocupo a posição de Desenvolvedor Frontend Júnior, mas estou em uma jornada contínua
                            de aprendizado e desenvolvimento profissional expandindo minhas habilidades para abranger o
                            desenvolvimento Full Stack, com foco no backend, para me tornar um profissional mais versátil e
                            completo no campo do desenvolvimento web.
                        </p>
                        <img class="sobre__mateus" src="mateus.jpg" alt="Mateus Durães dos Santos" width="200" height="200" loading="lazy">
                    </div>
                    <div style="display: flex; justify-content: center;">
                        <h3>Conhecimentos:</h3>
                    </div>
                    <div class="sobre__experiencia">
                        <div class="sobre__ctn" v-for="icons in experienciaIcons[0]">
                            <img class="sobre__icon" :src="`${icons.img}.png`" :alt="icons.alt" loading="lazy">
                            <p>{{ icons.skill }}</p>
                        </div>
                    </div>
                    <div class="sobre__experiencia">
                        <div class="sobre__ctn" v-for="icons in experienciaIcons[1]">
                            <img class="sobre__icon" :src="`${icons.img}.png`" :alt="icons.alt" loading="lazy">
                            <p>{{ icons.skill }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- FOOTER -->

        <FooterElements :whiteImages="whiteImages" :footerVisible="footerVisible" :blockClicked="blockClicked" />
        
    </div>
</template>

<script>
import FooterElements from './Footer.vue'
import Carrossel from './Carrossel.vue'
import Popup from './Popup.vue'

export default {
    name: 'Inicio',
    props: {
        booleanTheme: Boolean
    },
    components: {
        FooterElements,
        Carrossel,
        Popup
    },
    data() {
        return {
            blockClicked: '',
            blockTimer: true,
            blurTimeout: '',
            whiteIcons: 'whiteicons',
            whiteImages: 'black',
            experienciaIcons: [
                [
                    {
                        img: 'software0',
                        skill: 'Illustrator',
                        alt: 'Logo Adobe Illustrator'
                    },
                    {
                        img: 'software1',
                        skill: 'cinema 4D',
                        alt: 'Logo cinema 4D'
                    },
                    {
                        img: 'software2',
                        skill: 'Photoshop',
                        alt: 'Logo Adobe Photoshop'
                    },
                    {
                        img: 'software3',
                        skill: 'Miro',
                        alt: 'Logo Miro'
                    },
                    {
                        img: 'software4',
                        skill: 'Figma',
                        alt: 'Logo Figma'
                    }
                ],
                [
                    {
                        img: 'tech0',
                        skill: 'Firebase',
                        alt: 'Logo Firebase'
                    },
                    {
                        img: 'tech1',
                        skill: 'CSS',
                        alt: 'Logo CSS'
                    },
                    {
                        img: 'tech2',
                        skill: 'HTML',
                        alt: 'Logo HTML'
                    },
                    {
                        img: 'tech3',
                        skill: 'Javascript',
                        alt: 'Logo Javascript'
                    },
                    {
                        img: 'tech4',
                        skill: 'Vue  JS',
                        alt: 'Logo Vuejs 3'
                    }
                ],
            ],
            blackTools: {
                tools: [
                    'paint3',
                    'paint5',
                ],
                jpg: [
                    'paint4',
                    'paint1',
                    'paint2',
                    'paint0',
                ],
                align: [
                    'aling1',
                    'aling2',
                    'aling3',
                    'aling4',
                ],
            },
            cardsOrcamento: [
                {
                    title: 'Design',
                    card: [
                        {
                            oferta: 'Protótipo navegável',
                            beneficio: 'Você terá acesso a um protótipo navegavel, para entender melhor como o produto final será, antes de ser desenvolvido os códigos.',
                        },
                        {
                            oferta: 'Mobile first',
                            beneficio: 'Trabalho com designs tanto desktops quanto mobiles.'
                        },
                        {
                            oferta: 'Design único',
                            beneficio: 'Cada projeto é único, não utilizo layouts pré montados (salvo alguma necessidade do cliente).'
                        },
                    ],
                },
                {
                    title: 'Seu website online',
                    class: 'orcamento__card--2',
                    card: [
                        {
                            oferta: 'Hospedagem',
                            beneficio: 'Você não precisa se preocupar em colocar seu website online, eu cuido disso!'
                        },
                        {
                            oferta: 'Domínio próprio',
                            beneficio: 'Você escolhe o domínio desejado, exemplo: www.meusite.com.br, e eu implemento.'
                        },
                        {
                            oferta: 'Programação',
                            beneficio: 'Já tem um design de website pronto? eu posso fazer os códigos desse site para você.'
                        },
                        {
                            oferta: 'Otimização',
                            beneficio: ' Otimizado para carregar rapidamente.'
                        },
                    ],
                },
                {
                    title: 'Outros diferências',
                    class: 'orcamento__card--3',
                    card: [
                        {
                            oferta: '1 Mês de assistência',
                            beneficio: 'Após a entrega do projeto, ofereço 1 mês de assistencia para pequenas alterações, sem custo adicional.'
                        },
                        {
                            oferta: 'Códigos do website',
                            beneficio: 'Você terá acesso a todos os códigos desenvolvidos, para fazer alterações caso desejar.'
                        },
                        {
                            oferta: 'Responsividade Mobile/Desktop',
                            beneficio: 'O site será entrega com responsividade para todos dispositivos móveis.'
                        },
                    ],
                },
            ],
            footerVisible: true,
            saldacao: null
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
    },
    methods: {
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

#facaumorcamento {
    padding-top: 10px;
}

.orcamento {
    position: relative;
    background: rgba(40, 71, 83, 0.418);
    backdrop-filter: blur(10px);
    width: 100%;
    margin-top: 120px;
    padding: 80px;
    z-index: 1;
}

.orcamento h1 {
    margin-bottom: 20px;
    font-size: 1.5rem;
}

.whiteTheme .orcamento {
    background: rgba(255, 255, 255, 0.6);
}

.orcamento__colors {
    position: absolute;
    right: 30px;
    top: -100px;
    height: 200px;
}

.orcamento__text {
    position: absolute;
    bottom: -25px;
    right: 30px;
    height: 50px;
}

.orcamento__tools {
    position: absolute;
    top: -25px;
    left: 50px;
    height: 50px;
}

.orcamento__btn {
    position: relative;
    display: flex;
    align-items: center;
    background: #004ECC;
    font-size: 1rem;
    border: none;
    border-radius: 6px;
    padding: 4px 10px;
    color: white !important;
    transition: .2s
}

.orcamento__btn:hover {
    background: rgb(13, 118, 255);
    transition: .2s
}

.orcamento__btn::after {
    position: absolute;
    content: '';
    width: 20px;
    height: 20px;
    object-fit: contain;
    right: 12px;
    background-image: url('../../public/icons/whiteicons/arrow.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
}

.orcamento__tools img {
    width: 24px;
    margin: 0 2px;
    object-fit: contain;
}

.orcamento__card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    background: white;
    border-radius: 26px;
    padding: 30px;
    width: 100%;
    height: max-content;
    max-height: 630px;
}

.orcamento__card * {
    color: black;
}

.orcamento__card--container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    width: 100%;
    height: max-content;
    margin: auto;
}

.orcamento__card--2 {
    margin-top: 25%;
}

.orcamento__card--3 {
    margin-top: 50%;
}

@media screen and (max-width: 1380px) {

    .orcamento__card--2,
    .orcamento__card--3 {
        margin-top: 0;
    }

    .orcamento__card {
        height: 100%;
    }

}

.orcamento__card p {
    align-self: flex-start;
}

.orcamento__card p,
.orcamento__card strong {
    text-shadow: none;
}

.orcamento__card .li {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;
    gap: 20px;
    margin-bottom: 10px;
    margin-left: 20px;
}

.orcamento__card .li::before {
    position: absolute;
    content: '';
    top: 2px;
    left: -26px;
    height: 22px;
    width: 22px;
    border-radius: 50%;
    background-image: url('../../public/icons/blackicons/check.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top;
    /* background: black; */
}

.orcamento__card img {
    width: 40px;
    height: 40px;
    object-fit: contain;
    object-position: right;
}

.orcamento__icons {
    display: flex;
    gap: 10px;
    align-items: center;
    align-self: flex-start;
}

/* Sobre */

.sobre {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 200px 0;
    padding-bottom: 400px;
}

.sobre__planet--1 {
    position: absolute;
    bottom: -400px;
    left: -100px;
    width: 800px;
    height: 800px;
    object-fit: contain;
    z-index: 1;
    filter: blur(4px);
}

.sobre__planet--2 {
    position: absolute;
    filter: blur(4px);
    top: -400px;
    right: -3vw;
    width: 550px;
    height: 550px;
    object-fit: contain;
}

.whiteTheme .sobre__planet--1,
.whiteTheme .sobre__planet--2 {
    display: none;
}

.sobre__elements {
    position: relative;
    display: flex;
    flex-direction: column;
    -webkit-backdrop-filter: blur(50px) !important;
    backdrop-filter: blur(50px);
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 4px 4px 24px rgba(0, 0, 0, 0.2);
    gap: 40px;
    border-radius: 36px;
    padding: 40px;
    padding-bottom: 80px;
    max-width: 1000px;
    margin: auto;
    z-index: 2;
}

.sobre__container {
    display: flex;
    gap: 40px;
    border-radius: 36px;
    align-items: center;
}

.whiteTheme .sobre__container {
    color: black;
}

.sobre__mateus {
    height: 200px;
    width: 200px;
    border-radius: 50%;
}

.sobre__redes {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    padding: 20px 0;
}

.sobre__icon--redes {
    width: 40px;
    height: 40px;
    object-fit: contain;
    transition: .2s;
}

.sobre__icon--redes:hover {
    transform: scale(1.2);
    transition: .2s;
}

.sobre__experiencia {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin: auto;
}

.sobre__icon {
    width: 40px;
    height: 40px;
    object-fit: contain;
}

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
    margin-left: 100px;
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
}

.redes__img {
    cursor: pointer;
    transition: .2s;
    padding: 0 max(12px, 1vw);
    height: max(34px, 2.4vw);
}

.img--1 {
    padding-left: 0;
}

.redes:hover .redes__img:not(:hover) {
    opacity: 0.6;
    transition: .2s;
}

@media screen and (max-width: 1280px) {
    .orcamento {
        padding: 80px 20px;
    }

    .orcamento__card {
        padding: 20px;
    }

    .orcamento__card li {
        gap: 4px;
    }

}

@media screen and (max-width: 1000px) {

    .parallax--img {
        transform: translate(-600px, 1000px);
        width: 1400px;
    }

    .inicio {
        grid-template-columns: 100px 1fr 100px;
    }

    .inicio__description {
        width: calc(100% - 20px);
        margin-left: 0;
    }

    .square__left,
    .square__right,
    .bubble {
        display: none;
    }


    /* Orçamento */

    .orcamento__card--container {
        display: flex;
        flex-direction: column;
    }

    /* Orcamentos */
    .sobre__container {
        flex-direction: column;
    }

    .sobre__redes {
        flex-direction: row;
    }

    /* sobre */
    .sobre__elements {
        padding: 30px;
    }

    .sobre__icon {
        width: 30px;
    }

    .sobre__icon p {
        font-size: 14px;
    }

    .sobre__ctn {
        width: 88px !important;
    }

    .sobre__planet--1 {
        width: 500px;
        transform: translateY(200px);
    }

    .sobre__planet--2 {
        right: -8px;
    }

}

@media screen and (max-width: 850px) {
    /* Mim */
    .inicio__container {
        gap: 12px;
        line-height: 24px;
    }

    .mim__nome,
    .mim__ola {
        font-size: 1.2rem;
    }
    .orcamento__tools {
        display: none;
    } 

}

/* Mobile version */

@media only screen and (max-width: 500px) {

    .inicio {
        display: flex;
        justify-content: center;
        margin: 0;
    }

    .orcamento__text {
        height: 30px;
        bottom: -15px;
    }

    /* Planets background */
    .sobre__planet--1 {
        width: 400px;
        bottom: -315px;
    }
    
    .sobre__planet--2 {
        width: 400px;
        right: -70px;
    }

}

@media only screen and (max-width: 400px) {
    /* Orcamentos */

    .orcamento {
        padding: 80px 5px;
    }

    .sobre__elements {
        padding: 20px 10px 30px 10px;
    }

    .sobre__container {
        gap: 10px;
    }

    .sobre__redes {
        padding: 10px 0;
    }

    .sobre__mateus {
        width: 140px;
        height: 140px;
    }

    .orcamento__colors {
        height: 140px;
    }

    .orcamento h1 {
        margin-left: 12px;
        /* font-size: 1.2rem; */
    }

    .orcamento__card {
        padding: 14px;
        border-radius: 12px;
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

.sobre__ctn {
    text-align: center;
    width: 124px;
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