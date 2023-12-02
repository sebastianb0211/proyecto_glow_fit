// var abrirModalBasico=document.getElementById("basico")


window.addEventListener('click', function (event) {
    if (event.target === ventanaModal) {
      ventanaModal.style.display = 'none';
    }
})
let ventanaModal=document.getElementById("ventana-modal")
function abrirModal(){
  ventanaModal.style.display="block"
}
function actualizarDatos(){
  document.getElementById('userContainer').style.display = 'none';
  abrirModal()
}
// botones para mostrar  el contenido de cada plan 

let botonesPlanAdelgazar = document.getElementById("botonesPlanAdelgazar")
let botonesPlanTonificar = document.getElementById("botonesPlanTonificar")
let botonesPlanPeso =document.getElementById("botonesPlanPeso")

// botones para mostrar los ejercicios segun el plan
let botonPlanesEjercicioAdelgazar =document.getElementById("botonPlanesEjercicioAdelgazar")
let botonPlanesEjercicioTonificar =document.getElementById("botonPlanesEjercicioTonificar")
let botonPlanesEjercicioPeso =document.getElementById("botonPlanesEjercicioPeso")

//botones para mostrar la alimentacion segun el plan
let botonPlanesAlimenticioAdelgazar = document.getElementById("botonPlanesAlimenticioAdelgazar")
let botonPlanesAlimenticioTonificar = document.getElementById("botonPlanesAlimenticioTonificar")
let botonPlanesAlimenticioPeso = document.getElementById("botonPlanesAlimenticioPeso")

// menu para el plan alimenticio segun el plan

let menuAlimentacionAdelgazar = document.getElementById("menuAlimentacionAdelgazar")
let menuAlimentacionTonificar = document.getElementById("menuAlimentacionTonificar")
let menuAlimentacionPeso = document.getElementById("menuAlimentacionPeso")

// contenido de plan alimenticio segun el plan
let contenidoAlimentarioAdelgazar = document.getElementById("contenidoAlimentarioAdelgazar")
let contenidoAlimentarioTonificar = document.getElementById("contenidoAlimentarioTonificar")
let contenidoAlimentarioPeso = document.getElementById("contenidoAlimentarioPeso")


// botones para mostrar recomendaciones
let botonPlanRecomendacionAdelgazar = document.getElementById("botonPlanRecomendacionAdelgazar")
let botonPlanRecomendacionTonificar =document.getElementById("botonPlanRecomendacionTonificar")
let botonPlanRecomendacionPeso =document.getElementById("botonPlanRecomendacionPeso")

//menu recomendaciones segun el plan
let menuRecomendacionesAdelgazar = document.getElementById("menuRecomendacionesAdelgazar")
let menuRecomendacionesTonificar = document.getElementById("menuRecomendacionesTonificar")
let menuRecomendacionesPeso = document.getElementById("menuRecomendacionesPeso")

// contenido recomendaciones segun el plan
let contenidoRecomendacionAdelgazar = document.getElementById("contenidoRecomendacionAdelgazar")
let contenidoRecomendacionTonificar = document.getElementById("contenidoRecomendacionTonificar")
let contenidoRecomendacionPeso = document.getElementById("contenidoRecomendacionPeso")


//contenedor tipos de planes

let tiuloTiposPlan = document.getElementById("tiuloTiposPlan")
let contenedorTiposPlan = document.getElementById("contenedorTiposPlan")


function aparecerContenidoTipoPlanes(){
let ventana=document.getElementById("ventana-modal")
  let planesEjercicios = document.getElementById("contenedor-planes-ejercicio");
  let portada = document.getElementById("portada");
  let imagenPrincipal = document.getElementById("imagen-principal");
  let razones = document.getElementById("razones");
  let articulos = document.getElementById("articulos");
  let imagenParrafos = document.getElementById("imagen-parrafos");
  let nosotros = document.getElementById("nosotros");
  let footer = document.getElementById("footer");
  let testimonios = document.getElementById("testimonios");
  let containerLogin = document.getElementById("container-login");
  let loginContainer = document.getElementById("login-container");
  let planes = document.getElementById("contenedor-planes");
  let botonSalirPlanes = document.getElementById("boton-salir");
  planesEjercicios.style.display = "none";
  portada.style.display = "none";
  imagenPrincipal.style.display = "none";
  razones.style.display = "none";
  articulos.style.display = "none";
  imagenParrafos.style.display = "none";
  nosotros.style.display = "none";
  footer.style.display = "none";
  testimonios.style.display = "none";
  containerLogin.style.display = "none";
  loginContainer.style.display = "none";
  planes.style.display = "none";
  botonSalirPlanes.style.display = "none"; 
  ventana.style.display="none"
  tiuloTiposPlan.style.display="flex"
  contenedorTiposPlan.style.display="flex"
    
}
let botonVetanaModal =document.getElementById("botonVetanaModal")


let planesEjercicios = document.getElementById("contenedor-planes-ejercicio");


let botonActivarPerderPeso = document.getElementById("botonActivarPerderPeso")
let botonActivarTonificar = document.getElementById("botonActivarTonificar")
let botonActivarAumentarPeso = document.getElementById("botonActivarAumentarPeso")



function mostrarPlanAdelgazar(){
 
  tiuloTiposPlan.style.display="none"
  contenedorTiposPlan.style.display="none"
  planesEjercicios.style.display="flex"
  botonesPlanAdelgazar.style.display="flex"
}
function mostrarPlanTonificar(){
 
  tiuloTiposPlan.style.display="none"
  contenedorTiposPlan.style.display="none"
  planesEjercicios.style.display="flex"
  botonesPlanTonificar.style.display="flex"
}
function mostrarPlanPeso(){
 
  tiuloTiposPlan.style.display="none"
  contenedorTiposPlan.style.display="none"
  planesEjercicios.style.display="flex"
  botonesPlanPeso.style.display="flex"
}


botonVetanaModal.addEventListener("click", aparecerContenidoTipoPlanes)

botonActivarPerderPeso.addEventListener("click",mostrarPlanAdelgazar)
botonActivarTonificar.addEventListener("click",mostrarPlanTonificar)
botonActivarAumentarPeso.addEventListener("click",mostrarPlanPeso)

// contenido para adelgazar

function ocultarContenidoAdelgazar(){
menuEjercicio.style.display="none"
contenidoEjercicios.style.display="none"
menuAlimentacionAdelgazar.style.display="none"
contenidoAlimentarioAdelgazar.style.display="none"
menuRecomendacionesAdelgazar.style.display="none"
contenidoRecomendacionAdelgazar.style.display="none"


}
function mostrarEjerciciosAdelgazar(){
  ocultarContenidoAdelgazar()
  menuEjercicio.style.display="flex"
  contenidoEjercicios.style.display="flex"
}
function mostrarAlimentosAdelgazar(){
  ocultarContenidoAdelgazar()
  menuAlimentacionAdelgazar.style.display="flex"
  contenidoAlimentarioAdelgazar.style.display="flex"
}
function mostrarRecomendacionesAdelgazar(){
  ocultarContenidoAdelgazar()
  menuRecomendacionesAdelgazar.style.display="flex"
  contenidoRecomendacionAdelgazar.style.display="flex"
}

botonPlanesEjercicioAdelgazar.addEventListener("click",mostrarEjerciciosAdelgazar)
botonPlanesAlimenticioAdelgazar.addEventListener("click",mostrarAlimentosAdelgazar)
botonPlanRecomendacionAdelgazar.addEventListener("click",mostrarRecomendacionesAdelgazar)



// contenido tonificar

function ocultarContenidoTonificar(){
  menuEjercicio.style.display="none"
  contenidoEjercicios.style.display="none"
  menuAlimentacionTonificar.style.display="none"
  contenidoAlimentarioTonificar.style.display="none"
  menuRecomendacionesTonificar.style.display="none"
 contenidoRecomendacionTonificar.style.display="none"
  
  }
  function mostrarEjerciciosTonificar(){
    ocultarContenidoTonificar()
    menuEjercicio.style.display="flex"
    contenidoEjercicios.style.display="flex"
  }
  function mostrarAlimentosTonificar(){
    ocultarContenidoTonificar()
    menuAlimentacionTonificar.style.display="flex"
    contenidoAlimentarioTonificar.style.display="flex"
  }
  function mostrarRecomendacionesTonificar(){
    ocultarContenidoTonificar()
    menuRecomendacionesTonificar.style.display="flex"
    contenidoRecomendacionTonificar.style.display="flex"
  }
  
  botonPlanesEjercicioTonificar.addEventListener("click",mostrarEjerciciosTonificar)
  botonPlanesAlimenticioTonificar.addEventListener("click",mostrarAlimentosTonificar)
  botonPlanRecomendacionTonificar.addEventListener("click",mostrarRecomendacionesTonificar)

  //contenido aumentar peso

  function ocultarContenidoPeso(){
    menuEjercicio.style.display="none"
    contenidoEjercicios.style.display="none"
    menuAlimentacionPeso.style.display="none"
    contenidoAlimentarioPeso.style.display="none"
    menuRecomendacionesPeso.style.display="none"
    contenidoRecomendacionPeso.style.display="none"
    
    }
    function mostrarEjerciciosPeso(){
      ocultarContenidoPeso()
      menuEjercicio.style.display="flex"
      contenidoEjercicios.style.display="flex"
    }
    function mostrarAlimentosPeso(){
      ocultarContenidoPeso()
      menuAlimentacionPeso.style.display="flex"
      contenidoAlimentarioPeso.style.display="flex"
    }
    function mostrarRecomendacionesPeso(){
      ocultarContenidoPeso()
      menuRecomendacionesPeso.style.display="flex"
      contenidoRecomendacionPeso.style.display="flex"
    }
    
    botonPlanesEjercicioPeso.addEventListener("click",mostrarEjerciciosPeso)
    botonPlanesAlimenticioPeso.addEventListener("click",mostrarAlimentosPeso)
    botonPlanRecomendacionPeso.addEventListener("click",mostrarRecomendacionesPeso)


    // comida para adelgazar
    let primerMesDesayunoAdelgazar = document.getElementById("primerMesDesayunoAdelgazar")
    let segundoMesDesayunoAdelgazar = document.getElementById("segundoMesDesayunoAdelgazar")
    let tercerMesDesayunoAdelgazar = document.getElementById("tercerMesDesayunoAdelgazar")
    let primerMesAlmuerzoAdelgazar = document.getElementById("primerMesAlmuerzoAdelgazar")
    let segundoMesAlmuerzoAdelgazar = document.getElementById("segundoMesAlmuerzoAdelgazar")
    let tercerMesAlmuerzoAdelgazar = document.getElementById("tercerMesAlmuerzoAdelgazar")
    let primerMesCenaAdelgazar = document.getElementById("primerMesCenaAdelgazar")
    let segundoMesCenaAdelgazar = document.getElementById("segundoMesCenaAdelgazar")
    let tercerMesCenaAdelgazar = document.getElementById("tercerMesCenaAdelgazar")

    function ocularAlimentosAdelgazar(){
      primerMesDesayunoAdelgazar.style.display="none"
      segundoMesDesayunoAdelgazar.style.display="none"
      tercerMesDesayunoAdelgazar.style.display="none"
      primerMesAlmuerzoAdelgazar.style.display="none"
      segundoMesAlmuerzoAdelgazar.style.display="none"
      tercerMesAlmuerzoAdelgazar.style.display="none"
      primerMesCenaAdelgazar.style.display="none"
      segundoMesCenaAdelgazar.style.display="none"
      tercerMesCenaAdelgazar.style.display="none"
    }

    function mostrarUnoAdelgazar(){
      ocularAlimentosAdelgazar()
      primerMesDesayunoAdelgazar.style.display="flex"
      primerMesAlmuerzoAdelgazar.style.display="flex"
      primerMesCenaAdelgazar.style.display="flex"
     
    }

    function mostrarDosAdelgazar(){
      ocularAlimentosAdelgazar()
      segundoMesDesayunoAdelgazar.style.display="flex"
      segundoMesAlmuerzoAdelgazar.style.display="flex"
      segundoMesCenaAdelgazar.style.display="flex"
     
    }

    function mostrarTresAdelgazar(){
      ocularAlimentosAdelgazar()
      tercerMesDesayunoAdelgazar.style.display="flex"
      tercerMesAlmuerzoAdelgazar.style.display="flex"
      tercerMesCenaAdelgazar.style.display="flex"
     
    }
    let mesUnoA = document.getElementById("mesUnoA")
    let mesDosA = document.getElementById("mesDosA")
    let mesTresA = document.getElementById("mesTresA")

    mesUnoA.addEventListener("click",mostrarUnoAdelgazar)
    mesDosA.addEventListener("click",mostrarDosAdelgazar)
    mesTresA.addEventListener("click",mostrarTresAdelgazar)

    // comida para tonificar

    let primerMesDesayunoTonificar = document.getElementById("primerMesDesayunoTonificar")
    let segundoMesDesayunoTonificar = document.getElementById("segundoMesDesayunoTonificar")
    let tercerMesDesayunoTonificar = document.getElementById("tercerMesDesayunoTonificar")
    let primerMesAlmuerzoTonificar = document.getElementById("primerMesAlmuerzoTonificar")
    let segundoMesAlmuerzoTonificar = document.getElementById("segundoMesAlmuerzoTonificar")
    let tercerMesAlmuerzoTonificar = document.getElementById("tercerMesAlmuerzoTonificar")
    let primerMesCenaTonificar = document.getElementById("primerMesCenaTonificar")
    let segundoMesCenaTonificar = document.getElementById("segundoMesCenaTonificar")
    let tercerMesCenaTonificar = document.getElementById("tercerMesCenaTonificar")

    function ocularAlimentosTonificar(){
      primerMesDesayunoTonificar.style.display="none"
      segundoMesDesayunoTonificar.style.display="none"
      tercerMesDesayunoTonificar.style.display="none"
      primerMesAlmuerzoTonificar.style.display="none"
      segundoMesAlmuerzoTonificar.style.display="none"
      tercerMesAlmuerzoTonificar.style.display="none"
      primerMesCenaTonificar.style.display="none"
      segundoMesCenaTonificar.style.display="none"
      tercerMesCenaTonificar.style.display="none"
    }


    function mostrarUnoTonificar(){
      ocularAlimentosTonificar()
      primerMesDesayunoTonificar.style.display="flex"
      primerMesAlmuerzoTonificar.style.display="flex"
      primerMesCenaTonificar.style.display="flex"
     
    }
    function mostrarDosTonificar(){
      ocularAlimentosTonificar()
      segundoMesDesayunoTonificar.style.display="flex"
      segundoMesAlmuerzoTonificar.style.display="flex"
      segundoMesCenaTonificar.style.display="flex"
     
    }
    function mostrarTresTonificar(){
      ocularAlimentosTonificar()
      tercerMesDesayunoTonificar.style.display="flex"
      tercerMesAlmuerzoTonificar.style.display="flex"
      tercerMesCenaTonificar.style.display="flex"
     
    }

    let mesUnoT = document.getElementById("mesUnoT")
    let mesDosT = document.getElementById("mesDosT")
    let mesTresT = document.getElementById("mesTresT")

    mesUnoT.addEventListener("click",mostrarUnoTonificar)
    mesDosT.addEventListener("click",mostrarDosTonificar)
    mesTresT.addEventListener("click",mostrarTresTonificar)

    // comida para aumentar peso

    let primerMesDesayunoPeso = document.getElementById("primerMesDesayunoPeso")
    let segundoMesDesayunoPeso = document.getElementById("segundoMesDesayunoPeso")
    let tercerMesDesayunoPeso = document.getElementById("tercerMesDesayunoPeso")
    let primerMesAlmuerzoPeso = document.getElementById("primerMesAlmuerzoPeso")
    let segundoMesAlmuerzoPeso = document.getElementById("segundoMesAlmuerzoPeso")
    let tercerMesAlmuerzoPeso = document.getElementById("tercerMesAlmuerzoPeso")
    let primerMesCenaPeso = document.getElementById("primerMesCenaPeso")
    let segundoMesCenaPeso = document.getElementById("segundoMesCenaPeso")
    let tercerMesCenaPeso = document.getElementById("tercerMesCenaPeso")

    function ocularAlimentosPeso(){
      primerMesDesayunoPeso.style.display="none"
      segundoMesDesayunoPeso.style.display="none"
      tercerMesDesayunoPeso.style.display="none"
      primerMesAlmuerzoPeso.style.display="none"
      segundoMesAlmuerzoPeso.style.display="none"
      tercerMesAlmuerzoPeso.style.display="none"
      primerMesCenaPeso.style.display="none"
      segundoMesCenaPeso.style.display="none"
      tercerMesCenaPeso.style.display="none"
    }
    function mostrarUnoPeso(){
      ocularAlimentosPeso()
      primerMesDesayunoPeso.style.display="flex"
      primerMesAlmuerzoPeso.style.display="flex"
      primerMesCenaPeso.style.display="flex"
     
    }
    function mostrarDosPeso(){
      ocularAlimentosPeso()
      segundoMesDesayunoPeso.style.display="flex"
      segundoMesAlmuerzoPeso.style.display="flex"
      segundoMesCenaPeso.style.display="flex"
     
    }
    function mostrarTresPeso(){
      ocularAlimentosPeso()
      tercerMesDesayunoPeso.style.display="flex"
      tercerMesAlmuerzoPeso.style.display="flex"
      tercerMesCenaPeso.style.display="flex"
     
    }
    mesUnoP.addEventListener("click",mostrarUnoPeso)
    mesDosP.addEventListener("click",mostrarDosPeso)
    mesTresP.addEventListener("click",mostrarTresPeso)