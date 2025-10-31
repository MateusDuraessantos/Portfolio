<template>
    <!-- LOADING -->
    <div class="loading__container" :id="loadId">
        <p>carregando</p>
        <div class="loading"></div>
    </div>
    <!-- IMAGENS -->
    <img
        :class="loadClass"
        loading="lazy"
        height="500"
        width="500"
        @load="loadingImg(loadId, 'Primeira')"
        :src="loadSrc"
        :alt="loadAlt.alt"
    >
</template>

<script>
export default {
    props: {
        loadId: Number,
        loadAlt: String,
        loadSrc: String,
        loadClass: String,
    },
    methods: {
        loadingImg(id) {
            if (this.blockLoadingVFor != id) document.getElementById(id).classList.add('loading__stop')
        },
    }
}
</script>

<style>
.loading__container {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(20px);
    width: 100%;
    top: 0;
    left: 0;
    height: 100%;
    overflow: hidden;
    z-index: 6;
}

.loading__container p {
    font-size: 15px;
    font-weight: 400;
    color: #b5b5b5 !important;
}

.loading__stop {
    display: none;
}

.loading {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 9px dotted rgb(183 183 183);
    z-index: 1;
    animation-name: loading;
    animation-duration: 12s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    border-spacing: 17px;
}

.loading__container::after {
    content: '';
    position: absolute;
    width: 50px;
    height: 2000px;
    border-radius: 50px;
    filter: blur(44px);
    background: rgb(56, 56, 56);
    transform: rotate(14deg);
    animation: loadingAnime 2s infinite;
}

.loading__ctn {
    position: relative;
}
</style>