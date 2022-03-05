class Queue {
  constructor() {
    this.count = 0;
    this.items = {};
    this.lowestCount = 0;
  }

  enqueue(...ele) {
    for (let i = 0; i < ele.length; i++) {
      this.items[++this.count] = ele[i];
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    let result = ++this.lowestCount;
    delete this.items[this.lowestCount];
    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount + 1];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.count - this.lowestCount;
  }

  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

}