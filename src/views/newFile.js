import { imagens } from './destaque.js';
import { ref } from 'vue';

export default (await import('vue')).defineComponent({
setup() {
let carrossel = ref('');
let initialClickX = ref(0);
let initialClickY = ref(0);
let inicialTransform = ref(0);
let willchange = ref(false);
let positionInicial = ref(0);
let blockBodyScroll = ref(true);
const imgs = imagens;

const moveTouch = (event) => {
const element = document.querySelector('.card__grid');
const slideWidth = String(event.touches[0].clientX).split('.')[0] - initialClickX.value;
const slideHeight = event.touches[0].clientY - initialClickY.value;
const widthSum = inicialTransform.value + slideWidth * 0.26;

if (parseInt(slideWidth / slideHeight).toString() != 0 && blockBodyScroll.value == true || blockBodyScroll.value == 'justVerticalScrollAllowed') { // Se o scroll começou na horizontal, bloqueia o scroll da vertical e vise-versa
document.querySelector('body').style.overflowY = 'hidden';
widthSum <= 0 && element.style.transform.split('(')[1].split('vw)')[0] > imgs.length * 100 * -1 + 90 ? element.style.transform = `translateX(${widthSum}vw)` : null;
blockBodyScroll.value = 'justVerticalScrollAllowed';
} else if (blockBodyScroll.value || blockBodyScroll.value == 'justHorizontalScrollAllowed') {
blockBodyScroll.value = 'justHorizontalScrollAllowed';
}
};
let carrosselSelected = ref(0);

const endCarrossel = (e) => {
const element = document.querySelector('.card__grid');

const arrastoCursor = 70; // Define quantos pixeis o touch tem que arrastado para mudar de imagem
let widthScroll = Number(element.style.transform.split('(')[1].split('vw)')[0]); // Distancia que a imagem foi arrastada
let stopScroll = widthScroll > imgs.length * 100 * -1 + 100; // Impede o scroll No final

if (widthScroll && stopScroll) {
if (initialClickX.value > e.changedTouches[0].clientX && initialClickX.value - e.changedTouches[0].clientX > arrastoCursor) {
positionInicial.value += -100;
carrosselSelected.value++;
console.log(carrosselSelected.value);
// document.querySelector(`carrossel--${carrosselSelected}`).classList.add('carrossel__current--gray')
}
else if (initialClickX.value - e.changedTouches[0].clientX < -arrastoCursor) {
carrosselSelected--;
document.querySelector(`carrossel--${carrosselSelected}`).classList.add('carrossel__current--gray');
positionInicial.value += 100;
}
}
element.style.transform = `translateX(${positionInicial.value}vw)`;
willchange.value = false;
initialClickX.value = 0;
inicialTransform.value = 0;
blockBodyScroll.value = true;
document.querySelector('body').style.overflowY = 'initial';
};

const startCarrossel = (e) => {
const element = document.querySelector('.card__grid');
positionInicial.value = Number(element.style.transform.split('(')[1].split('vw)')[0]);

if (e != 'avancar' && e != 'voltar') {
initialClickY.value = Number(String(e.touches[0].clientY).split('.')[0]);
initialClickX.value = Number(String(e.touches[0].clientX).split('.')[0]);
inicialTransform.value = Number(document.querySelector('.card__grid').style.transform.split('vw')[0].split('translateX(')[1]);
}

if (e == 'avancar' && imgs.length - 1 > carrossel.value) {
carrossel.value += 1;
element.setAttribute('style', `transform: translateX(-${carrossel.value}00vw)`);
} else if (e == 'voltar' && carrossel.value > 0) {
carrossel.value -= 1;
element.setAttribute('style', `transform: translateX(-${carrossel.value}00vw)`);
}
};

return {
imgs,
moveTouch,
endCarrossel,
startCarrossel,
};
},
name: 'Inicio',
props: {
booleanTheme: Boolean
},
data() {
return {
blockTimer: true,
blurTimeout: '',
whiteIcons: 'whiteicons',
whiteImages: 'black',
experienciaIcons: [
[
{
img: 'software0',
skill: 'Illustrator',
alt: 'Logo Adobe Illustrator'
},
{
img: 'software1',
skill: 'cinema 4D',
alt: 'Logo cinema 4D'
},
{
img: 'software2',
skill: 'Photoshop',
alt: 'Logo Adobe Photoshop'
},
{
img: 'software3',
skill: 'Miro',
alt: 'Logo Miro'
},
{
img: 'software4',
skill: 'Figma',
alt: 'Logo Figma'
}
],
[
{
img: 'tech0',
skill: 'Firebase',
alt: 'Logo Firebase'
},
{
img: 'tech1',
skill: 'CSS',
alt: 'Logo CSS'
},
{
img: 'tech2',
skill: 'HTML',
alt: 'Logo HTML'
},
{
img: 'tech3',
skill: 'Javascript',
alt: 'Logo Javascript'
},
{
img: 'tech4',
skill: 'Vue  JS',
alt: 'Logo Vuejs 3'
}
],
],
blackTools: {
tools: [
'paint3',
'paint5',
],
jpg: [
'paint4',
'paint1',
'paint2',
'paint0',
],
align: [
'aling1',
'aling2',
'aling3',
'aling4',
],
},
cardsOrcamento: [
{
title: 'Design',
card: [
{
oferta: 'Protótipo navegável',
beneficio: 'Você terá acesso a um protótipo navegavel, para entender melhor como o produto final será, antes de ser desenvolvido os códigos.',
},
{
oferta: 'Mobile first',
beneficio: 'Trabalho com designs tanto desktops quanto mobiles.'
},
{
oferta: 'Design único',
beneficio: 'Cada projeto é único, não utilizo layouts pré montados (salvo alguma necessidade do cliente).'
},
],
},
{
title: 'Seu website online',
class: 'orcamento__card--2',
card: [
{
oferta: 'Hospedagem',
beneficio: 'Você não precisa se preocupar em colocar seu website online, eu cuido disso!'
},
{
oferta: 'Domínio próprio',
beneficio: 'Você escolhe o domínio desejado, exemplo: www.meusite.com.br, e eu implemento.'
},
{
oferta: 'Programação',
beneficio: 'Já tem um design de website pronto? eu posso fazer os códigos desse site para você.'
},
{
oferta: 'Otimização',
beneficio: ' Otimizado para carregar rapidamente.'
},
],
},
{
title: 'Outros diferências',
class: 'orcamento__card--3',
card: [
{
oferta: '1 Mês de assistência',
beneficio: 'Após a entrega do projeto, ofereço 1 mês de assistencia para pequenas alterações, sem custo adicional.'
},
{
oferta: 'Códigos do website',
beneficio: 'Você terá acesso a todos os códigos desenvolvidos, para fazer alterações caso desejar.'
},
{
oferta: 'Responsividade Mobile/Desktop',
beneficio: 'O site será entrega com responsividade para todos dispositivos móveis.'
},
],
},
],
popup: false,
loading: true,
number: 0,
indexImg: 0,
footerVisible: true,
saldacao: null
};
},
watch: {
booleanTheme() {
this.changeImagens(1000);
},
},
mounted() {
console.clear();
this.observador();
this.keepWhiteOnReload(0);
this.changeImagens(0);
this.haveAGoodDay();

const scrolling = [
{ id: 'planets-earth', value: 0.4, position: -2200 },
{ id: 'planets-red', value: 0.4, position: -1700 },
{ id: 'parallax', value: 0.4, position: -200 },
{ id: 'bubbles__observer', value: 0.4, position: 1200 },
];

const parallaxScroll = (element) => document.getElementById(element.id).style.top = `${window.scrollY * element.value + element.position}px`;

if (window.screen.availWidth > 1000) {
scrolling.forEach(element => {
parallaxScroll(element); // Define o valor inicia de acordo com o scroll inicial
window.addEventListener('scroll', () => {
parallaxScroll(element);
});
});
}
},
methods: {
scrollDown(ancora) {
window.scrollTo({
top: document.getElementById(ancora).offsetTop,
behavior: 'smooth'
});
},
haveAGoodDay() {
const date = new Date().getHours();
if (date >= 0 && date < 5) {
this.saldacao = 'Olá,';
} else if (date >= 5 && date < 12) {
this.saldacao = 'Bom dia!';
} else if (date >= 12 && date < 18) {
this.saldacao = 'Boa tarde!';
} else {
this.saldacao = 'Boa noite!';
}
},
changeImagens(timer) {
if (this.booleanTheme == true) {
setTimeout(() => {
this.blockClicked = 'blackicons';
this.whiteImages = 'white';
this.footerVisible = false;
}, timer);
} else {
setTimeout(() => {
this.blockClicked = 'whiteicons';
this.whiteImages = 'black';
this.footerVisible = true;
}, timer);
}
this.keepWhiteOnReload(timer);
},
keepWhiteOnReload(timer) {
setTimeout(() => {
//Altera o path das thumbs
if (this.booleanTheme == true) {
document.getElementById('main').setAttribute('class', 'whiteTheme');
this.whiteIcons = 'blackicons';
} else {
document.getElementById('main').removeAttribute('class');
this.whiteIcons = 'whiteicons';
}
}, timer);
},
copyText(content) {
const textToCopy = content; // Texto a ser copiado
navigator.clipboard.writeText(textToCopy)
.then(() => {
alert("Texto copiado: " + textToCopy);
})
.catch((error) => {
console.error("Erro ao copiar texto:", error);
});
},
blurIn(enter) {
clearTimeout(this.blurTimeout);
const footer = document.querySelector('.sky__informacoes');
let blur = Number(footer.style.backdropFilter.split('(')[1][0]);
let y = blur;
const addBlur = (increment) => {
footer.setAttribute('style', `backdrop-filter: blur(${y}px)`);
y += increment;
if ((increment === 1 && y < 10) || (increment === -1 && y >= 0)) {
clearTimeout(this.blurTimeout);
this.blurTimeout = setTimeout(() => addBlur(increment), 20);
}
};
addBlur(enter == 'enter' ? 1 : -1);
},
observador() {
const observer = new IntersectionObserver(entries => {
this.$emit('nomeEvento', entries[0].isIntersecting);
});
observer.observe(document.getElementById('observador__footer'));
},
upPopup(event, index) {
const elementos = ['popup__close', 'popup__overflow', 'container-button', 'card'];
if (this.blockTimer) {
const clicked = event.target.classList[0];
elementos.forEach(obj => {
if (event.currentTarget.classList[0] == obj) {
this.indexImg = index;
document.body.style.overflow = 'hidden';
this.popup = !this.popup;
} else if (document.body.style.overflow == 'hidden' && clicked == obj) {
this.blockTimer = false;
document.querySelector('#img_portrato').classList.add('popup__close--animation-opacity');
document.querySelector('.popup__background').classList.add('popup__close--animation-blur');
setTimeout(() => {
document.body.style.overflow = '';
this.popup = !this.popup;
this.loading = true;
document.querySelector('.popup__background').classList.remove('popup__close--animation-blur');
document.querySelector('#img_portrato').classList.remove('popup__close--animation-opacity');
this.blockTimer = true;
}, 1000);
}
}
);
}
this.number = 0;
},
loadingImg() {
this.number = this.number + 1;
if (this.number == this.imgs[this.indexImg].paths.length) {
document.getElementById('animation').classList.add('popup__animation');
this.loading = false;
document.getElementById('img_portrato').style.opacity = 1;
this.number = 0;
}
},
changeProjectDesign(value) {
clearTimeout(this.removeTimer);
this.loading = true;
const img_portrato = document.getElementById('img_portrato');
img_portrato.setAttribute('style', 'opacity: 0');
if (value == 'back') {
if (this.indexImg > 0) {
this.indexImg--;
} else {
this.indexImg = imagens.length - 1;
}
}
if (value == 'next') {
if (this.indexImg < imagens.length - 1) {
this.indexImg++;
} else {
this.indexImg = 0;
}
}
img_portrato.classList.add('popup__animation');
this.removeTimer = setTimeout(() => {
img_portrato.classList.remove('popup__animation');
}, 1000);
img_portrato.setAttribute('style', 'opacity: 1');
},
}
});
