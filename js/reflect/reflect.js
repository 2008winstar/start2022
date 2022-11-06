const obj = { foo: 1 };
console.log(Reflect.get(obj, 'foo', { bar: 2 }));