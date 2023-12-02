let premium = document.getElementById("premium")
let semiPremium = document.getElementById("semiPremium")
let basico = document.getElementById("basico")
let containerRegistro = document.getElementById("container-registro")
let containerLogin = document.getElementById("container-login")
var loginContainer = document.getElementById("login-container")
var botonesInicio=document.getElementById("contenedor-botones-nav")
var botonCerrarSesion=document.getElementById("contenedor-botones-cerrar")

let login = document.getElementById("login")
let registro = document.getElementById("registro")

function mostrarRegistro(){
    loginContainer.style.display="block"
    containerRegistro.style.display="block" 
}
function quitarRegistro(){
    loginContainer.style.display="none"
    containerRegistro.style.display="none"
}

var cerrar = document.getElementById("cerrar")
function salir(){
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
    portada.style.display = "flex";
    imagenPrincipal.style.display = "flex";
    razones.style.display = "flex";
    articulos.style.display = "flex";
    imagenParrafos.style.display = "flex";
    nosotros.style.display = "flex";
    footer.style.display = "flex";
    testimonios.style.display = "flex";
    containerLogin.style.display = "flex";
    loginContainer.style.display = "flex";
    planes.style.display = "none";
    loginContainer.style.display="none"
    botonesInicio.style.display="flex"
    cerrar.style.display="none"
    botonSalirPlanes.style.display="none"
    location.reload()
}

login.addEventListener('click', function(){
    containerRegistro.style.display= "none"
    containerLogin.style.display="block"
})
registro.addEventListener('click', function(){
    containerRegistro.style.display= "block"
    containerLogin.style.display="none"
})

const usuarioRegistrados = JSON.parse(localStorage.getItem('usuario')) || []
const userRegistrationRegex =
{
    username: /^[ a-zA-Z]{3,20}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    password: /^(?=.*[A-Z]).{8,20}$/
}
 function nombreRegexError(){
    Swal.fire({
        icon: 'error',
        title: 'El nombre no es valido',
        text: 'Debe contener un minimo de 3 caracteres y un maximo de 20 y no contener numeros!', 
        width: '40%',
        background: '#F2F2F2',
        backdrop: true
      })
}
 function correoRegistroRegex(){
    Swal.fire({
        icon: 'error',
        title: 'El Correo electronico no es valido',
        text: 'Ingresa un correo electronico correcto!',
        width: '40%',
        background: '#F2F2F2',
        backdrop: true
      })         
}
 function passRegistroRegex(){
    Swal.fire({
        icon: 'error',
        title: 'La contraseña no es valida',
        text: 'Debe tener al menos 8 caracteres y contener una letra mayúscula!',
        width: '40%',
        background: '#F2F2F2',
        backdrop: true
      })         
}
 function usuarioExistenteRegistro(){
    Swal.fire({
        icon: 'error',
        title: 'Cuenta ya registrada inicie sesion',
        text: 'Correo electrónico ya registrado!',
        width: '40%',
        background: '#F2F2F2',
        backdrop: true
      })
}
  function usuarioRegistrado(){
    Swal.fire({
        icon: 'success',
        title: 'Bienvenido ' + nombreUsuario + ' inicia session para acceder a tu cuenta',
        showConfirmButton: false,
        width: '40%',
        backdrop: true,
        timer: 5000
    })
}

 function correoUsuarioRegex(){
    Swal.fire({
        icon: 'error',
        title: 'Correo electronico no válido',
        text: 'Ingrese un correo electronico correcto!',
        width: '40%',
       
        backdrop: true
      })
}
 function contraseñaUsuarioRegex(){
    Swal.fire({
        icon: 'error',
        title: 'Contraseña incorrecta',
        text: 'Debe tener al menos 8 caracteres y contener una letra mayúscula!',
        width: '40%',
       
        backdrop: true
      })
}

  function correoNoRegistrado(){
    Swal.fire({
        icon: 'info',
        title: 'Correo electronico no registrado',
        text: 'Registrate para accerder a los planes',
        width: '40%',
        backdrop: true,
        timer: 5000
      })
}

var cotizar=document.getElementById("cotiza-plan")
document.getElementById('button-registro').addEventListener('click', function registroUsuario() {
    const nombreUsuario = document.getElementById('nombre-usuario').value
    const correoRegistro = document.getElementById('email-registro').value
    const passRegistro = document.getElementById('pass-registro').value
    
    

    if (true) {
        let todasLasCondicionesCumplidas = true
        if (!userRegistrationRegex.username.test(nombreUsuario)) {
            nombreRegexError()
            todasLasCondicionesCumplidas = false
        } else if (!userRegistrationRegex.email.test(correoRegistro)) {
            correoRegistroRegex()
            todasLasCondicionesCumplidas = false
        } else if (!userRegistrationRegex.password.test(passRegistro)) {
            passRegistroRegex()
            todasLasCondicionesCumplidas = false
        } 
        if (todasLasCondicionesCumplidas) {
            const usuarioExistente = usuarioRegistrados.find(usuario => usuario.correoRegistro === correoRegistro)
            if (usuarioExistente) {
                usuarioExistenteRegistro()
            } else if (!usuarioExistente) {
                const nuevoUsuario = {
                    correoRegistro,
                    passRegistro,
                    nombreUsuario,
                    peso: 0,
                    estatura:0
                }
                usuarioRegistrados.push(nuevoUsuario)
                Swal.fire({
                    icon: 'success',
                    title: 'Bienvenido ' + nombreUsuario + ' inicia sesion para acceder a tu cuenta',
                    showConfirmButton: false,
                    width: '40%',
                    background: '#F5FCCD',
                    backdrop: true,
                    timer: 5000
                })
                localStorage.setItem('usuario', JSON.stringify(usuarioRegistrados))
                
                
            } else {
                
            }
        }
    }

})
let correoUsuario = ''
var botonPlanes=document.getElementById("cotiza-plan")

document.getElementById('button-login').addEventListener('click', function loginUsuario() {
    correoUsuario = document.getElementById('email-login').value
    const passUsuario = document.getElementById('pass-login').value

    if (true) {
        if (!userRegistrationRegex.email.test(correoUsuario)) {
            correoUsuarioRegex()
        } else if (!userRegistrationRegex.password.test(passUsuario)) {
            contraseñaUsuarioRegex()
        }
        const usuario = usuarioRegistrados.find(usuario => usuario.correoRegistro === correoUsuario && usuario.passRegistro === passUsuario)
        if (usuario) {
                correoUsuario = correoUsuario;
                quitarRegistro()
                botonPlanes.disabled=false
                cerrar.style.display="block"
                botonesInicio.style.display="none"
                cotizar.disabled=false
        }else{
            correoNoRegistrado()
            cotizar.disabled=true
        }
    }
})
// Limpiar todo el localStorage
//localStorage.clear();
class Ecxel{
    constructor(contenido){
        this.contenido = contenido
    }
    header(){
        return this.contenido[0]
    }
    rows(){
        return this.contenido.slice(1,)
    }
  }
  
  const excelInput = document.getElementById("ecxel-input");
  
  excelInput.addEventListener('change', async function () {
  const contenido = await readXlsxFile(excelInput.files[0]);
  
  const ecxel = new Ecxel(contenido)
  
  
  const pesoDatoValue = ecxel.header()[0];
  
  const decimalesMostrados = 2;
  const peso2 = Number(pesoDatoValue).toFixed(decimalesMostrados);
  
  
  // Obtén el valor ingresado
  
  const inputEstatura = document.getElementById('inputEstatura');
  const estaturaIngresada = inputEstatura.value;
  // Muestra el valor en el elemento con ID "pesoDato"
  document.getElementById('pesoDato').innerText = peso2;

  const usuarioRegistrados = JSON.parse(localStorage.getItem('usuario')) || [];

    const usuarioActualizado = usuarioRegistrados.map(usuario => {
        if (usuario.correoRegistro === correoUsuario) {
            return {
                ...usuario,
                peso: parseFloat(peso2),
                estatura: parseFloat(estaturaIngresada).toFixed(2)
            };
        }
        return usuario;
    });

    // Guarda el usuario actualizado en el localStorage
    localStorage.setItem('usuario', JSON.stringify(usuarioActualizado));
  
  console.log(ecxel.header());
  console.log(ecxel.rows());
  console.log(peso2);
  console.log(estaturaIngresada);
  
  });

  function mostrarDatosUsuario() {
    const usuarioActualizado = usuarioRegistrados.find(usuario => usuario.correoRegistro === correoUsuario);
    if (usuarioActualizado) {
        // Muestra el contenedor
        document.getElementById('userContainer').style.display = 'block';

        // Actualiza el nombre del usuario
        document.getElementById('userName').innerText = usuarioActualizado.nombreUsuario;

        // Actualiza el peso y la estatura
        document.getElementById('userWeight').innerText = usuarioActualizado.peso.toFixed(2);
        document.getElementById('userHeight').innerText = usuarioActualizado.estatura;

        // Agrega un evento al botón "Actualizar Datos"
        document.getElementById('updateDataButton').addEventListener('click', function () {
            // Aquí puedes abrir tu ventana para actualizar datos
            // Puedes agregar el código necesario para mostrar tu ventana modal u otra interfaz de actualización
            // Por ejemplo: abrirVentanaModalActualizarDatos();
        });
    }
}
function userContainerNone(){
    document.getElementById('userContainer').style.display = 'none';
}
function mostrarMensajeBajoPeso() {
    Swal.fire({
      icon: 'warning',
      title: '¡Peso Bajo!',
      text: 'Tu categoría de peso es Bajo Peso. ¡Recuerda mantener una dieta equilibrada!',
      showConfirmButton: false,
      width: '40%',
      backdrop: true,
      timer: 5000
    });
  }
  function mostrarMensajePesoNormal() {
    Swal.fire({
      icon: 'success',
      title: '¡Peso Normal!',
      text: 'Tu categoría de peso es Normal. ¡Sigue manteniendo hábitos saludables!',
      showConfirmButton: false,
      width: '40%',
      backdrop: true,
      timer: 5000
    });
  }
  function mostrarMensajeSobrepeso() {
    Swal.fire({
      icon: 'warning',
      title: '¡Sobrepeso!',
      text: 'Tu categoría de peso es Sobrepeso. ¡Considera adoptar un estilo de vida más activo!',
      showConfirmButton: false,
      width: '40%',
      backdrop: true,
      timer: 5000
    });
  }
  function mostrarMensajeObesidad() {
    Swal.fire({
      icon: 'warning',
      title: '¡Obesidad!',
      text: 'Tu categoría de peso es Obesidad. ¡Considera consultar a un profesional de la salud para obtener orientación y adoptar un estilo de vida más activo!',
      showConfirmButton: false,
      width: '40%',
      backdrop: true,
      timer: 5000
    });
  }
  function noSeAgregoNada(){
    Swal.fire({
        title: "No aregaste valores?",
        text: "No agregaste valores",
        icon: "error"
      });
  }


function calcularIMCUsuario() {
    const usuarioActualizado = usuarioRegistrados.find(usuario => usuario.correoRegistro === correoUsuario);
  
    if (usuarioActualizado) {
      const pesoUsuario = usuarioActualizado.peso;
      const estaturaUsuario = usuarioActualizado.estatura;
  
      const imcUsuario = calcularIMC(pesoUsuario, estaturaUsuario);
  
      const categoriaIMCUsuario = determinarCategoriaIMC(imcUsuario);
  
      console.log("IMC: " + imcUsuario.toFixed(2));
      console.log("Categoría de Peso: " + categoriaIMCUsuario);
  
    }
  }
  

  function calcularIMC(peso, estatura) {
    return peso / (estatura * estatura);
  }
  
  function determinarCategoriaIMC(imc) {
    if (imc < 18.5) {
      return mostrarMensajeBajoPeso();
    } else if (imc >= 18.5 && imc < 25) {
      return mostrarMensajePesoNormal();
    } else if(imc >= 25 && imc < 30) {
      return mostrarMensajeSobrepeso();
    }else if(imc >= 30){
        return mostrarMensajeObesidad()
    }
    else{
        noSeAgregoNada()
    }
  }
