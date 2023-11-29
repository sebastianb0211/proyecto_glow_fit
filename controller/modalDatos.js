// var abrirModalBasico=document.getElementById("basico")
var ventanaModal=document.getElementById("ventana-modal")

function abrirModal(){
    ventanaModal.style.display="block"
}

window.addEventListener('click', function (event) {
    if (event.target === ventanaModal) {
      ventanaModal.style.display = 'none';
    }
})

