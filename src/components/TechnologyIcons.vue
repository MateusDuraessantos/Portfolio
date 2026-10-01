<template>
  <div class="technology-icons">
    <div v-for="technology in technologies" :key="technology.name" class="technology-icons__item">
      <img class="technology-icons__image" :src="icons[technology.type]" :alt="`Logo ${technology.name}`" width="40" height="40" loading="lazy">
      <p>{{ technology.name }}</p>
    </div>
  </div>
</template>

<script>
const icons = {
  css: 'css.png',
  html: 'html.png',
  javascript: 'javascript.png',
  typescript: 'typescript.png',
  vue: 'vuejs.png',
  element: 'element_plus.png',
  mapbox: 'mapbox.png',
  nvm: 'nvm.png',
  firebase: 'firebase.png',
  bootstrap: 'bootstrap.png',
  figma: 'figma.png',
  github: 'icons/whiteicons/github__fill.svg',
  next: 'icons/next.svg',
}

export default {
  name: 'TechnologyIcons',
  props: {
    technologies: { type: Array, required: true },
  },
  data() {
    return { icons }
  },
}
</script>

<style scoped>
.technology-icons {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: auto;
}

.technology-icons__item {
  text-align: center;
  width: 144px;
  height: 120px;
  cursor: initial;
  transition: .3s;
}

.technology-icons__item:hover {
  transform: scale(1.15);
  transition: .1s;
}

.technology-icons__image {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.technology-icons__item p {
  color: var(--creme);
  font-size: 16px;
}

@media screen and (max-width: 1000px) {
  .technology-icons__image {
    width: 30px;
  }

  .technology-icons__item {
    width: 88px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .technology-icons__item {
    transition: none;
  }

  .technology-icons__item:hover {
    transform: none;
  }
}
</style>
