<template>
    <main id="main">
        <!-- Popup -->

        <div id="themeOverflow"></div>

        <div class="popup__background" id="animation" v-if="popup" @click="upPopup">
            <div class="popup__overflow">
                <div class="container-button">
                    <button class="changeProject back" @click="changeProjectDesign('back')">
                        <p>←</p>
                    </button>
                    <button class="changeProject next" @click="changeProjectDesign('next')">
                        <p>→</p>
                    </button>
                </div>

                <div class="container-loading" v-if="loading">
                    <span>carregando</span>
                    <div class="loading"></div>
                </div>

                <div class="popup__content" id="img_portrato" style="opacity: 0;">
                    <img class="popup__img" v-for="coisas in imgs[indexImg].paths" @load="loadingImg" :src="coisas">
                </div>

                <button class="popup__close">✕</button>
            </div>
        </div>

        <!-- SOBRE -->

        <section class="sobre" id="sobre">
            <p
                style="position: absolute; width: 100%; text-align: center; bottom: 1vw; font-size: 0.7rem; color: rgb(105, 110, 128); font-weight: 300;">
                Designed by Mateus Durães dos Santos - 2023
            </p>

            <img src="square1.svg" class="square__left">

            <div class="sobre__description">
                <div class="sobre__container">
                    <p class="mim__ola">Olá,</p>
                    <h2 class="mim__nome">Meu nome é Mateus Durães dos Santos,</h2>
                </div>
                <br>

                <div class="redes">
                    <a href="https://www.behance.net/mateusduraes" target="_blank">
                        <img class="redes__img img--1" :src="`icons/${whiteIcons}/behance__fill.svg`" alt="logo Behance">
                    </a>
                    <a href="https://www.linkedin.com/in/mateus-dur%C3%A3es-dos-santos/" target="_blank">
                        <img class="redes__img" :src="`icons/${whiteIcons}/linkedin.svg`" alt="logo Linkedin">
                    </a>
                    <a href="https://github.com/MateusDuraessantos" target="_blank">
                        <img class="redes__img" :src="`icons/${whiteIcons}/github__fill.svg`" alt="logo Github">
                    </a>
                </div>

                <br>

                <div class="sobre__content">
                    <p>Sou formado em design na Universidade Presbiteriana Mackenzie. Trabalho a 2 anos com a criação de
                        designs para websites (UX/UI) e desenvolvimento frontend (com CSS, Javascript e VueJs). Sempre
                        gostei de tecnologia (hardwares/softwares). Atualmente sou Junior e tenho como meta atuar como Full
                        Stack, para isso, tenho estudando backend, tendo como porta de entrada o Node.js</p>

                </div>
            </div>
            <img src="square0.svg" class="square__right">
        </section>

        <div class="linkPadding" id="design"></div>

        <section class="section">

            <!-- BUBBLES -->

            <div class="bubble__container" id="bubbles__observer">
                <div class="bubble" id="bubble">
                    <img src="bubble1.svg">
                    <img class="bubble__right" src="bubble0.svg">
                </div>
            </div>

            <!--  -->

            <p class="experiencia">Minha expêriencia como <strong>designer</strong></p>

            <div class="card__grid">
                <p class="card__destaques">Destaques:</p>

                <div :class="'card ' + img.class" v-for="img in cardDesign" @click="upPopup($event, img.index)">
                    <img class="card__img" :src="`projetos/${img.path}`" loading="lazy">
                    <div class="card__description">
                        <div class="card__data">
                            <p> {{ img.obj[0] }}</p>
                            <p> {{ img.obj[1] }}</p>
                        </div>
                        <button class="card__btn">ver</button>
                    </div>
                </div>
            </div>

            <!--  -->

            <div class="container-table">
                <div class="table">
                    <p class="table_p">Habilidades em softwares de Design:</p>

                    <div class="table__content">
                        <div border-style></div>
                        <td border-style>
                            <p>Adobe Photoshop</p>
                        </td>
                        <td border-style>
                            <p>Adobe Ilustrator</p>
                        </td>
                        <td border-style>
                            <p>Figma</p>
                        </td>
                        <td border-style>
                            <p>Miro</p>
                        </td>
                        <td>
                            <p>Cinema 4D</p>
                        </td>
                    </div>
                </div>
                <figure class="figure__design">
                    <img class="img_design" :src="`inicio/${whitePlanets}/design.png`" alt="Design">
                </figure>
            </div>
        </section>

        <!-- FRONTEND -->

        <div id="programacao"></div>

        <section class="second-section section">
            <p class="experiencia">Minha experiência como <strong>desenvolvedor frontend</strong></p>
            <div class="card__grid">
                <p class="card__destaques">Destaques:</p>
                <div :class="'card ' + img.class" v-for="img in cardFront" data-sr-delay="100"
                    @click="upPopup($event, img.index, 'true')">

                    <img class="card__img" :src="'projetos/' + img.obj[0]">
                    <div class="card__description">
                        <div class="card__data">
                            <p> {{ img.obj[1] }}</p>
                            <p> {{ img.obj[2] }}</p>
                        </div>
                        <button class="card__btn">ver</button>
                    </div>
                </div>
            </div>

            <div class="container-front">
                <figure class="figure__front">
                    <img class="img_front" :src="`inicio/${whitePlanets}/frontend.png`" alt="Design" />
                </figure>
                <div class="table">
                    <p class="table_p">Experiências em frontend:</p>
                    <div class="table__content">
                        <div border-style></div>
                        <td border-style>
                            <p>CSS</p>
                        </td>
                        <td border-style>
                            <p>Javascript</p>
                        </td>
                        <td border-style>
                            <p>VueJs</p>
                        </td>
                        <td border-style>
                            <p>Firebase</p>
                        </td>
                        <td border-style>
                            <p>Element Plus</p>
                        </td>
                        <td border-style>
                            <p>Bootstrap</p>
                        </td>
                        <td>
                            <p>GitHub</p>
                            <div class="star table__star">
                            </div>
                        </td>
                    </div>
                </div>
            </div>
        </section>

        <!--  -->

        <router-link class="ver__container" to="/portfolio">

            <button class="ver--hover">Ver portfólio completo</button>
            <button class="ver">Ver portfólio completo</button>

        </router-link>

        <!-- FOOTER -->

        <footer class="sky" id="contato">

            <!-- Os céus proclamam a glória de Jesus -->

            <span v-if="booleanVideo">
                <video class="sky__background" src="inicio/sky/bluesky_2.mp4" autoplay loop muted />
                <div class="sky__shadows" id="shadow"></div>
            </span>
            <span style="display: flex; flex-direction: column; height: 100vh;" v-else>
                <img class="sky__background--white" src="inicio/white/footer.jpg" alt="sky">
                <div class="sky__shadows--white" id="shadow"></div>
            </span>

            <!-- Shadows -->

            <shadow-1></shadow-1>

            <!-- Infos -->

            <div class="sky__informacoes">

                <div class="informacoes__container">

                    <address class="informacoes__content">
                        <div class="contatos__column">
                            <a target="_blank" class="decoration" @click="copyText('(11) 96593-9822')">
                                <div class="informacoes__contato">
                                    <img :src="`icons/${whiteIcons}/whatsapp.svg`" alt="WhatsApp">
                                    <p class="contato__email">whatsapp</p>
                                </div>

                                <div class="decoration__info">(11) 96593-9822
                                </div>
                                <img class="decoration__copy" :src="`icons/${whiteIcons}/copy.svg`" alt="Copiar">
                            </a>

                            <a target="_blank" class="decoration" href="https://instagram.com/mateusduraes_">
                                <div class="informacoes__contato">
                                    <img :src="`icons/${whiteIcons}/instagram.svg`" alt="Instagram">
                                    <p class="contato__email">instagram</p>
                                </div>
                                <div class="decoration__info">@mateusduraes_</div>
                                <img class="decoration__copy" :src="`icons/${whiteIcons}/copy.svg`" alt="Copiar">
                            </a>
                        </div>

                        <div class="contatos__column">
                            <a target="_blank" class="decoration" @click="copyText('mateusduraessantos@gmail.com')">
                                <div class="informacoes__contato">
                                    <img :src="`icons/${whiteIcons}/gmail.svg`" alt="Email">
                                    <p class=" contato__email">e-mail</p>
                                </div>
                                <div class="decoration__info">
                                    mateusduraessantos@gmail.com
                                </div>
                                <img class="decoration__copy" :src="`icons/${whiteIcons}/copy.svg`" alt="Copiar">
                            </a>
                            <a target="_blank" class="decoration" href="https://www.behance.net/mateusduraes">
                                <div class="informacoes__contato">
                                    <img :src="`icons/${whiteIcons}/behance.svg`" alt="Email">
                                    <p class=" contato__email">behance</p>
                                </div>
                                <div class="decoration__info">
                                    Mateus Durães dos Santos
                                </div>
                                <img class="decoration__copy" :src="`icons/${whiteIcons}/copy.svg`" alt="Copiar">
                            </a>
                        </div>
                    </address>

                    <div id="observador__footer"
                        style="height: 200px; display: flex; align-items: flex-end; position: absolute; bottom: 0;">
                        <p class="frase">Quem disse que rodapés precisam ser chatos?
                            <br>
                            <br>
                        </p>
                    </div>
                </div>
            </div>

            <img class="sky__planet_01 sky__planet" :src="`inicio/${whitePlanets}/01.png`" alt="planet">
            <img class="sky__planet_02 sky__planet" :src="`inicio/${whitePlanets}/02.png`" alt="planet">
            <img class="sky__planet_03 sky__planet" :src="`inicio/${whitePlanets}/03.png`" alt="planet">
            <img class="sky__planet_05 sky__planet" :src="`inicio/${whitePlanets}/05.png`" alt="planet" id="planet_05">
            <img class="sky__planet_06 sky__planet" :src="`inicio/${whitePlanets}/06.png`" alt="planet">
            <img class="sky__planet_07 sky__planet" :src="`inicio/${whitePlanets}/07.png`" alt="planet">
            <img class="sky__planet_08 sky__planet" :src="`inicio/${whitePlanets}/08.png`" alt="planet">
            <img class="sky__planet_09 sky__planet" :src="`inicio/${whitePlanets}/09.png`" alt="planet">
            <img class="sky__planet_10 sky__planet" :src="`inicio/${whitePlanets}/10.png`" alt="planet">

            <div class="smile_cont sky__planet" id="planet_11">
                <img class="sky__planet_11 sky__planet" :src="`inicio/${whitePlanets}/11.png`" alt="planet">
                <img class="smile" :src="`inicio/${whitePlanets}/smile.svg`" alt="sorriso">
            </div>

            <img class="sky__planet_12 sky__planet" :src="`inicio/${whitePlanets}/12.png`" alt="planet" id="planet_12">
            <img class="sky__planet_13 sky__planet" :src="`inicio/${whitePlanets}/13.png`" alt="planet" id="planet_13">
            <img class="sky__planet_14 sky__planet" :src="`inicio/${whitePlanets}/14.png`" alt="planet" id="planet_14">
        </footer>

    </main>
</template>

<script>
import { imagens } from './destaque.js'
export default {
    name: 'Inicio',
    data() {
        return {
            whiteIcons: 'whiteicons',
            whitePlanets: 'sky',
            booleanVideo: true,
            cardDesign: [
                {
                    index: '0',
                    path: 'mesa/thumb.jpg',
                    obj: [
                        'Mesa gamer | Modelagem 3d',
                        '12/02/2023'
                    ],
                },
                {
                    index: '1',
                    path: 'butterfly/thumb.jpg',
                    obj: [
                        'Pingente Butterfly | Modelagem 3d',
                        '10/03/2022'
                    ],
                    class: 'second_el'
                },
                {
                    index: '2',
                    path: 'mun/thumb.jpg',
                    obj: [
                        'Mun | Arandela',
                        '24/06/2020'
                    ],
                    class: 'third_el'
                },
            ],
            cardFront: [
                {
                    index: '3',
                    obj: [
                        'tre/thumb.jpg',
                        'Mun | Arandela',
                        '24/06/2020'
                    ],
                    class: 'third_el'
                },
                {
                    index: '4',
                    obj: [
                        'teclakey/4.gif',
                        'TeclaKey | Website',
                        '10/03/2022'
                    ],
                    class: 'second_el'
                },
                {
                    index: '5',
                    obj: [
                        'datamachina/thumb.jpg',
                        'Data Machina | Website',
                        '12/02/2023'
                    ],
                },
            ],
            popup: false,
            loading: true,
            number: 0,
            imgs: imagens,
            indexImg: 0,
            isWhite: false,
        }
    },
    mounted() {
        console.clear()
        this.observador()
        if (!this.booleanTheme) {
            document.getElementById('main').setAttribute('class', 'whiteTheme')
            this.booleanVideo = false
            this.whiteIcons = 'blackicons'
        }
        if (this.booleanTheme != true) {
            this.ifWhiteOnChangePage()
        }

        // this.changePath()

    },
    props: {
        booleanTheme: Boolean
    },
    watch: {
        booleanTheme() {
            setTimeout(() => {
                this.booleanVideo = !this.booleanVideo
            }, 1000);

            if (this.isWhite == false) {
                setTimeout(() => {
                    this.blockClicked = 'blackicons'
                    this.whitePlanets = 'white'
                }, 1000);
            }
            else {
                setTimeout(() => {
                    this.blockClicked = 'whiteicons'
                    this.whitePlanets = 'sky'

                }, 1000);
            }
            this.isWhite = !this.isWhite

            /*  */

            if (this.booleanTheme) {
                setTimeout(() => {
                    document.getElementById('main').removeAttribute('class')
                    this.whiteIcons = 'whiteicons'
                    const whitePaths = [
                        'mesa/thumb.jpg',
                        'butterfly/thumb.jpg',
                        'mun/thumb.jpg',
                    ]
                    for (let i = 0; i < 3; i++) {
                        this.cardDesign[i].path = whitePaths[i]
                    }
                }, 1000);

            }
            else {
                setTimeout(() => {
                    document.getElementById('main').setAttribute('class', 'whiteTheme')
                    this.whiteIcons = 'blackicons'
                    const whitePaths = [
                        'mesa/6.jpg',
                        'butterfly/thumb1.jpg',
                        'mun/thumb-white-background.jpg',
                    ]
                    for (let i = 0; i < 3; i++) {
                        this.cardDesign[i].path = whitePaths[i]
                    }
                }, 1000);
            }

        }
    },
    methods: {
        changePath() {

        },
        ifWhiteOnChangePage() {
            this.blockClicked = 'blackicons'
            this.whitePlanets = 'white'
            this.isWhite = true
        },
        copyText(content) {
            const textToCopy = content; // Texto a ser copiado

            navigator.clipboard.writeText(textToCopy)
                .then(() => {
                    alert("Texto copiado: " + textToCopy);
                })
                .catch((error) => {
                    console.error("Erro ao copiar texto:", error);
                });
        },
        observador() {
            const observer = new IntersectionObserver(entries => {
                const showing = entries[0].isIntersecting

                if (entries[0].isIntersecting) {
                    this.$emit('nomeEvento', showing)
                }
                else {
                    this.$emit('nomeEvento', showing)
                }
            })

            observer.observe(document.getElementById('observador__footer'))
        },

        upPopup(event, index, front) {

            const clicked = event.target.classList[0]

            if (event.currentTarget.classList[0] == 'card') {
                this.popFront = Boolean(front)
                this.indexImg = index
                document.body.style.overflow = 'hidden'
                this.popup = !this.popup
            }
            else if (document.body.style.overflow == 'hidden' && clicked == 'popup__close' || clicked == 'popup__overflow' || clicked == 'container-button') {
                document.getElementById('img_portrato').style.opacity = 1
                document.body.style.overflow = ''
                this.popup = !this.popup
                this.loading = true
            }
            this.number = 0
        },
        loadingImg() {
            if (this.number == 0) {
                console.log(`length: ${this.imgs[this.indexImg].paths.length}`)
            }

            this.number = this.number + 1

            console.log(this.number)

            if (this.number == this.imgs[this.indexImg].paths.length) {
                document.getElementById('animation').classList.add('popup__animation')
                this.loading = false
                document.getElementById('img_portrato').style.opacity = 1
                this.number = 0
            }
        },
        changeProjectDesign(value) {
            console.clear('console limpo')

            this.indexImg == 1
            this.loading = true

            document.getElementById('img_portrato').setAttribute('style', 'opacity: 0')

            if (!this.popFront == true) {
                if (value == 'back') {
                    if (this.indexImg > 0) {
                        this.indexImg--
                    }
                    else {
                        this.indexImg = 2
                    }
                }
                if (value == 'next') {
                    if (this.indexImg < 2) {
                        this.indexImg++
                    }
                    else {
                        this.indexImg = 0
                    }
                }
            }
            else {
                if (value == 'back') {
                    if (this.indexImg > 3) {
                        this.indexImg--
                    }
                    else {
                        this.indexImg = 5
                    }
                }
                if (value == 'next') {
                    if (this.indexImg < 5) {
                        this.indexImg++
                    } else {
                        this.indexImg = 3
                    }
                }
            }
        },
    }
}
</script>

<style>
:root {
    --border-color: #2c2c2c;
    /* --shadow-color: black; */
    --shadow-color: black;
    --sky-scale: 0.9;
}

@media screen and (max-width: 1000px) {
    :root {
        --sky-scale: 1.4
    }

}
</style>

<style scoped>
.linkPadding {
    padding-top: 120px;
}

@keyframes loading {

    from {
        transform: rotate(0);
    }

    to {

        transform: rotate(360deg);
    }
}

/*  */
.section {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: auto;
    padding: 0 100px;
    gap: 3vw;
    position: relative;
    z-index: 1;
}

.second-section {
    margin-top: 200px;
    z-index: 1;
}

a {
    cursor: pointer;
    position: relative;
}

p {
    text-shadow: 3px 3px 7px rgba(0, 0, 0, 0.5);
}

/* Bubbles */

.bubble__container {
    position: absolute;
    top: 7vw;
    left: 0;
    z-index: 0;
}

.bubble {
    z-index: 1;
    display: flex;
    align-items: center;
    position: relative;
    width: 100vw;
    height: 550px;
}

.bubble img {
    width: 15vw;
}

.bubble__right {
    position: absolute;
    height: 100%;
    z-index: 0;
}

.bubble__right {
    right: 0;
}

/* Sobre */

.sobre {
    display: grid;
    grid-template-columns: 24vh 1fr 24vh;
    align-items: center;
    height: 100vh;
    min-height: 600px;
    position: relative;
    margin-bottom: 100px;
    gap: 4vw;
    background-image: url('../../public/inicio/sky/banner_sky.jpg');
    background-size: cover;
    background-repeat: no-repeat;
}

.sobre__description {
    width: 100%;
    margin: auto;
    z-index: 1;
}

.sobre__container {
    display: flex;
    flex-direction: column;
    font-size: 1.9rem;
}

.sobre__content {
    font-weight: 300;
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

.square__right,
.square__left {
    pointer-events: none;
    width: 100%;
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

/*  */

.container-table {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: 'null des des';
    align-items: center;
    gap: 24px;
    z-index: 1;
}

.figure__design {
    grid-area: des;
    width: 76%;
    margin: auto;
}

.img_design {
    width: 100%;
    object-fit: contain;
}

.table {
    display: flex;
    flex-direction: column;
    border-radius: 2vw;
    background-image: linear-gradient(#232323, #101010);
    width: 100%;
    height: max-content;
}

.table__content {
    display: flex;
    flex-direction: column;

}

.table_p {
    padding: 30px;
    padding-bottom: 16px;
}

td {
    position: relative;
    display: flex;
    align-items: center;
    padding: 0.8vw 3vw;
    padding-left: 2vw;
    min-height: 50px;
    width: 100%;
}

td p {
    font-size: 0.9rem;
}

.table__star {
    position: absolute;
    left: 12vw;
    display: flex;
    gap: 20px;
    height: 34%;
}

[border-style] {
    border-bottom: 1px solid var(--border-color);
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

.card__grid {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;
    width: 100%;
    margin: auto;
}

.card__destaques {
    position: absolute;
    top: -2.6vw;
    left: 1.6vw;
    font-weight: 300;
    color: rgb(172, 172, 172);
    z-index: 2;
}

.star {
    display: flex;
    gap: 9px;
}

.card {
    display: flex;
    justify-content: center;
    position: relative;
    height: 28vw;
    width: 100%;
    border-radius: 2vw;
    overflow: hidden;
    cursor: pointer;
}

.card:hover .card__img {
    transform: scale(1.04);
    transition: .3s;

}

.card__img {
    width: 100%;
    transition: .3s;
    object-fit: cover;
}

.card__description {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    border-radius: 10vw;
    bottom: 0.66vw;
    padding: 0.3vw;
    min-height: 52px;
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
    padding: 1vw 1.8vw;
    font-size: 0.8rem;
    min-height: 44px;
    transition: .3s
}

.card__btn:hover {
    background: rgba(255, 255, 255, 0.7);
    color: black;
    transition: .3s
}

.card__data {
    display: flex;
    flex-direction: column;
    padding: 0 0 0 1.6vw;
}

.card__data p {
    font-size: 0.7rem;
}

/* sky */

.sky {
    position: relative;
    height: 100vh;
    width: 100vw;
}

.sky__shadows,
.sky__shadows--white {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: .2s;
}

.sky__shadows {
    background-image: radial-gradient(transparent, transparent, var(--shadow-color), var(--shadow-color));
}

.sky__shadows--white {
    background-image: linear-gradient(white, transparent);
    height: 30vh;
}

.sky__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.sky__background--white {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.sky__informacoes {
    mix-blend-mode: difference;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 4;
}

.informacoes__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    margin: auto;
    width: calc(100% - 200px);
    padding: 40px 0;
}

.contatos__column {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6vw;
}

.decoration {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    width: max-content;
}

.decoration:hover .decoration__copy {
    opacity: 1;
    width: 2vw;
}

.decoration__copy {
    position: absolute;
    right: -2vw;
    opacity: 0;
    width: 0;
    transition: .2s;
}

.decoration__copy:hover {
    opacity: 0.6 !important;
    transition: .2s;
}

.decoration__info {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    text-align: center;
    gap: 1vw;
    padding: 1vw 1.4vw;
    bottom: -3.4vw;
    font-size: 0.8rem !important;
    opacity: 0;
    border-radius: 10vw;
    transition: .2s;
}

.decoration:hover .decoration__info {
    opacity: 1;
    transition: .2s;
}

.contato__email {
    padding-right: 10px;
}

.informacoes__contato {

    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    cursor: pointer;
    gap: 20px;
    font-size: 1.4rem;
}

.informacoes__contato img {

    width: 34px;
    margin-top: 3px;
}

.informacoes__content {
    display: flex;
    justify-content: center;
    gap: 4vw;
    width: max-content;
    margin: auto;
}

.frase {
    color: #9aa3b2;
    font-weight: 400;
    text-align: center;
}

.sky__planet {
    position: absolute;
    z-index: 2;
    animation-duration: 12s;
    animation-iteration-count: infinite;
}

.sky__planet_01 {
    width: 11%;
    left: 6%;
    top: 14%;
    animation-name: sky_04;
}

.sky__planet_02 {
    width: 13%;
    bottom: 4%;
    right: 32vw;
    animation-name: sky_01;
}

.sky__planet_03 {
    width: 16%;
    top: 6%;
    left: 28%;
    animation-name: sky_02;
}

.sky__planet_05 {
    top: 38%;
    right: 30%;
    width: 13%;
    animation-name: sky_02;
}

.sky__planet_06 {
    top: 50%;
    width: 24%;
    right: 10%;
    animation-name: sky_08;
}

.sky__planet_07 {
    width: 7.5%;
    top: 21%;
    right: 37%;
    animation-name: sky_11;
}

.sky__planet_08 {
    width: 15%;
    top: 17%;
    left: 30%;
    animation-name: sky_08;
}

.sky__planet_09 {
    animation-name: sky_01;
    top: 40%;
    left: 20%;
    width: 9%;
}

.sky__planet_10 {
    width: 17%;
    bottom: 18%;
    left: 26%;
    z-index: 3;
    animation-name: sky_04;
}

.smile_cont {
    position: absolute;
    left: 18%;
    bottom: 0;
    width: 22%;
    animation-name: sky_11;
}

.smile {
    position: absolute;
    right: 0;
    width: 34%;
    transform: translate(60%, -280%);
    z-index: 1;
}

.sky__planet_11 {
    width: 100%;
    z-index: 2;
    bottom: 4vh;
    animation-name: sky_11;
}

.sky__planet_12 {
    width: 28%;
    right: 10%;
    top: 0;
    z-index: 1;
    animation-name: sky_08;
}

.sky__planet_13 {
    left: 0;
    width: 15%;
    top: 30%;
    animation-name: sky_y;
}

.sky__planet_14 {
    width: 6%;
    right: 0;
    top: 35%;
    animation-name: sky_13;
}

/* Front end */

.container-front {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: 'img img';
    align-items: center;
    gap: 24px;
}

.figure__front {
    display: flex;
    grid-area: img;
}

.img_front {
    width: 70%;
    height: 70%;
    margin: auto;
    object-fit: contain;
    mix-blend-mode: screen;
    position: relative;
    z-index: 1;
}

.projeto {
    font-size: 1.6rem;
}

.ver__container {
    position: relative;
    text-decoration: none;
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 20vh;
    padding-bottom: 24vh;
}

.ver,
.ver--hover {
    position: absolute;
    display: flex;
    align-items: center;
    width: max-content;
    height: 5vw;
    max-height: 82px;
    min-height: 44px;
    border-radius: 10vw;
    padding: 14px 44px;
    font-size: 1rem;
    transition: .2s;
    color: white !important;
    margin: auto;
    border: none;
    z-index: 4;
}

.ver--hover {
    background: linear-gradient(-90deg, #034553, #1F234D);
}

.ver {
    background: linear-gradient(90deg, #034553, #1F234D);
}

.ver:hover {
    opacity: 0;

}


@keyframes sky_01 {
    0% {
        transform: scale(var(--sky-scale)) translate(0, 0);
    }

    20% {
        transform: scale(var(--sky-scale)) translate(0, 0);
    }

    45% {
        transform: scale(var(--sky-scale)) translate(-30px, -40px);
    }

    75% {
        transform: scale(var(--sky-scale)) translate(10px, -60px);
    }

    100% {
        transform: scale(var(--sky-scale)) translate(0, 0);
    }
}

@keyframes sky_02 {
    0% {
        transform: scale(var(--sky-scale)) translate(0, 0);
    }

    15% {
        transform: scale(var(--sky-scale)) translate(-60px, 0);
    }

    35% {
        transform: scale(var(--sky-scale)) translate(-60px, -20px);
    }

    75% {
        transform: scale(var(--sky-scale)) translate(-60px, 20px);
    }

    100% {
        transform: scale(var(--sky-scale)) translate(0, 0);

    }
}

@keyframes sky_04 {
    0% {
        transform: scale(var(--sky-scale)) translate(0, 0);
    }

    50% {
        transform: scale(var(--sky-scale)) translate(30px, 40px);
    }

    100% {
        transform: scale(var(--sky-scale)) translate(0, 0);

    }
}

@keyframes sky_08 {
    0% {
        transform: scale(var(--sky-scale)) translate(0, 0);
    }

    35% {
        transform: scale(var(--sky-scale)) translate(20px, 50px);
    }

    70% {
        transform: scale(var(--sky-scale)) translate(-35px, 60px);
    }

    100% {
        transform: scale(var(--sky-scale)) translate(0, 0);

    }
}

@keyframes sky_11 {
    0% {
        transform: scale(var(--sky-scale)) translate(0, 0);
    }

    50% {
        transform: scale(var(--sky-scale)) translate(20px, 0);
    }

    75% {
        transform: scale(var(--sky-scale)) translate(0px, -30px);
    }

    90% {
        transform: scale(var(--sky-scale)) translate(20px, 0);
    }

    100% {
        transform: scale(var(--sky-scale)) translate(0, 0);

    }
}

@keyframes sky_13 {
    0% {
        transform: scale(var(--sky-scale)) translatey(0);
    }

    10% {
        transform: scale(var(--sky-scale)) translatey(0);
    }

    35% {
        transform: scale(var(--sky-scale)) translatey(60px);
    }

    90% {
        transform: scale(var(--sky-scale)) translatey(0);
    }

    100% {
        transform: scale(var(--sky-scale)) translatey(0);
    }
}

@keyframes sky_y {
    0% {
        transform: translatey(0);
    }

    50% {
        transform: translatey(60px);
    }

    100% {
        transform: translatey(0);
    }
}

@media screen and (min-width: 1280px) {
    .decoration__info {
        font-size: 1rem;
    }

    .experiencia {
        padding: 0.8vw 1.4vw;
    }

    .table_p {
        padding: 2vw;
    }

    .informacoes__contato img {
        width: 2.2vw;
    }

    .informacoes__content {
        gap: 6vw;
    }

    .card__grid {
        gap: 0.6vw;
    }

}

@media screen and (max-width: 1000px) {
    .sobre {
        grid-template-columns: 100px 1fr 100px;
    }

    /* Sky */

    .informacoes__container {
        width: calc(100% - 100px);
    }

    .ultima__atualizacao {
        text-align: center;
        bottom: -60px;
    }

    @keyframes sky_01 {
        0% {
            transform: scale(var(--sky-scale)) translate(0, 0);
        }

        20% {
            transform: scale(var(--sky-scale)) translate(0, 0);
        }

        45% {
            transform: scale(var(--sky-scale)) translate(-30px, -40px);
        }

        75% {
            transform: scale(var(--sky-scale)) translate(10px, -60px);
        }

        100% {
            transform: scale(var(--sky-scale)) translate(0, 0);

        }
    }

    @keyframes sky_02 {
        0% {
            transform: scale(var(--sky-scale)) translate(0, 0);
        }

        15% {
            transform: scale(var(--sky-scale)) translate(-60px, 0);
        }

        35% {
            transform: scale(var(--sky-scale)) translate(-60px, -20px);
        }

        75% {
            transform: scale(var(--sky-scale)) translate(-60px, 20px);
        }

        100% {
            transform: scale(var(--sky-scale)) translate(0, 0);

        }
    }

    @keyframes sky_04 {
        0% {
            transform: scale(var(--sky-scale)) translate(0, 0);
        }

        50% {
            transform: scale(var(--sky-scale)) translate(30px, 40px);
        }

        100% {
            transform: scale(var(--sky-scale)) translate(0, 0);

        }
    }

    @keyframes sky_08 {
        0% {
            transform: scale(var(--sky-scale)) translate(0, 0);
        }

        35% {
            transform: scale(var(--sky-scale)) translate(20px, 50px);
        }

        70% {
            transform: scale(var(--sky-scale)) translate(-35px, 60px);
        }

        100% {
            transform: scale(var(--sky-scale)) translate(0, 0);

        }
    }

    @keyframes sky_11 {
        0% {
            transform: scale(var(--sky-scale)) translate(0, 0);
        }

        50% {
            transform: scale(var(--sky-scale)) translate(20px, 0);
        }

        75% {
            transform: scale(var(--sky-scale)) translate(0px, -30px);
        }

        90% {
            transform: scale(var(--sky-scale)) translate(20px, 0);
        }

        100% {
            transform: scale(var(--sky-scale)) translate(0, 0);

        }
    }

    @keyframes sky_13 {
        0% {
            transform: scale(var(--sky-scale)) translatey(0);
        }

        10% {
            transform: scale(var(--sky-scale)) translatey(0);
        }

        35% {
            transform: scale(var(--sky-scale)) translatey(60px);
        }

        90% {
            transform: scale(var(--sky-scale)) translatey(0);
        }

        100% {
            transform: scale(var(--sky-scale)) translatey(0);
        }
    }

    .informacoes__container {
        width: 90%;
    }

    .informacoes__content {
        gap: 20px;
    }

    .container-table {
        grid-template-columns: 1.3fr 1fr;
    }

    .container-front {
        grid-template-columns: 1fr 1.2fr;
        grid-template-areas: 'img';
    }
}


@media screen and (max-width: 1000px) {
    .card__description {
        display: none;
    }

    .section {
        padding: 0 10px;
    }

}

@media screen and (max-width: 850px) {

    /*  */

    .img_design,
    .img_front {
        display: none;
    }

    /*  */

    .contato {
        font-size: 1.4rem;
    }

    .table__star {
        left: 18vw;
    }

    .card__grid,
    section {
        gap: 8px;
    }

    .card {
        height: 34vw;
    }

    .informacoes__container {
        padding: 140px 0;
    }

    .informacoes__contato img {
        width: 30px;
    }

    .img_design {
        margin: 50px 0;
        margin-top: 100px;
    }

    .ola {
        font-size: 2rem;
        line-height: 2.2rem;
    }

    .card__data {
        padding-left: 20px;
    }

    .container-front,
    .container-table {
        display: flex;
        flex-direction: column;
    }

    /* Table */
    .table__star {
        left: auto;
        right: 24px;
    }

    td {
        padding-left: 20px;
    }

    .table_p {
        padding: 20px;
    }

    /* Mim */
    .mim {
        padding: 0;
        width: calc(100% - 20px);
        padding: 0 10px;
    }

    .sobre__content {
        font-size: 0.8rem;
    }

    .sobre__container {
        gap: 0;
    }

    .mim__nome {
        font-size: 1rem;
    }

    .projeto {
        font-size: 1rem;
    }

    /* Sobre mim */

    .sobre__container {
        line-height: 24px;
    }

    /* Footer */

    .informacoes__contato {
        font-size: 1rem;
    }

    .informacoes__container {
        width: 100%;
        gap: 0;
    }

    .informacoes__contato img {
        width: 30px;
    }

    /* sky */
    .ultima__atualizacao {
        left: initial;
        margin: auto;
        font-size: 0.6rem;
    }

    .contato {
        font-size: 1.1rem;
    }

    .frase {
        font-size: 0.8rem;
    }


    .informacoes__contato {
        gap: 6px;
    }
}

/* Mobile version */

@media only screen and (max-width: 500px) {

    .sobre {
        display: flex;
        justify-content: center;
        margin: 0;
    }

    .square__left,
    .square__right {
        display: none;
    }

    /*  */

    .grid {
        gap: 3px;
    }

    .decoration__info,
    .decoration__copy {
        display: none;
    }

    .sobre,
    .sky {
        width: calc(100% - 7px);
    }

    .sobre__description {

        width: calc(100% - 20px)
    }

}

/* White Theme */
/* White Theme */
/* White Theme */
/* White Theme */
/* White Theme */
/* White Theme */

main {
    transition: .2s;
}

.whiteTheme * {
    color: var(--text-color);
    text-shadow: none;
}

.whiteTheme {
    /* background: white; */
    transition: .2s;
}

.whiteTheme .experiencia {
    background: #E7E7E7;
    color: var(--text-color);
}

.whiteTheme .sobre {
    background-image: url('../../public/inicio/white/banner__white.jpg');
}

.whiteTheme .card__description {
    background-color: rgb(255 255 255 / 55%);
}

.whiteTheme .card__btn {
    background-color: rgb(255 255 255 / 70%);
    border-width: 2px;
    border-color: white;
}

.whiteTheme .table {
    background-image: linear-gradient(#F4F4F4, #E7E7E7);
}

.whiteTheme [border-style] {
    border-bottom: 1px solid #E2E2E2;
}

.whiteTheme .sky p {
    color: black;
}

.whiteTheme .sky__informacoes {
    mix-blend-mode: inherit;
}


.whiteTheme .ver {
    color: white;
}

.whiteTheme .frase {
    color: #a87c7c !important;
}

.whiteTheme .ver {
    background: linear-gradient(85deg, #FF6666, #CE7EFF);
}

.whiteTheme .ver--hover {
    position: absolute;
    background: linear-gradient(-85deg, #FF6666, #CE7EFF);
    color: white;
}
</style>

<style>
:root {
    --text-color: black;
}
</style>