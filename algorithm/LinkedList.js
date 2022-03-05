const defaultEquals = (a, b) => a === b;

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = null;
    this.equalsFn = equalsFn;
  }

  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.count += 1;
  }

  insert(val, position) {
    if (position >= 0 && position <= this.count) {
      const node = new Node(val);
      if (position === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        const prevNode = this.getElementAt(position - 1);
        node.next = prevNode.next;
        prevNode.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }

  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let current = this.head;
      for (let i = 0; i < index && current != null; i++) {
        current = current.next;
      }
      return current;
    }
    return null;
  }

  remove(val) {
    const index = this.indexOf(val);
    return this.removeAt(index);
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;

      if (index === 0) {
        this.head = current.next;
      } else {
        let prevNode = this.getElementAt(index - 1);
        current = prevNode.next;
        prevNode.next = current.next;
      }
      this.count--;
      return current.val;
    }

    return null;
  }

  indexOf(val) {
    let count = 0;
    let current = this.head;
    while (current) {
      if (this.equalsFn(current.val, val)) {
        return count;
      }
      current = current.next;
      count++;
    }
    return -1;
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.size() === 0;
  }

  getHead() {
    return this.head;
  }
}