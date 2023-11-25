// botones de las semanas
let semana_1 = document.getElementById("semana1");
let semana_2 = document.getElementById("semana2");
let semana_3 = document.getElementById("semana3");
let semana_4 = document.getElementById("semana4");
let semana_5 = document.getElementById("semana5");
let semana_6 = document.getElementById("semana6");
let semana_7 = document.getElementById("semana7");
let semana_8 = document.getElementById("semana8");
let semana_9 = document.getElementById("semana9");
let semana_10 = document.getElementById("semana10");
let semana_11 = document.getElementById("semana11");
let semana_12 = document.getElementById("semana12");

// titulos de las semanas
let titulo_uno = document.getElementById("titulo_uno");
let titulo_dos = document.getElementById("titulo_dos");
let titulo_tres = document.getElementById("titulo_tres");
let titulo_cuatro = document.getElementById("titulo_cuatro");
let titulo_cinco = document.getElementById("titulo_cinco");
let titulo_seis = document.getElementById("titulo_seis");
let titulo_siete = document.getElementById("titulo_siete");
let titulo_ocho = document.getElementById("titulo_ocho");
let titulo_nueve = document.getElementById("titulo_nueve");
let titulo_diez = document.getElementById("titulo_diez");
let titulo_once = document.getElementById("titulo_once");
let titulo_doce = document.getElementById("titulo_doce");

//Ejercicios de la semana
let ejerciciosSemana1 = document.querySelectorAll(".ejercicioSemana1");
let ejerciciosSemana2 = document.querySelectorAll(".ejercicioSemana2");
let ejerciciosSemana3 = document.querySelectorAll(".ejercicioSemana3");
let ejerciciosSemana4 = document.querySelectorAll(".ejercicioSemana4");
let ejerciciosSemana5 = document.querySelectorAll(".ejercicioSemana5");
let ejerciciosSemana6 = document.querySelectorAll(".ejercicioSemana6");
let ejerciciosSemana7 = document.querySelectorAll(".ejercicioSemana7");
let ejerciciosSemana8 = document.querySelectorAll(".ejercicioSemana8");
let ejerciciosSemana9 = document.querySelectorAll(".ejercicioSemana9");
let ejerciciosSemana10 = document.querySelectorAll(".ejercicioSemana10");
let ejerciciosSemana11 = document.querySelectorAll(".ejercicioSemana11");
let ejerciciosSemana12 = document.querySelectorAll(".ejercicioSemana12");

function ocultarEjercicios() {
  ejerciciosSemana1.forEach(function (ejercicio) {
    ejercicio.style.display = "none";
  });
  ejerciciosSemana2.forEach(function (ejercicio) {
    ejercicio.style.display = "none";
  });
  ejerciciosSemana3.forEach(function (ejercicio) {
    ejercicio.style.display = "none";
  });
  ejerciciosSemana4.forEach(function (ejercicio) {
    ejercicio.style.display = "none";
  });
  ejerciciosSemana5.forEach(function (ejercicio) {
    ejercicio.style.display = "none";
  });
  ejerciciosSemana6.forEach(function (ejercicio) {
    ejercicio.style.display = "none";
  });
  ejerciciosSemana7.forEach(function (ejercicio) {
    ejercicio.style.display = "none";
  });
  ejerciciosSemana8.forEach(function (ejercicio) {
    ejercicio.style.display = "none";
  });
  ejerciciosSemana9.forEach(function (ejercicio) {
    ejercicio.style.display = "none";
  });
  ejerciciosSemana10.forEach(function (ejercicio) {
    ejercicio.style.display = "none";
  });
  ejerciciosSemana11.forEach(function (ejercicio) {
    ejercicio.style.display = "none";
  });
  ejerciciosSemana12.forEach(function (ejercicio) {
    ejercicio.style.display = "none";
  });

}

function ocultarTitulos() {
  titulo_uno.style.display = "none";
  titulo_dos.style.display = "none";
  titulo_tres.style.display = "none";
  titulo_cuatro.style.display = "none";
  titulo_cinco.style.display = "none";
  titulo_seis.style.display = "none";
  titulo_siete.style.display = "none";
  titulo_ocho.style.display = "none";
  titulo_nueve.style.display = "none";
  titulo_diez.style.display = "none";
  titulo_once.style.display = "none";
  titulo_doce.style.display = "none";
}

function semana_1Aparecer() {
  ocultarTitulos();
  ocultarEjercicios()

  titulo_uno.style.display = "block";
  ejerciciosSemana1.forEach(function (ejercicio) {
    ejercicio.style.display = "block";
  });
}
function semana_2Aparecer() {
  ocultarTitulos();
  ocultarEjercicios()
  
  titulo_dos.style.display = "block";
  ejerciciosSemana2.forEach(function (ejercicio) {
    ejercicio.style.display = "block";
  });
}
function semana_3Aparecer() {
  ocultarTitulos();
  ocultarEjercicios()

  titulo_tres.style.display = "block";
  ejerciciosSemana3.forEach(function (ejercicio) {
    ejercicio.style.display = "block";
  });
}
function semana_4Aparecer() {
  ocultarTitulos();
  ocultarEjercicios()
  titulo_cuatro.style.display = "block";
  ejerciciosSemana4.forEach(function (ejercicio) {
    ejercicio.style.display = "block";
  });
}
function semana_5Aparecer() {
  ocultarTitulos();
  ocultarEjercicios()
  titulo_cinco.style.display = "block";
  ejerciciosSemana5.forEach(function (ejercicio) {
    ejercicio.style.display = "block";
  });
}
function semana_6Aparecer() {
  ocultarTitulos();
  ocultarEjercicios()
  titulo_seis.style.display = "block";
  ejerciciosSemana6.forEach(function (ejercicio) {
    ejercicio.style.display = "block";
  });
}
function semana_7Aparecer() {
  ocultarTitulos();
  ocultarEjercicios()
  titulo_siete.style.display = "block";
  ejerciciosSemana7.forEach(function (ejercicio) {
    ejercicio.style.display = "block";
  });
}
function semana_8Aparecer() {
  ocultarTitulos();
  ocultarEjercicios()
  titulo_ocho.style.display = "block";
  ejerciciosSemana8.forEach(function (ejercicio) {
    ejercicio.style.display = "block";
  });
}
function semana_9Aparecer() {
  ocultarTitulos();
  ocultarEjercicios()
  titulo_nueve.style.display = "block";
  ejerciciosSemana9.forEach(function (ejercicio) {
    ejercicio.style.display = "block";
  });
}
function semana_10Aparecer() {
  ocultarTitulos();
  ocultarEjercicios()
  titulo_diez.style.display = "block";
  ejerciciosSemana10.forEach(function (ejercicio) {
    ejercicio.style.display = "block";
  });
}
function semana_11Aparecer() {
  ocultarTitulos();
  ocultarEjercicios()
  titulo_once.style.display = "block";
  ejerciciosSemana11.forEach(function (ejercicio) {
    ejercicio.style.display = "block";
  });
}
function semana_12Aparecer() {
  ocultarTitulos();
  ocultarEjercicios()
  titulo_doce.style.display = "block";
  ejerciciosSemana12.forEach(function (ejercicio) {
    ejercicio.style.display = "block";
  });
}
semana_1.addEventListener("click", semana_1Aparecer);
semana_2.addEventListener("click", semana_2Aparecer);
semana_3.addEventListener("click", semana_3Aparecer);
semana_4.addEventListener("click", semana_4Aparecer);
semana_5.addEventListener("click", semana_5Aparecer);
semana_6.addEventListener("click", semana_6Aparecer);
semana_7.addEventListener("click", semana_7Aparecer);
semana_8.addEventListener("click", semana_8Aparecer);
semana_9.addEventListener("click", semana_9Aparecer);
semana_10.addEventListener("click", semana_10Aparecer);
semana_11.addEventListener("click", semana_11Aparecer);
semana_12.addEventListener("click", semana_12Aparecer);


