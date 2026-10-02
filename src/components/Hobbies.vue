<template>
  <!-- Component: Hobbies.vue -->
  <div class="others">
    <h2>Some hobbies</h2>
    <div class="others__grid g-max__width">
      <img class="others__shadow" src="/shadow.svg" alt="">
      <!-- Cards -->
      <div
        v-for="item in myHobbiesData"
        :class="`others__card`"
        role="button"
        tabindex="0"
        aria-label="See project"
        @click="emitUpPopup(item)"
        @keydown.enter.prevent="emitUpPopup(item)"
        @keydown.space.prevent="emitUpPopup(item)"
      >
        <img class="others__img" :src="`/projetos/${item.thumb.white}-${whiteImages}.jpg`" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import { myHobbiesData } from '../constants/myHobbiesData.js'
import { commons } from '@/utils/commons'

export default {
  name: 'Hobbies',
  props: ['whiteImages'],
  data() {
    return {
      commons,
      myHobbiesData: myHobbiesData,
    }
  },
  methods: {
    emitUpPopup(item) {
      this.$emit('upPopup', item)
    }
  }
}

</script>

<style scoped>
.others {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  z-index: 5;
}

.others__alguns {
  width: 100%;
  text-align: center;
  font-size: 22px;
  color: var(--creme);
}

.others__grid {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  max-width: 1000px;
  padding: 100px 0;
}

.others__shadow {
  display: none;
  pointer-events: none;
} 

.others__card {
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 400px;
}

.others__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.whiteTheme .others__shadow {
  display: block;
  position: absolute;
  top: 90px;
  left: 40px;
  width: 1520px;
  z-index: -1;
}

.whiteTheme .others__card {
  box-shadow: 25px 24px 45px rgb(59 25 25 / 28%);
}

@media screen and (max-width: 1000px) {
  .whiteTheme .others__shadow {
    display: none;
  } 

  .others__grid {
    padding: 0;
    padding-top: 60px;
    gap: 8px;
  }
  
  .others__card {
    height: 260px;
  }

  .others__grid {
    grid-template: initial;
  }
  
}

</style>
