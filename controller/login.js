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

document.getElementById('button-registro').addEventListener('click', function registroUsuario() {
    const nombreUsuario = document.getElementById('nombre-usuario').value
    const correoRegistro = document.getElementById('email-registro').value
    const passRegistro = document.getElementById('pass-registro').value
    

    if (correoRegistro && passRegistro) {
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
                localStorage.setItem('usuario', JSON.stringify(usuarioRegistrados))
                usuarioRegistrado()
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
