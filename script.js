/**
 * Recreación del juego Wordle con html, css y js
 * Utilizando un arreglo de palabras
 * Oscar Dávalos
 */


//const palabras = ["Mango", "Lapiz", "Nubes", "Perro", "fuerte", "Ducha", "Tigre", "Pizar", "Cebra", "dardo"];
const palabras = [
  "Mango", "Lápiz", "Nubes", "Perro", "Fuerte", "Ducha", "Tigre", "Pizar", "Cebra", "Dardo",
  "Viento", "Pelar", "Oveja", "Reloj", "Camino", "Sierra", "Azote", "Monte", "Puente", "Ramas",
  "Agua", "Luzon", "Rocas", "Llave", "Libro", "Radio", "Estan", "Nadar", "Océano", "Flojo",
  "Alaún", "Canto", "Ramal", "Villa", "Zorro", "Banco", "Altoz", "Pezón", "Somos", "Vacas",
  "Manta", "Cueva", "Cabra", "Flore", "Piano", "Mesas", "Osito", "Venus", "Fuego", "Toras",
  "Hozar", "Lince", "Joven", "Serio", "Freno", "Helio", "Fideo", "Aires", "Fruta", "Estos",
  "Calle", "Manos", "Lugar", "Islaú", "Techo", "Reina", "Nieve", "China", "Rápid", "Trama",
  "Viento", "Coser", "Lente", "Hojar", "Jardín", "Cacao", "Cuboé", "Malla", "Talar", "Tempo",
  "Vocal", "Pájaro", "Piede", "Estar", "Desir", "Patas", "Vista", "Almao", "Avent", "Cambí",
  "Luzón", "Cuerp", "Orión", "Piola", "Izado", "Trata", "Tiara", "Zurra", "Lente", "Vigía"
];

let indiceAleatorio = Math.floor(Math.random() * palabras.length);

let palabraObjetivo = palabras[indiceAleatorio].toLowerCase();


let intentos = 5;
//casillas
const letra1 = document.getElementById('letra1');
const letra2 = document.getElementById('letra2');
const letra3 = document.getElementById('letra3');
const letra4 = document.getElementById('letra4');
const letra5 = document.getElementById('letra5');

const letra6 = document.getElementById('letra6');
const letra7 = document.getElementById('letra7');
const letra8 = document.getElementById('letra8');
const letra9 = document.getElementById('letra9');
const letra10 = document.getElementById('letra10');


const letra11 = document.getElementById('letra11');
const letra12 = document.getElementById('letra12');
const letra13 = document.getElementById('letra13');
const letra14 = document.getElementById('letra14');
const letra15 = document.getElementById('letra15');

const letra16 = document.getElementById('letra16');
const letra17 = document.getElementById('letra17');
const letra18 = document.getElementById('letra18');
const letra19 = document.getElementById('letra19');
const letra20 = document.getElementById('letra20');

const letra21 = document.getElementById('letra21');
const letra22 = document.getElementById('letra22');
const letra23 = document.getElementById('letra23');
const letra24 = document.getElementById('letra24');
const letra25 = document.getElementById('letra25');



//filas
const fila21 = document.getElementById('fila1');
const fila22 = document.getElementById('fila2');
const fila23 = document.getElementById('fila3');
const fila24 = document.getElementById('fila4');
const fila25 = document.getElementById('fila5');

const arrayLetras = [letra1, letra2, letra3, letra4, letra5, letra6, letra7, letra8, letra9, letra10, letra11
  , letra12
  , letra13
  , letra14
  , letra15
  , letra16
  , letra17
  , letra18
  , letra19
  , letra20
  , letra21
  , letra22, letra23, letra24, letra25];

const btnJugar = document.getElementById('btnJugar');
const btnDeNuevo = document.getElementById('btnDeNuevo');
const btnAyuda = document.getElementById('btnAyuda');
const mensaje = document.getElementById('mensaje');
const mensaje2 = document.getElementById('mensaje2');
let contador = 0;
function comprobarPalabra() {
  intentos--;
  mensaje.style.display = 'none';
  let entrada = document.getElementById('entrada').value.toLowerCase();

  if (entrada === "" || entrada.length < 5 || entrada.length > 5) {
    location.reload()
    alert("Ingresa una palabla de 5 letras");

  }
  if (intentos === 0 && palabraObjetivo != entrada) {
    // verifica si la cantidad de intentos llego a 0
    mensaje2.style.display = 'block'; // perdiste
    btnJugar.style.display = 'none';
    btnDeNuevo.style.display = 'block'
  }


  switch (contador + 1) {

    // el algoritmo se repite para cada intento pero con el id de cada casilla cambia con respecto a su fila
    case 1:

      if (entrada === palabraObjetivo) {
        // en caso de que se adivine la palabra

        mensaje.style.display = 'block';
        btnJugar.style.display = 'none';
        btnDeNuevo.style.display = 'block'
        for (let i = 0; i < 5; i++) {

          arrayLetras[i].innerHTML = entrada[i];
          let padre = arrayLetras[i].parentNode; //se encuetra al padre del elemento para cambiar el color del fondo
          padre.style.backgroundColor = 'green';

        }
      }
      else {
        for (let i = 0; i < 5; i++) {

          if (entrada[i] === palabraObjetivo[i]) {// en caso de que coincida una letra
            arrayLetras[i].innerHTML = entrada[i];
            let padre = arrayLetras[i].parentNode; //se encuetra al padre del elemento para cambiar el color del fondo
            padre.style.backgroundColor = 'rgb(67, 160, 71)';

          }
          else if (palabraObjetivo.includes(entrada[i])) { // en caso de que la palabra contenga esa letra

            arrayLetras[i].innerHTML = entrada[i];
            let padre = arrayLetras[i].parentNode; //se encuetra al padre del elemento para cambiar el color del fondo
            padre.style.backgroundColor = 'rgb(255, 225, 0)';

          }
          else { // en caso de que no coincida una letra
            arrayLetras[i].innerHTML = entrada[i];
            let padre = arrayLetras[i].parentNode; //se encuetra al padre del elemento para cambiar el color del fondo
            padre.style.backgroundColor = 'rgb(117, 117, 117)';

          }


        }
      }

      break;
    case 2:

      if (entrada === palabraObjetivo) {
        // en caso de que se adivine la palabra

        mensaje.style.display = 'block';
        btnJugar.style.display = 'none';
        btnDeNuevo.style.display = 'block'
        let j = 5;
        for (let i = 0; i < entrada.length; i++) {
          arrayLetras[j].innerHTML = entrada[i];
          let padre = arrayLetras[j].parentNode; //se encuetra al padre del elemento para cambiar el color del fondo
          padre.style.backgroundColor = 'green';
          j++;
        }


      }
      else {
        let j = 5;
        for (let i = 0; i < entrada.length; i++) {

          if (entrada[i] === palabraObjetivo[i]) {// en caso de que coincida una letra

            arrayLetras[j].innerHTML = entrada[i];
            let padre = arrayLetras[j].parentNode; //se encuetra al padre del elemento para cambiar el color del fondo
            padre.style.backgroundColor = 'green';

          }
          else if (palabraObjetivo.includes(entrada[i])) { // en caso de que la palabra contenga esa letra

            arrayLetras[j].innerHTML = entrada[i];
            let padre = arrayLetras[j].parentNode; //se encuetra al padre del elemento para cambiar el color del fondo
            padre.style.backgroundColor = 'rgb(255, 225, 0)';

          }
          else { // en caso de que no coincida una letra
            arrayLetras[j].innerHTML = entrada[i];
            let padre = arrayLetras[j].parentNode; //se encuetra al padre del elemento para cambiar el color del fondo
            padre.style.backgroundColor = 'grey ';

          }
          j++;

        }
      }
      break;
    case 3:


      if (entrada === palabraObjetivo) {
        // en caso de que se adivine la palabra

        mensaje.style.display = 'block';
        btnJugar.style.display = 'none';
        btnDeNuevo.style.display = 'block'
        let j = 10;
        for (let i = 0; i < entrada.length; i++) {
          arrayLetras[j].innerHTML = entrada[i];
          let padre = arrayLetras[j].parentNode; //se encuetra al padre del elemento para cambiar el color del fondo
          padre.style.backgroundColor = 'green';
          j++;
        }


      }
      else {
        let j = 10;
        for (let i = 0; i < entrada.length; i++) {

          if (entrada[i] === palabraObjetivo[i]) {// en caso de que coincida una letra

            arrayLetras[j].innerHTML = entrada[i];
            let padre = arrayLetras[j].parentNode; //se encuetra al padre del elemento para cambiar el color del fondo
            padre.style.backgroundColor = 'green';

          }
          else if (palabraObjetivo.includes(entrada[i])) { // en caso de que la palabra contenga esa letra

            arrayLetras[j].innerHTML = entrada[i];
            let padre = arrayLetras[j].parentNode; //se encuetra al padre del elemento para cambiar el color del fondo
            padre.style.backgroundColor = 'rgb(255, 225, 0)';

          }
          else { // en caso de que no coincida una letra
            arrayLetras[j].innerHTML = entrada[i];
            let padre = arrayLetras[j].parentNode; //se encuetra al padre del elemento para cambiar el color del fondo
            padre.style.backgroundColor = 'grey ';

          }
          j++;

        }
      }
      break;
    case 4:


      if (entrada === palabraObjetivo) {
        // en caso de que se adivine la palabra

        mensaje.style.display = 'block';
        btnJugar.style.display = 'none';
        btnDeNuevo.style.display = 'block'
        let j = 15;
        for (let i = 0; i < entrada.length; i++) {
          arrayLetras[j].innerHTML = entrada[i];
          let padre = arrayLetras[j].parentNode; //se encuetra al padre del elemento para cambiar el color del fondo
          padre.style.backgroundColor = 'green';
          j++;
        }


      }
      else {
        let j = 15;
        for (let i = 0; i < entrada.length; i++) {

          if (entrada[i] === palabraObjetivo[i]) {// en caso de que coincida una letra

            arrayLetras[j].innerHTML = entrada[i];
            let padre = arrayLetras[j].parentNode; //se encuetra al padre del elemento para cambiar el color del fondo
            padre.style.backgroundColor = 'green';

          }
          else if (palabraObjetivo.includes(entrada[i])) { // en caso de que la palabra contenga esa letra

            arrayLetras[j].innerHTML = entrada[i];
            let padre = arrayLetras[j].parentNode; //se encuetra al padre del elemento para cambiar el color del fondo
            padre.style.backgroundColor = 'rgb(255, 225, 0)';

          }
          else { // en caso de que no coincida una letra
            arrayLetras[j].innerHTML = entrada[i];
            let padre = arrayLetras[j].parentNode; //se encuetra al padre del elemento para cambiar el color del fondo
            padre.style.backgroundColor = 'grey ';

          }
          j++;

        }
      }
      break;
    case 5:

      if (entrada === palabraObjetivo) {
        // en caso de que se adivine la palabra

        mensaje.style.display = 'block';
        btnJugar.style.display = 'none';
        btnDeNuevo.style.display = 'block'
        let j = 20;
        for (let i = 0; i < entrada.length; i++) {
          arrayLetras[j].innerHTML = entrada[i];
          let padre = arrayLetras[j].parentNode; //se encuetra al padre del elemento para cambiar el color del fondo
          padre.style.backgroundColor = 'green';
          j++;
        }


      }
      else {
        let j = 20;
        for (let i = 0; i < entrada.length; i++) {

          if (entrada[i] === palabraObjetivo[i]) {// en caso de que coincida una letra

            arrayLetras[j].innerHTML = entrada[i];
            let padre = arrayLetras[j].parentNode; //se encuetra al padre del elemento para cambiar el color del fondo
            padre.style.backgroundColor = 'green';

          }
          else if (palabraObjetivo.includes(entrada[i])) { // en caso de que la palabra contenga esa letra

            arrayLetras[j].innerHTML = entrada[i];
            let padre = arrayLetras[j].parentNode; //se encuetra al padre del elemento para cambiar el color del fondo
            padre.style.backgroundColor = 'rgb(255, 225, 0)';

          }
          else { // en caso de que no coincida una letra
            arrayLetras[j].innerHTML = entrada[i];
            let padre = arrayLetras[j].parentNode; //se encuetra al padre del elemento para cambiar el color del fondo
            padre.style.backgroundColor = 'grey ';

          }
          j++;

        }
      }
      break;
    default:
      alert("Error");

  }
  contador++;
  console.log("contador: " + contador);
  console.log("oportunidades: " + intentos);
  document.getElementById('entrada').value = '';
}

function recargar() {
  location.reload();
}
function mostrarMensaje() {
  alert("la palabra es: " + palabraObjetivo);
}

btnJugar.addEventListener('click', comprobarPalabra);
btnDeNuevo.addEventListener('click', recargar);
btnAyuda.addEventListener('click', mostrarMensaje);

entrada.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    // Llama a la función que deseas ejecutar al presionar 'Enter'
    comprobarPalabra();
  }
});

