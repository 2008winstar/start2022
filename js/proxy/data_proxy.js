let store = new Set();
const data = {
  name: 'pino',
  age: 18
};
let nextVal;
const effect = () => {
  nextVal = data.age + 1;
  console.log(nextVal);
}

effect();

let data_proxy = new Proxy(data, {
  get(target, key) {
    store.add(effect);
    return target[key];
  },

  set(target, key, newVal) {
    target[key] = newVal;
    store.forEach(fn => fn())
  }
});

setTimeout(() => {
  data_proxy.age++;
}, 2000);