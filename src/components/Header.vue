<template>
    <nav>

        <button>
            something
        </button>

        <div class="links">
            <button><router-link to="/">Início</router-link></button>
            <button><router-link to="Portfolio">Portfólio</router-link></button>
            <button>contato</button>
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
    height: 80px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(5px);
    padding: 0 30px;

    z-index: 3;
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
</style>