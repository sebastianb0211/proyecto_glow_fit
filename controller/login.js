let premium = document.getElementById("premium")
let semiPremium = document.getElementById("semiPremium")
let basico = document.getElementById("basico")
let containerRegistro = document.getElementById("container-registro")
let containerLogin = document.getElementById("container-login")

let login = document.getElementById("login")
let registro = document.getElementById("registro")


function mostrarRegistro(){
    containerRegistro.style.display="block"
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

