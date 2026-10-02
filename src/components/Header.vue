<template>
  <header :theme="isProject ? 'black' : colorNav" :class="{ hiddenHeader: !isProject && !dadoBol, 'header--project': isProject }" @keydown.esc="menuOpen = false">

    <button v-if="!isProject" class="turnWhite" @click="emitFunction">
      <div class="turnWhite__ctn" :class="{ 'turnWhite__ctn--transform': booleanTheme }">
        <div class="turnWhite__emoji">☀️</div>
        <div class="turnWhite__swith"></div>
        <div class="turnWhite__emoji">🌙</div>
      </div>
    </button>
    <p v-else class="project-name">Mateus Durães dos Santos</p>
    <span></span>

    <div class="links" ref="links">
      <div id="mobile" :class="{ openMenu: menuOpen }">
        <button class="dropdown__init" :aria-expanded="menuOpen" aria-controls="header-navigation" @click="upDropdown">Menu</button>
        
        <nav id="header-navigation" class="dropdown__container" :aria-label="isProject ? 'Project sections' : 'Main navigation'">
          <button class="dropdown nav" v-if="isProject" @click="navigateTo('link_ancor__portfolio')">← Home</button>

          <button
            v-for="section in navigationSections"
            :key="section.id" class="dropdown nav"
            :class="{ 'nav--active': activeSection === section.id }"
            :aria-current="activeSection === section.id ? 'location' : undefined"
            @click="isProject ? navigateProject(section.id) : navigateTo(section.id)"
          >
            {{ section.label }}
          </button>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import { commons } from '@/utils/commons';
import { datasProjects } from '@/projects-datas/datas.ts';

export default {
  name: 'Header',
  emits: ['turn-on', 'remove-link'],
  props: {
    dadoBol: { type: Boolean, default: true },
    booleanTheme: Boolean,
    removeLinkVer: Boolean
  },
  data() {
    return {
      commons,
      blockClick: true,
      colorNav: '',
      menuOpen: false,
      activeSection: '',
    }
  },
  computed: {
    isProject() {
      return this.$route.name === 'project'
    },
    navigationSections() {
      if (this.isProject) return this.projectSections
      return [
        { id: 'link_ancor__init', label: 'Welcome' },
        { id: 'link_ancor__portfolio', label: 'Portfolio' },
        { id: 'link_ancor__experience', label: 'Experience' },
        { id: 'link_ancor__contact', label: 'Contact' },
      ]
    },
    projectSections() {
      const sections = [{ id: 'project-overview', label: 'Overview' }]
      if (datasProjects[this.$route.params.slug]?.gallery?.length) {
        sections.push({ id: 'project-gallery', label: 'Gallery' })
      }
      return sections
    },
  },
  mounted() {
    this.turnWhite(0)
    document.body.addEventListener('click', this.closeDropdownOutside)
    window.addEventListener('scroll', this.scheduleSectionUpdate, { passive: true })
    window.addEventListener('resize', this.scheduleSectionUpdate)
    this.$nextTick(this.updateActiveSection)
  },
  beforeUnmount() {
    document.body.removeEventListener('click', this.closeDropdownOutside)
    clearTimeout(this.themeTimer)
    clearTimeout(this.clickTimer)
    window.removeEventListener('scroll', this.scheduleSectionUpdate)
    window.removeEventListener('resize', this.scheduleSectionUpdate)
    cancelAnimationFrame(this.scrollFrame)
  },
  watch: {
    '$route.fullPath'() {
      this.menuOpen = false
      this.activeSection = ''
      this.$nextTick(this.updateActiveSection)
    },
    booleanTheme() {
      this.turnWhite(1000)
    },
    removeLinkVer() {
      this.removeLink()
    }
  },
  methods: {
    navigateProject(anchor) {
      this.menuOpen = false
      const section = document.getElementById(anchor)
      if (!section) return
      const offset = this.$el.offsetHeight + 20
      window.scrollTo({
        top: section.getBoundingClientRect().top + window.scrollY - offset,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      })
    },
    scheduleSectionUpdate() {
      if (this.scrollFrame) return
      this.scrollFrame = requestAnimationFrame(() => {
        this.scrollFrame = null
        this.updateActiveSection()
      })
    },
    updateActiveSection() {
      const offset = this.$el.offsetHeight + 24
      let active = ''
      for (const section of this.navigationSections) {
        const element = document.getElementById(section.id)
        if (element && element.getBoundingClientRect().top <= offset) active = section.id
      }
      this.activeSection = active
    },
    upDropdown() {
      this.menuOpen = !this.menuOpen
    },
    closeDropdownOutside(event) {
      if (!this.$refs.links.contains(event.target)) this.menuOpen = false
    },
    async navigateTo(anchor) {
      this.menuOpen = false
      if (this.$route.name !== 'home') {
        await this.$router.push({ name: 'home' })
        await this.$nextTick()
      }
      this.removeLink()
      commons.scrollDown(anchor)
    },
    emitFunction() {
      if (this.blockClick) {
        this.$emit('turn-on')
        this.blockClick = false
        this.clickTimer = setTimeout(() => this.blockClick = true, 2000); // Prevents switching the theme twice within 2 seconds
      }
    },
    turnWhite(timer) {
      clearTimeout(this.themeTimer)
      this.themeTimer = setTimeout(() => this.colorNav = this.booleanTheme ? 'white' : 'black', timer)
    },
    removeLink() {
      this.$emit('remove-link')
      if (document.querySelector('[activeLink]') != null) document.querySelector('[activeLink]').removeAttribute('activeLink')
      if (document.querySelector('.hiddenHeader') != null) document.querySelector('.hiddenHeader').classList.remove('hiddenHeader')
    },
  }
}
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
  font-size: 16px;
  opacity: 1;
  top: 0;
  backdrop-filter: blur(14px) !important;
  background: rgba(0, 0, 0, 0.5);
  color: #1f1f1f;
  width: 100vw;
  height: 80px;
  transition: .5s;
  z-index: 8;
}

.whiteTheme header:not(.header--project) {
  background: rgb(255 255 255 / 20%);
}

.hiddenHeader {
  background: none !important;
  backdrop-filter: none !important;
  transition: .5s;
}

.hiddenHeader .turnWhite {
  opacity: 0;
  pointer-events: none;
}

* {
  text-decoration: none;
}

.nav:hover {
  transition: .5s;
}

button {
  color: var(--creme);
  font-size: 16px;
  background: none;
  border: none;
}

/* */
.links {
  display: flex;
  align-items: center;
  gap: 6vw;
}

.dropdown__container {
  display: flex;
}

.nav {
  cursor: pointer;
  transition: .2s;
}

.nav:hover {
  color: var(--vermelho);
  transition: .2s;
}

/* White Theme */

.turnWhite {
  position: relative;
  display: flex;
  align-items: center;
  background: #2c2c2c;
  border-radius: 50px;
  border: none;
  transition: .4s;
  overflow: hidden;
  width: 80px;
  height: 40px;
  outline: none;
  box-shadow: 1px 1px 10px rgba(0,0,0,0.2)
}

.whiteTheme .turnWhite {
  background: #ebebeb;
}

.turnWhite__ctn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 100px;
  transform: translateX(-34px);
  transition: 1s;
}

.turnWhite__ctn--transform {
  transform: translateX(0);
  transition: 1s;
}

.turnWhite__swith {
  display: flex;
  align-items: center;
  background: gray;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  box-shadow: -2px -2px 3px rgba(0, 0, 0, 0.2) inset, 2px 2px 3px rgba(255, 255, 255, 0.1) inset;
  transition: .2s;
}

.turnWhite--white .turnWhite__swith {
  box-shadow: none;
}

.turnWhite--white {
  background: rgb(235 235 235);
  transition: .4s;
}

.turnWhite--text {
  position: absolute;
  left: 35px;
}

.whiteTheme header:not(.header--project) .dropdown {
  color: black;
}

.dropdown {
  color: var(--creme);
  padding: 0 18px;
}

.turnWhite__emoji {
  font-size: 22px;
}

/* Mobile version */

@media screen and (max-width: 1100px) {

  header {
    padding: 0 40px;
  }
}

.dropdown__init {
  display: none;
}

@media screen and (max-width: 1000px) {

  #header {
    height: 60px;
  }
  
  /* */

  #mobile .dropdown__init {
    position: relative;
    align-items: center;
    display: flex;
  }
  
  #mobile .dropdown__init::after {
    position: absolute;
    content: '❯';
    right: -20px;
    font-size: 20px;
    transform: rotate(90deg);
  }

  /* Dropdown */

  .dropdown__container {
    pointer-events: none;
    opacity: 0;
    width: 226px;
  }

  .openMenu .dropdown__container {
    pointer-events: initial;
    opacity: 1;
    transition: .2s;
  }

  #mobile {
    position: relative;
    display: flex;
    justify-content: flex-end;
    width: max-content;
    align-items: center;
    padding: 16px 0;
    width: 100px;
    padding-right: 22px;
    z-index: 2;
    cursor: pointer;
  }
  
  #mobile .dropdown__container {
    position: absolute;
    top: 70px;
    gap: 0;
    right: 0;
    flex-direction: column;
    border-radius: 8px;
    overflow: hidden;
    background: #2c2c2c;
  }

  #mobile .dropdown {
    width: 100%;
    padding: 12px 20px;
  }

  #mobile a {
    background: #2c2c2c;
    height: 100%;
  }

  #mobile .dropdown:hover {
    background: #1f1f1f;
  }

  #mobile .nav:hover {
    transition: .3s;
    color: var(--vermelho);
  }

  #mobile .dropdown__option {
    background: #1f1f1f;
    padding: 20px;
    z-index: 300;
    min-width: 220px;
  }

  #mobile .dropdown__option:hover {
    background: rgb(71, 71, 71);
  }

  .whiteTheme header:not(.header--project) #mobile .dropdown,
  .whiteTheme header:not(.header--project) #mobile .dropdown__container {
    background: #F4F4F4 !important;
  }

  .whiteTheme header:not(.header--project) .dropdown__init {
    color: #1f1f1f;
  }

}

@media screen and (max-width: 800px) {
  header {
    padding: 0 20px;
  }
}

@media screen and (max-width: 500px) {
  .nome {
    font-size: max(12px, 0.8rem);
  }

  .links {
    margin-right: 10px;
  }
}

.header--project {
  background: rgba(20, 20, 20, 0.9);
}

.project-name, .project-back {
  color: var(--creme);
  white-space: nowrap;
  padding: 10px 0;
}

.nav--active,
.whiteTheme header:not(.header--project) .nav--active,
.project-back:hover {
  color: var(--vermelho);
}


.header--project button:focus-visible {
  outline: 2px solid var(--creme);
  outline-offset: 4px;
}

@media screen and (max-width: 1000px) {
  .header--project .dropdown__container {
    visibility: hidden;
  }

  .header--project .openMenu .dropdown__container {
    visibility: visible;
  }
}
</style>
