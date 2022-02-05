Array.prototype.insertFirstPosition = function (value) {
  for (let i = this.length; i > 0; i--) {
    console.log('i: ', i);
    this[i] = this[i - 1];
  }
  this[0] = value;
}

const numbers = [0, 1, 2, 3];
numbers.insertFirstPosition(-1);
console.log(numbers);