<template>
  <div class="pages__section">
    <div class="noise"></div>
    <section class="pages" id="pages">
      <div class="pages__container--btns">
        <div class="pages__options" bubbleClick bubble="yellow">
          <button class="page__btn">Design</button>
          <ul class="page__ul" id="interaction-design">
            <li>
              <p class="page__title">Design personalizado</p>
              <p class="page__description">Criamos soluções de design únicas que refletem a identidade da sua marca e
                atraem a atenção do seu público-alvo.</p>
            </li>
          </ul>
        </div>
        <div class="pages__options" bubbleClick bubble="black">
          <button class="page__btn">Programação</button>
          <ul class="page__ul" id="interaction-programacao">
            <li>
              <p class="page__title">Desenvolvimento com HTML, CSS e JavaScript</p>
              <p class="page__description">Utilizamos HTML para estruturar suas páginas, CSS para criar designs
                visualmente atraentes e JavaScript para adicionar interatividade, garantindo sites modernos, rápidos e
                funcionais.</p>

            </li>
          </ul>
        </div>
        <div class="pages__options" bubbleClick bubble="red">
          <button class="page__btn">SEO</button>
          <ul class="page__ul" id="interaction-seo">
            <li>
              <p class="page__title">Otimização para SEO</p>
              <p class="page__description">Nossas páginas são otimizadas para os motores de busca, aumentando sua
                visibilidade online e atraindo mais tráfego orgânico para o seu site.</p>
            </li>
          </ul>
        </div>
        <div class="pages__options" bubbleClick bubble="blue">
          <button class="page__btn">Online</button>
          <ul class="page__ul" id="interaction-online">
            <li>
              <p class="page__title">Hospedagem e Domínios</p>
              <p class="page__description">Ajudamos na escolha e compra de domínios, bem como na configuração e
                gerenciamento de hospedagem, para garantir que seu site esteja sempre online e com ótimo desempenho.</p>
            </li>
          </ul>
        </div>
      </div>

      <div class="pages__container">
        <h2>Landing pages</h2>
        <div class="mfeiw">
          <div class="pages__tranform3d" id="pages__tranform3d">
            <div class="pages__bubble--red" bubbleClick="interaction-seo">
              <p class="pages__p">SEO</p>
            </div>
            <div class="pages__bubble--black" bubbleClick="interaction-programacao">
              <p class="pages__p">Programação</p>
            </div>
            <div class="pages__bubble--yellow" bubbleClick="interaction-design">
              <p class="pages__p">Design</p>
            </div>
            <div class="pages__bubble--blue" bubbleClick="interaction-online">
              <div class="pages__p">Online</div>
            </div>
          </div>
        </div>

        <div class="pages__design ">
          <span class="pages__tags">&#60;<i>design</i>&#62;</span>
          <img class="pages__imgs" src="design.svg" alt="">
          <span class="pages__tags">&#60;/<i>design</i>&#62;</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  mounted() {

    const pages__tranform3d = document.getElementById('pages__tranform3d')
    const change3d = (e) => {
      let x = e.clientX * 0.02 + 20
      const y = e.clientY * 0.02
      pages__tranform3d.style.transform = `translate3d(0, 0px, 0px) rotatey(${x}deg)`
    }

    document.getElementById('pages').onmousemove = change3d


    const page__btn = document.querySelectorAll('[bubbleClick]')
    page__btn.forEach(obj => {
      obj.addEventListener('click', (e) => {
        const bubbleClick = e.currentTarget.getAttribute('bubbleClick')
        if (bubbleClick) {
          document.getElementById(bubbleClick).style.display = 'initial'
        }
        else e.currentTarget.querySelector('.page__ul').style.display = 'initial'
      })

      obj.addEventListener('mouseenter', (e) => {
        const bubbleId = e.currentTarget.getAttribute('bubble')
        if (bubbleId) {
          document.querySelector(`.pages__bubble--${bubbleId}`).style.left = '-70px'
          document.querySelector(`.pages__bubble--${bubbleId}`).style.filter = 'blur(0)'
        }
      })

      obj.addEventListener('mouseleave', (e) => {
        const bubbleId = e.currentTarget.getAttribute('bubble')
        if (bubbleId) {
          document.querySelector(`.pages__bubble--${bubbleId}`).style.left = ''
          document.querySelector(`.pages__bubble--${bubbleId}`).style.filter = ''
        }
      })
    })
  }
}
</script>

<style scoped>

.noise {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-image: url('../../public/noise.png');
  opacity: 0.3;
  height: 100%;
}

.pages__section {
  position: relative;
  width: 100%;
  backdrop-filter: blur(10px);
  box-shadow: 3px 3px 60px rgba(62, 4, 4, 0.4);
  background-image: linear-gradient(90deg, rgba(64, 33, 18, 0.4), transparent);
  padding: 100px 0;
  padding-top: 200px;
}

.pages__section * {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.pages {
  position: relative;
  display: grid;
  grid-template-columns: 450px 1fr;
  align-items: center;
  gap: 200px;
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-style: normal;
  width: 1200px;
  margin: auto;
  height: 800px;
}

.pages__container {
  display: flex;
  flex-direction: column;
  gap: 80px;
}

.pages__container h2 {
  font-size: 70px;
  font-family: "Playfair Display", serif;
  font-style: italic;;
  margin-bottom: 50px;
  color: white;
}

.page__ul {
  display: none;
}

.pages__options {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  cursor: pointer;
}

.pages__options *, .page__description, .page__title {
  color: white !important;
}

.page__title {
  font-weight: 600;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
}

.pages__container--btns {
  position: relative;
  z-index: 23;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  align-items: flex-start;
  text-align: start;
  color: white;
  font-size: 26px;
  font-family: Arial, Helvetica, sans-serif;
  z-index: 12;
}

.page__btn {
  background: none;
  border: none;
  color: white;
  font-size: 26px;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  cursor: pointer;
  transition: .2s;
}

.mfeiw {
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 2500px;
  width: 300px;
  height: 300px;
}

.pages__tranform3d {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  perspective: 1500px;
  transform: translate3d(0, 0px, 0px) rotateY(35deg);
  transform-style: preserve-3d;
}

.pages__p {
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

.pages__bubble--red,
.pages__bubble--yellow,
.pages__bubble--black,
.pages__bubble--blue {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  border: 1px solid rgba(221, 221, 221, 0.356);
  width: 100%;
  height: 100%;
  backdrop-filter: blur(3px);
  border-radius: 50%;
  transform-style: preserve-3d;
  cursor: pointer;
  outline: 14px solid transparent;
  transition: 1s;
  left: 0;
}

.pages__bubble--yellow {
  background-image: url('../../public/noise.png'), linear-gradient(0deg, #ffb36b, #FF7A00, rgba(163, 95, 0, 0.649), rgba(0, 0, 0, 0.1), transparent);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transform: translate3d(0, 0, 0px) translatex(-0%);
  filter: blur(5px);
  transition: 1s;
}

.pages__bubble--black {
  background: rgba(156, 156, 156, 0.663);
  background-image: url('../../public/noise.png'), linear-gradient(0deg, rgba(0, 0, 0, 0.663), transparent);
  transform: translate3d(0, 0, 100px) translatez(0px) translatex(-0%);
  filter: blur(2.5px);
}

.pages__bubble--red {
  background-image: url('../../public/noise.png'), linear-gradient(0deg, rgb(255, 103, 103), red, rgba(255, 0, 0, 0.418), rgba(255, 0, 0, 0.13), rgba(255, 0, 0, 0.13), rgba(0, 0, 0, 0.1), transparent);
  transform: translate3d(0, 0, 200px) translatex(-0%);
  filter: blur(1px);
}

.pages__bubble--blue {
  background-image: url('../../public/noise.png'), linear-gradient(0deg, #60c5ff, #00A3FF, #00a2ff60, #00a2ff18, rgba(0, 0, 0, 0.1), transparent);
  transform: translate3d(0, 0, 300px) translatex(-0%);
}

.pages__bubble--yellow:hover, .pages__bubble--black:hover, .pages__bubble--red:hover, .pages__bubble--blue:hover {
  border: 1px solid transparent;
  transition: .2s;
  filter: blur(0px);
}

.pages__bubble--red:hover,
.pages__bubble--yellow:hover,
.pages__bubble--black:hover,
.pages__bubble--blue:hover {
  left: -20px;
}

.pages__design {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 10px 40px;
  color: black;
  font-size: 16px;
  border-radius: 50px;
  margin: auto;
  width: 450px;
}

.pages__imgs {
  height: 30px;
}

.pages__tags {
  font-weight: 300;
  font-size: 16px;
  color: #4A2E2E;
  font-family: Arial, Helvetica, sans-serif;
}

.pages__bubble--yellow .pages__p {
  top: 50%;
  left: -190px;
}

.pages__bubble--black .pages__p {
  top: 35%;
  left: -240px;
}

.pages__bubble--red .pages__p {
  top: 20%;
  left: -170px;
}

.pages__bubble--blue .pages__p {
  top: 10%;
  left: -140px;
}
</style>