<template>
    <main class="">

        <!-- Popup -->
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
                    <img class="popup__img" v-for="coisas in imgs[indexImg].paths" @load="loadingImg" :src="coisas"
                        loading="lazy">
                </div>

                <button class="popup__close">✕</button>
            </div>
        </div>

        <!-- Banner -->

        <section class="section banner">
            <padding></padding>
            <div class="banner__ola">
                Olá!
                <p>aqui vou apresentar alguns dos meus trabalhos.</p>
            </div>

            <!-- <img class="banner__img" src="inicio/sky/banner_sky.jpg" alt="Universe"> -->
            <div class="banner__shadow"></div>
            <video class="banner__img" src="inicio/sky/banner.mp4" muted loop autoplay></video>


        </section>

        <!-- Bubbles -->

        <div class="bubble__container" id="bubbles__observer">
            <div class="bubble" id="bubble">
                <img src="bubble1.svg">
                <img src="bubble0.svg" class="right">
            </div>
        </div>

        <div class="linkPadding" id="design"></div>
        <section class="section">
            <p class="experiencia">Minha expêriencia como <strong>designer</strong></p>

            <div class="card__grid">
                <p class="card__destaques">Destaques:</p>

                <div :class="'card ' + img.class" v-for="img in cardDesign" @click="upPopup($event, img.index)">
                    <img class="card__img" :src="'projetos/' + img.obj[0]" loading="lazy">
                    <div class="card__description">
                        <div class="card__data">
                            <p> {{ img.obj[1] }}</p>
                            <p> {{ img.obj[2] }}</p>
                        </div>
                        <button class="card__btn">ver</button>
                    </div>
                </div>
            </div>

            <!--  -->

            <div class="container-table">
                <div class="table">
                    <p class="table_p">Habilidades em softwares:</p>

                    <div class="table__content">
                        <td border-style>
                            <p>Design</p>
                        </td>
                        <td border-style>
                            <p>Photoshop</p>
                            <img class="table__star" src="cinco_estrelas.svg" alt="Conhecimento avançado" />
                        </td>
                        <td border-style>
                            <p>Ilustrator</p>
                            <img class="table__star" src="cinco_estrelas.svg" alt="Conhecimento avançado" />
                        </td>
                        <td border-style>
                            <p>Figma</p>
                            <div class="star table__star"><img v-for="star in 4" src="uma_estrelas.svg"
                                    alt="Conhecimento avançado">
                                <img src="meia_estrelas.svg" alt="Conhecimento avançado">
                            </div>
                        </td>
                        <td border-style>
                            <p>Miro</p>
                            <img class="table__star" src="cinco_estrelas.svg" alt="Conhecimento ançado" />
                        </td>
                        <td>
                            <p>Cinema 4D</p>
                            <div class="star table__star"><img v-for="star in 4" src="uma_estrelas.svg"
                                    alt="Conhecimento avançado">
                                <img src="vazia_estrelas.svg" alt="Conhecimento avançado">
                            </div>
                        </td>
                    </div>
                </div>
                <figure class="figure__design">
                    <img class="img_design" src="banner.png" alt="Design">
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
                    <img class="img_front" src="frontend.png" alt="Design" />
                </figure>
                <div class="table">
                    <p class="table_p">Habilidades em códigos frontend</p>
                    <div class="table__content">
                        <td border-style>
                            <p>Frontend</p>
                        </td>
                        <td border-style>
                            <p>HTML</p>
                            <img class="table__star" src="cinco_estrelas.svg" alt="Conhecimento avançado" />
                        </td>
                        <td border-style>
                            <p>CSS</p>
                            <img class="table__star" src="cinco_estrelas.svg" alt="Conhecimento avançado" />
                        </td>
                        <td border-style>
                            <p>Javascript</p>
                            <div class="star table__star"><img v-for="star in 3" src="uma_estrelas.svg"
                                    alt="Conhecimento avançado">
                                <img src="meia_estrelas.svg" alt="Conhecimento avançado">
                                <img src="vazia_estrelas.svg" alt="Conhecimento avançado">
                            </div>
                        </td>

                        <td border-style>
                            <p>VueJs</p>
                            <div class="star table__star"><img v-for="star in 3" src="uma_estrelas.svg"
                                    alt="Conhecimento avançado">
                                <img src="meia_estrelas.svg" alt="Conhecimento avançado">
                                <img src="vazia_estrelas.svg" alt="Conhecimento avançado">
                            </div>
                        </td>
                        <td border-style>
                            <p>Firebase</p>
                            <div class="star table__star"><img v-for="star in 4" src="uma_estrelas.svg"
                                    alt="Conhecimento avançado">
                                <img src="vazia_estrelas.svg" alt="Conhecimento avançado">
                            </div>
                        </td>
                        <td>
                            <p>GitHub</p>
                            <div class="star table__star"><img v-for="star in 4" src="uma_estrelas.svg"
                                    alt="Conhecimento avançado">
                                <img src="vazia_estrelas.svg" alt="Conhecimento avançado">
                            </div>
                        </td>
                    </div>
                </div>
            </div>
        </section>

        <!-- SOBRE MIM -->

        <section class="sobre" id="sobre">

            <div class="square" id="square">
                <img src="square1.svg">
                <img src="square0.svg" class="right">
            </div>

            <div style="margin-top: 26px; display: flex;
            flex-direction: column;">
                <div class="mim">
                    <div class="mim__container">
                        <p class="mim__ola">Olá,</p>
                        <h2 class="mim__nome">Meu nome é Mateus Durães dos Santos,</h2>
                        <p class="projeto">Eu projeto coisas.</p>
                    </div>
                    <br>
                    <br>
                    <p class="mim__description">
                        Tenho 22 anos, atualmente, cursando o 8° semestre de design na Universidade Presbiteriana Mackenzie.
                        Já trabalho na área de webdesigner e desenvolvedor frontend a cerca de 2 anos, atualmente exercendo
                        a profissão na empresa Data Machina.
                        <br>
                        <br>
                        Tenho uma boa experiência com softwares de edição de imagem e criação de objetos 3D para criação de
                        renders.
                        <br>
                        <br>
                        Também trabalho profissionalmente no desenvolvimento de códigos HTML, CSS e Javascript avançados na
                        criação de layouts, atualmente, buscando mais experiência na área de back-end para se tornar full
                        stack.
                    </p>
                </div>
                <router-link class="ver" to="/portfolio">Ver portfólio completo</router-link>
            </div>
        </section>

        <footer class="sky" id="contato">

            <!-- Os céus proclamam a glória de Jesus -->

            <video class="sky__background" src="inicio/sky/bluesky_2.mp4" autoplay loop muted />

            <div class="ultima__atualizacao">22/06/2023</div>

            <!-- Shadows -->

            <div class="sky__shadows" id="shadow"></div>

            <shadow-1></shadow-1>

            <!-- Infos -->

            <div class="sky__informacoes">

                <div class="informacoes__container">

                    <address class="informacoes__content">
                        <div style="display: flex; gap: 8vw;" @click="copyText('(11) 96593-9822')">
                            <a target="_blank" class="decoration">
                                <div class="informacoes__contato">
                                    <img src="inicio/whatsapp.svg" alt="WhatsApp">
                                    <p class="contato__email">whatsapp</p>
                                </div>

                                <div class="decoration__info">(11) 96593-9822
                                </div>
                                <img class="decoration__copy" src="inicio/copy.svg" alt="Copiar">
                            </a>

                            <a target="_blank" class="decoration" href="https://instagram.com/mateusduraes_">
                                <div class="informacoes__contato">
                                    <img src="inicio/instagram.svg" alt="Instagram">
                                    <p class="contato__email">instagram</p>
                                </div>
                                <div class="decoration__info">@mateusduraes_</div>
                                <img class="decoration__copy" src="inicio/link.svg" alt="Copiar">

                            </a>
                        </div>

                        <a target="_blank" class="decoration" @click="copyText('mateusduraessantos@gmail.com')">
                            <div class="informacoes__contato">
                                <img src="inicio/gmail.svg" alt="Email">
                                <p class=" contato__email">email</p>
                            </div>
                            <div class="decoration__info">
                                mateusduraessantos@gmail.com
                            </div>
                            <img class="decoration__copy" src="inicio/copy.svg" alt="Copiar">
                        </a>
                    </address>

                    <div id="observador__footer"
                        style="height: 200px; display: flex; align-items: flex-end; position: absolute; bottom: 0;">
                        <p class="frase">Quem disse que rodapés precisam ser chatos? <br><br></p>
                    </div>

                </div>
            </div>

            <img class="sky__planet_01 sky__planet" src="inicio/sky/01.png" alt="planet">
            <img class="sky__planet_02 sky__planet" src="inicio/sky/02.png" alt="planet">
            <img class="sky__planet_03 sky__planet" src="inicio/sky/03.png" alt="planet">
            <img class="sky__planet_05 sky__planet" src="inicio/sky/05.png" alt="planet" id="planet_05">
            <img class="sky__planet_06 sky__planet" src="inicio/sky/06.png" alt="planet">
            <img class="sky__planet_07 sky__planet" src="inicio/sky/07.png" alt="planet">
            <img class="sky__planet_08 sky__planet" src="inicio/sky/08.png" alt="planet">
            <img class="sky__planet_09 sky__planet" src="inicio/sky/09.png" alt="planet">
            <img class="sky__planet_10 sky__planet" src="inicio/sky/10.png" alt="planet">

            <div class="smile_cont sky__planet" id="planet_11">
                <img class="sky__planet_11 sky__planet" src="inicio/sky/11.png" alt="planet">
                <img class="smile" src="inicio/sky/smile.svg" alt="sorriso">
            </div>

            <img class="sky__planet_12 sky__planet" src="inicio/sky/12.png" alt="planet" id="planet_12">
            <img class="sky__planet_13 sky__planet" src="inicio/sky/13.png" alt="planet" id="planet_13">
            <img class="sky__planet_14 sky__planet" src="inicio/sky/14.png" alt="planet" id="planet_14">
        </footer>

    </main>
</template>

<script>
import { imagens } from './destaque.js'
export default {
    name: 'Inicio',
    data() {
        return {

            cardDesign: [
                {
                    index: '0',
                    obj: [
                        'mesa/thumb.jpg',
                        'Mesa gamer | Modelagem 3d',
                        '12/02/2023'
                    ],
                },
                {
                    index: '1',
                    obj: [
                        'butterfly/thumb.jpg',
                        'Pingente Butterfly | Modelagem 3d',
                        '10/03/2022'
                    ],
                    class: 'second_el'
                },
                {
                    index: '2',
                    obj: [
                        'mun/thumb.jpg',
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
        }
    },
    mounted() {
        window.addEventListener('scroll', this.niceScrollBubble);
        this.niceScrollBubble()

        this.observador()
    },

    methods: {
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

        //Diminui a velocidade de scroll de alguns elementos ao scrollar
        niceScrollBubble() {

            if (document.getElementById('square') != null) {
                const observerSquare = new IntersectionObserver(entries => {
                    if (entries[0].isIntersecting === true) {
                        document.getElementById('square').style.top = (window.scrollY - 2800) * 0.3 + 'px';
                    }
                })
                observerSquare.observe(document.getElementById('square'))

                const observer = new IntersectionObserver(entries => {

                    if (entries[0].isIntersecting === true) {
                        document.getElementById('bubble').style.top = (window.scrollY - 400)  * 0.4 + 'px';
                    }
                })
                observer.observe(document.getElementById('bubbles__observer'))
            }
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
                document.body.removeAttribute('style')
                this.popup = !this.popup

                document.getElementById('img_portrato').setAttribute('style', 'opacity: 1;')
                this.loading = true
                this.number = 0
            }
        },
        loadingImg() {
            this.number = this.number + 1

            if (this.number == this.imgs[this.indexImg].paths.length - 1) {

                //O setTimeout ajuda a evitar pulos de imagens enquanto estão carregando no browser
                setTimeout(() => {
                    this.loading = false
                    document.getElementById('img_portrato').removeAttribute('style')
                }, 100);

                document.getElementById('animation').classList.add('popup__animation')
            }
        },
        changeProjectDesign(value) {
            this.number = 0
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
    --border-color: #474747;
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

/* Sobre */

.sobre {
    padding-top: 200px;
    position: relative;
    margin-bottom: 400px;
}

/* banner */

padding {
    padding-top: 4vw;
}

.banner {

    display: flex;
    justify-content: center;
    height: 60vh;
    overflow: hidden;
    position: relative;
}


.banner__img,
.banner__shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    left: 0;
    top: 0;


}

.banner__shadow {
    background-image: linear-gradient(0deg, black, transparent, transparent,transparent, transparent, transparent, transparent);
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    left: 0;
    top: 0;
    z-index: 1;
}


.banner__ola {
    display: flex;
    gap: 20px;
    flex-direction: column;
    font-size: 4rem;
    font-weight: 300;
    line-height: 2.2rem;
    z-index: 2;
    padding-bottom: 6vw;
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
    z-index: 44;
    position: relative;
}

p {
    text-shadow: 3px 3px 7px rgba(0, 0, 0, 0.5);
}

/* Bubbles */

.bubble__container {
    position: absolute;
    top: 100vh;
}

.bubble {
    z-index: 1;
    display: flex;
    align-items: center;
    position: relative;
    width: 100vw;
    height: 550px;
}

.right,
.left {
    position: absolute;
    height: 100%;
    z-index: 0;
}

.right {
    right: 0;
}

/* Square */

.bubble img,
.square img {
    height: 24vw;
}

.square {
    height: 800px;
    display: flex;
    align-items: center;
    position: absolute;
    width: 100%;
    z-index: 0;
}

/*  */

.container-table {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: 'null des des';
    align-items: center;
    gap: 24px;
}

.figure__design {
    grid-area: des;
}

.img_design {
    width: 100%;
    height: 60%;
    object-fit: contain;
}

.table {
    display: flex;
    flex-direction: column;
    border-radius: 2vw;
    border: 1px solid var(--border-color);
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
    padding: 1vw 3vw;
    padding-left: 2vw;
    width: 100%;
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

}

.sky__shadows {
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

.sky__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;

}

.ultima__atualizacao {
    position: absolute;
    bottom: 10px;
    width: 100%;
    z-index: 5;
    text-align: right;
    padding-right: 30px;
    color: #252525;
    font-size: 1rem;
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

.decoration {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
}

.decoration:hover .decoration__copy {
    opacity: 1;
    width: 2vw;
}

.decoration__copy {
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
    white-space: nowrap;
    text-align: center;
    gap: 1vw;
    padding: 1vw 1.4vw;
    bottom: -3.4vw;
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
    flex-direction: column;
    gap: 3vw;
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
    bottom: 0;
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
    grid-area: img;
}

.img_front {
    width: 100%;
    height: 70%;
    object-fit: contain;
    mix-blend-mode: screen;
    position: relative;
    z-index: 1;
}


.mim {
    width: 80%;
    margin: auto;
    z-index: 1;
}

.mim__container {
    display: flex;
    flex-direction: column;
    font-size: 1.9rem;
}

.mim__description {
    font-weight: 300;
    font-size: 1rem;
}

.mim__ola {
    font-size: 1.6rem;
}

.mim__nome {
    font-size: 2.3rem;
}

.projeto {
    font-size: 1.6rem;
}

.ver {
    display: flex;
    align-items: center;
    width: max-content;
    height: 5vw;
    border-radius: 10vw;
    max-height: 82px;
    min-height: 44px;
    padding: 14px 44px;
    margin: auto;
    color: rgb(196, 196, 196);
    font-size: 1rem;
    margin-top: 5vw;
    background: #171d5f;
    transition: .2s;
    text-decoration: none;
    z-index: 4;
}

.ver:hover {
    background: #006981;
    transition: .2s;
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
        transform: scale(var(--sky-scale)) translate(0px, 30px);
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

@media screen and (min-width: 2400px) {
    section {
        width: 90%;
    }
}

@media screen and (min-width: 1280px) {

    .ver {
        padding: 2vw;
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
        gap: 4vw;
    }

    .card__grid {
        gap: 0.6vw;
    }

}

@media screen and (max-width: 1000px) {

    .sobre {
        margin-bottom: 200px;
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
            transform: scale(var(--sky-scale)) translate(0px, 30px);
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

    /* Sobre */
    .sobre {
        margin-top: 100px;
    }

    /*  */

    .img_design,
    .img_front {
        display: none;
    }

    /*  */

    .contato {
        font-size: 1.4rem;
    }

    td {
        min-height: 50px;
    }

    .table__star {
        left: 18vw;
    }

    .card__grid,
    section {
        gap: 8px;
    }

    section {
        padding: 0 10px;
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

    .mim__description {
        font-size: 0.8rem;
    }

    .mim__container {
        gap: 0;
    }

    .mim__nome {
        font-size: 1rem;
    }

    .projeto {
        font-size: 1rem;
    }

    /* Sobre mim */

    .mim__container {
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

@media only screen and (max-width: 400px) {
    .grid {
        gap: 3px;
    }
}
</style>