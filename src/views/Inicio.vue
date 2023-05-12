<template>
    <div class="body">
        <div class="body__container">
            <p class="ola "><span style="font-size: 60px;">Olá,</span> <br>
                <span style="font-size: 20px;">aqui você conhecerá um pouco dos meus trabalhos.</span>
            </p>
        </div>

        <div class="bubble__container">
            <div class="bubble" id="bubble">
                <img src="bubble.svg" class="left">
                <img src="bubble.svg" class="right">
            </div>
        </div>

        <div class="body__container">
            <div class="card__grid">
                <div :class="'card anime_scrollReveal ' + img.class" v-for="img in cardDesign">
                    <img class="card__img" :src="'projetos/' + img.obj[0]">
                    <div class="card__description">
                        <div class="card__data">
                            <p> {{ img.obj[1] }}</p>
                            <span> {{ img.obj[2] }}</span>
                        </div>
                        <button class="card__btn">ver</button>
                    </div>
                </div>
            </div>

            <div class="container-table">
                <div class="table anime_scrollReveal">
                    <p class="table_p">Experiência para criação de projetos de design</p>
                    <div class="table__content">
                        <td border-style>
                            <strong>Design</strong>
                        </td>
                        <td border-style>
                            Photoshop
                            <img class="table__star" src="cinco_estrelas.svg" alt="Conhecimento avançado" />
                        </td>
                        <td border-style>
                            Ilustrator
                            <img class="table__star" src="cinco_estrelas.svg" alt="Conhecimento avançado" />
                        </td>
                        <td border-style>
                            Figma
                            <div class="star table__star"><img v-for="star in 4" src="uma_estrelas.svg"
                                    alt="Conhecimento avançado">
                                <img src="meia_estrelas.svg" alt="Conhecimento avançado">
                            </div>
                        </td>
                        <td border-style>
                            Miro
                            <img class="table__star" src="cinco_estrelas.svg" alt="Conhecimento ançado" />
                        </td>
                        <td>
                            Cinema 4D
                            <div class="star table__star"><img v-for="star in 4" src="uma_estrelas.svg"
                                    alt="Conhecimento avançado">
                                <img src="vazia_estrelas.svg" alt="Conhecimento avançado">
                            </div>
                        </td>
                    </div>
                </div>
                <img class="img_design anime_scrollReveal" src="design.png" alt="Design">
            </div>
        </div>

        <div class="something_I_dont_know">

        </div>



        <div class="body__container">

            <div class="card__grid ">
                <div :class="'card anime_scrollReveal ' + img.class" v-for="img in cardFront" data-sr-delay="100">
                    <img class="card__img" :src="'projetos/' + img.obj[0]">
                    <div class="card__description">
                        <div class="card__data">
                            <p> {{ img.obj[1] }}</p>
                            <span> {{ img.obj[2] }}</span>
                        </div>
                        <button class="card__btn">ver</button>
                    </div>
                </div>
            </div>

            <div class="container-front">
                <img class="img_front anime_scrollReveal" src="frontend.jpg" alt="Design" />
                <div class="table anime_scrollReveal">
                    <p class="table_p">Experiência para criação de projetos de design</p>
                    <div class="table__content">
                        <td border-style>
                            <strong>Frontend</strong>
                        </td>
                        <td border-style>
                            HTML
                            <img class="table__star" src="cinco_estrelas.svg" alt="Conhecimento avançado" />
                        </td>
                        <td border-style>
                            CSS
                            <img class="table__star" src="cinco_estrelas.svg" alt="Conhecimento avançado" />
                        </td>
                        <td border-style>
                            Javascript
                            <div class="star table__star"><img v-for="star in 3" src="uma_estrelas.svg"
                                    alt="Conhecimento avançado">
                                <img src="meia_estrelas.svg" alt="Conhecimento avançado">
                                <img src="vazia_estrelas.svg" alt="Conhecimento avançado">
                            </div>
                        </td>

                        <td border-style>
                            VueJs
                            <div class="star table__star"><img v-for="star in 3" src="uma_estrelas.svg"
                                    alt="Conhecimento avançado">
                                <img src="meia_estrelas.svg" alt="Conhecimento avançado">
                                <img src="vazia_estrelas.svg" alt="Conhecimento avançado">
                            </div>
                        </td>
                        <td border-style>
                            Firebase
                            <div class="star table__star"><img v-for="star in 4" src="uma_estrelas.svg"
                                    alt="Conhecimento avançado">
                                <img src="vazia_estrelas.svg" alt="Conhecimento avançado">
                            </div>
                        </td>
                        <td>
                            GitHub
                            <div class="star table__star"><img v-for="star in 4" src="uma_estrelas.svg"
                                    alt="Conhecimento avançado">
                                <img src="vazia_estrelas.svg" alt="Conhecimento avançado">
                            </div>
                        </td>
                    </div>
                </div>




            </div>
        </div>
        <div style="margin-top: 200px;">
            <div class="square__container">
                <div class="square" id="square">
                    <img src="square1.svg" class="left--square">
                    <img src="square.svg" class="right--square">
                </div>
            </div>
            <div class="body__container" style="margin-top: 26px;">
                <div class="mim">
                    <div class="mim__name">
                        <img class="mim__img" src="eu.png" alt="Foto de perfil do Mateus Durães">
                        <span>
                            <strong>Mateus Durães dos Santos</strong>
                            <p>Designer e desenvolvedor frontend</p>
                        </span>
                    </div>
                    <br>
                    <br>
                    <p class="mim__description">
                        Tenho 22 anos, atualmente, cursando o 8° semestre de design na Universidade Presbiteriana Mackenzie.
                        Já
                        trabalho na área de webdesigner e desenvoldedor frontend a cerca de 2 anos, atualmente exercendo a
                        profissão
                        na empresa Data Machina.
                        <br>
                        <br>
                        Tenho uma boa experiência com softwares de edição de imagem e criação de objetos 3D para criação de
                        renders.
                        <br>
                        <br>
                        Também trabalho profissionalmente no desenvolvimento de códigos HTML, CSS e Javascript avançados na
                        criação
                        de layouts, atualmente, buscando mais experiência na área de back-end, meta: Fullstack.
                    </p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import ScrollReveal from 'scrollreveal';

export default {
    name: 'Inicio',
    data() {
        return {
            cardDesign: [
                {
                    obj: [
                        'mesa/2.jpg',
                        'Mesa gamer | Modelagem 3d',
                        '12/02/2023'
                    ],
                    class: 'first_el'
                },
                {
                    obj: [
                        'butterfly/1.jpg',
                        'Pingente Butterfly | Modelagem 3d',
                        '10/03/2022'
                    ],
                    class: 'second_el'
                },
                {
                    obj: [
                        'mun/3.jpg',
                        'Mun | Arandela',
                        '24/06/2020'
                    ],
                    class: 'third_el'
                },
            ],
            cardFront: [
                {
                    obj: [
                        'datamachina/datamachina.jpg',
                        'Data Machina | Website',
                        '12/02/2023'
                    ],
                    class: 'third_el'
                },
                {
                    obj: [
                        'teclakey/4.gif',
                        'TeclaKey | Website',
                        '10/03/2022'
                    ],
                    class: 'second_el'
                },
                {
                    obj: [
                        'tre/2.jpg',
                        'Mun | Arandela',
                        '24/06/2020'
                    ],
                    class: 'first_el'
                },
            ],
            scrollScroll: 1400
        }
    },
    mounted() {
        this.niceScroll()
        this.niceSquere()

        setTimeout(() => {
            const sr = ScrollReveal();

            window.sr = ScrollReveal({ reset: true })
            sr.reveal('.anime_scrollReveal', {
                duration: 1000,
                rotate: {
                    x: 0,
                    y: 0,
                    z: 0,
                },
                scale: 0.9
            });
            sr.reveal('.first_el', {
                delay: 0,
            });
            sr.reveal('.second_el', {
                delay: 150,
            });
            sr.reveal('.third_el', {
                delay: 300,
            });
        }, 1);

        /*  */

        window.addEventListener('scroll', this.niceScroll);
        window.addEventListener('scroll', this.niceSquere);


    },
    methods: {
        niceScroll() {
            let bubble = document.getElementById('bubble');

            window.addEventListener('scroll', function () {
                let value = window.scrollY;
                bubble.style.top = value * 0.4 - 180 + 'px';
            });
        },

        niceSquere() {
            let square = document.getElementById('square');

            window.addEventListener('scroll', function () {
                let value = window.scrollY;
                square.style.top = (value - 3386) * 0.5 + 50 + 'px';
            });
        }
    }
}
</script>


<style>
:root {
    --border-color: #474747;
    --bubble-position: -280px;
}
</style>

<style scoped>
.anime_scrollReveal {
    visibility: hidden;
}

.body__container {
    display: flex;
    flex-direction: column;
    width: calc(100% - 80px);
    max-width: 1280px;
    margin: auto;
    gap: 40px;
    position: relative;
    z-index: 1;

}

.ola {
    height: 300px;
    font-weight: 300;
}

.bubble__container {
    height: 0;
}

.bubble {
    position: absolute;
    display: flex;
    align-items: center;
    position: relative;
    top: -180px;
    width: 100%;
    height: 560px;
    overflow: hidden;
}

.right,
.left {
    position: absolute;
    height: 100%;
    z-index: 0;
}

.right {
    right: var(--bubble-position);
    transform: rotate(-65deg);
}

.left {
    left: var(--bubble-position);
}

.container-table {
    display: grid;
    grid-template-columns: 500px 1fr;
    gap: 40px;
}

.table {
    display: flex;
    flex-direction: column;
    border-radius: 27px;
    border: 1px solid var(--border-color);
    background-image: linear-gradient(#232323, #101010);
    width: 100%;
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
    padding: 0 30px;
    height: 62px;
    width: 100%;
}

.table__star {
    position: absolute;
    left: 150px;
    display: flex;
    gap: 20px;
}


[border-style] {
    border-bottom: 1px solid var(--border-color);
}

.card__grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;
    width: 100%;
    margin: auto;
}

.star {
    display: flex;
    gap: 9px;
}

.card {
    display: flex;
    justify-content: center;
    position: relative;
    height: 342px;
    width: 100%;
    border-radius: 37px;
    overflow: hidden;
    cursor: pointer;
}

.card:hover .card__img {
    transform: scale(1.03);
    transition: .5s;

}

.card__img {
    width: 100%;
    transition: .5s;
    object-fit: cover;
}

.card__description {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    bottom: 16px;
    padding: 0 10px;
    height: 52px;
    width: calc(100% - 40px);
    margin: auto;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(9px);
    z-index: 2;
    border-radius: 50px;
}

.card__btn {
    background: rgba(0, 0, 0, 0.7);
    border-radius: 50px;
    width: max-content;
    height: 80%;
    padding: 0 24px;
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
    gap: 3px;
    padding: 0 0 0 30px;
}

.card__data p {
    font-size: 12px;
}

.img_design {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

/* something_I_dont_know */

.something_I_dont_know {
    height: 100vh;
    background: #101010;
    margin: 100px 0;
}

/* Front end */

.container-front {
    display: grid;
    grid-template-columns: 1fr 500px;
}

.img_front {
    width: 90%;
    height: 100%;
    object-fit: contain;
    mix-blend-mode: screen;
    position: relative;
    z-index: 1;
}

.square__container {
    height: 0;
}

.square {
    position: absolute;
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    height: 560px;
    overflow: hidden;
    top: -100px;

}

.right--square,
.left--square {
    position: absolute;
    height: 100%;
}

.right--square {
    right: var(--bubble-position);
}

.left--square {
    left: var(--bubble-position);
}

.mim {
    border-radius: 37px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(62px);
    width: calc(100% - 200px);
    margin: auto;
    padding: 54px 60px 60px 60px;
}

.mim__name {
    display: flex;
    gap: 40px;
    align-items: center;
}

.mim__img {
    width: 140px;
}

.mim__description {
    font-weight: 300;
}
</style>