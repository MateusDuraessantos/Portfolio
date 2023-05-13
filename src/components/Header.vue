<template>
    <nav>

        <div class="eu">
            <img src="eu.png" alt="Mateus Durães dos Santos">
            <p>Mateus Durães dos Santos</p>
        </div>

        <div class="links">
            <router-link to="/">Início</router-link>
            <router-link to="portfolio">Portfólio</router-link>
            <router-link to="/contato">Contato</router-link>
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
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 34px 40px 0 40px;
    font-size: 18px;
    z-index: 3;
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

.router-link-active {
    color: rgb(234, 69, 69);
}

button {
    color: white;
    font-size: 16px;
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
    font-size: 28px;
    font-weight: 200;
}

.eu img {
    width: 62px;
}
</style>