const inicio = document.querySelector('.titulo-encabezado');
/*
const alumnado = document.querySelector('.contenerdor-tarjeta.alumno');
*/
inicio.addEventListener("click", saludar);

function saludar(){
    alert("hola mundo");
}

//alumnado.addEventListener('click');

function desplegar(){
    
}

const elemento = document.querySelector('.alumno');
const main = document.querySelector('main');
let veces = 0;

elemento.addEventListener('mouseover', cambiarAlumnoSobre);

function cambiarAlumnoSobre(){
    main.style.background = "linear-gradient(150deg,rgb(215, 180, 255) 15%, rgb(181, 253, 241), rgb(222, 255, 214), rgb(252, 182, 182) 85%)";
    main.style.transition = "background 4s ease";
    main.style.background = "violet";
}
elemento.addEventListener('mouseout', cambiarAlumnofuera);

function cambiarAlumnofuera(){
    main.style.transition = "background 1s ease";
    main.style.background = "linear-gradient(150deg,rgb(215, 180, 255) 15%, rgb(181, 253, 241), rgb(222, 255, 214), rgb(252, 182, 182) 85%)";    
}

elemento.addEventListener('click', cambiarDeColor);

function cambiarDeColor(){    
    console.log("Funciona");
}
