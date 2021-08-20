# Quiz - JavaScript Basics

​

### Nombre completo:

> David Ku

## ​

​

## Self-Evaluation

​

#### Auto evaluación de los temas vistos en clase. Responde a las siguientes preguntas sin utilizar ningun recurso para solucionarlas. Tu conocimiento es muy importante para nosotros.

​

#### Objetivo de la evaluación: conocer que tanto haz aprendido sobre JavaScript y ver que temas se necesitan para una asesoria.

​
Reglas:
​

1. No googlear
2. No buscar en ningun libro
3. Realizarlo de forma individual
   ​

---

​

##### 1. ¿Qué es un algoritmo?

​

> Es un conjunto de instrucciones estructuradas para las computadoras​

##### 2. ¿Qué es un lenguaje de programación?

​

> Son las instrucciones dadas a la computadora pero con ciertas palabras o estructura para que lo entienda.​

##### 3. Describe que es un tipo de dato:

​

> Es el tipo contenido que tendras una variable.
> ​

##### 4. ¿Cuáles son los tipos de dato que conoces?

​

> String
> ​null
> ​number
> array
> Object
> undefined
> Boolean

##### 6. ¿Qué es NaN?

​

> Es cuando tratamos un valor que no es numero o no se puede comvertir a numero

##### 7. ¿Cual es el uso de `typeof`?

​

> para saber que tipo de dato.​

##### 8. ¿Cuál es la diferencia entre `==` y `===`?

​

> == evalua el valor, sin importar el tipo de dato.
> ===​ evalua el valor y el tipo de dato.

##### 9. ¿Qué es una variable?

​

> Es un elemento que se le puede asigar o reasignar cualquier valor.​

##### 10. ¿Qué es un statement?

​

> Una sentencia es una instruccion dada.​

##### 11. Del siguiente statement `a = b * 2` identifica sus partes _(literals, variables, operators)._

​

> Literales, 2
> Variables, a y b
> Operadores, = y \*​

##### 12. ¿Qué es una expression?

​

> Es la asignación de de un valor a un variable o la evaluación de algo y devuelve un valor.​

##### 13. ¿Cuántas expressions puedes identificar del siguiente statement `a = b * 2;`?

​

> b\*2
> a​ =

##### 14. ¿Cuál es la diferencia entre lenguaje `interpreted` y `compiled`?

​

> el interpretado la computadora lo lee tal sin necesidad de compilar es decir comvertir a un lengua de maquina y cargar en memoria.​

##### 15. Es JavaScript `interpreted` o `compiled`? Justifica tu respuesta.

​

> Interpretado, ya que las instrucciones las lee y las ejecuta sin necesidad de cargar por completo a la memoria.​

##### 16. ¿Cuales son los tipos de comentarios en JavaScript?

​

> lineal // y por bloque​ /_ bloque _/

​

## Sección Inténtalo tu mismo:

## ​

​

### Output Exercises.

​
Considera: `var a = 1;`
​
Escribe el código para:
​

##### 1 Imprimir `a` en consola:

​

> console.log(a);​

##### 2. mostrar `a` en una alerta:

​

> alert(a);​

### Input Exercises.

​
Pregunta al usuario su nombre con una función **prompt** y que el mensaje diga:
`"Porfavor, escribe tu nombre"` y guarda su nombre en una variable llamada `username`, después loguea el valor en consola
​
Solución:
​

```js
var username = prompt("Por favor, escribe tu nombre");
console.log(username);
```

​

### Sección: Operadores

## ​

​

##### 1. Completa la oración:

​
JavaScript has both u**_ and b_** operators, and one special t\_\_\_ operator
​

> ​

##### 2. Tipos de Operadores

​
Nombre los _tipos de operadores_ que conoces, y da un ejemplo básico de cada uno que menciones:
​

> Operador de asignación: a = b;
> Operadores de comparación: a > b; a< b; a == b;​
> Operadores aritmeticos a+b
> Operadores logicos a || b

##### 3. Describe el uso de los operadores aritméticos:

​

> Para relizar operaciones matematicas como suma, resta, etc. entre valores de variables o literales.​

##### 4. ¿Qué es coercion en JS?

​

> no recuerdo.​

##### 5. ¿Es esto un código válido en JS?

​

```js
var amount = 100;
​
{
  amount = amount * 2;
  console.log(amount)
}
```

​

> Las instrucciones son correctas pero la estructura no, las llaves { } no deben ir a menos que estemos colocando un bloque de codigo por una funcion, if, for, etc.

### Estructuras de Control

​

##### 1. Describe que son y para que funcionan las estructuras de control:

​

> Son comparaciones para indicar a la computadora que hacer en caso que se cumpla o condicion o que realizar en caso de que no.​

##### 2. Realiza una estructura de control simple utilizando una condicion, si la condición se cumple, retorna true, en caso contrario, retorna false.

​

```js
if (3 < 5) {
  return true;
} else {
  return false;
}
```

​

##### 3. Escribe un bloque de código para validar si una variable `number` es menor que `10` para loguear `one digit`, de lo contrario, loguea `two digits`.

​
Solution:
​

```js
if (number < 10) {
  console.log("one digit");
} else {
  console.log("two digits");
}
```

​
​

### Ciclos

​

##### 1. Describe que es un ciclo y para que funcionan:

​

> es un bloque de instrucciones que se ejecutan tantas veces como se requiera hasta que se cumpla un condicion.​

##### 2. Realiza un ciclo for iterando el siguiente arreglo: var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]:

​

```js
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}
```

​
​

##### 3. Escribe un bloque de código para loguear los números de `0-9` usando `while` y `do-while` loops.

​
**`while`** solution:
​

```js
var i = 0;
while (i <= 9) {
  console.log(i);
  i++;
}
```

​
**`do-while`** solution:
​

```js
var i = 0;
do {
  console.log(i);
  i++;
} while (i <= 9);
```

​

##### 4. ¿Cuales son las 3 clausulas de sintaxis para un `for` loop?

​

> Inicializar la variable, la condicion, el sumador.​

### Sección: Functions

## ​

​

##### 1. ¿Qué es una función?

​

> es un bloque de codigo que permite un funcionalidad independiente a todo el codigo, para reutilizar.

##### 2 Escribe una función `sum` que reciba dos numberos como argumentos y que regrese la suma de ambos.

​
Solution:
​

```js
function sum(a, b) {
  return a + b;
}
```

​

##### 3. ¿Qué es el scope en JavaScript?

​

> es el alcance de las variables (yo lo entiendo como es donde se conocen).
> ​

##### 4. Responde `true` o `false` para las siguientes preguntas:

​
Consider:
​

```js
function outer() {
  var a = 1;
​
  function inner() {
    var b = 2;
  }
​
  inner();
}
​
outer();
```

​

##### 5. ¿La función `inner` tiene acceso a al scope de la función `outer`?

​

> true​

###### 6. ¿La función `outer` tiene acceso al scope de la función `inner`?

​

> false​

## Section: Challenges

## ​

​

##### 1. Crea una funcion llamada `calculateAreaOfACircle` que reciba `radius` como parámetro. Usa una variable llamada `PI` igual a `3.14159`.

​
Solution:
​

```js
// crea la variable PI aqui
​var PI = 3.14159;
​
// crea tu funcion aqui
​function calculateAreaOfACircle (radius) {
 return (PI * (radius * radius));
}
​
```

​

##### 2. Escribe una función que revierta el siguiente array

var arr = [1,2,3,4]
​

```js
function reverse() {
  var arr = [1, 2, 3, 4];
  console.log(arr.reverse());
}
```

​
​

##### 3. Escribe una funcion que compare dos arreglos y retorne true si son idénticos, retorna false en caso contrario.

​

```js
function comparation(array1, array2) {
  var iguales = false;

  if (array1.length == array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        iguales = true;
      } else {
        iguales = false;
        return iguales;
      }
    }
    return iguales;
  } else {
    return iguales;
  }
}
```
