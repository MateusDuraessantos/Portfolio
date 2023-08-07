<template>
    <nav :theme="colorNav" id="nav" :class="{ 'hiddenHeader': !dadoBol }">

        <button class="turnWhite" @click="emitFunction">
            <div class="turnWhite__swith " id="whiteThemeBtn">
                <p class="claro"><span>☀️</span> Claro</p>
                <p class="escuro">Escuro <span>🌙</span></p>
            </div>
        </button>

        <div class="links">
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
        dadoBol: String,
        booleanTheme: Boolean,
        removeLinkVer: Boolean
    },
    data() {
        return {
            blockClick: true,
            colorNav: '',
        }
    },
    mounted() {
        setTimeout(() => {
            this.turnWhite(0)
        }, 0);
    },
    watch: {
        booleanTheme() {
            this.turnWhite(1000)
        },
        removeLinkVer() {
            this.removeLink()
        }
    },
    methods: {
        emitFunction() {
            if (this.blockClick) {
                this.$emit('tunOn')

                this.blockClick = false
                setTimeout(() => {
                    //Bloqueia a troca de tema 2x seguidas antes de 2s
                    this.blockClick = true
                }, 2000);
            }
        },
        turnWhite(timer) {
            const buttun = document.getElementById('whiteThemeBtn')
            const white = document.querySelector('.turnWhite')

            if (this.booleanTheme == true) {
                buttun.style.transform = 'translate(max(6.8vw, 92px))'

                // Muda cor da navegação
                setTimeout(() => {
                    this.colorNav = 'white'
                    white.classList.add('turnWhite--white')
                }, timer);
            }
            else {
                buttun.style.transform = ''

                // Muda cor da navegação
                setTimeout(() => {
                    this.colorNav = 'black'
                    white.classList.remove('turnWhite--white')
                }, timer);
            }
        },
        removeLink() {
            this.$emit('removeLink')

            if (document.querySelector('[activeLink]') != null) {
                document.querySelector('[activeLink]').removeAttribute('activeLink')
            }

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
.router-link-active .dropdown__inicio {
    color: rgb(234, 69, 69) !important;
}

.router-link-active span {
    color: rgb(234, 69, 69);
    transition: .5s;
}

.router-link-active,
.router-link-a:focus {
    color: rgb(234, 69, 69) !important;
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

.dropdown__container {
    display: flex;
    gap: 3vw;
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



@media screen and (max-width: 1000px) {

    .dropdown__container {
        display: none;
    }

    .desktop,
    #mobile span {
        display: none;
    }

    #mobile .dropdown__inicio,
    .router-link-active#mobile .dropdown__arrow {
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

    #mobile .dropdown__container {
        position: absolute;
        top: 52px;
        gap: 0;
        right: -28px;
        opacity: 1;
        flex-direction: column;
        border-radius: 8px;
        overflow: hidden;
        background: #2c2c2c;
    }

    .router-link-active#mobile:hover .dropdown__container {
        display: flex;
        opacity: 1;
    }

    #mobile .dropdown__arrow {
        position: absolute;
        left: 50px;
        font-size: 20px;
        transform: rotate(90deg);
    }

    #mobile .dropdown {
        width: 160px;
        padding: 12px 20px;
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
        background: #F4F4F4 !important;
    }

    [theme="white"] .dropdown__inicio {
        color: #1f1f1f;
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
    width: 10vw;
    height: 3vw;
    min-width: 140px;
    min-height: 40px;
    outline: none;
    box-shadow: inset 0.1vw 0.1vw 0.4vw rgba(0, 0, 0, 0.4);
}

.turnWhite--white.turnWhite {
    box-shadow: inset 0.1vw 0.1vw 0.4vw rgba(0, 0, 0, 0.2), -0.1vw -0.1vw 0.1vw rgba(0, 0, 0, 0.2), 2px 2px 5px rgba(255, 255, 255, 0.6);
}

.turnWhite__swith {
    position: absolute;
    left: max(4px, 0.4vw);
    display: flex;
    align-items: center;
    background: gray;
    box-shadow: inset 1px 1px 5px rgba(255, 255, 255, 0.4), inset -1px -1px 5px rgba(0, 0, 0, 0.4);
    width: 2.2vw;
    height: 2.2vw;
    min-width: 30px;
    min-height: 30px;
    border-radius: 50%;
    transition: .2s;
}

.turnWhite--white .turnWhite__swith {
    box-shadow: none;
    box-shadow: inset 1px 1px 5px rgba(255, 255, 255, 0.4);
}

.turnWhite--white {
    background: rgb(235 235 235);
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
    width: 5.6vw;
}

.escuro {
    left: max(3vw, 42px);
}

.claro {
    right: max(3vw, 42px);
}
</style>
