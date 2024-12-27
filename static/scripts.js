
const btnRight= document.querySelector('.btn-right');
const btnLeft= document.querySelector('.btn-left');
const image = document.querySelector('.img-carrusel');
const text= document.getElementById('p');
const titulo= document.getElementById('t');
let currentIndex =0;

const images =[
    {src:'img/port1.jpg',text:'texto 1',titulo:'titulo1'},
    {src:'img/port2.jpg',text:'texto 2',titulo:'titulo2'},
    {src:'img/port3.jpg',text:'texto 3',titulo:'titulo3'},
    {src:'img/port4.jpg',text:'texto 4',titulo:'titulo4'}
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

