<template>
    <section class="section sobre" id="sobre">

        <div class="max__width">
            <h3 class="sobre__title">A little about me</h3>

            <img src="inicio/black/red-planet.jpg" id="planets-red" class="sobre__planet--1" alt="" loading="lazy">
            <img src="inicio/black/earth.png" id="planets-earth" class="sobre__planet--2" alt="" loading="lazy">

            <div class="sobre__elements">
                <div class="sobre__container">
                    <div class="sobre__redes">
                        <a href="https://www.linkedin.com/in/mateus-dur%C3%A3es-dos-santos/" target="_blank">
                            <img class="sobre__icon--redes" :src="`icons/${whiteIcons}/linkedin.svg`" width="40" height="40"
                                alt="logo Linkedin" loading="lazy">
                        </a>
                        <a href="https://github.com/MateusDuraessantos" target="_blank">
                            <img class="sobre__icon--redes" :src="`icons/${whiteIcons}/github__fill.svg`" width="40"
                                height="40" alt="logo Github" loading="lazy">
                        </a>
                    </div>
                    <div class="sobre__text">
                      <p>
                        &nbsp;I'm a <strong>Brazilian Software Engineer</strong> with a background in <strong>UX/UI Design</strong>, graduated from <strong>Universidade Presbiteriana Mackenzie</strong> in 2023.
                      </p>
                      <p>
                        &nbsp;I have solid experience with <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>Vue.js (versions 2 and 3)</strong>, and <strong>Element Plus</strong>. I've also worked with <strong>Next.js</strong>, <strong>TypeScript</strong>, and <strong>Bootstrap</strong>.
                      </p>
                      <p>
                        &nbsp;Currently, I’m pursuing a <strong>postgraduate degree in Systems Analysis and Development</strong> at <strong>FIAP (Faculdade de Informática e Administração Paulista)</strong>.
                      </p>
                      <p>
                        I'm continuously improving my <strong>English</strong> and looking forward to new <strong>professional challenges</strong> and <strong>international opportunities</strong>.
                      </p>
                      <p>
                        I'm currently <strong>{{ calculateAge() }} years old</strong> and have been working professionally for
                        <strong>{{ calculateWorkYears() }} years</strong>.
                      </p>
                      
                    </div>
                </div>
                <div style="display: flex; justify-content: center;">
                    <h4>Experiences:</h4>
                </div>
                <div class="sobre__experiencia">
                    <div class="sobre__ctn" v-for="icons in experienciaIcons[0]">
                        <img class="sobre__icon" :src="`${icons.img}`" :alt="icons.alt" loading="lazy">
                        <p>{{ icons.skill }}</p>
                    </div>
                    <div class="sobre__ctn" v-for="icons in experienciaIcons[1]">
                        <img class="sobre__icon" :src="`${icons.img}`" :alt="icons.alt" loading="lazy">
                        <p>{{ icons.skill }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    data(){
        return {
            experienciaIcons: [
                [
                    {
                        img: 'css.png',
                        skill: 'CSS',
                        alt: 'Logo CSS'
                    },
                    {
                        img: 'html.png',
                        skill: 'HTML',
                        alt: 'Logo HTML'
                    },
                    {
                        img: 'javascript.png',
                        skill: 'Javascript',
                        alt: 'Logo Javascript'
                    },
                    {
                        img: 'typescript.png',
                        skill: 'Typescript',
                        alt: 'Logo Javascript'
                    },
                    {
                        img: 'vuejs.png',
                        skill: 'Vue  JS',
                        alt: 'Logo Vuejs 3'
                    },
                    {
                        img: 'element_plus.png',
                        skill: 'Element Plus',
                        alt: 'Logo CSS'
                    },
                    {
                        img: 'mapbox.png',
                        skill: 'MapBox GL',
                        alt: 'Logo Javascript'
                    },
                    {
                      img: 'nvm.png',
                      skill: 'NVM',
                      alt: 'Logo Firebase'
                    },
                    {
                        img: 'firebase.png',
                        skill: 'Firebase',
                        alt: 'Logo Firebase'
                    },
                    {
                        img: 'bootstrap.png',
                        skill: 'Bootstrap',
                        alt: 'Logo Firebase'
                    },
                    {
                        img: 'figma.png',
                        skill: 'Figma',
                        alt: 'Logo Firebase'
                    },
                ],
            ],
        }
    },
    props: {
        whiteIcons: String
    },
    methods: {
      calculateAge() {
        const birthDate = new Date(2000, 9, 10); // 09 Oct 2000
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        return age;
      },
      calculateWorkYears() {
        const workStart = new Date(2021, 9, 1); // October 2021
        const today = new Date();
        let years = today.getFullYear() - workStart.getFullYear();
        const monthDiff = today.getMonth() - workStart.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < workStart.getDate())) {
          years--;
        }
        return years;
      },
    }
}
</script>

<style>

/* Sobre */

.sobre {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 200px 0;
    padding-bottom: 200px;
}

.sobre__title {
    position: relative;
    font-size: 22px;
    font-weight: 700; 
    text-align: center;
    margin-bottom: 40px;
    z-index: 5;
}

.sobre__text {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.sobre__planet--1 {
    position: absolute;
    bottom: -400px;
    left: -100px;
    width: 800px;
    height: 800px;
    object-fit: contain;
    z-index: 1;
    filter: blur(4px);
}

.sobre__planet--2 {
    position: absolute;
    filter: blur(4px);
    top: -400px;
    right: -3vw;
    width: 550px;
    height: 550px;
    object-fit: contain;
    z-index: 4;
}

h4 {
  font-weight: 500;
}

.whiteTheme .sobre__planet--1,
.whiteTheme .sobre__planet--2 {
    display: none;
}

.sobre__elements {
    position: relative;
    display: flex;
    flex-direction: column;
    -webkit-backdrop-filter: blur(10px) !important;
    backdrop-filter: blur(10px);
    box-shadow: 4px 4px 24px rgba(0, 0, 0, 0.2);
    gap: 40px;
    border-radius: 20px;
    padding: 40px;
    padding-bottom: 80px;
    max-width: 1000px;
    margin: auto;
    z-index: 4;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.sobre__container {
    display: flex;
    gap: 40px;
    border-radius: 20px;
    align-items: center;
}

.whiteTheme p, .whiteTheme h3 {
    color: black;
}

.sobre__redes {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    padding: 20px 0;
}

.sobre__icon--redes {
    width: 40px;
    height: 40px;
    object-fit: contain;
    transition: .2s;
}

.sobre__icon--redes:hover {
    transform: scale(1.2);
    transition: .2s;
}

.sobre__experiencia {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin: auto;
}

.sobre__icon {
    width: 40px;
    height: 40px;
    object-fit: contain;
}

.sobre__ctn {
    text-align: center;
    width: 124px;
}

@media screen and (max-width: 1000px) {
    .sobre__container {
        flex-direction: column;
    }

    .sobre__redes {
        flex-direction: row;
    }

    /* sobre */
    .sobre__elements {
        padding: 30px;
    }

    .sobre__icon {
        width: 30px;
    }

    .sobre__icon p {
        font-size: 14px;
    }

    .sobre__ctn {
        width: 88px !important;
    }

    .sobre__planet--1 {
        width: 500px;
        transform: translateY(200px);
    }

    .sobre__planet--2 {
        right: -8px;
    }
}


@media only screen and (max-width: 500px) {

    .sobre__planet--1 {
        width: 400px;
        bottom: -315px;
    }
    
    .sobre__planet--2 {
        width: 400px;
        right: -70px;
    }

}

@media only screen and (max-width: 400px) {

    .sobre__elements {
        padding: 20px 10px 30px 10px;
    }

    .sobre__container {
        gap: 10px;
    }

    .sobre__redes {
        padding: 10px 0;
    }
}
</style>