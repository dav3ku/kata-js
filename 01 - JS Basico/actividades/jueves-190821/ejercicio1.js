/* ex. 1
una función que reciba un objeto y un string…
El string va a ser el nombre de una propiedad, y 
esa función tiene que validar si existe esa propiedad dentro del objeto que le mandes
la función debe retornar true o false */

var Car = {
  wheels: 4,
  company: "honda",
  name: "civic",
  year: 2016,
};

const validateProperty = (obj, property) => {
  // obj es el objeto, property es el string
  return obj.hasOwnProperty(property); // hasOwnProperty es una función que me dice si un objeto tiene una propiedad
};

console.log(validateProperty(Car, "model"));
