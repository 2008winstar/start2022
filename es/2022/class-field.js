class Car {
  color = 'blue';
  #age;

  // private field
  #brand = 'BMW';

  // static private field
  static #count = 0;

  // static method
  static getCount() {
    return this.#count;
  }

  // static private method
  static #incrementCount() {
    this.#count++;
  }

  constructor() {
    this.constructor.#incrementCount();
  }

  get brand() {
    return this.#brand;
  }

  hasBrand() {
    return (#age in this);
  }
}

const car = new Car();
console.log(car.color);
console.log(car.brand);