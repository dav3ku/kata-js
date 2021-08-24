/**
 * Ejercicio 2:
 *
 * Construye un algoritmo bajo las siguientes reglas
 * 1) Declara un arreglo vacio
 * 2) Con un ciclo While que se ejecute 5 veces, agrega los elementos al array
 * Nota: recuerda incrementar la variable contador para que pueda incrementar el ciclo
 */

var arr = [];
var contador = 0;

while (contador < 5) {
  arr.push(contador);
  contador++;
}

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
