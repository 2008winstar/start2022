console.log(Function.prototype.__proto__.constructor === Object);

// const compose = (f, g) => (...args) => f(g(...args));
const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));
const add2 = (a) => {
  return a + 2;
}

const time2 = (a) => {
  return a * 2;
}

const add2Time2 = compose(add2, time2);
// console.log(add2Time2(2));

const add = (a, b) => {
  return a + b;
}
const curry = (fn) => (...args) => {
  if (args.length === fn.length) {
    return fn(...args);
  }
  return (...argus) => {
    const innerArgs = [...args, ...argus];
    return innerArgs.length >= fn.length ? fn(...innerArgs) : curry(fn)(...innerArgs);
  }
}
const addNew = curry(add);
console.log(addNew(3, 4));
console.log(addNew(3)(4));