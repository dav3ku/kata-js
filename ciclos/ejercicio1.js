/**
 * Ejercicio 1
 * 
 * Construye un algoritmo bajo las siguientes reglas:
 * 
 * 1) Itera un arreglo utilizando un ciclo for
 * 2) Imprime en consola los valores que sean mayores 3
 * 
    var arr = [1, 4, 6, 10, 22, 55, 46, 2, 5, 0]
 */

var arr = [1, 4, 6, 10, 22, 55, 46, 2, 5, 0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 3) {
    console.log(arr[i]);
  }
}
