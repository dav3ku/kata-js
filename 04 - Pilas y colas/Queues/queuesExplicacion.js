class Queue {
  constructor() {
    this.queue = [];
  }

  get size() {
    return this.queue.length;
  }

  enqueue(item) {
    this.queue.push(item);
  }

  dequeue() {
    return this.queue.shift();
  }

  front() {
    return this.queue[0];
  }

  // ultimo elemento
  back() {
    return this.queue[this.size - 1];
  }
  // retorna la queue
  print() {
    if (this.isEmpty()) {
      return "Cola vacia";
    } else {
      return this.queue;
    }
  }
  // valida si esta vacia o no
  isEmpty() {
    return this.size == 0;
  }
}

const cola = new Queue();

cola.enqueue("Rojo");
cola.enqueue("Verde");
cola.enqueue("Azul");
cola.enqueue("Amarillo");

console.log(cola.front());
console.log(cola.back());

cola.dequeue();

console.log(cola.print());
