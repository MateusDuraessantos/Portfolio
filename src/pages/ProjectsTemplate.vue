<template>
	<div class="project-page">
		<ProjectParallax :key="slug" />

		<main>

			<!-- HERO -->
			<section class="hero">
				<div class="hero__content">

					<div class="hero__info">

						<span class="section-label">
							{{ project.type }}
						</span>

						<h1>
							{{ project.title }}
						</h1>

						<p class="hero__description">
							{{ project.description }}
						</p>

						<div class="hero__meta">

							<div v-for="item in project.meta" :key="item.label" class="hero__meta-item">
								<span class="hero__meta-icon">
									{{ item.icon }}
								</span>

								<span>
									{{ item.label }}
								</span>
							</div>

						</div>

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

						<img :src="`projetos/${project.cover}`" :alt="project.title" class="hero__image" />

					</div>

				</div>
			</section>

			<!-- PROJECT INFO -->
			<section id="project-overview" class="project-info">

				<div class="container project-info__grid g-glass">

					<div class="project-info__main">

						<span class="section-label section-label--dark">
							Overview
						</span>

						<h2>
							{{ project.overview.title }}
						</h2>

						<p class="project-info__lead">
							{{ project.overview.description }}
						</p>

						<div class="project-info__section">

							<span class="section-label section-label--dark">
								The challenge
							</span>

							<p>
								{{ project.challenge }}
							</p>

						</div>

						<div class="project-info__section">

							<span class="section-label section-label--dark">
								The solution
							</span>

							<p>
								{{ project.solution }}
							</p>

						</div>

					</div>

					<aside class="project-info__sidebar">

						<div v-for="item in project.details" :key="item.title" class="project-detail">

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
			<section v-if="project.gallery.length" id="project-gallery" class="gallery">

				<div class="container">

					<div class="gallery__grid">

						<button v-for="(image, index) in project.gallery" :key="index" class="gallery__item"
							@click="openGallery(index)">

							<img :src="`projetos/${image}`" :alt="project.title + ' - image ' + (index + 1)" />

							<div class="gallery__overlay">
								<span>
									View image
								</span>
							</div>

						</button>

					</div>

				</div>

			</section>

			<!-- TECHNOLOGIES -->
			<section id="project-technologies" class="technologies">

				<div class="container">

					<div class="technologies__card g-glass">

						<div class="technologies__intro">

							<span class="technologies__line"></span>

							<span>
								Technologies used<br>
								in this project
							</span>

						</div>

						<TechnologyIcons :technologies="project.technologies" />

					</div>

				</div>

			</section>

			<!-- PROJECT NAVIGATION -->
			<section class="project-navigation">

				<div class="container project-navigation__content">

					<a v-if="project.previous" :href="project.previous.url"
						class="project-navigation__item project-navigation__item--previous">

						<span class="project-navigation__label">
							← Previous project
						</span>

						<div class="project-navigation__project">

							<img :src="`projetos/${project.previous.image}`" :alt="project.previous.title" />

							<div>
								<strong>
									{{ project.previous.title }}
								</strong>

								<span>
									{{ project.previous.description }}
								</span>
							</div>

						</div>

					</a>

					<a v-if="project.next" :href="project.next.url"
						class="project-navigation__item project-navigation__item--next">

						<span class="project-navigation__label">
							Next project →
						</span>

						<div class="project-navigation__project">

							<div>
								<strong>
									{{ project.next.title }}
								</strong>

								<span>
									{{ project.next.description }}
								</span>
							</div>

							<img :src="`projetos/${project.next.image}`" :alt="project.next.title" />

						</div>

					</a>

				</div>

			</section>

		</main>

		<!-- FOOTER -->
		<footer class="footer">

			<div class="container">

				<a href="/projetos" class="footer__back">
					← Back to all projects
				</a>

				<div class="footer__content">

					<div class="footer__about">

						<div class="footer__name">
							Mateus Durães
						</div>

						<p>
							Designer and developer creating digital experiences
							that are functional, intuitive, and visually consistent.
						</p>

					</div>

					<div class="footer__column">

						<span class="footer__title">
							NAVIGATION
						</span>

						<a href="/">
							Home
						</a>

						<a href="/projetos">
							Projects
						</a>

						<a href="/sobre">
							About
						</a>

						<a href="/contato">
							Contact
						</a>

					</div>

					<div class="footer__column">

						<span class="footer__title">
							CONNECT
						</span>

						<a href="#" target="_blank">
							LinkedIn
						</a>

						<a href="#" target="_blank">
							GitHub
						</a>

						<a href="mailto:email@email.com">
							Email
						</a>

					</div>

				</div>

				<div class="footer__bottom">

					<span>
						© {{ currentYear }} Mateus Durães. All rights reserved.
					</span>

					<span>
						São Paulo, Brazil
					</span>

				</div>

			</div>

		</footer>

		<!-- GALLERY MODAL -->
		<transition name="gallery-modal">

			<div v-if="galleryOpen" class="gallery-modal" @click.self="closeGallery">

				<button class="gallery-modal__close" @click="closeGallery">
					×
				</button>

				<button v-if="project.gallery.length > 1" class="gallery-modal__navigation gallery-modal__navigation--previous"
					@click="previousGalleryImage">
					←
				</button>

				<img :src="`projetos/${project.gallery[activeGalleryImage]}`" :alt="project.title" class="gallery-modal__image" />

				<button v-if="project.gallery.length > 1" class="gallery-modal__navigation gallery-modal__navigation--next"
					@click="nextGalleryImage">
					→
				</button>

				<div class="gallery-modal__counter">
					{{ activeGalleryImage + 1 }}
					/
					{{ project.gallery.length }}
				</div>

			</div>

		</transition>

	</div>
</template>

<script>
import { datasProjects } from '@/projects-datas/datas.ts'
import ProjectParallax from '@/components/ProjectParallax.vue'
import TechnologyIcons from '@/components/TechnologyIcons.vue'

export default {
	name: 'ProjectPage',
	components: { ProjectParallax, TechnologyIcons },

	data() {
		return {
			galleryOpen: false,
			activeGalleryImage: 0,
			projects: datasProjects
		}
	},

	computed: {
		slug() {
			return this.$route.params.slug
		},

		project() {
			return this.projects[this.slug]
		},

		currentYear() {
			return new Date().getFullYear()
		}
	},

	methods: {

		openGallery(index) {
			this.activeGalleryImage = index
			this.galleryOpen = true

			document.body.style.overflow = 'hidden'
		},

		closeGallery() {
			this.galleryOpen = false

			document.body.style.overflow = ''
		},

		nextGalleryImage() {
			this.activeGalleryImage =
				(this.activeGalleryImage + 1) %
				this.project.gallery.length
		},

		previousGalleryImage() {
			this.activeGalleryImage =
				(
					this.activeGalleryImage -
					1 +
					this.project.gallery.length
				) %
				this.project.gallery.length
		},

		handleKeydown(event) {

			if (!this.galleryOpen) {
				return
			}

			if (event.key === 'Escape') {
				this.closeGallery()
			}

			if (event.key === 'ArrowRight') {
				this.nextGalleryImage()
			}

			if (event.key === 'ArrowLeft') {
				this.previousGalleryImage()
			}

		}

	},

	mounted() {
		window.addEventListener('keydown', this.handleKeydown)
	},

	beforeUnmount() {
		window.removeEventListener('keydown', this.handleKeydown)

		document.body.style.overflow = ''
	}

}
</script>

<style scoped>
section[id] {
  scroll-margin-top: 100px;
}

@media (max-width: 1000px) {
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

.project-page ::selection {
  background: var(--accent);
  color: white;
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
  min-height: calc(100vh - 78px);
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
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.2em;
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
  letter-spacing: -0.045em;
  font-weight: 500;
  text-wrap: balance;
}

.hero__description {
  max-width: 560px;
  margin: 0;
  color: #969696;
  font-size: 15px;
  line-height: 1.8;
}

.hero__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0;
  margin-top: 42px;
}

.hero__meta-item {
  display: flex;
  align-items: center;
  gap: 9px;
  color: #9a9a9a;
  font-size: 12px;
  transition:
    color 0.25s ease,
    transform 0.25s ease;
}

.hero__meta-item:hover {
  color: #d0d0d0;
  transform: translateY(-1px);
}

.hero__meta-item:not(:last-child)::after {
  content: '';
  width: 1px;
  height: 14px;
  margin: 0 18px;
  background: rgba(255, 255, 255, 0.12);
}

.hero__meta-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 21px;
  height: 21px;
  color: #bdbdbd;
  font-size: 12px;
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

.button--primary {
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
  font-size: clamp(48px, 5vw, 72px);
  line-height: 0.95;
  font-weight: 400;
  letter-spacing: -0.05em;
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
  color: #626262;
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
  font-size: 12px;
  font-weight: 650;
  letter-spacing: 0.19em;
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
  font-size: 13px;
  line-height: 1.6;
}

/* GALLERY */

.gallery {
  position: relative;
  padding: 105px 0;
}

.gallery__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
}

.gallery__item {
  position: relative;
  aspect-ratio: 1.45 / 1;
  padding: 0;
  overflow: hidden;
  background: #111;
  cursor: pointer;
  box-shadow:
    0 18px 45px rgba(0, 0, 0, 0.2);
  transition:
    transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1),
    box-shadow 0.45s ease;
}

.gallery__item:nth-child(3n + 1) {
  grid-column: span 1;
}

.gallery__item img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transform: scale(1.005);
  transition:
    transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1),
    filter 0.6s ease;
}

.gallery__overlay {
  position: absolute;
  inset: 0;
  padding: 25px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  opacity: 0;
  background:
    linear-gradient(
      180deg,
      transparent 35%,
      rgba(0, 0, 0, 0.75) 100%
    );
  transition: opacity 0.35s ease;
}

.gallery__overlay span {
  padding: 8px 13px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.35);
  color: white;
  font-size: 12px;
  backdrop-filter: blur(10px);
  transform: translateY(8px);
  transition: transform 0.35s ease;
}

.gallery__item:hover img {
  filter:
    brightness(1.1)
    saturate(1.2);
}

/* TECHNOLOGIES */

.technologies {
  position: relative;
  padding: 65px 0 110px;
  overflow: hidden;
}

.technologies::before {
  content: '';
  position: absolute;
  width: 370px;
  height: 370px;
  left: 3%;
  bottom: -180px;
  border-radius: 50%;
  background: rgba(215, 55, 35, 0.16);
  filter: blur(95px);
  pointer-events: none;
}

.technologies__card {
  position: relative;
  min-height: 220px;
  padding: 50px 55px;
  overflow: hidden;
  border-radius: 26px;
 
  display: grid;
  grid-template-columns: 235px 1fr;
  gap: 50px;
  align-items: center;
  backdrop-filter: blur(10px);
  transition:
    border-color 0.4s ease,
    transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1),
    box-shadow 0.45s ease;
}

.technologies__card::after {
  content: '';
  position: absolute;
  width: 260px;
  height: 260px;
  top: -170px;
  left: -120px;
  border-radius: 50%;
  background: rgba(239, 62, 70, 0.11);
  filter: blur(50px);
  pointer-events: none;
}

.technologies__intro {
  position: relative;
  z-index: 2;
  display: flex;
  gap: 15px;
  align-items: flex-start;
  color: #a6a6a6;
  font-size: 12px;
  line-height: 1.65;
  text-transform: uppercase;
  letter-spacing: 0.095em;
}

.technologies__line {
  width: 24px;
  height: 1px;
  margin-top: 7px;
  background: var(--accent);
  flex-shrink: 0;
}

/* PROJECT NAVIGATION */

.project-navigation {
  padding: 0;
  background: rgba(10, 11, 11, 0.7);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
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
  font-size: 12px;
  letter-spacing: 0.05em;
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
  font-size: 12px;
  font-weight: 550;
}

.project-navigation__project div span {
  color: #707070;
  font-size: 12px;
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
  padding: 55px 0 70px;
  border-top: 1px solid #d8d6d1;
  display: grid;
  grid-template-columns:
    minmax(300px, 1fr)
    150px
    150px;
  gap: 100px;
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
  letter-spacing: 0.2em;
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
  border-top: 1px solid #d8d6d1;
  display: flex;
  justify-content: space-between;
  color: #999;
  font-size: 12px;
}

/* GALLERY MODAL */

.gallery-modal {
  position: fixed;
  z-index: 9999;
  inset: 0;
  padding: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(4, 5, 5, 0.92);
  backdrop-filter: blur(22px);
  -webkit-backdrop-filter: blur(22px);
}

.gallery-modal::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.025),
      transparent 45%
    );
  pointer-events: none;
}

.gallery-modal__image {
  position: relative;
  z-index: 2;
  max-width: min(1350px, 87vw);
  max-height: 84vh;
  object-fit: contain;
  border-radius: 10px;
  box-shadow:
    0 45px 130px rgba(0, 0, 0, 0.55);
  animation:
    galleryImageOpen 0.45s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.gallery-modal__close {
  position: absolute;
  z-index: 5;
  top: 27px;
  right: 35px;
  width: 44px;
  height: 44px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.045);
  color: white;
  font-size: 25px;
  font-weight: 200;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition:
    background 0.3s ease,
    transform 0.35s ease,
    border-color 0.3s ease;
}

.gallery-modal__close:hover {
  border-color: rgba(255, 255, 255, 0.35);
  background: rgba(255, 255, 255, 0.1);
  transform: rotate(90deg);
}

.gallery-modal__navigation {
  position: absolute;
  z-index: 4;
  top: 50%;
  width: 52px;
  height: 52px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.055);
  color: white;
  font-size: 17px;
  cursor: pointer;
  backdrop-filter: blur(12px);
  transform: translateY(-50%);
  transition:
    background 0.3s ease,
    border-color 0.3s ease,
    transform 0.3s ease;
}

.gallery-modal__navigation:hover {
  border-color: rgba(255, 255, 255, 0.35);
  background: rgba(255, 255, 255, 0.11);
}

.gallery-modal__navigation--previous {
  left: 35px;
}

.gallery-modal__navigation--previous:hover {
  transform:
    translateY(-50%)
    translateX(-4px);
}

.gallery-modal__navigation--next {
  right: 35px;
}

.gallery-modal__navigation--next:hover {
  transform:
    translateY(-50%)
    translateX(4px);
}

.gallery-modal__counter {
  position: absolute;
  z-index: 5;
  bottom: 26px;
  padding: 7px 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
  color: #929292;
  font-size: 12px;
  backdrop-filter: blur(10px);
}

.gallery-modal-enter-active,
.gallery-modal-leave-active {
  transition:
    opacity 0.35s ease,
    backdrop-filter 0.35s ease;
}

.gallery-modal-enter-from,
.gallery-modal-leave-to {
  opacity: 0;
  backdrop-filter: blur(0);
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

@keyframes galleryImageOpen {
  from {
    opacity: 0;
    transform:
      scale(0.965)
      translateY(8px);
  }

  to {
    opacity: 1;
    transform:
      scale(1)
      translateY(0);
  }
}

/* SCROLL ANIMATIONS */

@supports (animation-timeline: view()) {
  .project-info__main,
  .project-info__sidebar,
  .gallery__item,
  .technologies__card {
    animation:
      revealOnScroll linear both;
    animation-timeline: view();
    animation-range:
      entry 0%
      entry 28%;
  }

  .gallery__item:nth-child(2) {
    animation-range:
      entry 3%
      entry 31%;
  }

  .gallery__item:nth-child(3) {
    animation-range:
      entry 6%
      entry 34%;
  }

  .gallery__item:nth-child(4) {
    animation-range:
      entry 9%
      entry 37%;
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
  .container {
    width: min(100% - 60px, 1240px);
  }

  .hero__content {
    min-height: auto;
    grid-template-columns: 1fr;
  }

  .hero__info {
    padding:
      90px
      max(30px, calc((100vw - 900px) / 2))
      80px;
  }

  .hero__image-wrapper,
  .hero__image {
    min-height: 520px;
  }

  .project-info__grid {
    gap: 75px;
  }

  .technologies__card {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

@media (max-width: 800px) {
  .container {
    width: calc(100% - 38px);
  }

  .header {
    height: 68px;
  }

  .header__nav {
    gap: 18px;
  }

  .header__nav a {
    padding: 25px 0;
  }

  .header__nav a::before {
    bottom: 17px;
  }

  .hero__info {
    padding:
      70px
      22px
      65px;
  }

  .hero h1 {
    font-size: 44px;
  }

  .hero__image-wrapper,
  .hero__image {
    min-height: 400px;
  }

  .project-info {
    padding: 75px 0;
  }

  .project-info::before {
    display: none;
  }

  .project-info__grid {
    grid-template-columns: 1fr;
    gap: 55px;
  }

  .project-info__sidebar {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0 35px;
    padding:
      35px
      0
      0;
    border-left: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  .project-detail:not(:last-child) {
    margin-bottom: 26px;
  }

  .gallery {
    padding: 70px 0;
  }

  .gallery__grid {
    grid-template-columns: 1fr;
  }

  .technologies {
    padding: 35px 0 75px;
  }

  .technologies__card {
    padding: 38px 30px;
  }


  .footer__content {
    grid-template-columns: 1fr 1fr;
    gap: 45px;
  }

  .footer__about {
    grid-column: 1 / -1;
  }
}

@media (max-width: 560px) {
  .header {
    height: 62px;
  }

  .header__logo {
    font-size: 13px;
  }

  .header__nav a:not(.active) {
    display: none;
  }

  .header__nav a {
    padding: 21px 0;
  }

  .header__nav a::before {
    bottom: 14px;
  }

  .hero__info {
    padding:
      60px
      20px
      55px;
  }

  .hero h1 {
    margin-top: 20px;
    font-size: 37px;
    line-height: 1.02;
  }

  .hero__description {
    font-size: 14px;
  }

  .hero__meta {
    margin-top: 33px;
    display: grid;
    grid-template-columns: repeat(2, auto);
    justify-content: flex-start;
    gap: 14px 24px;
  }

  .hero__meta-item:not(:last-child)::after {
    display: none;
  }

  .hero__actions {
    align-items: stretch;
    flex-direction: column;
  }

  .button {
    width: 100%;
  }

  .hero__image-wrapper,
  .hero__image {
    min-height: 290px;
  }

  .project-info {
    padding: 65px 0;
  }

  .project-info__main h2 {
    font-size: 46px;
  }

  .project-info__lead {
    font-size: 16px;
  }

  .project-info__section {
    margin-top: 40px;
    padding-top: 27px;
  }

  .project-info__sidebar {
    grid-template-columns: 1fr;
  }

  .gallery {
    padding: 55px 0;
  }

  .gallery__grid {
    gap: 13px;
  }

  .gallery__item {
    border-radius: 10px;
  }

  .technologies__card {
    padding: 32px 22px;
    border-radius: 19px;
  }



  .project-navigation__project img {
    display: none;
  }

  .footer {
    padding-top: 40px;
  }

  .footer__content {
    grid-template-columns: 1fr;
    gap: 38px;
    padding-bottom: 50px;
  }

  .footer__about {
    grid-column: auto;
  }

  .footer__bottom {
    gap: 13px;
    flex-direction: column;
  }

  .gallery-modal {
    padding: 18px;
  }

  .gallery-modal__image {
    max-width: 95vw;
    border-radius: 6px;
  }

  .gallery-modal__navigation {
    width: 42px;
    height: 42px;
  }

  .gallery-modal__navigation--previous {
    left: 12px;
  }

  .gallery-modal__navigation--next {
    right: 12px;
  }

  .gallery-modal__close {
    top: 14px;
    right: 14px;
    width: 40px;
    height: 40px;
  }
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
