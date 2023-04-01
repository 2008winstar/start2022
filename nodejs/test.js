// console.log(globalThis)
const parent = {
  _name: null,
  get name() {
    return this._name;
  },
  set name(value) {
    this._name = value;
  }
};

const child = Object.create(parent);
child.name = '19Qingfeng';
console.log(child)