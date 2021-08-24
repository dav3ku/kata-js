# Notas de las clases

## [01] - Clase del 23 de agosto de 2021

Con JS pordemos Agregar, Modificar y Eliminar elementos del DOM de una manera muy sencilla.

- Agregar:

```JS
var div = document.createElement('div');
```

- Seleccionar por ID:

```JS
var div = document.getElementById('id');
```

- Remover:

```JS
var div = document.getElementById('id');
div.remove();
// Tambien se puede usar el metodo removeChild
var div = document.getElementById('id');
div.removeChild(div);
```

- Modificar

```JS
var div = document.getElementById('id');
div.innerHTML = '<h1>Hola</h1>';

// Tambien se puede usar modificar sus propiedades
var foto = createElement('img');
foto.src = 'http://www.google.com/images/srpr/logo4w.png';);

documento.body.appendChild(foto); // lo agregamos al documento
```

puede ser muy util para crear una página web, pero no es la mejor manera de hacerlo.
