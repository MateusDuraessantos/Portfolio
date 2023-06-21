<template>
    <nav>

        <div class="eu">
            <img class="foto" src="eu.png" alt="Mateus Durães dos Santos">
            <p class="nome">Mateus Durães dos Santos</p>
        </div>

        <div class="links">
            <router-link style="display: flex;" to="/">
                <a class="router-link-a dropdown desktop" @click="scrollDown('design')">Design</a>
                <a class="router-link-a dropdown desktop" @click="scrollDown('programacao')">Programação</a>
                <a class="router-link-a dropdown desktop" @click="scrollDown('sobre')">Sobre</a>
                <a class="router-link-a dropdown desktop" @click="scrollDown('contato')">Contato</a>
            </router-link>

            <router-link class="router-link-a dropdown mobile" to="/">Início <span
                    style="display: flex; position: absolute; right: -12px; top: 11px; font-size: 20px; transform: rotate(90deg);">❯</span>

                <div class="dropdown__container">
                    <a class="dropdown__option" @click="scrollDown('design')">Design</a>
                    <a class="dropdown__option" @click="scrollDown('programacao')">Programação</a>
                    <a class="dropdown__option" @click="scrollDown('sobre')">Sobre</a>
                    <a class="dropdown__option" @click="scrollDown('contato')">Contato</a>
                </div>

            </router-link>
            <router-link class="router-link-a dropdown" to="portfolio">Portfólio</router-link>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        scrollDown(ancora) {
            setTimeout(() => {
                const obj = document.getElementById(ancora)

                window.scrollTo({
                    top: obj.offsetTop,
                    behavior: 'smooth'
                })

            }, 50)
        }
    }
}
</script>

<style scoped>
.mobile {
    display: none;
}

.desktop {
    display: flex;
}



.dropdown {
    position: relative;
    padding: 10px;
}

.dropdown__option {
    z-index: 300;
}

.dropdown__container {
    position: absolute;
    top: 52px;
    right: 0;
    display: flex;
    display: none;
    opacity: 0.3;
    flex-direction: column;
    border-radius: 8px;
    overflow: hidden;
}

.dropdown:hover .dropdown__container {
    display: flex;
    opacity: 1;
}

.dropdown__option {
    background: #1f1f1f;
    padding: 20px;
}

.dropdown__option:hover {
    background: rgb(71, 71, 71);

}

/*  */

nav {
    display: flex;
    align-items: center;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 80px;
    font-size: 1.2rem;
    min-height: 70px;
    top: 0;
    backdrop-filter: blur(14px);
    width: 100vw;
    height: 10.1vw;
    max-height: 100px;
    z-index: 5;
}

* {
    text-decoration: none;
}


.router-link-active span {
    color: rgb(234, 69, 69);
    transition: .2s;
}

.router-link-active:hover {
    color: red;
}

.router-link-active,
.router-link-a:focus {
    color: rgb(234, 69, 69);
    position: relative;
}

.router-link-a {
    transition: .2s;
    line-height: 32px;
}

.router-link-a:hover,
.router-link-a:hover span {
    color: rgb(234, 69, 69);
    transition: .2s;
}

button {
    color: white;
    font-size: 1rem;
    background: none;
    border: none;
}

.links {
    display: flex;
    gap: 30px;
}

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
}

/* Mobile version */


@media screen and (min-width: 1280px) {
    * {
        font-size: 18px;
    }
}



@media screen and (max-width: 1400px) {
    .desktop {
        display: none;
    }

    .mobile {
        display: block;
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


    nav,
    .nome {
        font-size: 0.8rem;
    }

    nav {
        padding: 0 10px;

    }

}
</style>