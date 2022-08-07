const obj = {
  name: '张三',
  getName() {
    return this.name;
  },
  getName1: () => {
    return this.name;
  }
};

obj.__proto__.getName2 = function () {
  return this.name;
};

obj.__proto__.getName3 = () => {
  console.log(this);
  return this.name;
}

console.log(obj.getName());
console.log(obj.getName1());
console.log(obj.getName2());
console.log(obj.getName3());