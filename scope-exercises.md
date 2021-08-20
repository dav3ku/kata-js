# JS Closures / Scoping exercises

1. What’s the result of executing this code and why.

```js
function test() {
  console.log(a);
  console.log(foo());

  var a = 1;
  function foo() {
    return 2;
  }
}

test();
```

> linea 6: undefined
> linea 7: 2
> Esto ocurre por el flujo de control regular (de arriba hacia abajo) El undefined de la linea 6 ocurre porque se imprimera la variable antes de que se declare. Esta variable se declara en la linea 9 pero para eso ya se mando la linea 6.
> No ocurre asi con las funciones declaradas. el caso de la linea 7 ya que las funciones no forman parte del flujo de control regular. Estas son conceptualmente trasladadas a la cima de su "scope"

2. What is result?

```js
var a = 1;

function someFunction(number) {
  function otherFunction(input) {
    return a;
  }

  a = 5;

  return otherFunction;
}

var firstResult = someFunction(9);
var result = firstResult(2);
```

> Linea 39: asignamos lo devuelto de la funcion "someFunction" ( la funcion "otherFunction") a la variable "firstResult"
> Linea 40: Asigna lo devuelto de la ejecucion de la funcion que contiene "firstResult" ( la variable "a") entiendo que el "scope" es la "a" de la funcion "someFunction" osea el valor es 5.

3. What is the result of the following code? Explain your answer.

```js
var fullname = "John Doe";
var obj = {
  fullname: "Colin Ihrig",
  prop: {
    fullname: "Aurelio De Rosa",
    getFullname: function () {
      return this.fullname;
    },
  },
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());
```

> En linea 60 el resultado sera "Aurelio De Rosa" y en la linea 64 será "John Doe", esto es porque al ejecutar la linea 60 el "this.fullname" hace referencia al "scope" de "prop", mientras que en la linea 64 esta haciendo referencia al alcance global que en este caso es "John Doe".

4. What will you see in the console for the following example?

```js
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
```

> Linea 79: 1
