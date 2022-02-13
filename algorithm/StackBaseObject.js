class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(ele) {
    this.items[++this.count] = ele;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.count--];
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.count];
  }

  isEmpty() {
    return this.count === 0;
  }

  clear() {
    this.items = {};
    this.count = 0;
  }

  size() {
    return this.count;
  }
}