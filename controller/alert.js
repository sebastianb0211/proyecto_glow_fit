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