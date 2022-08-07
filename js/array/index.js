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

const iterator = numbers[Symbol.iterator]();
for (const n of iterator) {
  console.log(n);
}
console.log(iterator.next()); // { value: xxx, done: true|false }

const ary = [0, 1, 2];
ary[10] = 10;
ary.filter(x => x === undefined);
console.log(ary); // []
/*
 * filter为数组中的每个元素调用一次callback函数，并利用所有使得callback返回true或等价于true的值的元素创建一个新数组。
 * callback只会在已经赋值的索引上被调用，对于那些已经被删除或者从未被赋值的索引不会被调用。
 * 那些没有通过callback测试的元素会被跳过，不会被包含在新数组中。
 */

Array.isArray(Array.prototype) // true