const obj = {
  name: 'test',
};

const parent = {
  name: '19',
  value: 'abc',
  // get value() {
  //   return this.name;
  // }
}

// const myProxy = new Proxy(obj, {
//   get(target, key) {
//     console.log('access ', key);
//     return target[key];
//   }
// });

// console.log(myProxy.name);
const handler = {
  get(target, key, receiver) {
    // return Reflect.get(target, key);
    console.log(key);
    return Reflect.get(target, key, receiver);
  },
};
const proxy = new Proxy(parent, handler)

Object.setPrototypeOf(obj, proxy);
console.log(obj.value);
