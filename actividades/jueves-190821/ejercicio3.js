/* var simpleExercise = [{a: 11, b:224, name: "M48 Bulldog"}, {a:23, b:56, name: "Object 140"}, {a: 32, b:75, name: "T57 Heavy"}];

Hacer una función para que reciba ese arreglo de objetos
y que retorne la suma de "a" y "b" de cada objeto y concatenarlo 
al String "name" para que devuelva algo así:

["235 M48 Bulldog-=-79 Object 140-=-107 T57 Heavy" ] */

var simpleExercise = [
  { a: 11, b: 224, name: "M48 Bulldog" },
  { a: 23, b: 56, name: "Object 140" },
  { a: 32, b: 75, name: "T57 Heavy" },
];

const contatenate = (arr) => {
  if (!Array.isArray(arr)) {
    //si no es un arreglo
    return "Error, no me pasaste un array";
  }

  let newarr = arr.map((item) => {
    //recorro el arreglo
    return item.a + item.b + " " + item.name; //retorno la concatenación de a, b y el nombre
  });

  let finish = []; //creo un arreglo vacio

  finish.push(newarr.join("-=-")); //agrego el arreglo "newarr" a "finish" pero separado por -=-

  return finish; //retorno el arreglo final
};

console.log(contatenate(simpleExercise));
