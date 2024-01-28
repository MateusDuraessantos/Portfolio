<template>
    <section class="max__width" id="facaumorcamento">
        <div class="orcamento">
            <h1>Serviços:</h1>
            <img :src="`inicio/${whiteImages}/colors.svg`" class="orcamento__colors" alt="" loading="lazy">
            <img :src="`inicio/${whiteImages}/texts.svg`" class="orcamento__text" alt="" loading="lazy">
            <img :src="`inicio/${whiteImages}/tools.svg`" class="orcamento__tools" alt="" loading="lazy">
            <div class="orcamento__card--container">
                <div :class="`orcamento__card ${cards.class}`" v-for="cards in cardsOrcamento">
                    <div>
                        <p><strong>{{ cards.title }}</strong></p>
                        <br>
                        <span>
                            <span v-for="infos in cards.card">
                                <div class="li">
                                    <div style="display: flex; flex-direction: column; gap: 2px;">
                                        <p><strong>{{ infos.oferta }}</strong></p>
                                        <p style="font-size: 14px;">{{ infos.beneficio }}</p>
                                    </div>
                                </div>
                            </span>
                        </span>
                    </div>
                    <button href="#contato" class="orcamento__btn" @click="scrollDown('contato')">Contate-me</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        whiteImages: String
    },
    data() {
        return {
            cardsOrcamento: [
                {
                    title: 'Design',
                    card: [
                        {
                            oferta: 'Protótipo navegável',
                            beneficio: 'Você terá acesso a um protótipo navegavel, para entender melhor como o produto final será, antes de ser desenvolvido os códigos.',
                        },
                        {
                            oferta: 'Mobile first',
                            beneficio: 'Trabalho com designs tanto desktops quanto mobiles.'
                        },
                        {
                            oferta: 'Design único',
                            beneficio: 'Cada projeto é único, não utilizo layouts pré montados (salvo alguma necessidade do cliente).'
                        },
                    ],
                },
                {
                    title: 'Seu website online',
                    class: 'orcamento__card--2',
                    card: [
                        {
                            oferta: 'Hospedagem',
                            beneficio: 'Você não precisa se preocupar em colocar seu website online, eu cuido disso!'
                        },
                        {
                            oferta: 'Domínio próprio',
                            beneficio: 'Você escolhe o domínio desejado, exemplo: www.meusite.com.br, e eu implemento.'
                        },
                        {
                            oferta: 'Programação',
                            beneficio: 'Já tem um design de website pronto? eu posso fazer os códigos desse site para você.'
                        },
                        {
                            oferta: 'Otimização',
                            beneficio: ' Otimizado para carregar rapidamente.'
                        },
                    ],
                },
                {
                    title: 'Outros diferências',
                    class: 'orcamento__card--3',
                    card: [
                        {
                            oferta: '1 Mês de assistência',
                            beneficio: 'Após a entrega do projeto, ofereço 1 mês de assistencia para pequenas alterações, sem custo adicional.'
                        },
                        {
                            oferta: 'Códigos do website',
                            beneficio: 'Você terá acesso a todos os códigos desenvolvidos, para fazer alterações caso desejar.'
                        },
                        {
                            oferta: 'Responsividade Mobile/Desktop',
                            beneficio: 'O site será entrega com responsividade para todos dispositivos móveis.'
                        },
                    ],
                },
            ],
        }
    },
}
</script>

<style>
#facaumorcamento {
    padding-top: 10px;
}

.orcamento {
    position: relative;
    background: rgba(40, 71, 83, 0.418);
    backdrop-filter: blur(10px);
    width: 100%;
    margin-top: 120px;
    padding: 80px;
    z-index: 1;
}

.orcamento h1 {
    margin-bottom: 20px;
    font-size: 1.5rem;
}

.whiteTheme .orcamento {
    background: rgba(255, 255, 255, 0.6);
}

.orcamento__colors {
    position: absolute;
    right: 30px;
    top: -100px;
    height: 200px;
}

.orcamento__text {
    position: absolute;
    bottom: -25px;
    right: 30px;
    height: 50px;
}

.orcamento__tools {
    position: absolute;
    top: -25px;
    left: 50px;
    height: 50px;
}

.orcamento__btn {
    position: relative;
    display: flex;
    align-items: center;
    background: #004ECC;
    font-size: 1rem;
    border: none;
    border-radius: 6px;
    padding: 4px 10px;
    color: white !important;
    transition: .2s
}

.orcamento__btn:hover {
    background: rgb(13, 118, 255);
    transition: .2s
}

.orcamento__btn::after {
    position: absolute;
    content: '';
    width: 20px;
    height: 20px;
    object-fit: contain;
    right: 12px;
    background-image: url('../../public/icons/whiteicons/arrow.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
}

.orcamento__tools img {
    width: 24px;
    margin: 0 2px;
    object-fit: contain;
}

.orcamento__card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    background: white;
    border-radius: 26px;
    padding: 30px;
    width: 100%;
    height: max-content;
    max-height: 630px;
}

.orcamento__card * {
    color: black;
}

.orcamento__card--container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    width: 100%;
    height: max-content;
    margin: auto;
}

.orcamento__card--2 {
    margin-top: 25%;
}

.orcamento__card--3 {
    margin-top: 50%;
}

@media screen and (max-width: 1380px) {

    .orcamento__card--2,
    .orcamento__card--3 {
        margin-top: 0;
    }

    .orcamento__card {
        height: 100%;
    }
}

.orcamento__card p {
    align-self: flex-start;
}

.orcamento__card p,
.orcamento__card strong {
    text-shadow: none;
}

.orcamento__card .li {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;
    gap: 20px;
    margin-bottom: 10px;
    margin-left: 20px;
}

.orcamento__card .li::before {
    position: absolute;
    content: '';
    top: 2px;
    left: -26px;
    height: 22px;
    width: 22px;
    border-radius: 50%;
    background-image: url('../../public/icons/blackicons/check.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top;
}

.orcamento__card img {
    width: 40px;
    height: 40px;
    object-fit: contain;
    object-position: right;
}

.orcamento__icons {
    display: flex;
    gap: 10px;
    align-items: center;
    align-self: flex-start;
}

@media screen and (max-width: 1280px) {
    .orcamento {
        padding: 80px 20px;
    }

    .orcamento__card {
        padding: 20px;
    }

    .orcamento__card li {
        gap: 4px;
    }
}

@media screen and (max-width: 1000px) {
    .orcamento__card--container {
        display: flex;
        flex-direction: column;
    }

    .orcamento__tools {
        display: none;
    }
}

@media only screen and (max-width: 500px) {
    .orcamento__text {
        height: 30px;
        bottom: -15px;
    }
}

@media only screen and (max-width: 400px) {
    .orcamento {
        padding: 80px 5px;
    }

    .orcamento__colors {
        height: 140px;
    }

    .orcamento h1 {
        margin-left: 12px;
    }

    .orcamento__card {
        padding: 14px;
        border-radius: 12px;
    }
}
</style>