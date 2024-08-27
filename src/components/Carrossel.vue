<template>
  <div class="carousel">
    <div class="carousel__buttons">
      <button id="button__l" @click="slide('left', true)" class="carousel__button--left">
        &#60;
      </button>

      <button id="button__r" @click="slide('right', true)" class="carousel__button--right">
        &#62;
      </button>
    </div>

    <div
      class="carousel__container"
      id="carousel__slide"
      @touchstart="slideTouth"
      @touchend="slideTouth"
    >
      <div class="carousel__thumb" v-for="(img, index) in imagens" @click="upPopup(img, 'carrossel_01')" img_default
        :id="`app-${index}`">
        <div class="carousel__hover">
          Abrir projeto
        </div>
        <img :src="`projetos/${img.thumb.img}`" :alt="img.thumb.alt">
      </div>
    </div>
  </div>
</template>

<script>
import { imagens } from './destaque.js'
export default {
  name: 'Carrossel',
  data() {
    return {
      imagens: imagens.carrossel_01,
      carrosselInterval: '',
      initItem: Number,
      touchSlided: [],
    }
  },
  mounted() {
    let positions = 0
    const initialIframe = 0
    document.querySelectorAll('[img_default]').forEach(obj => {
      const currentPositions = positions
      positions += 25
      const index = Number(obj.id.split('app-')[1])
      let classTag
      if (index == initialIframe || index - 4 == initialIframe) classTag = ''
      if (index - 1 == initialIframe || index - 3 == initialIframe) classTag = 'img_b'
      if (index - 2 == initialIframe) classTag = 'img_c'

      obj.style.left = `${currentPositions}%`
      obj.setAttribute('frame_size', classTag)
    })

    this.littleAjustmentOnSpacing()
    // this.slideAutomatico()
  },
  methods: {
    slide(param, stopSlideAutomatic) {
      if (stopSlideAutomatic) clearInterval(this.carrosselInterval)

      const centerElement = document.querySelector('[frame_size="img_c"]')
      const centerIndex = Number(centerElement.id.split('app-')[1])
      const imagensConst = document.querySelectorAll('[img_default]')

      imagensConst.forEach(obj => { // Limpa os estilos
        obj.removeAttribute('frame_size')
        obj.style.transform = ''
      })

      const [less1, less2] = [centerIndex - 1, centerIndex - 2]
      const [plus1, plus2] = [centerIndex + 1, centerIndex + 2]

      const whitchSide = param == 'left'

      const getIndexValue = (obj) => {
        const value = Number(obj.style.left.replace('%', ''))
        return whitchSide ? value + 25 : value - 25
      }

      imagensConst.forEach(obj => {
        obj.style.left = `${getIndexValue(obj)}%`
      })

      try {
        document.getElementById(`app-${whitchSide ? less1 : plus1}`).setAttribute('frame_size', 'img_c')
        document.getElementById(`app-${centerIndex}`).setAttribute('frame_size', 'img_b')
        document.getElementById(`app-${whitchSide ? less2 : plus2}`).setAttribute('frame_size', 'img_b')
      } catch { }

      const indexCurrentCenter = Number(document.querySelector('[frame_size="img_c"]').id.split('app-')[1])

      this.slideStop(indexCurrentCenter, imagensConst)
      this.littleAjustmentOnSpacing(indexCurrentCenter == 0)
    },
    
    slideTouth(event) {
      if (event.type == 'touchstart') this.touchSlided = []
      const indexCurrentCenter = Number(document.querySelector('[frame_size="img_c"]').id.split('app-')[1])
      const imagensConst = document.querySelectorAll('[img_default]')
     
      
      
      this.touchSlided.push(event.changedTouches[0].clientX)
      const limiteSlide = 50 // Define quantos pixeis o touch deve alcançar para poder ativar a animação 
      let gSlide = this.touchSlided[0] - this.touchSlided[1] > limiteSlide || this.touchSlided[0] - this.touchSlided[1] < -limiteSlide

      if (this.touchSlided[0] > this.touchSlided[1] && gSlide && indexCurrentCenter < imagensConst.length - 1) { // Avança um item no carrossel
        this.initItem = this.initItem < imagens.carrossel_01.length - 1 ? this.initItem + 1 : this.initItem
        if (event.type == 'touchend') this.slide('right')
      }
      if (this.touchSlided[0] < this.touchSlided[1] && gSlide && indexCurrentCenter != 0) { // Retrocede um item no carrossel
        this.initItem = this.initItem != 0 ? this.initItem - 1 : this.initItem
        if (event.type == 'touchend') this.slide('left')
      };
    },
    
    littleAjustmentOnSpacing(handle) {
      const spacing = document.querySelectorAll('[frame_size="img_b"]')
      spacing.forEach((obj, index) => {
        index == 0 && !handle ? obj.style.transform = 'translateX(calc(-50% - 26px))' : obj.style.transform = 'translatex(calc(-50% + 26px))'
      })
    },
    
    slideAutomatico() {
      this.carrosselInterval = setInterval(() => {
        const index = Number(document.querySelector('[frame_size="img_c"]').id.split('app-')[1])
        if (this.imagens.length - 1 > index) this.slide('right')
        else {
          const imagens = document.querySelectorAll('[img_default]')
          const getIndexValue = (obj) => {
            const value = Number(obj.id.split('app-')[1]) + 2
            return `${value * 25}%`
          }
          imagens.forEach(obj => obj.style.left = getIndexValue(obj))
          document.querySelector('[frame_size="img_c"]').removeAttribute('frame_size')
          document.getElementById('app-0').setAttribute('frame_size', 'img_c')
          document.getElementById('app-1').setAttribute('frame_size', 'img_b')
          this.littleAjustmentOnSpacing(true)
        }
      }, 1000)
    },
    
    slideStop(indexCurrentCenter, imagensConst) {
      const [l, r] = [document.getElementById('button__l'), document.getElementById('button__r')]
      indexCurrentCenter == 0 ? l.style.display = 'none' : l.style.display = ''
      indexCurrentCenter == imagensConst.length - 1 ? r.style.display = 'none' : r.style.display = ''
    },
    
    upPopup(obj, array) {
      this.$emit('upPopup', obj, array)
    }
  }
}

</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

/* CARROSSEL */

.carousel {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 800px;
  width: 100%;
  overflow: hidden;
}

.carousel * {
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  transition: .2s;
}

.carousel__container {
  position: relative;
  display: flex;
  align-items: center;
  width: calc(100% - 300px);
  max-width: 1028px;
  height: 100%;
  cursor: pointer;
  transition: .2s;
}

.carousel__thumb {
  cursor: pointer;
  transition: .2s;
}

.carousel__hover {
  content: '';
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin: auto;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7));
  backdrop-filter: blur(4px);
  transition: .2s;
  z-index: 4;
  color: var(--creme) !important;
  opacity: 0;
}

.carousel__hover:hover {
  transition: .2s;
  opacity: 1;
}

[img_default] {
  position: absolute;
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 200px;
  height: 438px;
  border-radius: 30px;
  width: 200px;
  height: 438px;
  transform: translatex(-50%);
  box-shadow: 3px 3px 30px rgba(0, 0, 0, 0.4);
  border: 2px solid black;
  object-position: top;
  outline: 2px solid #2c2c2c;
}

[img_default] img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

[img_default]::before {
  content: '';
  position: absolute;
  margin: auto;
  height: 3%;
  background: black;
  width: 32%;
  border-radius: 0 0 10px 10px;
  border-color: #a4a4a4;
  border-width: 0 1px 1px 0;
  border-style: solid;
  z-index: 4;
  top: 0;
}

[frame_size="img_b"] {
  display: flex !important;
  width: 240px;
  height: 542px;
  z-index: 1;
}

[frame_size="img_c"] {
  display: flex !important;
  width: 296px;
  height: 638px;
  border-radius: 36px;
  z-index: 3;
}

[frame_size="img_c"] img {
  z-index: 3;
}

.carousel__buttons {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 450px;
  border-radius: 30px;
  height: 100%;
}

.carousel__button--left,
.carousel__button--right {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: var(--creme) !important;
  z-index: 3;
  transition: .2s;
  cursor: pointer;
  font-size: 32px;
  font-weight: 200;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  transition: .2s;
  background: rgba(0, 0, 0, 0.6);
  background-image: linear-gradient(var(--blue_00), #102c55);
  border: 2px solid;
  border-color: rgb(44, 44, 44) rgb(44, 44, 44) black black;
  z-index: 4;
}

.carousel__button--left img,
.carousel__button--right img {
  width: 30px;
  height: 30px;
}

.carousel__button--left {
  left: 0;
}

.carousel__button--right {
  right: 0;
}

.carousel__button--left:hover,
.carousel__button--right:hover {
  backdrop-filter: blur(10px);
  transition: .2s;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
}

@media screen and (max-width: 1000px) {
  [img_default]::before {
    display: none;
  }

  [img_default] {
    box-shadow: none;
    border: none;
    outline: none;
  }
}

@media screen and (max-width: 450px) {
  .carousel__buttons {
    width: calc(100% - 20px);
  }

  [img_default] {
    display: none;
  }

}
</style>