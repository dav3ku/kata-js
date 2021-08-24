/* 
• Write a program to calculate the total price of your phone pur‐chase.  You  will  keep  purchasing  phones  (hint:  loop!)  until  yourun out of money in your bank account. You’ll also buy accesso‐ries  for  each  phone  as  long  as  your  purchase  amount  is  belowyour mental spending threshold.
• After  you’ve  calculated  your  purchase  amount,  add  in  the  tax,then  print  out  the  calculated  purchase  amount,  properly  for‐matted.• Finally, check the amount against your bank account balance tosee if you can afford it or not.
• You  should  set  up  some  constants  for  the  “tax  rate,”  “phoneprice,”  “accessory  price,”  and  “spending  threshold,”  as  well  as  avariable for your “bank account balance.”
• You should define functions for calculating the tax and for for‐matting  the  price  with  a  “$”  and  rounding  to  two  decimalplaces.
• Bonus  Challenge:  Try  to  incorporate  input  into  this  program,perhaps with the prompt(..) covered in “Input” on page 6. Youmay prompt the user for their bank account balance, for exam‐ple. Have fun and be creative! 
*/

// PARA PODER VER EL PROGRAMA SE DEBE ACCEDER POR EL ARCHIVO PRACTICA.HTML

// Constantes
const IVA = 0.16;
const PRECIO_TEL = 150.89;
const PRECIO_ACCESORIO = 24.25;

// Variables
var saldo = 0;
var subtotal = 0;
var impuestos = 0;
var total = 0; //  Variable para almacenar el total
var option = true; //  Variable que se usara para controlar el menu principal
var cant = 0; //  Variable que almacena la cantidad de telefonos que se desea comprar.

// Funciones

//  Opciones del menu
//    1. Modificar saldo en cuenta
const modSaldo = () => {
  let opc = true;
  let aux;
  while (opc) {
    opc = prompt(
      "Oprime: \n1. Nuevo saldo (esto eliminara el saldo actual) \n2. Agregar saldo (la cantidad que ingreses se sumara al saldo actual) \nX. Cancelar"
    );
    switch (opc) {
      case "1":
        aux = prompt("Ingresa el monto nuevo: ");
        if (verificarSaldo(aux)) {
          //  Si el usuario ingresa un valor numerico, se le asignara a la variable saldo
          saldo = parseFloat(aux);
          alert(`Su nuevo saldo es $${saldo}`);
          opc = false;
        }
        break;
      case "2":
        aux = prompt("Ingresa la monto a sumar a tu saldo: ");
        if (verificarSaldo(aux)) {
          saldo += parseFloat(aux);
          alert(`Su nuevo saldo es $${saldo}`);
          opc = false;
        }
        break;
      case "X": //  Si el usuario ingresa X, se le informara que se cancelo la operacion
      case "x":
        alert("Operacion cancelada");
        opc = false;
        break;
      default:
        //  Si el usuario ingresa un valor que no es 1, 2 o X, se le informara que ingreso un valor incorrecto
        alert("Opcion invalida, intenta de nuevo");
        break;
    }
  }
  return;
};

//    2. Agregar articulos a su carrito
const agregarArticulos = () => {
  let opc = true;
  let aux;

  while (opc) {
    aux = prompt(
      `Ingresa la cantidad de telefonos que deseas. \nConsidera que por cada telefono con valor de $${PRECIO_TEL} se le agregara un accesorio con valor de $${PRECIO_ACCESORIO}`
    ); //  Se pide la cantidad de telefonos que se desea comprar.
    aux = parseInt(aux); //  Para  evitar  que  se  ingrese  un  valor  no  numerico  se  convierte  a  entero.
    if (isNaN(aux)) {
      alert("Por favor ingresa un valor numerico"); //  Si el usuario no ingresa un valor numerico, se le pedira que lo ingrese de nuevo
    } else {
      opc = false;
      cant = aux; //  Si el usuario ingresa un valor numerico, se le asignara a la variable cant
      alert(`Se agregaron ${cant} telefonos y accesorios al carrito`); //  Se le informara al usuario que se agrego la cantidad de telefonos y accesorios al carrito
    }
  }
  return;
};

//    4. Ver su carrito
const verCarrito = () => {
  alert(
    `Su carrito contiene 
    Telefonos  -  ${cant}  - $${PRECIO_TEL} - $${(cant * PRECIO_TEL).toFixed(
      2
    )} 
    Accesorios  -  ${cant}  -  $${PRECIO_ACCESORIO} - $${(
      cant * PRECIO_ACCESORIO
    ).toFixed(2)}
    SUBTOTAL: $${calcularSubtotal().toFixed(2)}
    I.V.A.: $${calcularImpuestos().toFixed(2)}
    TOTAL: $${calcularTotal().toFixed(2)}`
  ); //  los detaller del carrito, el subtotal, el impuesto y el total con dos decimales.
};

//    5. Pagar
const pagar = () => {
  if (saldo >= calcularTotal()) {
    // Si el saldo es mayor o igual al total, se paga el total
    if (
      confirm(
        `¿Estas seguro que deseas pagar la cantidad de $${calcularTotal().toFixed(
          2
        )}?`
      ) // Confirmación del usuario para proceder a pagar
    ) {
      saldo -= calcularTotal(); // Se resta el total al saldo
      alert(`Pagaste $${calcularTotal().toFixed(2)}
      Tu saldo actual es $${saldo.toFixed(2)}`); // Se muestra el mensaje de pago y el nuevo saldo
      cant = 0; // Limpia el carrito
      return;
    } else {
      alert("Operacion cancelada"); // Si el usuario no confirma, se cancela la operación
      return;
    }
  } else {
    // Si el saldo es menor al total, se pide hacer un ingreso
    alert(`No tienes saldo suficiente para pagar el total.
    Por favor ingresa  más saldo a tu cuenta.`);
    return;
  }
};

//  Calcula el subtotal
const calcularSubtotal = () => {
  return cant * PRECIO_TEL + cant * PRECIO_ACCESORIO; // Subtotal, la multiplicacion de la cantidad de telefonos por el precio del telefono y la cantidad de accesorios por el precio del accesorio
};

//  Calcula el impuesto
const calcularImpuestos = () => {
  return calcularSubtotal() * IVA; //  El  subtotal  se  multiplica  por  el  IVA  para  obtener  el  impuesto.
};

//  Calcula el total
const calcularTotal = () => {
  return calcularSubtotal() + calcularImpuestos(); // Total = Subtotal + Impuestos
};

// verifica que el saldo sea mayor a 0 o numero
const verificarSaldo = (ingreso) => {
  ingreso = parseFloat(ingreso); // convierte a float
  if (isNaN(ingreso)) {
    // verifica que sea un numero
    alert("Por favor ingresa un valor numerico"); // mensaje de error
    return false;
  } else {
    return true;
  }
};

//  menu principal
const menu = () => {
  let aux;
  if (saldo == 0) {
    aux = prompt(
      "BIENVENIDO A SU TIENDA \n Para comenzar a comprar por favor ingrese su saldo: "
    );
    if (verificarSaldo(aux)) {
      // verifica que aux sea numero
      saldo = parseFloat(aux); // convierte a float
      alert(`Su nuevo saldo es $${saldo}`);
      menu(); // vuelve a llamar al menu
    }
    return;
  } else {
    option = prompt(
      `BIENVENIDO A SU TIENDA \nPor favor eliga una opción. \n1. Modificar saldo en cuenta \n2. Agregar articulos \n3. Ver su carrito \n4. Pagar \nX. Salir`
    );
  }
};

// Programa principal
while (option) {
  menu(); //  Menu principal
  switch (option) {
    case "1": //  Modificar saldo
      modSaldo();
      break;
    case "2": // Agregar articulos
      agregarArticulos();
      break;
    case "3": //  Ver carrito
      verCarrito();
      break;
    case "4": //  Pagar
      pagar();
      break;
    case "X": //  Si el usuario ingresa X, se termina el programa
    case "x":
      option = false;
      break;
    default:
      //  Si el usuario ingresa una opcion no valida, se le pedira que ingrese una opcion valida
      alert("Opcion invalida, intenta de nuevo");
      break;
  }
}
