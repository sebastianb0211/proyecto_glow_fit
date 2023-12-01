
/* Ejercicios */



let menuAlimentacion = document.getElementById('menuAlimentacion');
let menuEjercicio= document.getElementById('menuEjercicio');
let contenidoAlimentario = document.getElementById('contenidoAlimentario');
let contenidoEjercicios = document.getElementById('contenidoEjercicios')
let contenidoRecomendacion = document.getElementById("contenidoRecomendacion")
let menuRecomendaciones = document.getElementById("menuRecomendaciones")

//botones
let botonPlanesAlimenticio= document.getElementById('botonPlanesAlimenticio');
let botonPlenesRecomendaciones = document.getElementById("botonPlanRecomendacion")
let botonPlanEjercicio = document.getElementById('botonPlanesEjercicio');

function ocultarContenido(){
    menuAlimentacion.style.display="none";
    menuEjercicio.style.display="none";
    menuRecomendaciones.style.display="none";
    contenidoAlimentario.style.display="none";
    contenidoEjercicios.style.display="none";
    contenidoRecomendacion.style.display="none";
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
function aparecerRecomendaciones(){
    ocultarContenido()
    menuRecomendaciones.style.display="flex";
    contenidoRecomendacion.style.display="flex";
}

botonPlanEjercicio.addEventListener('click', aparecerPlanEjercicio)
botonPlanesAlimenticio.addEventListener('click', aparecerPlanAlimenticio)
botonPlenesRecomendaciones.addEventListener('click', aparecerRecomendaciones)

/* Alimentacion */

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

/* Recomendaciones */
let primerMesRecomendaciones = document.getElementById("primerMesRecomendaciones")
let segundoMesRecomendaciones = document.getElementById("segundoMesRecomendaciones")
let tercerMesRecomendaciones = document.getElementById("tercerMesRecomendaciones")

let mesUnoR = document.getElementById("mesUnoR")
let mesDosR = document.getElementById("mesDosR")
let mesTresR = document.getElementById("mesTresR")

function ocultarRecomendaciones(){
    primerMesRecomendaciones.style.display="none";
    segundoMesRecomendaciones.style.display="none";
    tercerMesRecomendaciones.style.display="none";


}
function MostrarRecomendaciones1(){
    ocultarRecomendaciones()
    primerMesRecomendaciones.style.display="flex";
   
}
function MostrarRecomendaciones2(){
    ocultarRecomendaciones()
    segundoMesRecomendaciones.style.display="flex";
   
}
function MostrarRecomendaciones3(){
    ocultarRecomendaciones()
    tercerMesRecomendaciones.style.display="flex";
   
}

mesUnoR.addEventListener("click",MostrarRecomendaciones1)
mesDosR.addEventListener("click",MostrarRecomendaciones2)
mesTresR.addEventListener("click",MostrarRecomendaciones3)