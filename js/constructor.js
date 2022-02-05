function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Student(name, age, klass) {
  if (!new.target) {
    return new Student(klass);
  }
  Person.call(this, name, age);
  this.klass = klass;
}

console.log(Student.prototype);



