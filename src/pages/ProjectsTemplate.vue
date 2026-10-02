<template>
	<div class="project-page">
		<ProjectParallax :key="slug" />

		<main>

			<!-- HERO -->
			<section ref="hero" class="hero">
				<div class="hero__content">

					<div class="hero__info">

						<span class="section-label">
							{{ project.type }}
						</span>

						<h1>
							{{ project.title }}
						</h1>

						<div class="hero__actions">

							<a v-if="project.links.online" :href="project.links.online" target="_blank" rel="noopener noreferrer"
								class="button button--primary">
								View live

								<span>
									↗
								</span>
							</a>

							<a v-if="project.links.github" :href="project.links.github" target="_blank" rel="noopener noreferrer"
								class="button button--outline">
								<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
									<path
										d="M12 .7C5.7.7.6 5.8.6 12.1c0 5 3.3 9.3 7.8 10.8.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.3 1 .1-.8.4-1.3.7-1.6-2.5-.3-5.2-1.3-5.2-5.6 0-1.2.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.1 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.2-1.5 3.1-1.2 3.1-1.2.6 1.6.2 2.8.1 3.1.7.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.3-5.2 5.6.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6 4.5-1.5 7.8-5.8 7.8-10.8C23.4 5.8 18.3.7 12 .7z" />
								</svg>

								GitHub
							</a>

						</div>

					</div>

					<div class="hero__image-wrapper">

						<img :src="`/projetos/${project.cover}`" :alt="project.title" class="hero__image" />

					</div>

				</div>
			</section>

			<!-- PROJECT INFO -->
			<section ref="overview" id="project-overview" class="project-info" tabindex="-1">

				<div class="container project-info__grid g-glass">

					<div class="project-info__main">

						<span class="section-label section-label--dark">
							Overview
						</span>

						<h2>
							{{ project.title }}
						</h2>

						<p class="project-info__lead">
							{{ project.description }}
						</p>

						<div v-if="projectRole" class="project-info__section">

							<span class="section-label section-label--dark">
								My role
							</span>

							<p v-for="value in projectRole.values" :key="value">
								{{ value }}
							</p>

						</div>

					</div>

					<aside class="project-info__sidebar">

						<div v-for="item in sidebarDetails" :key="item.title" class="project-detail">

							<span class="project-detail__title">
								{{ item.title }}
							</span>

							<div class="project-detail__values">

								<span v-for="value in item.values" :key="value">
									{{ value }}
								</span>

							</div>

						</div>

					</aside>

				</div>
			</section>

			<!-- GALLERY -->
			<section v-if="project.gallery.length" ref="gallery" id="project-gallery" class="gallery">
				<div class="gallery__content">
					<figure v-for="(media, index) in project.gallery" :key="media.src" class="gallery__media">
						<button v-if="media.type === 'image'" type="button" class="gallery__image-button" :aria-label="'Enlarge ' + (media.alt || project.title + ' - image ' + (index + 1))"
							@keyup.tab="$event.currentTarget.setAttribute('data-keyboard-focus', '')"
							@pointerdown="$event.currentTarget.removeAttribute('data-keyboard-focus')"
							@blur="$event.currentTarget.removeAttribute('data-keyboard-focus')"
							@click="galleryImage = { src: `/projetos/${media.src}`, alt: media.alt || project.title + ' - image ' + (index + 1) }"
							@dblclick="galleryImage = null">
							<img :src="`/projetos/${media.src}`" :alt="media.alt || project.title + ' - image ' + (index + 1)" loading="lazy" decoding="async" />
						</button>
						<video v-else-if="media.type === 'video'" autoplay loop muted playsinline preload="metadata" :aria-label="media.alt || project.title">
							<source :src="`/projetos/${media.src}`" :type="media.mimeType" />
							Your browser does not support video playback.
						</video>
					</figure>
				</div>
			</section>

			<!-- PROJECT NAVIGATION -->
			<section ref="projectNavigation" class="project-navigation" :class="{ 'project-navigation--compact': !navigationVisible, 'project-navigation--hidden': !navigationVisible && !bannerPassed }" aria-label="Project navigation">

				<div class="container project-navigation__content">

					<router-link v-if="previousProject" :to="previousProject.url"
						class="project-navigation__item project-navigation__item--previous">

						<span class="project-navigation__label">
							← Previous project
						</span>

						<div class="project-navigation__project">

							<img :src="`/projetos/${previousProject.image}`" :alt="previousProject.title" />

							<div>
								<strong>
									{{ previousProject.title }}
								</strong>

							</div>

						</div>

					</router-link>

					<router-link v-if="nextProject" :to="nextProject.url"
						class="project-navigation__item project-navigation__item--next">

						<span class="project-navigation__label">
							Next project →
						</span>

						<div class="project-navigation__project">

							<div>
								<strong>
									{{ nextProject.title }}
								</strong>

							</div>

							<img :src="`/projetos/${nextProject.image}`" :alt="nextProject.title" />

						</div>

					</router-link>

				</div>

			</section>

		</main>
		<Teleport to="body">
			<Transition name="gallery-return" appear>
			<button v-if="galleryVisible && !returningToOverview && !galleryImage" type="button"
				class="gallery-return" aria-label="Back to overview" @click="returnToOverview">
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
					<path d="M12 19V5M5 12l7-7 7 7" />
				</svg>
			</button>
			</Transition>
		</Teleport>
		<GalleryImageViewer v-if="galleryImage" :src="galleryImage.src" :alt="galleryImage.alt" @close="galleryImage = null" />

		<!-- FOOTER -->
		<footer class="footer">

			<div class="container">

				<div class="footer__bottom">

					<span>
						© {{ currentYear }}
					</span>

					<span>
						São Paulo, Brazil
					</span>

				</div>

			</div>

		</footer>


	</div>
</template>

<script>
import { datasProjects } from '@/projects-datas/datas.ts'
import ProjectParallax from '@/components/ProjectParallax.vue'
import GalleryImageViewer from '@/components/GalleryImageViewer.vue'

export default {
	name: 'ProjectPage',
	components: { ProjectParallax, GalleryImageViewer },

	data() {
		return {
			projects: datasProjects,
			galleryImage: null,
			galleryVisible: false,
			returningToOverview: false,
			navigationVisible: false,
			bannerPassed: false
		}
	},

	computed: {
		slug() {
			return this.$route.params.slug
		},

		project() {
			return this.projects[this.slug]
		},

		previousProject() {
			return this.resolveProjectNavigation(this.project.previous)
		},

		nextProject() {
			return this.resolveProjectNavigation(this.project.next)
		},

		projectRole() {
			return this.project.details.find(item => item.title.toUpperCase() === 'MY ROLE')
		},

		sidebarDetails() {
			return this.project.details.filter(item => item !== this.projectRole)
		},

		currentYear() {
			return new Date().getFullYear()
		}
	},

	watch: {
		slug() {
			this.galleryImage = null
			this.galleryVisible = false
			this.returningToOverview = false
			this.navigationVisible = false
			this.bannerPassed = false
			this.$nextTick(this.observeGallery)
			this.$nextTick(this.observeNavigation)
		}
	},

	mounted() {
		this.observeGallery()
		this.observeNavigation()
	},

	beforeUnmount() {
		this.galleryObserver?.disconnect()
		this.navigationObserver?.disconnect()
		this.bannerObserver?.disconnect()
	},

	methods: {
		observeNavigation() {
			this.navigationObserver?.disconnect()
			this.bannerObserver?.disconnect()
			if (this.$refs.hero) {
				this.bannerObserver = new IntersectionObserver(([entry]) => {
					this.bannerPassed = entry.boundingClientRect.bottom <= 100
				}, { rootMargin: '-100px 0px 0px 0px', threshold: 0 })
				this.bannerObserver.observe(this.$refs.hero)
			}
			if (!this.$refs.projectNavigation) return
			this.navigationObserver = new IntersectionObserver(([entry]) => {
				this.navigationVisible = entry.isIntersecting
			}, { threshold: 0.1 })
			this.navigationObserver.observe(this.$refs.projectNavigation)
		},

		observeGallery() {
			this.galleryObserver?.disconnect()
			if (!this.$refs.gallery) return
			this.galleryObserver = new IntersectionObserver(([entry]) => {
				this.galleryVisible = entry.isIntersecting
				if (!entry.isIntersecting) this.returningToOverview = false
			}, { rootMargin: '-100px 0px 0px 0px' })
			this.galleryObserver.observe(this.$refs.gallery)
		},

		returnToOverview() {
			this.returningToOverview = true
			const overview = this.$refs.overview
			overview.focus({ preventScroll: true })
			overview.scrollIntoView({
				behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
				block: 'start'
			})
		},

		resolveProjectNavigation(slug) {
			const project = this.projects[slug]
			if (!project) return null

			return {
				title: project.title,
				image: project.thumb.img,
				url: this.$router.resolve({ name: 'project', params: { slug } }).href
			}
		}

	}

}
</script>

<style scoped>
.gallery-return {
  position: fixed;
  right: max(20px, env(safe-area-inset-right));
  top: calc(100px + env(safe-area-inset-top, 0px));
  z-index: 90;
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 48px;
  padding: 12px 18px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 999px;
  background: #181818;
  color: #f7f6f3;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.4);
  font: inherit;
  font-size: 14px;
  cursor: pointer;
}

.gallery-return:hover { background: #303030; }
.gallery-return:focus-visible { outline: 2px solid #f7f6f3; outline-offset: 4px; }

.gallery-return-enter-active {
  transition: opacity 280ms ease, transform 280ms cubic-bezier(0.2, 0.8, 0.2, 1);
}

.gallery-return-leave-active {
  transition: opacity 200ms ease, transform 200ms ease;
  pointer-events: none;
}

.gallery-return-enter-from,
.gallery-return-leave-to {
  opacity: 0;
  transform: translateY(-12px) scale(0.96);
}

@media (prefers-reduced-motion: reduce) {
  .gallery-return-enter-active,
  .gallery-return-leave-active {
    transition: none;
  }

  .gallery-return-enter-from,
  .gallery-return-leave-to {
    transform: none;
  }
}

.project-info:focus { outline: none; }

section[id] {
  scroll-margin-top: 100px;
}

@media (max-width: 1000px) {
  .gallery-return {
    top: calc(80px + env(safe-area-inset-top, 0px));
  }

  section[id] {
    scroll-margin-top: 80px;
  }
}

* {
  box-sizing: border-box;
}

.project-page {
  position: relative;
  isolation: isolate;
  --background: black;
  --background-deep: #050606;
  --background-soft: #0e0f0f;
  --background-card: #121313;
  --white: #f7f6f3;
  --white-soft: #e7e5e0;
  --black: #0b0c0c;
  --gray: #929292;
  --gray-light: #b9b9b9;
  --gray-dark: #575757;
  --border: rgba(255, 255, 255, 0.09);
  --border-hover: rgba(255, 255, 255, 0.2);
  --accent: #ef3e46;
  --accent-soft: rgba(239, 62, 70, 0.14);
  --shadow-soft:
    0 20px 60px rgba(0, 0, 0, 0.18);
  --shadow-large:
    0 35px 100px rgba(0, 0, 0, 0.32);
  width: 100%;
  min-height: 100vh;
  background:
    radial-gradient(
      circle at 70% 10%,
      rgba(255, 255, 255, 0.025),
      transparent 30%
    ),
    var(--background);
  color: var(--white);
  overflow-x: hidden;
  animation: pageFadeIn 0.75s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.project-page > main,
.project-page > .footer {
  position: relative;
  z-index: 1;
}

.container {
  width: min(1240px, calc(100% - 100px));
  margin: 0 auto;
}

/* HEADER */

.header {
  position: sticky;
  z-index: 100;
  top: 0;
  height: 78px;
  display: flex;
  align-items: center;
  background: rgba(7, 8, 8, 0.78);
  border-bottom: 1px solid rgba(255, 255, 255, 0.065);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
}

.header__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__logo {
  display: inline-flex;
  align-items: baseline;
  color: var(--white);
  text-decoration: none;
  font-size: 15px;
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}

.header__logo:hover {
  opacity: 0.78;
  transform: translateY(-1px);
}

.header__logo strong {
  font-weight: 650;
}

.header__logo span {
  margin-left: 4px;
  color: #777;
  font-weight: 300;
}

.header__nav {
  display: flex;
  align-items: center;
  gap: 38px;
}

.header__nav a {
  position: relative;
  padding: 29px 0;
  color: #858585;
  font-size: 12px;
  font-weight: 450;
  text-decoration: none;
  transition:
    color 0.25s ease,
    transform 0.25s ease;
}

.header__nav a::before {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 20px;
  width: 0;
  height: 1px;
  background: var(--accent);
  transform: translateX(-50%);
  transition: width 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.header__nav a:hover,
.header__nav a.active {
  color: white;
}

.header__nav a:hover::before,
.header__nav a.active::before {
  width: 100%;
}

.header__nav a.active::after {
  display: none;
}

/* HERO */

.hero {
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(
      circle at 45% 70%,
      rgba(137, 27, 33, 0.14),
      transparent 38%
    ),
    linear-gradient(
      135deg,
      rgba(7, 8, 8, 0.65) 0%,
      rgba(9, 10, 10, 0.7) 55%,
      rgba(7, 8, 8, 0.65) 100%
    );
}

.hero::before {
  content: '';
  position: absolute;
  width: 540px;
  height: 540px;
  left: -250px;
  bottom: -340px;
  border-radius: 50%;
  background: var(--accent);
  opacity: 0.055;
  filter: blur(110px);
  pointer-events: none;
}

.hero__content {
  /* min-height: calc(100vh - 78px); */
  height: 100vh;
  display: grid;
  grid-template-columns:
    minmax(450px, 44%)
    minmax(0, 56%);
}

.hero__info {
  position: relative;
  z-index: 2;
  padding:
    100px
    80px
    100px
    max(50px, calc((100vw - 1240px) / 2));
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: heroContentIn 0.85s 0.08s both cubic-bezier(0.2, 0.8, 0.2, 1);
}

.section-label {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: #8c8c8c;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
}

.section-label::before {
  content: '';
  width: 25px;
  height: 1px;
  background: var(--accent);
}

.hero h1 {
  max-width: 650px;
  margin: 24px 0 25px;
  color: #f5f4f1;
  font-size: clamp(42px, 4.3vw, 68px);
  line-height: 0.99;
  font-weight: 500;
  text-wrap: balance;
}

.hero__actions {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 40px;
}

.button {
  position: relative;
  min-width: 145px;
  height: 49px;
  padding: 0 24px;
  border-radius: 999px;
  display: inline-flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
  transition:
    transform 0.32s cubic-bezier(0.2, 0.8, 0.2, 1),
    background 0.32s ease,
    border-color 0.32s ease,
    box-shadow 0.32s ease;
}

.button::after {
  content: '';
  position: absolute;
  width: 80px;
  height: 80px;
  top: 50%;
  left: -100px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.16);
  transform: translateY(-50%);
  transition: left 0.45s ease;
}

.button:hover::after {
  left: calc(100% + 30px);
}

.button:hover {
  transform: translateY(-3px);
}

.button--primary, .button--primary * {
  background: #f6f5f2;
  color: #101010;
  box-shadow:
    0 9px 25px rgba(255, 255, 255, 0.08);
}

.button--primary:hover {
  background: white;
  box-shadow:
    0 14px 40px rgba(255, 255, 255, 0.15);
}

.button--outline {
  color: #e8e8e8;
  border: 1px solid rgba(255, 255, 255, 0.22);
  background: rgba(255, 255, 255, 0.02);
}

.button--outline:hover {
  border-color: rgba(255, 255, 255, 0.45);
  background: rgba(255, 255, 255, 0.07);
}

.hero__image-wrapper {
  position: relative;
  min-height: calc(100vh - 78px);
  overflow: hidden;
  background: #101111;
  animation: heroImageIn 1.05s 0.12s both cubic-bezier(0.2, 0.8, 0.2, 1);
}

.hero__image-wrapper::before {
  content: '';
  position: absolute;
  z-index: 2;
  inset: 0;
  background:
    linear-gradient(
      90deg,
      rgba(7, 8, 8, 0.56) 0%,
      rgba(7, 8, 8, 0.04) 23%,
      transparent 50%
    ),
    linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.22),
      transparent 35%
    );
  pointer-events: none;
}

.hero__image-wrapper::after {
  content: '';
  position: absolute;
  z-index: 3;
  inset: 0;
  box-shadow:
    inset 0 0 120px rgba(0, 0, 0, 0.28);
  pointer-events: none;
}

.hero__image {
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 78px);
  display: block;
  object-fit: cover;
  transform: scale(1.025);
  transition:
    transform 1.4s cubic-bezier(0.2, 0.8, 0.2, 1),
    filter 0.8s ease;
}

/* PROJECT INFORMATION */

.project-info {
  position: relative;
  padding: 115px 0 120px;
  overflow: hidden;
  background: rgba(255,255,255,0.01);
  color: white;
}

.project-info::before {
  content: '';
  position: absolute;
  width: 1px;
  height: 100%;
  top: 0;
  left: 50%;
  background:
    linear-gradient(
      transparent,
      rgba(0, 0, 0, 0.045),
      transparent
    );
  pointer-events: none;
}

.project-info__grid {
  display: grid;
  grid-template-columns:
    minmax(0, 1fr)
    310px;
  gap: 80px;
  padding: 60px;
}

.section-label--dark {
  color: #bdbdbd;
}

.project-info__main h2 {
  max-width: 720px;
  margin: 18px 0 30px;
  color: white;
  font-size: 34px;
  line-height: 1.1;
  font-weight: 600;
}

.project-info__lead {
  max-width: 700px;
  margin: 0;
  color: #bdbdbd;
  font-size: 18px;
  line-height: 1.75;
}

.project-info__section {
  position: relative;
  max-width: 700px;
  margin-top: 55px;
  padding-top: 33px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
}

.project-info__section .section-label {
  display: flex;
  align-items: center;
  gap: 12px;
}

.project-info__section .section-label::before {
  width: 24px;
  background: var(--accent);
}

.project-info__section p {
  margin: 17px 0 0;
  color: var(--gray-light);
  font-size: 15px;
  line-height: 1.8;
}

.project-info__sidebar {
  align-self: flex-start;
  padding: 8px 0 8px 40px;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
}

.project-detail {
  position: relative;
  padding: 0 0 27px;
  transition:
    transform 0.28s ease,
    opacity 0.28s ease;
}

.project-detail:not(:last-child) {
  margin-bottom: 29px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
}

.project-detail__title {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #8a8a8a;
  font-size: 14px;
  font-weight: 650;
}

.project-detail__title::before {
  content: '';
  width: 15px;
  height: 1px;
  background: var(--accent);
  transition: width 0.25s ease;
}

.project-detail__values {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 12px;
}

.project-detail__values span {
  color: #bdbdbd;
  font-size: 14px;
  line-height: 1.6;
}

/* GALLERY */

.gallery {
  position: relative;
  padding: 105px 0;
}

.gallery__content {
  width: min(1200px, calc(100% - 200px));
  margin: 0 auto;
  background: #1f1f1f;
}

.gallery__media {
  margin: 0;
}

.gallery__image-button {
  display: block;
  width: 100%;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: zoom-in;
}

.gallery__image-button:focus-visible {
  outline: none;
}

.gallery__image-button[data-keyboard-focus]:focus-visible {
  outline: 3px solid #ef3e46;
  outline-offset: -3px;
}

.gallery__media img,
.gallery__media video {
  display: block;
  width: 100%;
  height: auto;
}

@media (max-width: 1000px) {
  .gallery__content {
    width: calc(100% - 32px);
  }
}

/* PROJECT NAVIGATION */

.project-navigation {
  padding: 0;
  min-height: 125px;
}

.project-navigation__content {
  min-height: 125px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.project-navigation__item {
  height: 100%;
  padding: 26px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.project-navigation__item:hover {
  opacity: 0.75;
}

.project-navigation__item--previous:hover {
  transform: translateX(-5px);
}

.project-navigation__item--next {
  text-align: right;
}

.project-navigation__item--next:hover {
  transform: translateX(5px);
}

.project-navigation__label {
  display: block;
  margin-bottom: 10px;
  color: #777;
  font-size: 15px;
}

.project-navigation__project {
  display: flex;
  align-items: center;
  gap: 14px;
}

.project-navigation__item--next .project-navigation__project {
  justify-content: flex-end;
}

.project-navigation__project img {
  width: 75px;
  height: 48px;
  object-fit: cover;
  object-position: top center;
  border-radius: 6px;
  filter: brightness(0.83);
  transition:
    filter 0.3s ease,
    transform 0.3s ease;
}

.project-navigation__item:hover .project-navigation__project img {
  filter: brightness(1);
  transform: scale(1.04);
}

.project-navigation__project div {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.project-navigation__project strong {
  color: #ececec;
  font-size: 16px;
  font-weight: 550;
}

.project-navigation--compact .project-navigation__content {
  position: fixed;
  bottom: calc(16px + env(safe-area-inset-bottom, 0px));
  left: 50%;
  transform: translate(-50%, 0) scale(1);
  z-index: 90;
  width: max-content;
  max-width: calc(100% - 32px);
  min-height: 0;
  box-sizing: border-box;
  margin: 0;
  padding: 0 16px;
  gap: 32px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 30px;
  background: rgba(20, 20, 20, 0.92);
  backdrop-filter: blur(12px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
  opacity: 1;
  visibility: visible;
  transition:
    opacity 360ms ease,
    transform 420ms cubic-bezier(0.16, 1, 0.3, 1),
    visibility 0s;
}

.project-navigation--compact .project-navigation__item {
  min-height: 44px;
  padding: 0;
}

.project-navigation--hidden .project-navigation__content {
  visibility: hidden;
  opacity: 0;
  transform: translate(-50%, 28px) scale(0.96);
  pointer-events: none;
  transition:
    opacity 280ms ease,
    transform 280ms cubic-bezier(0.4, 0, 1, 1),
    visibility 0s 280ms;
}

.project-navigation--compact .project-navigation__label {
  margin: 0;
  color: #ececec;
  font-size: 13px;
}

.project-navigation--compact .project-navigation__project {
  display: none;
}

.project-navigation__item:focus-visible {
  outline: 2px solid #ececec;
  outline-offset: 4px;
  border-radius: 4px;
}

@media (prefers-reduced-motion: reduce) {
  .project-navigation--compact .project-navigation__content {
    transition: none;
  }
}


/* FOOTER */

.footer {
  padding: 55px 0 30px;
  background: black;
  color: white;
}

.footer__back {
  position: relative;
  display: inline-flex;
  margin-bottom: 50px;
  color: #777;
  font-size: 12px;
  text-decoration: none;
  transition:
    color 0.25s ease,
    transform 0.25s ease;
}

.footer__back:hover {
  color: #222;
  transform: translateX(-4px);
}

.footer__content {
  padding: 24px 0;
}

.footer__about {
  max-width: 350px;
}

.footer__name {
  margin-bottom: 14px;
  font-size: 24px;
}

.footer__about p {
  margin: 0;
  color: #7a7a7a;
  font-size: 12px;
  line-height: 1.7;
}

.footer__column {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer__title {
  margin-bottom: 10px;
  color: #969696;
  font-size: 12px;
  font-weight: 650;
}

.footer__column a {
  width: fit-content;
  color: #666;
  font-size: 12px;
  text-decoration: none;
  transition:
    color 0.25s ease,
    transform 0.25s ease;
}

.footer__column a:hover {
  color: #111;
  transform: translateX(3px);
}

.footer__bottom {
  padding-top: 22px;
  display: flex;
  justify-content: space-between;
  color: #999;
  font-size: 12px;
}

/* ANIMATIONS */

@keyframes pageFadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes heroContentIn {
  from {
    opacity: 0;
    transform: translateY(22px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes heroImageIn {
  from {
    opacity: 0;
    transform: scale(1.035);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}



/* SCROLL ANIMATIONS */

@supports (animation-timeline: view()) {
  .project-info__main,
  .project-info__sidebar {
    animation:
      revealOnScroll linear both;
    animation-timeline: view();
    animation-range:
      entry 0%
      entry 28%;
  }




  @keyframes revealOnScroll {
    from {
      opacity: 0;
      transform: translateY(30px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

/* RESPONSIVE */

@media (max-width: 1100px) {
  .container { width: calc(100% - 60px); }
  .hero__content {
    height: auto;
    min-height: 0;
    grid-template-columns: minmax(0, 1fr);
    padding-top: 80px;
  }
  .hero__info {
    min-width: 0;
    padding: 72px max(30px, calc((100% - 900px) / 2)) 64px;
  }
  .hero__image-wrapper { display: none; }
  .project-info__grid {
    grid-template-columns: minmax(0, 1fr) minmax(0, 260px);
    gap: 40px;
    padding: 32px;
  }
}

@media (max-width: 1000px) {
  .hero__content { padding-top: 60px; }
}

@media (max-width: 800px) {
  .project-page { --page-gutter: clamp(16px, 4vw, 28px); }
  .container, .gallery__content { width: calc(100% - var(--page-gutter) * 2); }
  .hero__info { padding: 56px var(--page-gutter) 48px; }
  .hero h1 {
    font-size: clamp(32px, 7vw, 48px);
    line-height: 1.1;
    margin: 20px 0 0;
    overflow-wrap: anywhere;
  }
  .section-label { font-size: 13px; line-height: 1.5; }
  .section-label::before, .project-detail__title::before { flex-shrink: 0; }
  .hero__actions { flex-wrap: wrap; gap: 12px; margin-top: 28px; }
  .button {
    min-width: 0;
    min-height: 48px;
    height: auto;
    padding: 14px 22px;
    font-size: 14px;
  }
  .button svg { flex-shrink: 0; }
  .project-info { padding: 40px 0; }
  .project-info::before { display: none; }
  .project-info__grid {
    position: relative;
    grid-template-columns: minmax(0, 1fr);
    gap: 32px;
    padding: clamp(20px, 4vw, 32px);
    border-radius: 16px;
  }
  .project-info__main, .project-info__sidebar { min-width: 0; overflow-wrap: anywhere; }
  .project-info__main h2 {
    display: none;
  }
  .project-info__lead { font-size: 16px; line-height: 1.75; margin-top: 18px; }
  .project-info__section {
    margin-top: 28px;
    padding-top: 24px;
    border-color: var(--border-hover);
  }
  .project-info__sidebar {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px;
    padding: 24px 0 0;
    border-left: 0;
    border-top: 1px solid var(--border-hover);
  }
  .project-detail, .project-detail:not(:last-child) { margin: 0; padding: 0; border: 0; }
  .project-detail__title { color: var(--gray-light); }
  .gallery { padding: 32px 0 40px; }
  .project-navigation__content { align-items: stretch; gap: 24px; }
  .project-navigation__item {
    flex: 1 1 0;
    min-width: 0;
    height: auto;
    padding: 24px 0;
    overflow-wrap: anywhere;
  }
  .project-navigation__label { font-size: 12px; line-height: 1.5; color: var(--gray-light); }
  .project-navigation__project, .project-navigation__project div { min-width: 0; }
  .project-navigation__project strong { font-size: 14px; line-height: 1.5; }
  .project-navigation__project img { display: none; }
  .project-navigation--compact .project-navigation__content {
    width: calc(100% - var(--page-gutter) * 2);
    max-width: 420px;
    gap: 12px;
    padding: 4px 16px;
    border-radius: 20px;
  }
  .project-navigation--compact .project-navigation__label { font-size: 12px; }
  .footer { padding: 24px 0 calc(24px + env(safe-area-inset-bottom, 0px)); }
  .footer__bottom { padding-top: 0; flex-wrap: wrap; gap: 12px 24px; }
}

@media (max-width: 560px) {
  .hero__actions { align-items: stretch; flex-direction: column; }
  .button { width: 100%; }
  .project-info__sidebar { grid-template-columns: minmax(0, 1fr); }
  .gallery-return {
    right: max(16px, env(safe-area-inset-right, 0px));
    padding: 12px;
    width: 48px;
    justify-content: center;
  }
  .footer__bottom { flex-direction: column; }
}

/* ACCESSIBILITY */

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
