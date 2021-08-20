// Crea una function que reciba un arreglo de enteros como parametro, itera sobre el arreglo y suma los valores del arreglo. Retorna el total.

function suma(arreglo) {
  var total = 0;
  for (var i = 0; i < arreglo.length; i++) {
    total += arreglo[i];
  }
  return total;
}

var a = [10, 52, 3, 54, 85];
console.log("Suma de los elementos del arreglo: " + suma(a));
