<template>
    <div class="description">
        <h1 class="description__h1">{{ VIf.name }}</h1>
        
        <div class="description__links">
            <a :href="VIf.link" target="_blank" v-if="VIf.link"
                class="link__container">
                Website online
                <img class="link__img" src="external.svg" alt="Link para o webiste desse projeto" loading="lazy">
            </a>
            <a :href="VIf.github" target="_blank" v-if="VIf.github"
                class="link__container">
                GitHub
                <img class="link__img" src="github_logo.svg" alt="Link para o Github desse projeto" loading="lazy">
            </a>
        </div>
        
        <p class="description__p">{{ VIf.description }}</p>
    </div>
</template>


<script>
export default {
    props: {
        VIf: String
    }
}
</script>

<style>
.description {
    display: flex;
    padding: 20px;
    gap: 20px;
    flex-direction: column;
}

.description__p {
    height: 100px;
    overflow-y: scroll;
}

.description__h1 {
    font-size: 1.4rem;
    font-weight: 600;
    width: 100%;
    color: var(--creme) !important;
}


.description__links {
    display: flex;
    gap: 14px;
}

.description__links a {
    color: var(--creme) !important;
}

.link__img {
    width: 20px;
    min-width: 20px;
    margin: auto;
    z-index: 2;
    transition: .2s;
}

.link__container {
    height: 38px;
    opacity: 1;
    display: flex;
    align-items: center;
    width: max-content;
    padding: 0 14px 0 16px;
    text-decoration: none;
    gap: 10px;
    background: black;
    border-radius: 10vw;
    backdrop-filter: blur(15px);
    transition: .2s;
}

.link__container:hover {
    background: rgba(107, 107, 107, 0.6);
    transition: .2s;
}

</style>