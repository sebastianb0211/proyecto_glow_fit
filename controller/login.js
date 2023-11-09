let premium = document.getElementById("premium")
let semiPremium = document.getElementById("semiPremium")
let basico = document.getElementById("basico")
let registro = document.getElementById("container-login")


function mostrarRegistro(){
    registro.style.display="block"
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

