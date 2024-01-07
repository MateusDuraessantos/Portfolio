<template>
    <nav :theme="colorNav" id="nav" :class="{ 'hiddenHeader': !dadoBol }">

        <button class="turnWhite" @click="emitFunction">
            <div class="turnWhite__swith" id="whiteThemeBtn">
                <p class="claro"><div class="emoji">☀️</div> <text-btn>Tema</text-btn></p>
                <p class="escuro"><text-btn>Tema</text-btn> <div class="emoji">🌙</div></p>
            </div>
        </button>

        <div class="links" @click="upDropdown">
            <div id="mobile">
                <div class="dropdown__inicio">Menu</div>
                <div class="dropdown__container" @click="scrollDown">
                    <a class="dropdown nav" ancora="inicio">Início</a>
                    <a class="dropdown nav" ancora="portfolio">Portfólio</a>
                    <a class="dropdown nav" ancora="facaumorcamento">Faça um orçamento</a>
                    <a class="dropdown nav" ancora="sobre">Sobre</a>
                    <a class="dropdown nav" ancora="contato">Contato</a>
                </div>
            </div>
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
            handle: true,
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
        upDropdown(event) {
            
            const dropdown = document.querySelector('#mobile')
            if(event.currentTarget.classList[0] == 'links' && this.handle) {
                dropdown.classList.add('openMenu')
                this.handle = false
            } else {
                dropdown.classList.remove('openMenu')
                this.handle = true
            }
        },
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
            const button = document.getElementById('whiteThemeBtn')
            const white = document.querySelector('.turnWhite')

            if (this.booleanTheme == true) {
                button.style.transform = 'translate(100px)'
                // Muda cor da navegação
                setTimeout(() => {
                    this.colorNav = 'white'
                    white.classList.add('turnWhite--white')
                }, timer);
            } else {
                button.style.transform = ''
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
        scrollDown(e) {
            let ancora = e.target.getAttribute('ancora')
            if(ancora) {
                const obj = document.getElementById(ancora)
                window.scrollTo({
                    top: obj.offsetTop,
                    behavior: 'smooth'
                })
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
    top: 0;
    backdrop-filter: blur(14px) !important;
    width: 100vw;
    height: 80px;
    z-index: 5;
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
    backdrop-filter: none !important;
    transition: .5s;
}


.hiddenHeader .turnWhite {
    opacity: 0;
    pointer-events: none;
}

* {
    text-decoration: none;
}

.nav:hover {
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
    gap: 28px;
}


.nav {
    cursor: pointer;
    transition: .2s;
}

.nav:hover {
    color: rgb(255, 54, 54);
    transition: .2s;
}

/* Mobile version */

@media screen and (max-width: 1100px) {

    nav {
        padding: 0 40px;
    }
}

.dropdown__inicio {
    display: none;
}

@media screen and (max-width: 1000px) {
  
    #mobile .dropdown__inicio {
        position: relative;
        align-items: center;
        display: flex;
    }
    
    #mobile .dropdown__inicio::after {
        position: absolute;
        content: '❯';
        right: -20px;
        font-size: 20px;
        transform: rotate(90deg);
    }

    /* Dropdown */

    .dropdown__container {
        pointer-events: none;
        opacity: 0;
        width: 226px;
    }

    .openMenu .dropdown__container {
        pointer-events: initial;
        opacity: 1;
        transition: .2s;
    }

    #mobile {
        position: relative;
        display: flex;
        justify-content: flex-end;
        width: max-content;
        align-items: center;
        padding: 16px 0;
        width: 100px;
        padding-right: 22px;
        z-index: 2;
        cursor: pointer;
    }
    
    #mobile .dropdown__container {
        position: absolute;
        top: 70px;
        gap: 0;
        right: 0;
        flex-direction: column;
        border-radius: 8px;
        overflow: hidden;
        background: #2c2c2c;
    }

    #mobile .dropdown {
        width: 100%;
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
    padding: 12px;
    transition: .4s;
    overflow: hidden;
    width: 140px;
    height: 40px;
    outline: none;
}

.turnWhite__swith {
    position: absolute;
    left: 4px;
    display: flex;
    align-items: center;
    background: gray;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    transition: .2s;
}

.turnWhite--white .turnWhite__swith {
    box-shadow: none;
}

.turnWhite--white {
    background: rgb(235 235 235);
    transition: .4s;
}

.turnWhite--white text-btn {
    color: black;
}

text-btn {
    width: 55px;
    font-size: 1rem;
}

.emoji {
    font-size: 22px;
}
.escuro, .claro {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4px;
    white-space: nowrap;
}

.escuro {
    left: 42px;
}

.claro {
    right: 42px;
}
</style>
