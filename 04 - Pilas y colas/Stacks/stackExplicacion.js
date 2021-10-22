// STACK - PILAS

class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};
  }

  push(item) {
    this.count++;
    this.storage[this.count] = item;

    return this.count;
  }

  pop() {
    const deletedItem = this.storage[this.count];
    delete this.storage[this.count];
    this.count--;
    return deletedItem;
  }

  size() {
    return this.count;
  }

  peek() {
    return this.storage[this.count];
  }
}

const pila = new Stack();
console.log("Metodo push " + pila.push("Rocio"));
console.log("Metodo push " + pila.push("Shir"));
console.log("Metodo push " + pila.push("Krystel"));
console.log("Metodo push " + pila.push("Pedro"));
console.log("Metodo push " + pila.push("Han"));
console.log("Metodo push " + pila.push("Gustavo"));

console.log(pila.storage);

console.log("Metodo pop " + pila.pop());
console.log("Metodo pop " + pila.pop());

console.log("Metodo peek " + pila.peek());

console.log("Metodo size " + pila.size());
