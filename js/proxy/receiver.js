const obj = {
  _name: 'copyer',
  get name() {
    return this._name;
  },
  set name(newValue) {
    this._name = newValue;
  }
};

const objProxy = new Proxy(obj, {
  get(target, key, receiver) {
    console.log('get捕捉器');
    console.log(receiver === objProxy);
    return Reflect.get(target, key, receiver);
  },
  set(target, key, newValue, receiver) {
    console.log('set捕捉器');
    Reflect.set(target, key, newValue, receiver);
  }
});

console.log(objProxy.name);