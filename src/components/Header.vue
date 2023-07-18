<template>
    <nav :theme="colorNav" id="nav" :class="{ 'hiddenHeader': !dadoBol }">

        <button class="turnWhite" @click="turnWhite">
            <div class="turnWhite__swith " id="whiteThemeBtn">
                <p class="claro"><span>🌞</span> Claro</p>
                <p class="escuro">Escuro <span>🌙</span></p>
            </div>
        </button>

        <div class="links">
            <!--         <router-link style="display: flex; gap: 1.5vw;" to="/">
                <a class="desktop nav" @click="scrollDown($event, 'sobre')">Início</a>
                <a class="desktop nav" @click="scrollDown($event, 'design')">Design</a>
                <a class="desktop nav" @click="scrollDown($event, 'programacao')">Frontend</a>
                <a class="desktop nav" @click="scrollDown($event, 'contato')">Contato</a>
            </router-link> -->

            <router-link id="mobile" to="/">

                <div class="dropdown__inicio">Início</div>
                <span class="dropdown__arrow">❯</span>

                <div class="dropdown__container">
                    <a class="dropdown nav" @click="scrollDown($event, 'sobre')">Início</a>
                    <a class="dropdown nav" @click="scrollDown($event, 'design')">Design</a>
                    <a class="dropdown nav" @click="scrollDown($event, 'programacao')">Frontend</a>
                    <a class="dropdown nav" @click="scrollDown($event, 'contato')">Contato</a>
                </div>
            </router-link>

            <router-link class="router-link-a" @click="removeLink" to="portfolio">Portfólio</router-link>

        </div>
    </nav>
</template>

<script>
export default {
    name: 'Header',
    props: {
        dadoBol: String
    },
    data() {
        return {
            isWhite: false,
            blockClick: true,
            colorNav: 'black'
        }
    },
    methods: {
        turnWhite() {
            this.$emit('tunOn', this.blockClick)


            if (this.blockClick) {

                this.blockClick = false

                setTimeout(() => {
                    //bloqueia a ativação do botão enquanto a animação de 2s não termina
                    this.blockClick = true
                }, 2000);

                const buttun = document.getElementById('whiteThemeBtn')
                const white = document.querySelector('.turnWhite')

                setTimeout(() => {
                    if (this.isWhite == false) {
                        buttun.style.transform = 'translate(max(6.8vw, 92px))'
                        white.classList.add('turnWhite--white')
                        this.isWhite = !this.isWhite

                        // Muda cor da navegação
                        setTimeout(() => {
                            this.colorNav = 'white'
                        }, 1000);

                    }
                    else {
                        white.classList.remove('turnWhite--white')
                        buttun.style.transform = ''
                        this.isWhite = !this.isWhite

                        // Muda cor da navegação
                        setTimeout(() => {
                            this.colorNav = 'black'
                        }, 1000);
                    }
                }, 0);
            }

        },
        removeLink() {

            if (document.querySelector('[activeLink]') != null) {
                document.querySelector('[activeLink]').removeAttribute('activeLink')
            }
            this.$emit('removeLink')

            if (document.querySelector('.hiddenHeader') != null) {
                document.querySelector('.hiddenHeader').classList.remove('hiddenHeader')

            }

        },
        scrollDown(event, ancora) {
            setTimeout(() => {
                const obj = document.getElementById(ancora)

                window.scrollTo({
                    top: obj.offsetTop,
                    behavior: 'smooth'
                })
            }, 50)

            const elements = document.querySelectorAll('[activeLink]')

            if (elements.length == 0) {
                event.target.setAttribute('activeLink', '')
            }
            else {
                document.querySelector('[activeLink]').removeAttribute('activeLink')
                event.target.setAttribute('activeLink', '')
            }
        }
    }
}
</script>

<style scoped>
nav {
    display: flex;
    align-items: center;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 80px;
    font-size: 1rem;
    min-height: 70px;
    top: 0;
    backdrop-filter: blur(14px);
    width: 100vw;
    height: 10.1vw;
    max-height: 100px;
    z-index: 5;
}

.desktop {
    display: flex;
    padding: 12px 0;
}

/*  */

[theme="black"] {
    background: rgba(0, 0, 0, 0.5);
}

[theme="white"] {
    background: rgb(255 255 255 / 40%);
}

[theme="white"] a {
    color: #1f1f1f;
}


/*  */

.hiddenHeader {
    background: rgba(0, 0, 0, 0);
    backdrop-filter: none;
}

.hiddenHeader .dropdown {
    color: gray;
    transition: .5s;
}

* {
    text-decoration: none;
}


[activeLink],
.dropdown__inicio {
    color: rgb(234, 69, 69);
}

.router-link-active span {
    color: rgb(234, 69, 69);
    transition: .5s;
}

.router-link-active,
.router-link-a:focus {
    color: rgb(234, 69, 69);
    position: relative;
}

.router-link-a,
.nav:hover {
    transition: .5s;
}

.router-link-a:hover,

.router-link-a:hover span {
    color: rgb(234, 69, 69);
    transition: .5s;
}

button {
    color: white;
    font-size: 1rem;
    background: none;
    border: none;
}

/*  */
.links {
    display: flex;
    align-items: center;
    gap: 6vw;
}

/*  */

.eu {
    display: flex;
    align-items: center;
    gap: 20px;
    font-weight: 300;
}

.foto {
    width: 62px;
}

.nome {
    font-size: 1rem;
    font-weight: 400;
}

/* Mobile version */

@media screen and (min-width: 1280px) {

    nav {
        min-height: 6vw;
    }

    .foto {
        width: 4vw;
    }

    .eu {
        gap: 1.6vw;
    }

    * {
        font-size: 1rem;
    }
}

@media screen and (max-width: 1100px) {

    nav {
        padding: 0 40px;
    }
}

.dropdown__arrow,
.dropdown__inicio {
    display: none;
}

.dropdown__container {
    display: flex;
    gap: 2vw;
}

@media screen and (max-width: 1000px) {

    .desktop,
    #mobile span {
        display: none;
    }

    #mobile .dropdown__inicio,
    #mobile .dropdown__arrow {
        display: flex;
    }

    /* Dropdown */

    #mobile {
        display: flex;
        width: max-content;
        align-items: center;
        padding: 16px 0;
        padding-right: 22px;
    }

    #mobile .dropdown__arrow {
        display: flex;
        position: absolute;
        left: 50px;
        font-size: 20px;
        transform: rotate(90deg);
    }

    #mobile .dropdown {
        width: 160px;
        padding: 12px 20px;
    }

    #mobile .dropdown__container {
        position: absolute;
        display: none !important;
        top: 52px;
        gap: 0;
        right: -28px;
        opacity: 1;
        flex-direction: column;
        border-radius: 8px;
        overflow: hidden;
        background: #2c2c2c;

    }

    #mobile a {
        background: #2c2c2c;
        height: 100%;
    }

    #mobile .dropdown:hover {
        background: #1f1f1f;
    }

    #mobile .nav:hover {
        transition: .3s;
        color: rgb(234, 69, 69);
    }

    #mobile .dropdown__container {
        display: flex;
        opacity: 1;
    }

    #mobile:hover .dropdown__container {
        display: flex !important;
        opacity: 1;
    }

    #mobile .dropdown__option {
        background: #1f1f1f;
        padding: 20px;
        z-index: 300;
        min-width: 220px;
    }

    #mobile .dropdown__option:hover {
        background: rgb(71, 71, 71);
    }

    [theme="white"] #mobile .dropdown,
    [theme="white"] #mobile .dropdown__container {
        background: #E7E7E7 !important;
    }
}

@media screen and (max-width: 800px) {

    .cards {
        height: 27vw;
    }

    .foto {
        display: none;
        width: 42px;
    }

    nav {
        padding: 0 20px;
    }
}

@media screen and (max-width: 500px) {
    .nome {
        font-size: 0.8rem;
    }

    .links {
        margin-right: 10px;
    }
}

/* White Theme */

.turnWhite {
    position: relative;
    display: flex;
    align-items: center;
    background: #2c2c2c;
    border-radius: 10vw;
    border: none;
    padding: 0.6vw;
    transition: .4s;
    overflow: hidden;
    box-shadow: inset 0.3vw 0.3vw 0.5vw rgba(0, 0, 0, 0.2);
    width: 10vw;
    height: 3vw;
    min-width: 140px;
    min-height: 40px;
    outline: none;
}

.turnWhite__swith {
    position: absolute;
    left: max(4px, 0.4vw);
    display: flex;
    align-items: center;
    background: gray;
    border: 0.2vw solid transparent;
    width: 2.4vw;
    height: 2.4vw;
    min-width: 30px;
    min-height: 30px;
    border-radius: 50%;
    transition: .2s;
}

.turnWhite--white {
    background: rgb(233, 233, 233);
    transition: .4s;
}

.turnWhite--white p {
    color: black;
}

.escuro,
.claro {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: max(0.4vw, 4px);
    white-space: nowrap;
    font-size: max(1rem, 14px);
}

.escuro {
    left: max(3vw, 50px);
}

.claro {
    right: max(3vw, 50px);
}
</style>
