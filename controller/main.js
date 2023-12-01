// let cotizar = document.getElementById("cotiza-plan");
let portada = document.getElementById("portada");
let imagenPrincipal = document.getElementById("imagen-principal");
let razones = document.getElementById("razones");
let articulos = document.getElementById("articulos");
let imagenParrafos = document.getElementById("imagen-parrafos");
let nosotros = document.getElementById("nosotros");
let footer = document.getElementById("footer");
let cargador = document.getElementById("cargador");
let planes = document.getElementById("contenedor-planes");
let botonSalirPlanes = document.getElementById("boton-salir");
let testimonios = document.getElementById("testimonios");

cotizar.addEventListener("click", function () {
  portada.style.display = "none";
  imagenPrincipal.style.display = "none";
  razones.style.display = "none";
  articulos.style.display = "none";
  imagenParrafos.style.display = "none";
  nosotros.style.display = "none";
  footer.style.display = "none";
  testimonios.style.display = "none";
  cargador.style.display = "flex";

  setTimeout(function () {
    cargador.style.display = "none";
    planes.style.display = "flex";
    botonSalirPlanes.style.display = "flex";
  }, 1200);
});

let botonSalirPlanesReal = document.getElementById("boton-salir-naranja");
botonSalirPlanesReal.addEventListener("click", function () {
  portada.style.display = "none";
  imagenPrincipal.style.display = "none";
  razones.style.display = "none";
  articulos.style.display = "none";
  imagenParrafos.style.display = "none";
  nosotros.style.display = "none";
  footer.style.display = "none";
  cargador.style.display = "none";
  planes.style.display = "none";
  botonSalirPlanes.style.display = "none";
  testimonios.style.display = "flex";

  setTimeout(function () {
    cargador.style.display = "none";
    portada.style.display = "flex";
    imagenPrincipal.style.display = "flex";
    razones.style.display = "flex";
    articulos.style.display = "flex";
    imagenParrafos.style.display = "flex";
    nosotros.style.display = "flex";
    footer.style.display = "flex";
  }, 200);
});

let logo = document.getElementById("logo");

logo.addEventListener("click", function(){
  window.location.href="index.html";
})
