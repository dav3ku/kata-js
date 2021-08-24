/*
Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively
*/

// [5, 6, 85 , 96, 45]
// [5, 6, 45, 85, 96]

// 1 ordenar el array
// 2 selecioanr el segundo menor y el segundo mayor.

function order_array(array) {
  var datos = array.length;

  function comparar(a, b) {
    return a - b;
  }
  array.sort(comparar);

  return (
    "El segundo menor " + array[1] + " y el segundo mayor " + array[datos - 2]
  );
}

console.log(order_array([52, 36, 68, 25, 17, -52, 366, 6, 25, 3, -664]));
