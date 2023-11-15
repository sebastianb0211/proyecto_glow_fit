let premium = document.getElementById("premium")
let semiPremium = document.getElementById("semiPremium")
let basico = document.getElementById("basico")
let containerRegistro = document.getElementById("container-registro")
let containerLogin = document.getElementById("container-login")
let loginContainer = document.getElementById("login-container")

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

premium.addEventListener('click', function(){
   mostrarRegistro()
})
semiPremium.addEventListener('click', function(){
    mostrarRegistro()
})
basico.addEventListener('click', function(){
    mostrarRegistro()
})

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
        background: '#F96D00',
        backdrop: true
      })
}
 function correoRegistroRegex(){
    Swal.fire({
        icon: 'error',
        title: 'El Correo electronico no es valido',
        text: 'Ingresa un correo electronico correcto!',
        width: '40%',
        background: '#F96D00',
        backdrop: true
      })         
}
 function passRegistroRegex(){
    Swal.fire({
        icon: 'error',
        title: 'La contrasela no es valida',
        text: 'Debe tener al menos 8 caracteres y contener una letra mayúscula!',
        width: '40%',
        background: '#F96D00',
        backdrop: true
      })         
}
 function usuarioExistenteRegistro(){
    Swal.fire({
        icon: 'error',
        title: 'Cuenta ya registrada inicie sesion',
        text: 'Correo electrónico ya registrado!',
        width: '40%',
        background: '#F96D00',
        backdrop: true
      })
}
  function usuarioRegistrado(){
    Swal.fire({
        icon: 'success',
        title: 'Bienvenido ' + nombreUsuario + ' inicia session para acceder a tu cuenta',
        showConfirmButton: false,
        width: '40%',
        background: '#F5FCCD',
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
        background: '#F5FCCD',
        backdrop: true
      })
}
 function contraseñaUsuarioRegex(){
    Swal.fire({
        icon: 'error',
        title: 'Contraseña incorrecta',
        text: 'Debe tener al menos 8 caracteres y contener una letra mayúscula!',
        width: '40%',
        background: '#F5FCCD',
        backdrop: true
      })
}

  function correoNoRegistrado(){
    Swal.fire({
        icon: 'info',
        title: 'Correo electronico no registrado',
        text: 'Registrate para accerder a los planes',
        width: '40%',
        background: '#78D6C6',
        backdrop: true,
        timer: 5000
      })
}

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
document.getElementById('button-login').addEventListener('click', function loginUsuario() {
    correoUsuario = document.getElementById('email-login').value
    const passUsuario = document.getElementById('pass-login').value

    if (correoUsuario && passUsuario) {
        if (!userRegistrationRegex.email.test(correoUsuario)) {
            correoUsuarioRegex()
        } else if (!userRegistrationRegex.password.test(passUsuario)) {
            contraseñaUsuarioRegex()
        }
        const usuario = usuarioRegistrados.find(usuario => usuario.correoRegistro === correoUsuario && usuario.passRegistro === passUsuario)
        if (usuario) {
                correoUsuario = correoUsuario;
                quitarRegistro()
        }else{
            correoNoRegistrado()
        }
    }
})
