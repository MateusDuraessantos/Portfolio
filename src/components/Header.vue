<template>
    <nav>

        <div class="eu">
            <img class="foto" src="eu.png" alt="Mateus Durães dos Santos">
            <p class="nome">Mateus Durães dos Santos</p>
        </div>

        <div class="links">
            <router-link to="/">Início</router-link>
            <router-link to="portfolio">Portfólio</router-link>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style>
nav {
    display: flex;
    align-items: center;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    padding: 0 40px;
    font-size: 1.2rem;
    height: 10.1vw;
    min-height: 70px;
    top: 0;
    z-index: 3;
    backdrop-filter: blur(14px);
    max-height: 140px;
}

a {
    line-height: 0;
    text-decoration: none;
    transition: .2s;
}

a:hover {
    color: rgb(175, 175, 175);
    transition: .2s;
}

.router-link-active,
a:focus {
    color: rgb(234, 69, 69);
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
    font-weight: 200;
}

.foto {
    width: 62px;
}

.nome {
    font-size: 1.4rem;
}

/* Mobile version */

@media screen and (max-width: 800px) {

    .cards {
        height: 27vw;
    }

    .foto {
        display: none;
        width: 42px;
    }

}

@media screen and (max-width: 600px) {

    nav,
    .nome {
        font-size: 0.8rem;
    }

    nav {
        padding: 0 10px;

    }

}
</style>