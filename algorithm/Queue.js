class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(ele) {
    this.items.push(ele);
  }

  dequeue() {
    return this.items.shift()
  }

  peek() {
    return this.items[0];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.items.length;
  }
}