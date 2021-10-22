class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // revisar si esta vacia
  isEmpty() {
    return this.length === 0;
  }

  // agregar un nuevo nodo al final de la lista
  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // eliminar el ultimo nodo de la lista
  pop() {
    if (this.isEmpty()) {
      // revisar si esta vacia
      return null;
    } else if (this.length === 1) {
      // revisar si es un unico nodo
      const nodeToDelete = this.head; // guardar el nodo a eliminar
      this.head = null; // reiniciar la lista
      this.tail = null; // reiniciar la lista
      this.length--; // disminuir el largo de la lista

      return nodeToDelete; // retornar el nodo eliminado
    } else {
      // si hay mas de un nodo
      let currentNode = this.head; // guardar el primer nodo
      while (currentNode) {
        // itera en cada nodo
        if (currentNode.next === this.tail) {
          // si el siguiente nodo es el ultimo
          const nodeToDelete = this.tail; // guardar el ultimo nodo
          this.tail = currentNode; // actualizar el ultimo nodo
          this.tail.next = null; // actualizar el next del ultimo nodo
          this.length--; // actualizar el largo de la lista

          return nodeToDelete; // retornar el nodo eliminado
        }
        currentNode = currentNode.next; // si el siguiente nodo no es el ultimo, actualizar el nodo actual
      }
    }
  }
}

const list = new linkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);

console.log(list);

console.log(list.pop());

console.log(list);
