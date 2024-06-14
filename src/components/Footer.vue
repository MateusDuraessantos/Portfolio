<template>
    <footer class="sky " id="contato">

        <!-- Mensagem de sucesso -->
        
        <div class="sucesso" v-if="success" id="sucesso">
            <div class="sucesso__message">
                <div>
                    <p class="sucesso__p sucesso__p--1">Email enviado com sucesso.</p>
                    <p class="sucesso__p">Em breve entrarei em contato!</p>
                </div>
                <button class="sucesso__close" @click="fecharSuccess">Fechar</button>
            </div>
        </div>
        
        <!-- Mensagem de erro -->

        <div class="sucesso" v-if="error" id="error">
            <div class="sucesso__message">
                <div>
                    <p class="sucesso__p error__p--1">Ops, desculpe. mensagem não enviada.</p>
                    <p class="sucesso__p">Tente novamente ou entre em contato pelas outras redes socias!</p>
                </div>
                <button class="error__close" @click="fecharError">Fechar</button>
            </div>
        </div>

        <div class="forms__overlay" id="forms">
            <div class="forms__container">
                <button class="forms__close" @click="openForms">✕</button>

                <!-- Formulário -->

                <form
                    @submit.prevent="handleSubmit"
                    class="sky__forms"
                >
                    <!-- Nome -->
                    
                    <label for="nome">Nome</label>
                    <input
                        class="forms__field"
                        v-model="nome" 
                        type="text"
                        name="nome"
                        id="nome"
                        placeholder="Digite aqui"
                        required
                    >

                    <!-- Email -->
                    
                    <label for="email">E-mail</label>
                    <input class="forms__field"
                        v-model="email"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Digite aqui"
                        required
                    >

                    <!-- Mensagem -->
                    
                    <label for="message">Mensagem</label>
                    <textarea
                        class="forms__textarea"
                        v-model="mensagem" 
                        type="text"
                        id="message"
                        name="message"
                        placeholder="Digite aqui"
                        required
                    ></textarea>
                    
                    <!-- Button -->
                    <button class="forms__button--send" type="submit">Enviar</button>
                </form>
            </div>
        </div>

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

                        <!-- Whatsapp -->
                        
                        <a
                            class="decoration"
                            @mouseenter="blurIn('enter')"
                            @mouseleave="blurIn"
                            href="https://wa.me/5511965939822"
                            target="_blank"
                        >
                            <div class="informacoes__contato">
                                <img :src="`icons/${iconsTheme}/whatsapp.svg`" alt="WhatsApp" loading="lazy">
                                <p class="contato__email">Whatsapp</p>
                            </div>
                            <p class="decoration__info">(11) 96593-9822</p>
                            <img class="decoration__copy" :src="`icons/${iconsTheme}/link.svg`" alt="Icone de copiar" loading="lazy">
                        </a>

                        <!-- E-mail -->

                        <a
                            class="decoration"
                            @mouseenter="blurIn('enter')"
                            @mouseleave="blurIn"
                            @click="copyText('mateusduraessantos@gmail.com')"
                        >
                            <div class="informacoes__contato">
                                <img :src="`icons/${iconsTheme}/gmail.svg`" alt="Logo Email" loading="lazy">
                                <p class="contato__email">E-mail</p>
                            </div>
                            <div class="decoration__info">mateusduraessantos@gmail.com</div>
                            <img class="decoration__copy" :src="`icons/${iconsTheme}/copy.svg`" alt="Icone de copiar" loading="lazy">
                        </a>

                        <!-- Behance -->

                        <a
                            class="decoration"
                            @mouseenter="blurIn('enter')"
                            @mouseleave="blurIn"
                            href="https://www.behance.net/mateusduraes"
                            target="_blank"
                        >
                            <div class="informacoes__contato">
                                <img :src="`icons/${iconsTheme}/behance.svg`" alt="Logo Behance" loading="lazy">
                                <p class=" contato__email">Behance</p>
                            </div>
                            <div class="decoration__info">Mateus Durães dos Santos</div>
                            <img class="decoration__copy" :src="`icons/${iconsTheme}/link.svg`" alt="Icone de copiar" loading="lazy">
                        </a>
                        
                        <button class="forms__button" @click="openForms" href="#">
                            Enviar mensagem agora!
                        </button>
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
                        <br><br>
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
            iconsTheme: 'whiteicons',
            footerVideo: Boolean,
            success: false,
            error: false,
            nome: '',
            email: '',
            mensagem: '',
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
        handleSubmit() {
            const formData = {
                nome: this.nome,
                email: this.email,
                mensagem: this.mensagem
            };

            fetch('https://formspree.io/f/mqkrnqyn', {
                method: 'POST',
                body: JSON.stringify(formData), // Converte os dados para string JSON
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json(); // processa a resposta como JSON
            })
            .then(data => {
                console.log('Success:', data);
                this.success = true; // Supõe que você tem uma propriedade 'success' para controle de estado
            })
            .catch((error) => {
                console.error('Error:', error);
                this.error = true; // Supõe que você tem uma propriedade 'error' para controle de estado
            });
        },
        fecharSuccess(){
            document.getElementById('sucesso').classList.add('sucesso--close')
            setTimeout(() => {
                this.success = false
                console.log(this.success);
            }, 1000)
            this.openForms()
        },
        fecharError(){
            document.getElementById('error').classList.add('sucesso--close')
            setTimeout(() => {
                this.error = false
                console.log(this.success);
            }, 1000)
            
            this.openForms()
        },
        openForms(){
            const open = document.getElementById('contato')
            const forms = document.getElementById('forms')

            if(open.classList[1] == ('open')){
                open.classList.remove('open')
                forms.classList.remove('sky__overlay--open')
            }else{
                open.classList.add('open')
                forms.classList.add('sky__overlay--open')
            }
        },
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
            // Só funciona quando está online, HTTPS precisa ser seguro            
            if (!navigator.clipboard) {
                console.error('Clipboard API not available');
                alert('Copying not supported in this browser');
                return;
            }
            navigator.clipboard.writeText(content)
            .then(() => {
                alert("Texto copiado: " + content);
            })
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
    font-weight: 600;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.575);
}

.sky {
    position: relative;
    height: 100vh;
    width: 100vw;
    z-index: 2;
    overflow: hidden;
}


/* Sucesso */

.sucesso {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 40;
    backdrop-filter: blur(16px);
}

.sucesso__message {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 444px;
    border-radius: 6px;
    padding: 20px;
}

.sucesso__p {
    text-align: center;
    font-weight: 700;
    font-size: 20px;
}

.sucesso__p--1 {
    font-weight: 400;
    color: #005a00 !important;
}

.error__p--1 {
    font-weight: 400;
    color: var(--vermelho) !important;
}

.error__close, .sucesso__close {
    border: none;
    font-size: 16px;
    border-radius: 50px;
    color: white !important;
    padding: 0 13px;
    height: 36px;
    transition: .2s;
    margin: auto;
    margin-top: 20px;
    width: 78%;
    transition: .2s;
}

.sucesso__close {
    background: #409640;
}

.error__close {
    background: var(--vermelho);
}

.sucesso__close:hover {
    background: rgb(154, 241, 24);
    transition: .2s;
}

.sucesso--close {
    animation: closeSuccess 1s forwards;
}

@keyframes closeSuccess {
    from { opacity: 1 }
    to { opacity: 0 }
}
/* Formulário */

.forms__container {
    position: absolute;    
}

.forms__close {
    position: absolute;
    top: -34px;
    right: -26px;
    background: none;
    border: none;
    font-size: 24px;
    transition: .5s;
    opacity: 1;
}

.forms__close:hover {
    opacity: 0.4;
    transition: .5s;
}

.forms__overlay {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    backdrop-filter: blur(4px);
    opacity: 0;
    pointer-events: none;
    z-index: 5;
    transition: .5s;
}

/*  */

.sky__overlay--open {
    opacity: 1;
    pointer-events: initial;
}

.sky__forms {
    display: flex;
    flex-direction: column;
    width: 300px;
    gap: 10px;
}

.forms__button--send {
    height: 36px;
    border-radius: 50px;
    border: none;
    font-size: 15px;
    font-weight: 600;
    transition: .5s;
    color: black;
    background: var(--creme);
    box-shadow: 1px 1px 32px rgb(114 35 35 / 50%);
}

.forms__button--send:hover {
    transition: .5s;
    background: var(--vermelho);
    color: var(--creme);
}

.forms__button {
    position: absolute;
    border: none;
    font-size: 16px;
    background: #fffcf6;
    border-radius: 50px;
    color: #1c1c1c;
    padding: 0 22px;
    height: 46px;
    bottom: -120px;
    z-index: 22;
    transition: .2s;
    width: max-content !important;
    box-shadow: 1px 1px 32px rgb(114 35 35 / 50%);
}

.forms__button:hover {
    transition: .2s;
    background: var(--vermelho);
}

.forms__field, input, textarea, .forms__button {
    padding-top: 12px;
    height: 36px;
    padding: 0 14px;
    background: var(--creme);
    border-radius: 50px;
    border: none;
    width: 100%;
}

.forms__textarea {
    height: 160px;
    max-width: 300px;
    min-width: 300px;
}

input, textarea {
    height: 36px;
    border-radius: 20px;
    border: none;
    width: 100%;
    padding: 12px 14px 14px 14px;
    transition: .5s;
}


input::placeholder, textarea::placeholder, .forms__button {
    color: gray;
}

input, textarea {
    transition: .5s;
    outline: transparent 1px solid;
    box-shadow: 1px 1px 12px rgb(114 35 35 / 50%);
}

input:focus, textarea:focus,
input:hover, textarea:hover {
    transition: .5s;
    outline: rgb(255, 54, 54) 1px solid;
    color: var(--vermelho);
}


.whiteTheme .sky::after {
    position: absolute;
    content: '';
    top: 0;
    width: 100vw;
    background-image: linear-gradient(var(--body_color), transparent);
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
    /* mix-blend-mode: difference; */
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
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
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
    cursor: pointer;
    transition: .2s;
}

.decoration__copy:hover {
    opacity: 0.6;
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

.sky__planet_01, .sky__planet_02, .sky__planet_03, .sky__planet_04, .sky__planet_05, .sky__planet_06, .sky__planet_07, .sky__planet_08, .sky__planet_09, .sky__planet_10, .sky__planet_11, .sky__planet_12, .sky__planet_13, .sky__planet_14 {
    transition: 2s;
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
    bottom: 25%;
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
    bottom: 30%;
    left: 26%;
    z-index: 3;
    animation-name: sky_04;
}

.sky__planet_11 {
    width: 100%;
    z-index: 2;
    bottom: -14vh;
    left: 0;
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
    0% { transform: scale(var(--sky-scale)) translate(0, 0) }
    20% { transform: scale(var(--sky-scale)) translate(0, 0) }
    45% { transform: scale(var(--sky-scale)) translate(-30px, -40px) }
    75% { transform: scale(var(--sky-scale)) translate(10px, -60px) }
    100% { transform: scale(var(--sky-scale)) translate(0, 0) }
}

@keyframes sky_02 {
    0% { transform: scale(var(--sky-scale)) translate(0, 0) }
    15% { transform: scale(var(--sky-scale)) translate(-60px, 0) }
    35% { transform: scale(var(--sky-scale)) translate(-60px, -20px) }
    75% { transform: scale(var(--sky-scale)) translate(-60px, 20px) }
    100% { transform: scale(var(--sky-scale)) translate(0, 0) }
}

@keyframes sky_04 {
    0% { transform: scale(var(--sky-scale)) translate(0, 0) }
    50% { transform: scale(var(--sky-scale)) translate(30px, 40px) }
    100% { transform: scale(var(--sky-scale)) translate(0, 0) }
}

@keyframes sky_08 {
    0% { transform: scale(var(--sky-scale)) translate(0, 0) }
    35% { transform: scale(var(--sky-scale)) translate(20px, 50px) }
    70% { transform: scale(var(--sky-scale)) translate(-35px, 60px) }
    100% { transform: scale(var(--sky-scale)) translate(0, 0) }
}

@keyframes sky_11 {
    0% { transform: scale(var(--sky-scale)) translate(0, 0) }
    50% { transform: scale(var(--sky-scale)) translate(20px, 0) }
    75% { transform: scale(var(--sky-scale)) translate(0px, -30px) }
    90% { transform: scale(var(--sky-scale)) translate(20px, 0) }
    100% { transform: scale(var(--sky-scale)) translate(0, 0) }
}

@keyframes sky_13 {
    0% { transform: scale(var(--sky-scale)) translatey(0) }
    10% { transform: scale(var(--sky-scale)) translatey(0) }
    35% { transform: scale(var(--sky-scale)) translatey(60px) }
    90% { transform: scale(var(--sky-scale)) translatey(0) }
    100% { transform: scale(var(--sky-scale)) translatey(0) }
}

@keyframes sky_y {
    0% { transform: translatey(0) }
    50% { transform: translatey(60px) }
    100% { transform: translatey(0) }
}

@media screen and (max-width: 1000px) {

    :root {
        --sky-scale: 1.4
    }

    @keyframes sky_01 {
        0% { transform: scale(var(--sky-scale)) translate(0, 0) }
        20% { transform: scale(var(--sky-scale)) translate(0, 0) }
        45% { transform: scale(var(--sky-scale)) translate(-30px, -40px) }
        75% { transform: scale(var(--sky-scale)) translate(10px, -60px) }
        100% { transform: scale(var(--sky-scale)) translate(0, 0) }
    }

    @keyframes sky_02 {
        0% { transform: scale(var(--sky-scale)) translate(0, 0) }
        15% { transform: scale(var(--sky-scale)) translate(-60px, 0) }
        35% { transform: scale(var(--sky-scale)) translate(-60px, -20px) }
        75% { transform: scale(var(--sky-scale)) translate(-60px, 20px) }
        100% { transform: scale(var(--sky-scale)) translate(0, 0) }
    }

    @keyframes sky_04 {
        0% { transform: scale(var(--sky-scale)) translate(0, 0) }
        50% { transform: scale(var(--sky-scale)) translate(30px, 40px) }
        100% { transform: scale(var(--sky-scale)) translate(0, 0) }
    }

    @keyframes sky_08 {
        0% { transform: scale(var(--sky-scale)) translate(0, 0) }
        35% { transform: scale(var(--sky-scale)) translate(20px, 50px) }
        70% { transform: scale(var(--sky-scale)) translate(-35px, 60px) }
        100% { transform: scale(var(--sky-scale)) translate(0, 0) }
    }

    @keyframes sky_11 {
        0% { transform: scale(var(--sky-scale)) translate(0, 0) }
        50% { transform: scale(var(--sky-scale)) translate(20px, 0) }
        75% { transform: scale(var(--sky-scale)) translate(0px, -30px) }
        90% { transform: scale(var(--sky-scale)) translate(20px, 0) }
        100% { transform: scale(var(--sky-scale)) translate(0, 0) }
    }

    @keyframes sky_13 {
        0% { transform: scale(var(--sky-scale)) translatey(0) }
        10% { transform: scale(var(--sky-scale)) translatey(0) }
        35% { transform: scale(var(--sky-scale)) translatey(60px) }
        90% { transform: scale(var(--sky-scale)) translatey(0) }
        100% { transform: scale(var(--sky-scale)) translatey(0) }
    }

    .informacoes__content {
        gap: 20px;
    }

    .contatos__column {
        flex-direction: column;
    }
    
    .informacoes__container {
        width: 100%;
        gap: 0;
        padding: 140px 0;
    }

    .informacoes__contato img {
        width: 30px;
    }

    .frase {
        font-size: 0.8rem;
    }

    .informacoes__contato {
        gap: 6px;
        font-size: 1rem;
    }
    
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


.open .sky__planet_01 {
    left: 10%;
    top: 8%;
}

.open .sky__planet_02 {
    bottom: 0%;
    right: 27vw;
}

.open .sky__planet_03 {
    top: 0%;
    left: 25%;
}

.open .sky__planet_05 {
    top: 18%;
    right: 1%;
}

.open .sky__planet_06 {
    bottom: 24%;
    right: 1%;
}

.open .sky__planet_07 {
    top: 4%;
    right: 44%;
}

.open .sky__planet_08 {
    top: -10%;
    left: 32%;
}

.open .sky__planet_09 {
    top: 27%;
    left: 7%;
}

.open .sky__planet_10 {
    bottom: -8%;
    left: 34%;
}

.open .sky__planet_11 {
    bottom: 4vh;
    left: -48%;
}

.open .sky__planet_12 {
    right: 12%;
    top: -10%;
}

.open .sky__planet_13 {
    left: 0;
    bottom: 30%;
}

.open .sky__planet_14 {
    right: 0;
    bottom: 45%;
}
</style>