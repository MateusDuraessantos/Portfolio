<template>
    <footer class="sky" id="contato">
        <!-- Os céus proclamam a glória de Jesus -->
        <span class="sky__container" v-if="footerVisible">
            <video class="sky__background" v-if="footerVideo" src="inicio/black/bluesky_2.mp4" width="500px" height="500px" autoplay loop muted></video>
            <img class="sky__background--white" v-else src="inicio/black/footer__mobile.jpg" alt="sky" loading="lazy">
            <div class="sky__shadows" id="shadow"></div>
        </span>
        <span class="sky__container" v-else>
            <img class="sky__background--white" src="inicio/white/footer.jpg" alt="sky" loading="lazy">
            <div class="sky__shadows--white" id="shadow"></div>
        </span>
        <!-- Infos -->
        <div class="sky__informacoes" style="backdrop-filter: blur(0px);">
            <div class="informacoes__container">
                <address class="informacoes__content">
                    <div class="contatos__column">
                        <div class="decoration" @mouseenter="blurIn('enter')" @mouseleave="blurIn" @click="copyText('(11) 96593-9822')">
                            <div class="informacoes__contato">
                                <img :src="`icons/${iconsTheme}/whatsapp.svg`" alt="WhatsApp" loading="lazy">
                                <p class="contato__email">whatsapp</p>
                            </div>
                            <p class="decoration__info">(11) 96593-9822</p>
                            <img class="decoration__copy" :src="`icons/${iconsTheme}/copy.svg`" alt="Icone de copiar" loading="lazy">
                        </div>
                        <div class="decoration" @mouseenter="blurIn('enter')" @mouseleave="blurIn" @click="copyText('mateusduraessantos@gmail.com')">
                            <div class="informacoes__contato">
                                <img :src="`icons/${iconsTheme}/gmail.svg`" alt="Logo Email" loading="lazy">
                                <p class="contato__email">e-mail</p>
                            </div>
                            <div class="decoration__info">
                                mateusduraessantos@gmail.com
                            </div>
                            <img class="decoration__copy" :src="`icons/${iconsTheme}/copy.svg`" alt="Icone de copiar" loading="lazy">
                        </div>
                        <div class="decoration" @mouseenter="blurIn('enter')" @mouseleave="blurIn" href="https://www.behance.net/mateusduraes">
                            <div class="informacoes__contato">
                                <img :src="`icons/${iconsTheme}/behance.svg`" alt="Logo Behance" loading="lazy">
                                <p class=" contato__email">behance</p>
                            </div>
                            <div class="decoration__info">
                                Mateus Durães dos Santos
                            </div>
                            <img class="decoration__copy" :src="`icons/${iconsTheme}/link.svg`" alt="Icone de copiar" loading="lazy">
                        </div>
                    </div>
                </address>
                <div id="observador__footer"
                    style="
                        height: 200px;
                        display: flex;
                        align-items: flex-end;
                        position: absolute;
                        bottom: 0;
                    "
                >
                    <p class="frase">Quem disse que rodapés precisam ser chatos?
                        <br>
                        <br>
                    </p>
                </div>
            </div>
        </div>
        <img class="sky__planet_01 sky__planet" :src="`inicio/${whiteImages}/planet_01.webp`" alt="" loading="lazy">
        <img class="sky__planet_02 sky__planet" :src="`inicio/${whiteImages}/planet_02.webp`" alt="" loading="lazy">
        <img class="sky__planet_03 sky__planet" :src="`inicio/${whiteImages}/planet_03.webp`" alt="" loading="lazy">
        <img class="sky__planet_05 sky__planet" :src="`inicio/${whiteImages}/planet_05.webp`" alt="" id="planet_05" loading="lazy">
        <img class="sky__planet_06 sky__planet" :src="`inicio/${whiteImages}/planet_06.webp`" alt="" loading="lazy">
        <img class="sky__planet_07 sky__planet" :src="`inicio/${whiteImages}/planet_07.webp`" alt="" loading="lazy">
        <img class="sky__planet_08 sky__planet" :src="`inicio/${whiteImages}/planet_08.webp`" alt="" loading="lazy">
        <img class="sky__planet_09 sky__planet" :src="`inicio/${whiteImages}/planet_09.webp`" alt="" loading="lazy">
        <img class="sky__planet_10 sky__planet" :src="`inicio/${whiteImages}/planet_10.webp`" alt="" loading="lazy">
        <div class="smile_cont sky__planet" id="planet_11">
            <img class="sky__planet_11 sky__planet" :src="`inicio/${whiteImages}/planet_11.webp`" alt="" loading="lazy">
            <img class="smile" :src="`inicio/${whiteImages}/smile.svg`" alt="" loading="lazy">
        </div>
        <img class="sky__planet_12 sky__planet" :src="`inicio/${whiteImages}/planet_12.webp`" alt="" id="planet_12" loading="lazy">
        <img class="sky__planet_13 sky__planet" :src="`inicio/${whiteImages}/planet_13.webp`" alt="" id="planet_13" loading="lazy">
        <img class="sky__planet_14 sky__planet" :src="`inicio/${whiteImages}/planet_14.webp`" alt="" id="planet_14" loading="lazy">
    </footer>
</template>

<script>
export default {
    data() {
        return {
            iconsTheme: 'blackicons',
            footerVideo: Boolean
        }
    },
    props: {
        whiteImages: String,
        blockClicked: String,
        footerVisible: Boolean,
    },
    mounted() {
        this.observador()
        if (window.screen.availWidth < 1000) {
            this.footerVideo = false
        }
    },
    watch: {
        blockClicked(){
            this.iconsTheme = this.blockClicked
        }
    },
    methods: {
        blurIn(enter) {
            clearTimeout(this.blurTimeout)
            const footer = document.querySelector('.sky__informacoes')
            let blur = Number(footer.style.backdropFilter.split('(')[1][0])
            let y = blur
            const addBlur = (increment) => {
                footer.setAttribute('style', `backdrop-filter: blur(${y}px)`);
                y += increment
                if ((increment === 1 && y < 10) || (increment === -1 && y >= 0)) {
                    clearTimeout(this.blurTimeout)
                    this.blurTimeout = setTimeout(() => addBlur(increment), 20);
                }
            }
            addBlur(enter == 'enter' ? 1 : -1)
        },
        copyText(content) {
            const textToCopy = content; // Texto a ser copiado
            navigator.clipboard.writeText(textToCopy)
                .then(() => {
                    alert("Texto copiado: " + textToCopy);
                })
                .catch((error) => {
                    console.error("Erro ao copiar texto:", error);
                });
        },
        observador() { // Altear o estilo do header ao chegar no footer
            const header = document.getElementById('header')
            const observer = new IntersectionObserver(entries => {
                this.$emit('nomeEvento', entries[0].isIntersecting)

                if (entries[0].isIntersecting) header.classList.add('hiddenHeader') 
                else header.classList.remove('hiddenHeader')
            
            })
            observer.observe(document.getElementById('observador__footer'))
        },
    },
}
</script>

<style>
:root {
    --shadow-color: black;
    --sky-scale: 0.9;
}

.contato__email {
    padding-right: 10px;
    font-size: 20px;
}

.sky {
    position: relative;
    height: 100vh;
    width: 100vw;
    z-index: 2;
}

.sky::after {
    position: absolute;
    content: '';
    top: 0;
    width: 100vw;
    height: 200px;
    z-index: 2;
}

.sky::before {
    position: absolute;
    content: '';
    bottom: 100%;
    width: 100vw;
    height: 200px;
    z-index: 2;
    background-image: linear-gradient(transparent, black);
}


.sky__container {
    display: flex;
    flex-direction: column;
}

.sky__shadows,
.sky__shadows--white {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: .2s;
}

.sky__shadows {
    background-image: radial-gradient(transparent, transparent, var(--shadow-color), var(--shadow-color));
}

.sky__shadows--white {
    background-image: linear-gradient(#E9DFDF, transparent);
    height: 30vh;
}

.sky__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.sky__background--white {
    width: 100%;
    height: 100vh;
    object-fit: cover;
}

.sky__informacoes {
    mix-blend-mode: difference;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 4;
}

.informacoes__container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    margin: auto;
    width: calc(100% - 200px);
    padding: 40px 0;
}

.contatos__column {
    display: flex;
    align-items: center;
    gap: 100px;
}

.decoration {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    width: max-content;
}

.decoration:hover .decoration__copy {
    opacity: 1;
    width: 30px;
}

.decoration__copy {
    position: absolute;
    right: -28px;
    opacity: 0;
    width: 0;
    transition: .2s;
}

.decoration__copy:hover {
    opacity: 0.6 !important;
    transition: .2s;
}

.decoration__info {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    text-align: center;
    bottom: -40px;
    height: 40px;
    opacity: 0;
    border-radius: 10vw;
    transition: .2s;
    font-size: 18px;
}

.decoration:hover .decoration__info {
    opacity: 1;
    transition: .2s;
}

.informacoes__contato {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    cursor: pointer;
    gap: 20px;
}

.informacoes__contato img {
    width: 34px;
    height: 34px;
    margin-top: 3px;
}

.informacoes__content {
    display: flex;
    justify-content: center;
    gap: 4vw;
    width: max-content;
    margin: auto;
}

.frase {
    color: #9aa3b2;
    font-weight: 400;
    text-align: center;
}


.smile_cont {
    position: absolute;
    left: 18%;
    bottom: 0;
    width: 22%;
    animation-name: sky_11;
}

.smile {
    position: absolute;
    right: 0;
    width: 34%;
    transform: translate(60%, -280%);
    z-index: 1;
}

.sky__planet {
    position: absolute;
    z-index: 2;
    animation-duration: 32s;
    animation-iteration-count: infinite;
}

.sky__planet_01 {
    width: 11%;
    left: 6%;
    top: 14%;
    animation-name: sky_04;
}

.sky__planet_02 {
    width: 13%;
    bottom: 4%;
    right: 32vw;
    animation-name: sky_01;
}

.sky__planet_03 {
    width: 16%;
    top: 6%;
    left: 28%;
    animation-name: sky_02;
}

.sky__planet_05 {
    top: 38%;
    right: 30%;
    width: 13%;
    animation-name: sky_02;
}

.sky__planet_06 {
    bottom: 35%;
    width: 24%;
    right: 10%;
    animation-name: sky_08;
}

.sky__planet_07 {
    width: 7.5%;
    top: 21%;
    right: 37%;
    animation-name: sky_11;
}

.sky__planet_08 {
    width: 15%;
    top: 17%;
    left: 30%;
    animation-name: sky_08;

}

.sky__planet_09 {
    animation-name: sky_01;
    top: 40%;

    left: 20%;
    width: 9%;
}

.sky__planet_10 {
    width: 17%;
    bottom: 18%;
    left: 26%;
    z-index: 3;
    animation-name: sky_04;
}

.sky__planet_11 {
    width: 100%;
    z-index: 2;
    bottom: 4vh;
    animation-name: sky_11;
}

.sky__planet_12 {
    width: 28%;
    right: 10%;
    top: 0;
    z-index: 1;
    animation-name: sky_08;
}

.sky__planet_13 {
    left: 0;
    width: 15%;
    bottom: 30%;
    animation-name: sky_y;
}

.sky__planet_14 {
    width: 6%;
    right: 0;
    bottom: 45%;
    animation-name: sky_13;
}

@keyframes sky_01 {
    0% {
        transform: scale(var(--sky-scale)) translate(0, 0);
    }

    20% {
        transform: scale(var(--sky-scale)) translate(0, 0);
    }

    45% {
        transform: scale(var(--sky-scale)) translate(-30px, -40px);
    }

    75% {
        transform: scale(var(--sky-scale)) translate(10px, -60px);
    }

    100% {
        transform: scale(var(--sky-scale)) translate(0, 0);
    }
}

@keyframes sky_02 {
    0% {
        transform: scale(var(--sky-scale)) translate(0, 0);
    }

    15% {
        transform: scale(var(--sky-scale)) translate(-60px, 0);
    }

    35% {
        transform: scale(var(--sky-scale)) translate(-60px, -20px);
    }

    75% {
        transform: scale(var(--sky-scale)) translate(-60px, 20px);
    }

    100% {
        transform: scale(var(--sky-scale)) translate(0, 0);
    }
}

@keyframes sky_04 {
    0% {
        transform: scale(var(--sky-scale)) translate(0, 0);
    }

    50% {
        transform: scale(var(--sky-scale)) translate(30px, 40px);
    }

    100% {
        transform: scale(var(--sky-scale)) translate(0, 0);
    }
}

@keyframes sky_08 {
    0% {
        transform: scale(var(--sky-scale)) translate(0, 0);
    }

    35% {
        transform: scale(var(--sky-scale)) translate(20px, 50px);
    }

    70% {
        transform: scale(var(--sky-scale)) translate(-35px, 60px);
    }

    100% {
        transform: scale(var(--sky-scale)) translate(0, 0);
    }
}

@keyframes sky_11 {
    0% {
        transform: scale(var(--sky-scale)) translate(0, 0);
    }

    50% {
        transform: scale(var(--sky-scale)) translate(20px, 0);
    }

    75% {
        transform: scale(var(--sky-scale)) translate(0px, -30px);
    }

    90% {
        transform: scale(var(--sky-scale)) translate(20px, 0);
    }

    100% {
        transform: scale(var(--sky-scale)) translate(0, 0);
    }
}

@keyframes sky_13 {
    0% {
        transform: scale(var(--sky-scale)) translatey(0);
    }

    10% {
        transform: scale(var(--sky-scale)) translatey(0);
    }

    35% {
        transform: scale(var(--sky-scale)) translatey(60px);
    }

    90% {
        transform: scale(var(--sky-scale)) translatey(0);
    }

    100% {
        transform: scale(var(--sky-scale)) translatey(0);
    }
}

@keyframes sky_y {
    0% {
        transform: translatey(0);
    }

    50% {
        transform: translatey(60px);
    }

    100% {
        transform: translatey(0);
    }
}

@media screen and (max-width: 1000px) {

    @media screen and (max-width: 1000px) {
        :root {
            --sky-scale: 1.4
        }
    }

    .informacoes__content {
        gap: 20px;
    }

    .contatos__column {
        flex-direction: column;
    }

    .max__width {
        width: calc(100% - 50px);
    }

    .informacoes__container {
        width: 90%;
    }

    .informacoes__container {
        width: calc(100% - 100px);
    }

    @keyframes sky_01 {
        0% {
            transform: scale(var(--sky-scale)) translate(0, 0);
        }

        20% {
            transform: scale(var(--sky-scale)) translate(0, 0);
        }

        45% {
            transform: scale(var(--sky-scale)) translate(-30px, -40px);
        }

        75% {
            transform: scale(var(--sky-scale)) translate(10px, -60px);
        }

        100% {
            transform: scale(var(--sky-scale)) translate(0, 0);
        }
    }

    @keyframes sky_02 {
        0% {
            transform: scale(var(--sky-scale)) translate(0, 0);
        }

        15% {
            transform: scale(var(--sky-scale)) translate(-60px, 0);
        }

        35% {
            transform: scale(var(--sky-scale)) translate(-60px, -20px);
        }

        75% {
            transform: scale(var(--sky-scale)) translate(-60px, 20px);
        }

        100% {
            transform: scale(var(--sky-scale)) translate(0, 0);
        }
    }

    @keyframes sky_04 {
        0% {
            transform: scale(var(--sky-scale)) translate(0, 0);
        }

        50% {
            transform: scale(var(--sky-scale)) translate(30px, 40px);
        }

        100% {
            transform: scale(var(--sky-scale)) translate(0, 0);

        }
    }

    @keyframes sky_08 {
        0% {
            transform: scale(var(--sky-scale)) translate(0, 0);
        }

        35% {
            transform: scale(var(--sky-scale)) translate(20px, 50px);
        }

        70% {
            transform: scale(var(--sky-scale)) translate(-35px, 60px);
        }

        100% {
            transform: scale(var(--sky-scale)) translate(0, 0);
        }
    }

    @keyframes sky_11 {
        0% {
            transform: scale(var(--sky-scale)) translate(0, 0);
        }

        50% {
            transform: scale(var(--sky-scale)) translate(20px, 0);
        }

        75% {
            transform: scale(var(--sky-scale)) translate(0px, -30px);
        }

        90% {
            transform: scale(var(--sky-scale)) translate(20px, 0);
        }

        100% {
            transform: scale(var(--sky-scale)) translate(0, 0);
        }
    }

    @keyframes sky_13 {
        0% {
            transform: scale(var(--sky-scale)) translatey(0);
        }

        10% {
            transform: scale(var(--sky-scale)) translatey(0);
        }

        35% {
            transform: scale(var(--sky-scale)) translatey(60px);
        }

        90% {
            transform: scale(var(--sky-scale)) translatey(0);
        }

        100% {
            transform: scale(var(--sky-scale)) translatey(0);
        }
    }
}

@media screen and (max-width: 850px) {

    .informacoes__container {
        padding: 140px 0;
    }

    .informacoes__contato img {
        width: 30px;
    }

    .informacoes__contato {
        font-size: 1rem;
    }

    .informacoes__container {
        width: 100%;
        gap: 0;
    }

    .informacoes__contato img {
        width: 30px;
    }

    .frase {
        font-size: 0.8rem;
    }

    .informacoes__contato {
        gap: 6px;
    }
}

@media screen and (max-height: 800px) {
    :root {
        --sky-scale: 1
    }
}

@media only screen and (max-width: 500px) {

    .decoration__info,
    .decoration__copy {
        display: none;
    }

    .sky {
        width: calc(100% - 7px);
    }
}

.whiteTheme .sky__informacoes {
    mix-blend-mode: inherit;
}

.whiteTheme .contato__email, .whiteTheme .decoration__info {
    color: black;
}

.whiteTheme .sky::before {
    background-image: linear-gradient(transparent, rgb(232, 222, 222));
}
</style>