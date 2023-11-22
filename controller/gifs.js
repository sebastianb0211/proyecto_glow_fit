let gifSentadilla = document.getElementById('gifSentadilla');
let gifPress = document.getElementById('gifPress');
let gifDominada = document.getElementById('gifDominada');
let gifPlancha = document.getElementById('gifPlancha');
let gifCurlBiceps = document.getElementById('gifCurlBiceps');



function mostrarSentadilla() {
    Swal.fire({
        title: 'Sentadilla',
        imageUrl: 'views/img/gifEjercicios/sentadillas.gif',  
        imageAlt: 'Descripción de la imagen',
        imageWidth:300,
        imageHeight:300,
        confirmButtonText: '¡Entendido!',
        confirmButtonColor: '#F96D00'

      });
  }
  function mostrarPress() {
    Swal.fire({
        title: 'Press de banca',
        imageUrl: 'views/img/gifEjercicios/pressBanca.gif',  
        imageAlt: 'Descripción de la imagen',
        imageWidth:300,
        imageHeight:300,
        confirmButtonText: '¡Entendido!',
        confirmButtonColor: '#F96D00'

      });
  }
  function mostrarDominada() {
    Swal.fire({
        title: 'Dominadas',
        imageUrl: 'views/img/gifEjercicios/dominadas.gif',  
        imageAlt: 'Descripción de la imagen',
        imageWidth:300,
        imageHeight:300,
        confirmButtonText: '¡Entendido!',
        confirmButtonColor: '#F96D00'

      });
  }
  
  function mostrarPlancha() {
    Swal.fire({
        title: 'Plancha',
        imageUrl: 'views/img/gifEjercicios/plancha.gif',  
        imageAlt: 'Descripción de la imagen',
        imageWidth:300,
        imageHeight:300,
        confirmButtonText: '¡Entendido!',
        confirmButtonColor: '#F96D00'

      });
  }
  function mostrarBiceps() {
    Swal.fire({
        title: 'Curl de bíceps',
        imageUrl: 'views/img/gifEjercicios/curlBiceps.gif',  
        imageAlt: 'Descripción de la imagen',
        imageWidth:300,
        imageHeight:300,
        confirmButtonText: '¡Entendido!',
        confirmButtonColor: '#F96D00'

      });
  }

  gifSentadilla.addEventListener('click', mostrarSentadilla)
  gifPress.addEventListener('click', mostrarPress)
  gifDominada.addEventListener('click', mostrarDominada)
  gifPlancha.addEventListener('click', mostrarPlancha)
  gifCurlBiceps.addEventListener('click', mostrarBiceps)