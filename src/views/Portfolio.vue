<template>
    <main>
        <!-- Filtro -->

        <div class="filtro">
            <div class="filtro__container" id="filtro" @click="clickedFilter">
                <button index="0" class="filtro__option" filterSelected>Tudo</button>
                <button index="1" class="filtro__option">Websites</button>
                <!-- <button index="2" class="filtro__option">outros</button> -->
            </div>
            <div class="filtro__marcador" id="filtro__marcador"></div>
        </div>

        <!--  -->

        <section class="grid">
            <figure :indexCard="index" :class="`cards ${img.categoria}`" @click="upPopup($event, index)"
                v-for="(img, index) in imgs" :key="index">

                <div class="cards__container_name">
                    <p class="card__text">{{ img.name }}</p>
                </div>
                <img class="cards__imagens" :src="img.thumb" loading="lazy">
            </figure>
        </section>

        <!--  -->

        <section class="popup__background" v-if="popup" @click="upPopup">
            <div class="popup__overflow" id="animation">

                <div class="container-button">
                    <button class="changeProject back" @click="changeProject('back')">
                        <p>←</p>
                    </button>
                    <button class="changeProject next" @click="changeProject('next')">
                        <p>→</p>
                    </button>
                </div>

                <div class="container-loading" v-if="loading">
                    <span>carregando</span>
                    <div class="loading"></div>
                </div>

                <figure class="popup__content" id="img_port" layoutPopup style="opacity: 1;">

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
                        <span v-if="imgs[indexImg].description">
                            <br>
                            <p style="font-size: 0.8rem; line-height: 1.4rem;">
                                {{ imgs[indexImg].description }}
                            </p>
                        </span> 
                    </div>

                    <span v-for="coisas in imgs[indexImg].paths">
                        <img class="popup__img" :alt="imgs[indexImg].alt" @load="loadingImg" :src="coisas">
                    </span>

                </figure>


                <button class="popup__close">✕</button>
            </div>
        </section>
    </main>
</template>

<script>
import { imagens } from './imagensDados.js'

export default {
    name: 'Portfolio',
    data() {
        return {
            imgs: imagens,
            popup: false,
            indexImg: null,
            loading: true,
            number: 0,
            isColumn: Number,
            newIndex: [],
            isWebsites: null,
            valueMudadoIndex: null,
            isWebsitesIsPopup: true,
        }
    },
    mounted() {
        this.filtroTheme(0)
        this.scrolltoTop()
        this.clickedFilter()

    },
    props: {
        booleanTheme: Boolean,
    },
    watch: {
        booleanTheme() {
            this.filtroTheme(1000)
        }
    },
    methods: {
        
        filtroTheme(time) {
            setTimeout(() => {
                if (this.booleanTheme == true) {
                    document.querySelector('.filtro__container').classList.add('white')
                }
                else {
                    document.querySelector('.filtro__container').classList.remove('white')
                }
            }, time);
        },
        clickedFilter(event) {
            if (event) {
                // Interção do marcador
                const elementClicked = window.getComputedStyle(event.target)
                const marcador = document.getElementById('filtro__marcador')
                marcador.style.width = elementClicked.width
                const elementsIndex = document.querySelectorAll('[index]')
                const filter = document.querySelector('[filterSelected]')

                /*  */
                const categorias = document.querySelectorAll('.cards')

                if (filter != null) {
                    filter.removeAttribute(['filterSelected'])
                    event.target.setAttribute('filterSelected', '')
                }

                let filtered = document.querySelectorAll('[displayHidden]')

                for (let i = 0; i < filtered.length; i++) {
                    filtered[i].removeAttribute('displayHidden')
                }

                if (event.target.getAttribute('index') == 0) {
                    //Adiciona selector embaixo do filtro selecionado
                    marcador.style.transform = 'translate(0)'
                    this.newIndex = []
                    this.isWebsites = false

                }
                else if (event.target.getAttribute('index') == 1) {
                    marcador.style.transform = `translate(${window.getComputedStyle(elementsIndex[0]).width})`
                    this.isWebsites = true

                    // Esconder elementos

                    for (let i = 0; i < categorias.length; i++) {
                        if (categorias[i].classList[1] == 'design') {
                            categorias[i].setAttribute('displayHidden', '')
                        }
                        else {
                            this.newIndex.push(categorias[i].getAttribute('indexcard'))
                        }
                    }
                    const websitesElements = document.querySelectorAll('.website')

                    for (let y = 0; y < websitesElements.length; y++) {
                        websitesElements[y].setAttribute('indexWeb', y)
                    }
                }
            }
            else {
                const firstInteraction = window.getComputedStyle(document.querySelector('[index]')).width
                document.getElementById('filtro__marcador').style.width = firstInteraction
            }
        },
        upPopup(event, index) {
            const clicked = event.target.classList[0]
            if (event.currentTarget.classList[0] == 'cards' && event.target.classList[0] != 'card__link') {
                this.indexImg = index
                document.body.style.overflow = 'hidden'
                this.popup = !this.popup
                //Se o popup for fechado no modo "visualização vertical", o valor fica em 2, e quando o popup é aberto novamente, o layout fica errado
                this.isColumn = 2
            }
            else if (document.body.style.overflow == 'hidden' && clicked == 'popup__close' || clicked == 'popup__overflow' || clicked == 'container-button') {
                document.body.style.overflow = ''
                this.popup = !this.popup
                // Loading 
                this.loading = true
                document.getElementById('img_port').setAttribute('style', 'opacity: 1;')
                this.number = 0
            }
            if (this.isWebsitesIsPopup) {
                this.valueMudadoIndex = Number(event.currentTarget.getAttribute('indexWeb'))
            }
        },
        loadingImg() {
            this.number = this.number + 1

            if (this.number == this.imgs[this.indexImg].paths.length) {
                this.loading = false
                document.getElementById('img_port').removeAttribute('style')
                document.getElementById('animation').classList.add('popup__animation')
            }
        },
        changeProject(value) {
            this.number = 0
            document.getElementById('img_port').setAttribute('style', 'opacity: 0;')
            this.loading = true
            if (value == 'back') {
                if (this.indexImg == 0) {
                    this.indexImg = this.imgs.length - 1
                }
                else {
                    this.indexImg--
                }
            }
            if (value == 'next') {
                if (this.indexImg == this.imgs.length - 1) {
                    this.indexImg = 0
                }
                else {
                    this.indexImg++
                }
            }

            //Se for passar de projeto e antes disso o popup em estiver verical, precisa ser reiniciado para aparecer no próximo projeto  
            if (document.querySelector('.column__vertical')) {
                this.changeLayout()
            }

            this.isWebsitesIsPopup = false
            if (this.isWebsites) {

                //bloqueia a mudança do valor de this.valueMudadoIndex
                if (value == 'next') {
                    if (this.valueMudadoIndex == 4) {
                        this.valueMudadoIndex = 0
                    }
                    else {
                        this.valueMudadoIndex = this.valueMudadoIndex + 1
                    }
                }

                if (value == 'back') {
                    if (this.valueMudadoIndex == 0) {
                        this.valueMudadoIndex = 4
                    }
                    else {
                        this.valueMudadoIndex = this.valueMudadoIndex - 1
                    }
                }
                this.indexImg = this.newIndex[this.valueMudadoIndex]
            }
        },
        scrolltoTop() {
            this.$nextTick(() => {
                window.scrollTo(0, 0);
            });
        },
    },
}

</script>

<style>
[displayHidden] {
    display: none !important;
    transition: .4s;
}
</style>
<style scoped>
main {
    margin-bottom: 100px;
    margin-top: 80px;
    padding-top: 6vw;
}

/* Filtros */

.filtro {
    margin: auto;
    width: max-content;
    position: relative;
    margin-bottom: 4vw;
    padding-bottom: 0.4vw;

}

.filtro__container {
    display: flex;
    align-items: center;
    justify-content: center;
}

.filtro__option {
    box-shadow: none;
    background: none;
    border: none;
    font-size: 1rem;
    padding: 0 12px;
    transition: .4s;
}

.filtro__marcador {
    height: 0.14vw;
    min-height: 2px;
    width: 0%;
    background: rgb(219, 57, 57);
    transition: .2s;
    margin-top: 4px;
}

[filterSelected] {
    color: rgb(234, 69, 69) !important;
    transition: .4s;
}

/* Cards */

.grid {
    width: calc(100% - 2vw);
    display: grid;
    gap: 10px;
    margin: auto;

}
.cards {
    display: flex;
    flex-direction: column-reverse;
    position: relative;
    color: white;
    width: 100%;
    height: 20vw;
    overflow: hidden;
    cursor: pointer;
    border-radius: 10px;
}

.cards__container_name {
    display: flex;
    opacity: 0;
    align-items: flex-end;
    position: absolute;
    padding: 14px 20px;
    padding-top: 5vw;
    height: 14vw;
    width: 100%;
    background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9));
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    z-index: 1;
    transition: .6s;
}

.cards:hover .cards__container_name {
    opacity: 1;
    transition: .6s;
}

.card__text {
    font-weight: 500;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
    line-height: 1.64vw;
    font-size: 0.9rem;
    text-align: center;
    color: rgb(235, 235, 235);
}

.popup__content:hover .link__container {
    opacity: 1;
}


.cards__imagens {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: .4s;
}

.cards:hover .cards__imagens {
    transform: scale(1.05);
    transition: .4s;
}

@media only screen and (min-width: 1601px) {
    .grid {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
}

@media only screen and (max-width: 1600px) {
    .grid {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
}

@media only screen and (max-width: 1100px) {
    .grid {
        grid-template-columns: 1fr 1fr 1fr;
    }
}

@media only screen and (max-width: 1000px) {
    .grid {
        gap: 6px;
    }
}

@media only screen and (min-width: 1280px) {

    .grid {
        gap: 0.8vw;
    }

    .cards {
        border-radius: 0.3vw;
    }

    .cards__container_name {
        padding: 2vw;
    }
}

@media only screen and (max-width: 800px) {

    .cards__container_name {
        display: none;
    }

    .grid {
        width: calc(100% - 20px);
        gap: 1.2vw;
    }

    .cards {
        border-radius: 3px;
        height: 28vw;
    }

    .popup__overflow {
        padding: 0;
    }

}

/* Mobile version */

@media only screen and (max-width: 500px) {
    .grid {
        width: 100%;
        gap: 3px;
    }
}

/* White Theme */

.white button {
    color: black;
}

</style>