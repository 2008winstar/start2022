/**
 * Object.hasOwn()
 */

const obj = Object.create(null);
obj.color = 'green';
console.log(Object.hasOwn(obj, 'color'));