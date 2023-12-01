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

console.log(ecxel.header());
console.log(ecxel.rows());
console.log(peso2);
console.log(estaturaIngresada);

});
