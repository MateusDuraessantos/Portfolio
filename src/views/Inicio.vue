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
            <img src="square1.svg" class="square__left" alt="">
            <img src="square0.svg" class="square__right" alt="">
        </header>
        
        <!-- BACKGROUND -->
        <div class="background__parallax">
            <img class="parallax--img" id="parallax" :src="`inicio/${whiteImages}/background__parallax.jpg`" alt="">
        </div>
        
        <!-- POPUP -->
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
                <div class="popup__content" id="img_portrato">
                    <div class="link__grid">
                        <a :href="imgs[indexImg].link" target="_blank" v-if="imgs[indexImg].link" class="link__container">
                            Website online
                            <img class="link__img" src="external.svg" alt="Link para o webiste desse projeto">
                        </a>
                        <a :href="imgs[indexImg].github" target="_blank" v-if="imgs[indexImg].github"
                            class="link__container">
                            GitHub
                            <img class="link__img" src="github_logo.svg" alt="Link para o Github desse projeto">
                        </a>
                    </div>
                    <div class="description">
                        <h1 class="h1__popup">{{ imgs[indexImg].name }}</h1>
                    </div>
                    <div class="popup__container--mobile">
                        <div class="description">
                            <p>{{ imgs[indexImg].description }}</p>
                        </div>
                        <div class="popup__mobile">
                            <div class="popup__carrossel--count">
                                <p>{{ indexImg }}</p>/
                                <p>{{ imgs[indexImg].paths.length }}</p>

                            </div>
                            <div class="popup__carrossel">
                                <img class="popup__img" loading="lazy" v-for="coisas in imgs[indexImg].paths" :alt="coisas.alt" @load="loadingImg" :src="`projetos/${coisas.img}`">
                            </div>
                        </div>
                    </div>
                </div>
                <button class="popup__close">✕</button>
            </div>
        </div>

        <!-- BUBBLES -->
        <div class="bubble__container" id="bubbles__observer">
            <img class="bubble bubble__left" src="bubble1.svg" alt="">
            <div class="bubble bubble__right"></div>
        </div>
    
        <!-- PORTFÓLIO -->
        <section class="programacao section" id="portfolio">
            <div class="max__width">
                <p class="experiencia">Alguns trabalhos que fiz</p>
                <p class="card__destaques">Destaques:</p>
            </div>
            <div class="card__grid--mobile">
                <div class="card__grid"
                    @touchmove="moveTouch"
                    @touchstart="startCarrossel"
                    @touchend="endCarrossel"
                    style="transform: translateX(0vw)"
                >
                    <div
                        v-for="(img, index) in imgs"
                        :class="`card ${img.class} card-carrossel card-carrossel-id-${index}`"
                        :key="index"
                        @click="upPopup($event, index, 'true')"
                    >
                        <img v-if="img.thumb.default" class="card__img" loading="lazy" :src="`projetos/${img.thumb.default}`">
                        <img v-else class="card__img" loading="lazy" :src="`projetos/${img.thumb.white}-${whiteImages}.jpg`">
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

        <!-- FAÇA UM ORÇAMENTO -->
        <section class="max__width" id="facaumorcamento">
            <div class="orcamento">
                <h1>Serviços:</h1>
                <img :src="`inicio/${whiteImages}/colors.svg`" class="orcamento__colors" alt="">
                <img :src="`inicio/${whiteImages}/texts.svg`" class="orcamento__text" alt="">
                <img :src="`inicio/${whiteImages}/tools.svg`" class="orcamento__tools" alt="">
                <div class="orcamento__card--container">
                    <div :class="`orcamento__card ${cards.class}`" v-for="cards in cardsOrcamento">
                        <div>
                            <p><strong>{{ cards.title }}</strong></p>
                            <br>
                            <span>
                                <span v-for="infos in cards.card">
                                    <li>
                                        <div style="display: flex; flex-direction: column; gap: 2px;">
                                            <p><strong>{{ infos.oferta }}</strong></p>
                                            <p style="font-size: 14px;">{{ infos.beneficio }}</p>
                                        </div>
                                    </li>
                                </span>
                            </span>
                        </div>
                        <button href="#contato" class="orcamento__btn" @click="scrollDown('contato')">Contate-me</button>
                    </div>
                </div>
            </div>
        </section>
    
        <section class="mensagem">
            <h6>A arte imita a natureza.</h6>
        </section>

        <!-- SOBRE -->
        <section class="section sobre" id="sobre">
            <div class="max__width">
                <img src="inicio/black/red-planet.jpg" id="planets-red" loading="lazy" class="sobre__planet--1" alt="">
                <img src="inicio/black/earth.png" id="planets-earth" loading="lazy" class="sobre__planet--2" alt="">

                <div class="sobre__elements">
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
                        <p> 
                            Sou um designer graduado pela Universidade Presbiteriana Mackenzie, especializado em UX/UI. Com dois anos de experiência profissional, utilizando tecnologias como CSS, JavaScript e Vue.js. Atualmente, ocupo a posição de Desenvolvedor Frontend Júnior, mas estou em uma jornada contínua de aprendizado e desenvolvimento profissional expandindo minhas habilidades para abranger o desenvolvimento Full Stack, com foco no backend, para me tornar um profissional mais versátil e completo no campo do desenvolvimento web.
                        </p>
                        <img class="sobre__mateus" src="mateus.jpg">
                    </div>
                    <div style="display: flex; justify-content: center;">
                        <h4>Conhecimentos:</h4>
                    </div>
                    <div class="sobre__experiencia">
                        <div class="sobre__ctn" v-for="icons in experienciaIcons[0]">
                            <img class="sobre__icon" :src="`${icons.img}.png`" :alt="icons.alt">
                            <p>{{ icons.skill }}</p>
                        </div>
                    </div>
                    <div class="sobre__experiencia">
                        <div class="sobre__ctn" v-for="icons in experienciaIcons[1]">
                            <img class="sobre__icon" :src="`${icons.img}.png`" :alt="icons.alt">
                            <p>{{ icons.skill }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- FOOTER -->
        <footer class="sky" id="contato">
            <!-- Os céus proclamam a glória de Jesus -->
            <span class="sky__container" v-if="footerVisible">
                <video class="sky__background" src="inicio/black/bluesky_2.mp4" autoplay loop muted />
                <div class="sky__shadows" id="shadow"></div>
            </span>
            <span class="sky__container" v-else>
                <img class="sky__background--white" src="inicio/white/footer.jpg" alt="sky">
                <div class="sky__shadows--white" id="shadow"></div>
            </span>
            <!-- Infos -->
            <div class="sky__informacoes" style="backdrop-filter: blur(0px);">
                <div class="informacoes__container">
                    <address class="informacoes__content">
                        <div class="contatos__column">
                            <a target="_blank" class="decoration"
                                @mouseenter="blurIn('enter')"
                                @mouseleave="blurIn"
                                @click="copyText('(11) 96593-9822')"
                            >
                                <div class="informacoes__contato">
                                    <img :src="`icons/${whiteIcons}/whatsapp.svg`" alt="WhatsApp">
                                    <p class="contato__email">whatsapp</p>
                                </div>
                                <p class="decoration__info">(11) 96593-9822</p>
                                <img class="decoration__copy" :src="`icons/${whiteIcons}/copy.svg`" alt="Icone de copiar">
                            </a>
                            <a target="_blank" class="decoration" 
                                @mouseenter="blurIn('enter')"
                                @mouseleave="blurIn"
                                @click="copyText('mateusduraessantos@gmail.com')"
                            >
                                <div class="informacoes__contato">
                                    <img :src="`icons/${whiteIcons}/gmail.svg`" alt="Logo Email">
                                    <p class=" contato__email">e-mail</p>
                                </div>
                                <div class="decoration__info">
                                    mateusduraessantos@gmail.com
                                </div>
                                <img class="decoration__copy" :src="`icons/${whiteIcons}/copy.svg`" alt="Icone de copiar">
                            </a>
                            <a target="_blank" class="decoration"
                                @mouseenter="blurIn('enter')"
                                @mouseleave="blurIn"
                                href="https://www.behance.net/mateusduraes"
                            >
                                <div class="informacoes__contato">
                                    <img :src="`icons/${whiteIcons}/behance.svg`" alt="Logo Behance">
                                    <p class=" contato__email">behance</p>
                                </div>
                                <div class="decoration__info">
                                    Mateus Durães dos Santos
                                </div>
                                <img class="decoration__copy" :src="`icons/${whiteIcons}/link.svg`" alt="Icone de copiar">
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
            <img class="sky__planet_01 sky__planet" :src="`inicio/${whiteImages}/01.png`" alt="">
            <img class="sky__planet_02 sky__planet" :src="`inicio/${whiteImages}/02.png`" alt="">
            <img class="sky__planet_03 sky__planet" :src="`inicio/${whiteImages}/03.png`" alt="">
            <img class="sky__planet_05 sky__planet" :src="`inicio/${whiteImages}/05.png`" alt="" id="planet_05">
            <img class="sky__planet_06 sky__planet" :src="`inicio/${whiteImages}/06.png`" alt="">
            <img class="sky__planet_07 sky__planet" :src="`inicio/${whiteImages}/07.png`" alt="">
            <img class="sky__planet_08 sky__planet" :src="`inicio/${whiteImages}/08.png`" alt="">
            <img class="sky__planet_09 sky__planet" :src="`inicio/${whiteImages}/09.png`" alt="">
            <img class="sky__planet_10 sky__planet" :src="`inicio/${whiteImages}/10.png`" alt="">
            <div class="smile_cont sky__planet" id="planet_11">
                <img class="sky__planet_11 sky__planet" :src="`inicio/${whiteImages}/11.png`" alt="">
                <img class="smile" :src="`inicio/${whiteImages}/smile.svg`" alt="">
            </div>
            <img class="sky__planet_12 sky__planet" :src="`inicio/${whiteImages}/12.png`" alt="" id="planet_12">
            <img class="sky__planet_13 sky__planet" :src="`inicio/${whiteImages}/13.png`" alt="" id="planet_13">
            <img class="sky__planet_14 sky__planet" :src="`inicio/${whiteImages}/14.png`" alt="" id="planet_14">
        </footer>
    </div>
</template>

<script>
import { imagens } from './destaque.js'
import { ref, onMounted } from 'vue'
export default {
    setup(){
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
            const widthSum = inicialTransform.value + slideWidth * .26

           if(parseInt(slideWidth / slideHeight).toString() != 0 && blockBodyScroll.value == true || blockBodyScroll.value == 'justVerticalScrollAllowed') { // Se o scroll começou na horizontal, bloqueia o scroll da vertical e vise-versa
                document.querySelector('body').style.overflowY = 'hidden'
                widthSum <= 0 && element.style.transform.split('(')[1].split('vw)')[0] > imgs.length * 100 * -1 + 90 ? element.style.transform = `translateX(${widthSum}vw)` : null
                blockBodyScroll.value = 'justVerticalScrollAllowed'
            } else if(blockBodyScroll.value || blockBodyScroll.value == 'justHorizontalScrollAllowed') {
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
        onMounted(()=> {
            carrosselFocus('init')
        })

        const endCarrossel = (e) => {
            const element = document.querySelector('.card__grid')
            
            const arrastoCursor = 20 // Define quantos pixeis o touch tem que arrastado para mudar de imagem
            let widthScroll = Number(element.style.transform.split('(')[1].split('vw)')[0]) // Distancia que a imagem foi arrastada
            let stopScroll = widthScroll > imgs.length * 100 * -1 + 100 // Impede o scroll No final
            
            if(widthScroll && stopScroll) {
                if (initialClickX.value > e.changedTouches[0].clientX && initialClickX.value - e.changedTouches[0].clientX > arrastoCursor){
                positionInicial.value += -100
                carrosselFocus('right')
            }
            else if(initialClickX.value - e.changedTouches[0].clientX < -arrastoCursor) {
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

            if(e != 'avancar' && e != 'voltar'){
                initialClickY.value = Number(String(e.touches[0].clientY).split('.')[0])
                initialClickX.value = Number(String(e.touches[0].clientX).split('.')[0])
                inicialTransform.value = Number(document.querySelector('.card__grid').style.transform.split('vw')[0].split('translateX(')[1])
            }

            if (e == 'avancar') {
                less(carrosselSelected.value)
                carrosselSelected.value++
                more(carrosselSelected.value)
                document.querySelector('.card__grid').style.transform = `translateX(-${carrosselSelected.value}00vw)`
            } else if (e == 'voltar') {
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
    name: 'Inicio',
    props: {
        booleanTheme: Boolean
    },
    data() {
        return {
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
                        img:'tech0',
                        skill: 'Firebase',
                        alt: 'Logo Firebase'
                    },
                    {
                        img:'tech1',
                        skill: 'CSS',
                        alt: 'Logo CSS'
                    },
                    {
                        img:'tech2',
                        skill: 'HTML',
                        alt: 'Logo HTML'
                    },
                    {
                        img:'tech3',
                        skill: 'Javascript',
                        alt: 'Logo Javascript'
                    },
                    {
                        img:'tech4',
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
            popup: false,
            loading: true,
            number: 0,
            indexImg: 0,
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
        console.clear()
        this.observador()
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

        if(window.screen.availWidth > 1000) {
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
        blurIn(enter){
            clearTimeout(this.blurTimeout)
            const footer = document.querySelector('.sky__informacoes')
            let blur = Number(footer.style.backdropFilter.split('(')[1][0])
            let y = blur
            const addBlur = (increment) => {
                footer.setAttribute('style', `backdrop-filter: blur(${y}px)`);
                y += increment
                if ((increment === 1 && y < 10) || (increment === -1 && y >= 0)) {
                    clearTimeout(this.blurTimeout)
                    this.blurTimeout = setTimeout(() => addBlur(increment), 20);
                }
            }
            addBlur(enter == 'enter' ? 1 : -1)
        },
        observador() { // Altear o estilo do header ao chegar no footer
            const observer = new IntersectionObserver(entries => {
                this.$emit('nomeEvento', entries[0].isIntersecting)
            })
            observer.observe(document.getElementById('observador__footer'))
        },
        upPopup(event, index) {
            const elementos = ['popup__close', 'popup__overflow', 'container-button', 'card']
            if(this.blockTimer){
                const clicked = event.target.classList[0]
                elementos.forEach(obj => {
                    if (event.currentTarget.classList[0] == obj) {
                        this.indexImg = index
                        document.body.style.overflow = 'hidden'
                        this.popup = !this.popup
                    } else if(document.body.style.overflow == 'hidden' && clicked == obj){
                        this.blockTimer = false
                        document.querySelector('#img_portrato').classList.add('popup__close--animation-opacity')
                        document.querySelector('.popup__background') .classList.add('popup__close--animation-blur')
                        setTimeout(() => {
                            document.body.style.overflow = ''
                            this.popup = !this.popup
                            this.loading = true
                            document.querySelector('.popup__background').classList.remove('popup__close--animation-blur')
                            document.querySelector('#img_portrato').classList.remove('popup__close--animation-opacity')
                            this.blockTimer = true
                        }, 1000);
                    }
                }
            )}
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
            clearTimeout(this.removeTimer)
            this.loading = true
            const img_portrato = document.getElementById('img_portrato')
            img_portrato.setAttribute('style', 'opacity: 0')
            if (value == 'back') {
                if (this.indexImg > 0) {
                    this.indexImg--
                } else {
                    this.indexImg = imagens.length - 1
                }
            }
            if (value == 'next') {
                if (this.indexImg < imagens.length - 1) {
                    this.indexImg++
                } else {
                    this.indexImg = 0
                }
            }
            img_portrato.classList.add('popup__animation')
            this.removeTimer = setTimeout(() => {
                img_portrato.classList.remove('popup__animation')
            }, 1000);
            img_portrato.setAttribute('style', 'opacity: 1')
        },
    }
}
</script>

<style>
:root {
    --border-color: #2c2c2c;
    --shadow-color: black;
    --sky-scale: 0.9;
    --text-color: black;
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
    /* overflow-x: hidden; */
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
    align-items:  flex-start;
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

.mensagem h6 {
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
    font-size: 1rem;
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
    .orcamento__card--2, .orcamento__card--3 {
        margin-top: 0;
    }
    
    .orcamento__card {
        height: 100%;
    }

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

.card:hover .card__description{
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

/* Carrossel */

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
    background: white;
    border-radius: 50%;
    width: 6px;
    height: 6px;
}

.carrossel__current--gray {
    background: gray;
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

/* sky */

.sky {
    position: relative;
    height: 100vh;
    width: 100vw;
    z-index: 2;
}

.sky::after {
    position: absolute;
    content: '';
    top: 0;
    width: 100vw;
    height: 200px;
    z-index: 2;
}

.sky::before {
    position: absolute;
    content: '';
    bottom: 100%;
    width: 100vw;
    height: 200px;
    z-index: 2;
    background-image: linear-gradient(transparent, black);
}
.whiteTheme .sky::before {
    background-image: linear-gradient(transparent, rgb(232, 222, 222));
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
}

.decoration__copy {
    position: absolute;
    right: -28px;
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
    bottom: -40px;
    height: 40px;
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
    font-size: 20px;
}

.informacoes__contato {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    cursor: pointer;
    gap: 20px;
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

    .max__width {
        width: calc(100% - 100px);
    }
}

@media screen and (max-width: 1000px) {
    
    .max__width {
        width: calc(100% - 50px);
    }
    
    .parallax--img {
        transform: translate(-400px, 1400px);
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
    /*  */
    .experiencia {
        padding: 8px 18px;
    }
    
    /* Sky */

    .informacoes__container {
        width: calc(100% - 100px);
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

    .card__description {
        display: none;
    }

    /* Orçamento */

    .orcamento__card--container {
        display: flex;
        flex-direction: column;
    }

    /* Orcamentos */

    .contatos__column, .sobre__container {
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

    .img_front, .orcamento__tools {
        display: none;
    }


    /*  */

    .informacoes__container {
        padding: 140px 0;
    }

    .informacoes__contato img {
        width: 30px;
    }

    .card__data {
        padding-left: 20px;
    }

    .container-front,
    .container-table {
        display: flex;
        flex-direction: column;
    }

    /* Mim */

    .inicio__container {
        gap: 12px;
        line-height: 24px;
    }

    .mim__nome, .mim__ola {
        font-size: 1.2rem;
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

    .frase {
        font-size: 0.8rem;
    }

    .informacoes__contato {
        gap: 6px;
    }

    /* CARD MOBILE */

    .grid-area-height, .card__img, .card__grid {
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

    /*  */
    .carrossel {
        display: flex;
    }

}

/* Mobile version */

@media only screen and (max-width: 500px) {

    .inicio {
        display: flex;
        justify-content: center;
        margin: 0;
    }

    /*  */

    .decoration__info,
    .decoration__copy {
        display: none;
    }

    .sky {
        width: calc(100% - 7px);
    }

    .orcamento__text {
        height: 30px;
        bottom: -15px;
    }
    
    
}

@media only screen and (max-width: 400px) {

    .max__width {
        width: calc(100% - 10px);
    }

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
    }
    .orcamento__card {
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

.whiteTheme .experiencia {
    background: #E7E7E7;
    color: var(--text-color);
}

.whiteTheme .inicio {
    background-image: url('../../public/inicio/white/banner__white.jpg');
}

.card__data p, .card__btn{
    color: var(--creme) !important;
}

.whiteTheme .sky__informacoes {
    mix-blend-mode: inherit;
}

.whiteTheme .frase {
    color: #a87c7c !important;
}

.section__sobre {
    z-index: 222;
    min-height: 84vh;
    width: 100%;
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

.background__sun {
    position: relative;
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
</style>