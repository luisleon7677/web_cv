
const btnRight= document.querySelector('.btn-right');
const btnLeft= document.querySelector('.btn-left');
const image = document.querySelector('.img-carrusel');
const text= document.getElementById('p');
const titulo= document.getElementById('t');
let currentIndex =0;

const images =[
    {src:'img/port1.jpg',text:'La innovación es parte esencial en todos mis proyectos, siempre busco salir del status quo.',titulo:'Soy Innovador'},
    {src:'img/port2.jpg',text:'Comencé a programar en 2018 y desde entonces me apasiona hacerlo; es mi mejor pasatiempo.',titulo:'Soy programador'},
    {src:'img/port3.jpg',text:'Forme parte de equipos en los que trabajé con herramientas para analizar datos estadísticos.',titulo:'Soy Analista'},
    {src:'img/port4.jpg',text:'El conocimiento es la mejor arma que puedo elegir llevar a una guerra.',titulo:'Soy Autodidacta'}
];

btnRight.addEventListener('click', changeContent);
btnLeft.addEventListener('click', changeContent);

function changeContent(){
    currentIndex=(currentIndex+1)%images.length; // Avanza al siguiente índice y vuelve al inicio si llega al final
    //cambia imagen
    image.src= images[currentIndex].src;
    //cambia texto
    text.textContent=images[currentIndex].text;
    //cambiar titulo
    titulo.textContent=images[currentIndex].titulo;

};

