function empezarPlanes() {
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
  planesEjercicios.style.display = "block";
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
}

let botonEmpezar = document.getElementById("button-login");
botonEmpezar.addEventListener("click", empezarPlanes);
