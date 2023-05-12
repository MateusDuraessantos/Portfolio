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
                <div class="card" v-for="img in cardDesign">
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
                <div class="table">
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
                <img class="img_design" src="design.png" alt="Design">
            </div>
        </div>


        <div class="something_I_dont_know">

        </div>


        <div class="body__container">

            <div class="card__grid">
                <div class="card" v-for="img in cardFront">
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
                <img class="img_front" src="frontend.jpg" alt="Design" />
                <div class="table">
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
    </div>
</template>

<script>
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
                    ]
                },
                {
                    obj: [
                        'butterfly/1.jpg',
                        'Pingente Butterfly | Modelagem 3d',
                        '10/03/2022'
                    ]
                },
                {
                    obj: [
                        'mun/3.jpg',
                        'Mun | Arandela',
                        '24/06/2020'
                    ]
                },
            ],
            cardFront: [
                {
                    obj: [
                        'datamachina/datamachina.jpg',
                        'Data Machina | Website',
                        '12/02/2023'
                    ]
                },
                {
                    obj: [
                        'teclakey/4.gif',
                        'TeclaKey | Website',
                        '10/03/2022'
                    ]
                },
                {
                    obj: [
                        'tre/2.jpg',
                        'Mun | Arandela',
                        '24/06/2020'
                    ]
                },
            ],
            topValue: Number
        }
    },

    mounted() {
        this.niceScroll()
    },
    methods: {
        niceScroll() {
            let bubble = document.getElementById('bubble');
            let initialValue = window.scrollY;

            const updatePosition = () => {
                let value = window.scrollY - initialValue;
                bubble.style.top = value * 0.4 - 180 + 'px';
                requestAnimationFrame(updatePosition);
            };

            requestAnimationFrame(updatePosition);
        }
    }

}
</script>

<style>
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

:root {
    --border-color: #474747;
    --bubble-position: -280px
}


.ola {
    height: 300px;
    font-weight: 300;
}

.bubble__container {
    position: relative;
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

.bubble__el {
    position: absolute;
    filter: blur(7px);
    width: 540px;
    height: 540px;
    border-radius: 50%;
    z-index: 0;
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
    width: 100%;
}
</style>