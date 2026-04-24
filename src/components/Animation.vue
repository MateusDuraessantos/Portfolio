<template>
  <div class="animation__section">
    <section id="pages">
      <div class="animation__container">
        <div class="animation__content">
          <div class="animation__tranform3d" id="animation__tranform3d">
            <div class="animation__bubble--red">
              <p class="animation__p">Architecture</p>
            </div>
            <div class="animation__bubble--black">
              <p class="animation__p">Maintainability</p>
            </div>
            <div class="animation__bubble--yellow">
              <p class="animation__p">Scalability</p>
            </div>
            <div class="animation__bubble--blue">
              <div class="animation__p">Frontend</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.animation__section {
  position: relative;
  width: 100%;
  padding: 100px 0;
  z-index: 12;
}

.animation__section * {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.animation__container {
  display: flex;
  flex-direction: column;
  gap: 80px;
}

.animation__container h2 {
  font-size: 70px;
  font-family: "Playfair Display", serif;
  font-style: italic;;
  margin-bottom: 50px;
  color: white;
}

.animation__content {
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 2500px;
  width: 300px;
  height: 300px;
  margin: auto;
}

.animation__tranform3d {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  perspective: 1500px;
  transform: translate3d(0, 0px, 0px) rotateY(35deg);
  transform-style: preserve-3d;
}

.animation__p {
  position: absolute;
  top: 0%;
  font-size: 30px;
  font-weight: 600;
  text-align: end;
  min-width: 200px;
  padding: 20px 50px;
  transform: translatey(-50%);
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.animation__bubble--red,
.animation__bubble--yellow,
.animation__bubble--black,
.animation__bubble--blue {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  border: 2px solid rgba(221, 221, 221, 0.356);
  width: 100%;
  height: 100%;
  backdrop-filter: blur(6px);
  border-radius: 50%;
  transform-style: preserve-3d;
  cursor: pointer;
  outline: 14px solid transparent;
  transition: 1s;
  left: 0;
}

.animation__bubble--yellow {
  background-image: url('../../public/noise.png'), linear-gradient(0deg, #ffb36b, #FF7A00, rgba(163, 95, 0, 0.649), rgba(0, 0, 0, 0.1), transparent);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transform: translate3d(0, 0, 0px) translatex(-0%);
  filter: blur(5px);
  transition: 1s;
}

.animation__bubble--black {
  background: rgba(156, 156, 156, 0.663);
  background-image: url('../../public/noise.png'), linear-gradient(0deg, rgba(0, 0, 0, 0.663), transparent);
  transform: translate3d(0, 0, 100px) translatez(0px) translatex(-0%);
  filter: blur(2.5px);
}

.animation__bubble--red {
  background-image: url('../../public/noise.png'), linear-gradient(0deg, rgb(255, 103, 103), rgba(199, 60, 60, 0.418), rgba(255, 0, 0, 0.13), rgba(0, 0, 0, 0.1), transparent);
  transform: translate3d(0, 0, 200px) translatex(-0%);
  filter: blur(1px);
}

.animation__bubble--blue {
  background-image: url('../../public/noise.png'), linear-gradient(0deg, #7a95a5, #328cc060, #00a2ff18, rgba(0, 0, 0, 0.1), transparent);
  transform: translate3d(0, 0, 300px) translatex(-0%);
}

.animation__bubble--yellow:hover, .animation__bubble--black:hover, .animation__bubble--red:hover, .animation__bubble--blue:hover {
  transition: .2s;
  filter: blur(0px);
}

.animation__bubble--red:hover,
.animation__bubble--yellow:hover,
.animation__bubble--black:hover,
.animation__bubble--blue:hover {
  left: -20px;
}

.animation__bubble--yellow .animation__p {
  top: 50%;
  left: -190px;
}

.animation__bubble--black .animation__p {
  top: 35%;
  left: -240px;
}

.animation__bubble--red .animation__p {
  top: 20%;
  left: -170px;
}

.animation__bubble--blue .animation__p {
  top: 10%;
  left: -140px;
}

@media only screen and (max-width: 1000px) {
  .animation__section {
    display: none;
  }
}
</style>