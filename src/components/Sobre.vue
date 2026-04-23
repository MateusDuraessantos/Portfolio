<template>
    <section class="section sobre" id="sobre">

        <div class="max__width">
          
        
          
          <div class="sobre__elements g-glass">
              <h3 class="sobre__title">A little about me</h3>

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
                      <p>I'm a software engineer solving problems for over <strong>{{ calculateWorkYears() }} years</strong>, with a strong foundation in <strong>JavaScript</strong>, <strong>TypeScript</strong>, <strong>HTML</strong> and <strong>CSS</strong>, using frameworks like <strong>Vue.js</strong> (v2 & v3) and some libraries such as <strong>Element Plus</strong> and <strong>Bootstrap</strong>. I’ve also worked with Next.js, MapBox GL, and a few more.</p>

                      <p>I have solved <button class="sobre__button" @click="commons.scrollDown('portfolio')">several issues</button> creating new projects that have been released into production. These range from projects focused on solving administrative problems related to product maintenance and warranty throughout Brazil to projects involving the detection of problems in railway lines using machine learning.</p>

                      <p>Currently, I’m pursuing a postgraduate degree in <strong>Systems Analysis and Development</strong> at <strong><a href="https://postech.fiap.com.br/" target="_blank">FIAP</a></strong> (Faculdade de Informática e Administração Paulista), while continuously improving my English and seeking new professional challenges opportunities!</p>
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
import { commons } from '@/utils/commons';
export default {
  data(){
    return {
      commons,
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
  z-index: 5;
}

.sobre__text {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.sobre__text * {
  padding: 0;
  font-size: 16px;
  font-weight: 400;
}

.sobre__button {
  text-decoration: underline;
}


h4 {
font-weight: 500;
}

.sobre__elements {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-bottom: 80px;
  max-width: 1000px;
  margin: auto;
  z-index: 4;
  padding: 40px;
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