let botonPlanEjercicio = document.getElementById('botonPlanesEjercicio');
let botonPlanesAlimenticio= document.getElementById('botonPlanesAlimenticio');
let menuAlimentacion = document.getElementById('menuAlimentacion');
let menuEjercicio= document.getElementById('menuEjercicio');
let contenidoAlimentario = document.getElementById('contenidoAlimentario');
let contenidoEjercicios = document.getElementById('contenidoEjercicios');

function ocultarContenido(){
    menuAlimentacion.style.display="none";
    menuEjercicio.style.display="none";
    contenidoAlimentario.style.display="none";
    contenidoEjercicios.style.display="none";
}


function aparecerPlanEjercicio(){
    ocultarContenido()
    menuEjercicio.style.display="flex";
    contenidoEjercicios.style.display="flex";
}
function aparecerPlanAlimenticio(){
    ocultarContenido()
    menuAlimentacion.style.display="flex";
    contenidoAlimentario.style.display="flex";
}

botonPlanEjercicio.addEventListener('click', aparecerPlanEjercicio)
botonPlanesAlimenticio.addEventListener('click', aparecerPlanAlimenticio)

let mesUno = document.getElementById("mesUno")
let mesDos = document.getElementById("mesDos")
let mesTres = document.getElementById("mesTres")


let primerMesDesayuno = document.getElementById("primerMesDesayuno");
    let segundoMesDesayuno = document.getElementById("segundoMesDesayuno");
    let tercerMesDesayuno = document.getElementById("tercerMesDesayuno");
    let primerMesAlmuerzo = document.getElementById("primerMesAlmuerzo");
    let segunodMesAlmuerzo = document.getElementById("segundoMesAlmuerzo"); 
    let tercerMesAlmuerzo = document.getElementById("tercerMesAlmuerzo");
    let primerMesCena = document.getElementById("primerMesCena");
    let segundoMesCena = document.getElementById("segundoMesCena");
    let tercerMesCena = document.getElementById("tercerMesCena");

function ocultarAlimentos(){
    
    

    primerMesDesayuno.style.display="none";
    primerMesAlmuerzo.style.display="none";
    primerMesCena.style.display="none";
    segundoMesDesayuno.style.display="none";
    segunodMesAlmuerzo.style.display="none";
    segundoMesCena.style.display="none";
    tercerMesDesayuno.style.display="none";
    tercerMesAlmuerzo.style.display="none";
    tercerMesCena.style.display="none";
}

function mostrarAlimentosUno(){
    ocultarAlimentos()
    primerMesDesayuno.style.display="flex";
    primerMesAlmuerzo.style.display="flex";
    primerMesCena.style.display="flex";
    
}
function mostrarAlimentosDos(){
    ocultarAlimentos()
    segundoMesDesayuno.style.display="flex";
    segunodMesAlmuerzo.style.display="flex";
    segundoMesCena.style.display="flex";
    
}
function mostrarAlimentosTres(){
    ocultarAlimentos()
    tercerMesDesayuno.style.display="flex";
    tercerMesAlmuerzo.style.display="flex";
    tercerMesCena.style.display="flex";
    
}

mesUno.addEventListener("click",mostrarAlimentosUno)
mesDos.addEventListener("click",mostrarAlimentosDos)
mesTres.addEventListener("click",mostrarAlimentosTres)