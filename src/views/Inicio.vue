<template>
    <main id="main">
        <!-- BACKGROUND -->
        <div class="background__parallax" id="parallax" style="top: 0;">
            <img class="parallax--img--black"
                :src="`inicio/${whitePlanets}/background__parallax.jpg`">
            <img class="parallax--img--white"
                src="https://images.unsplash.com/photo-1553882951-9c3dab4a50cb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
            </div>
        <!-- Popup -->
        <div class="popup__background" v-if="popup" @click="upPopup">
            <div class="popup__overflow" id="animation">
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
                    <div class="link__grid">
                        <a :href="imgs[indexImg].link" target="_blank" v-if="imgs[indexImg].link" class="link__container">
                            Website online
                            <img class="link__img" src="external.svg">
                        </a>
                        <a :href="imgs[indexImg].github" target="_blank" v-if="imgs[indexImg].github"
                            class="link__container">
                            GitHub
                            <img class="link__img" src="github_logo.svg">
                        </a>
                    </div>
                    <div class="description">
                        <h1 class="h1__popup">{{ imgs[indexImg].name }}</h1>
                        <br>
                        <p style="font-size: 0.8rem;">{{ imgs[indexImg].description }}</p>
                    </div>
                    <img class="popup__img" v-for="coisas in imgs[indexImg].paths" @load="loadingImg" :src="coisas">
                </div>

                <button class="popup__close">✕</button>
            </div>
        </div>

        <!-- Inicio -->

        <div class="inicio">
            <div class="max__width" id="inicio">
                <p style="position: absolute; width: 100%; text-align: center; bottom: 1vw; font-size: 1rem; color: rgb(105, 110, 128); font-weight: 300;">
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
                    <div class="inicio__content">
                        <p>Eu trabalho para oferecer bons websites com programação e design.</p>
                    </div>
                </div>
            </div>
            <img src="square1.svg" class="square__left">
            <img src="square0.svg" class="square__right">
        </div>

        <!-- BUBBLES -->

        <div class="bubble__container" id="bubbles__observer">
            <img class="bubble bubble__left" src="bubble1.svg">
            <div class="bubble bubble__right"></div>
        </div>
        
        <!-- PORTFÓLIO -->

        <section class="programacao section" id="portfolio">
            <div class="max__width">
                <p class="experiencia">Alguns trabalhos que fiz</p>
                <p class="card__destaques">Destaques:</p>
                <div class="card__grid">
                    <div :class="'card ' + img.class + ' ' + img.classGrid" v-for="img in cardFront" data-sr-delay="100"
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
            </div>
        </section>

        <!-- FAÇA UM ORÇAMENTO -->

        <section class="max__width" id="facaumorcamento">
            <div class="orcamento">
                <h1>Websites personalizados de acordo com o seu gosto</h1>
                <br><br>

                <img :src="`inicio/${whitePlanets}/colors.svg`" class="orcamento__colors">
                <img :src="`inicio/${whitePlanets}/texts.svg`" class="orcamento__text">
                <img :src="`inicio/${whitePlanets}/tools.svg`" class="orcamento__tools">

                <div class="orcamento__card--container">


                    <div :class="`orcamento__card ${cards.class}`" v-for="cards in cardsOrcamento">
                        <p><strong>{{ cards.title }}</strong></p>
                        <span>
                            <span v-for="infos in cards.card">
                                <li>
                                    <div style="display: flex; flex-direction: column; gap: 2px;">
                                        <p><strong>{{ infos.oferta }}</strong></p>
                                        <p style="font-size: 14px;">{{ infos.beneficio }}</p>
                                    </div>
                                    
                                    <div class="orcamento__icons">
                                        <img src="icons/blackicons/check.svg">
                                    </div>
                                </li>
                            </span>
                        </span>
                        <button href="#contato" class="orcamento__btn" @click="scrollDown($event, 'contato')">Contate-me</button>
                    </div>
                    
                 
                </div>
            </div>
        </section>
        

        <section class="mensagem">
            <h6 id="mensagem">A arte imita a natureza.</h6>
        </section>

        <!-- SOBRE -->

        <section class="section sobre" id="sobre">
            <div class="max__width">
                <div class="sobre__container">
                    <div class="sobre__redes">
                        <a  href="https://www.behance.net/mateusduraes" target="_blank">
                            <img class="sobre__icon--redes" :src="`icons/${whiteIcons}/behance__fill.svg`" alt="logo Behance">
                        </a>
                        <a href="https://github.com/MateusDuraessantos" target="_blank">
                            <img class="sobre__icon--redes" :src="`icons/${whiteIcons}/github__fill.svg`" alt="logo Github">
                        </a>
                        <a  href="https://www.linkedin.com/in/mateus-dur%C3%A3es-dos-santos/" target="_blank">
                            <img class="sobre__icon--redes" :src="`icons/${whiteIcons}/linkedin.svg`" alt="logo Linkedin">
                        </a>
                    </div>
                    <p> Sou um designer graduado pela Universidade Presbiteriana Mackenzie, especializado em UX/UI. Com dois anos de experiência profissional, utilizando tecnologias como CSS, JavaScript e Vue.js. Atualmente, ocupo a posição de Desenvolvedor Frontend Júnior, mas estou em uma jornada contínua de aprendizado e desenvolvimento profissional expandindo minhas habilidades para abranger o desenvolvimento Full Stack, com foco no backend, para me tornar um profissional mais versátil e completo no campo do desenvolvimento web.</p>
                    <img class="sobre__mateus" src="mateus.jpg">
                </div>
                
                <br>
                <div style="display: flex; justify-content: center;">
                    <p>Experiência:</p>
                    <br><br><br>
                </div>

                <div class="sobre__experiencia">
                    <div class="sobre__ctn" v-for="icons in experienciaIcons" style="text-align: center; width: 124px;">
                        <img class="sobre__icon--redes" :src="`${icons[0]}.png`">
                        <p>{{ icons[1] }}</p>
                    </div>
                </div>
            </div>
        </section>

    </main>
    <!-- FOOTER -->
    <footer class="sky" id="contato">
        <!-- Os céus proclamam a glória de Jesus -->
        <span class="sky__container" v-if="footerVisible">
            <video class="sky__background" src="inicio/sky/bluesky_2.mp4" autoplay loop muted />
            <div class="sky__shadows" id="shadow"></div>
        </span>
        <span class="sky__container" v-else>
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

                            <p class="decoration__info">(11) 96593-9822</p>
                            <img class="decoration__copy" :src="`icons/${whiteIcons}/copy.svg`" alt="Copiar">
                        </a>

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
                            <img class="decoration__copy" :src="`icons/${whiteIcons}/link.svg`" alt="Copiar">
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
</template>

<script>
import { imagens } from './destaque.js'
export default {
    name: 'Inicio',
    props: {
        booleanTheme: Boolean
    },
    data() {
        return {
            whiteIcons: 'whiteicons',
            whitePlanets: 'sky',
            experienciaIcons: [
                ['software0', 'Illustrator'],
                ['software1', 'cinema 4D'],
                ['software2', 'Photoshop'],
                ['software3', 'Miro'],
                ['software4', 'Figma'],
                ['tech0', 'Firebase'],
                ['tech1', 'CSS'],
                ['tech2', 'HTML'],
                ['tech3', 'Javascript'],
                ['tech4', 'Vue JS'],
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
                    path: 'butterfly/3.jpg',
                    obj: [
                        'Pingente Butterfly | Modelagem 3d',
                        '10/03/2022'
                    ],
                    classGrid: 'gridGrid',
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
                        'teclakey/teclakey.jpg',
                        'TeclaKey | Website',
                        '10/03/2022'
                    ],
                    class: 'second_el',
                    classGrid: 'gridGrid',
                },
                {
                    index: '5',
                    obj: [
                        'datamachina/thumb.jpg',
                        'Data Machina | Website',
                        '12/02/2023'
                    ],
                },
                {
                    index: '5',
                    obj: [
                        'tcc/webiste_mackenzie_curso_de_design.jpg',
                        'Curso de Design Mackenzie',
                        '12/02/2023'
                    ],
                },
            ],
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
            popup: false,
            loading: true,
            number: 0,
            imgs: imagens,
            indexImg: 0,
            footerVisible: true,
            saldacao: null,
        }
    },
    watch: {
        booleanTheme() {
            this.changeImagens(1000)
        }
    },
    mounted() {
        this.observador()
        this.keepWhiteOnReload(0)
        this.changeImagens(0)
        this.haveAGoodDay()

        const scrolling = [ //elementos que serão ativados
            { obj: 'parallax', value: 0.4, position: 900 },
            { obj: 'bubbles__observer', value: 0.4, position: 1200 },
            { obj: 'mensagem', value: 0.3, position: -500 },
        ]

        const parallaxScroll = (element) => document.getElementById(element.obj).style.top = `${window.scrollY * element.value + element.position}px`

        scrolling.forEach(element => {
            parallaxScroll(element) // Define o valor inicia de acordo com o scroll inicial
            window.addEventListener('scroll', () => {
                parallaxScroll(element)
            })
        });
    },
    methods: {
        scrollDown(event, ancora) {
            setTimeout(() => {
                const obj = document.getElementById(ancora)
                    window.scrollTo({
                        top: obj.offsetTop,
                        behavior: 'smooth'
                })
            }, 50)
        },
        haveAGoodDay() {
            const date = new Date().getHours()

            if (date >= 0 && date < 5) {
                this.saldacao = 'Olá,'
            }
            else if (date >= 5 && date < 12) {
                this.saldacao = 'Bom dia!'
            }
            else if (date >= 12 && date < 18) {
                this.saldacao = 'Boa tarde!'
            }
            else {
                this.saldacao = 'Boa noite!'
            }
        },
        changeImagens(timer) {
            if (this.booleanTheme == true) {
                setTimeout(() => {
                    this.blockClicked = 'blackicons'
                    this.whitePlanets = 'white'
                    this.footerVisible = false
                }, timer);
            }
            else {
                setTimeout(() => {
                    this.blockClicked = 'whiteicons'
                    this.whitePlanets = 'sky'
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
                }
                else {
                    document.getElementById('main').removeAttribute('class')
                    this.whiteIcons = 'whiteicons'
                }
            }, timer);
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
            this.number = this.number + 1
            if (this.number == this.imgs[this.indexImg].paths.length) {
                document.getElementById('animation').classList.add('popup__animation')
                this.loading = false
                document.getElementById('img_portrato').style.opacity = 1
                this.number = 0
            }
        },
        changeProjectDesign(value) {
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
                    }
                    else {
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
    --shadow-color: black;
    --sky-scale: 0.9;
}

@media screen and (max-width: 1000px) {
    :root {
        --sky-scale: 1.4
    }
}

@media screen and (max-height: 800px) {
    :root {
        --sky-scale: 1
    }
}

.max__width {
    position: relative;
    max-width: 1300px;
    width: calc(100% - 200px);
    margin: auto;
}

.background__parallax {
    position: absolute;
    display: flex;
    align-items: flex-end;
    left: 0;
    width: 100%;
    /* padding-bottom: 400px; */
}

.parallax--img--black {
    filter: blur(4px);
}

.parallax--img--black,
.parallax--img--white {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.parallax--img--white {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.whiteTheme .parallax--img--black,
.parallax--img--white {
    display: none;
}

.whiteTheme .parallax--img--white {
    display: block !important;
}

/* Mensagem */

.mensagem {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 800px;
}

.mensagem h6 {
    position: absolute;
    top: 0;
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5);
}

.whiteTheme .mensagem h6 {
    text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5);
    color: #ffdddd;
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

.programacao {
    position: relative;
    z-index: 1;
    padding-top: 120px;
    margin-bottom: 300px
}

a {
    cursor: pointer;
    position: relative;
}

p {
    text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5);
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
    background-image: url('../../public/inicio/sky/lua.png');
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
    top: 25px;
    left: 30px;
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
    background: #00A3FF;
    font-size: 16px;
    border: none;
    border-radius: 6px;
    padding: 4px 10px;
    color: white !important;
    transition: .2s
}
.orcamento__btn:hover {
    background: #067ec4;
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
    gap: 20px;
    background: white;
    border-radius: 26px;
    padding: 30px;
    width: 100%;
    height: max-content;
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

.orcamento__card p {
    align-self: flex-start;
}
.orcamento__card p, .orcamento__card strong {
    text-shadow: none;
}

.orcamento__card li {
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

.orcamento__card li::before {
    position: absolute;
    content: '';
    top: 10px;
    left: -20px;
    height: 6px;
    width: 6px;
    border-radius: 50%;
    background: black;
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

.sobre  {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 200px 0 100px 0;
    margin-top: 300px;
}

.sobre__container {
    max-width: 1000px;
    margin: auto;
    display: flex;
    gap: 40px;
    border-radius: 36px;
    padding: 40px;
    margin-bottom: 60px;
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 4px 4px 24px rgba(0, 0, 0, 0.2);
}

.whiteTheme .sobre__container {
    color: black;
}

.sobre__mateus {
    height: 200px;
    border-radius: 20px;
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
    filter: grayscale(1);
    transition: 5s;
}

.sobre__ctn:hover .sobre__icon--redes {
    transition: 0s;
    filter: grayscale(0);
}

.sobre__experiencia {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
    width: calc(100% - 100px);
    margin: auto;
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
    background-image: url('../../public/inicio/sky/banner_sky.jpg');
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

.section__sobre {
    display: flex;
    align-items: center;
    background-size: cover;
    background-repeat: no-repeat;
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
    height: 100%;
    grid-area: table;
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
    grid-template-areas:
        '. gridGrid .'
        'table gridGrid .';
    gap: 24px;
    width: 100%;
    margin: auto;
}

.gridGrid {
    grid-area: gridGrid;
}

.card__destaques {
    display: flex;
    align-items: center;
    font-weight: 300;
    height: 60px;
    padding-left: 12px;
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
    width: 100%;
    border-radius: 28px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 6px 6px 14px rgba(0, 0, 0, 0.2);
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
    margin-top: 200px;

}

.whiteTheme .sky::after {
    background-image: linear-gradient(transparent, #E9DFDF);
}

.sky__container {
    display: flex;
    flex-direction: column;
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
    background-image: linear-gradient(#E9DFDF, transparent);
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
    height: 100vh;
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
    position: relative;
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
    align-items: center;
    gap: 100px;
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
    opacity: 0;
    border-radius: 10vw;
    transition: .2s;
    font-size: 18px;
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
    bottom: 35%;
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
    bottom: 30%;
    animation-name: sky_y;
}

.sky__planet_14 {
    width: 6%;
    right: 0;
    bottom: 45%;
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
    height: 46px;
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

@media screen and (max-width: 1000px) {
    .inicio {
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
}

@media screen and (max-width: 850px) {

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

    .card__grid {
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

    .inicio__container {
        gap: 0;
        line-height: 24px;
    }

    .mim__nome {
        font-size: 1rem;
    }

    .projeto {
        font-size: 1rem;
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

    .inicio {
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

    .inicio,
    .sky {
        width: calc(100% - 7px);
    }

    .inicio__description {

        width: calc(100% - 20px)
    }

}

/* White Theme */

main {
    position: relative;
    transition: .2s;
    overflow: hidden;
}

.whiteTheme * {
    color: var(--text-color);
    text-shadow: none;
}

.whiteTheme {
    transition: .2s;
}

.whiteTheme .experiencia {
    background: #E7E7E7;
    color: var(--text-color);
}

.whiteTheme .inicio {
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

.section__sobre {
    z-index: 222;
    min-height: 84vh;
    width: 100%;
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

.background__sun {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 300vh;
    width: 100%;
    color: wheat;
    background-image: url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2111&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    background-size: cover;
    background-position: center;
}

.whiteTheme .section__sobre {
    position: relative;
    background-image: url('https://images.unsplash.com/photo-1553882951-9c3dab4a50cb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    background-position: top;
    background-size: cover;
}

.whiteTheme .section__sobre::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 260px;
    bottom: -6px;
    background-image: linear-gradient(transparent, #789dc7);
    transform: translateY(-1px);
}

.whiteTheme .background__sun {
    background-image: none;
}

.whiteTheme .background__sun__h4 {
    color: white;
}</style>

<style>:root {
    --text-color: black;
}</style>