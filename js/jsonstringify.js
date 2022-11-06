const jsonstringify = (data) => {
  // check if an object has a circular reference
  const isCyclic = (obj) => {
    // use a Set to store the detected objects
    let stackSet = new Set();
    let detected = false;

    const detect = (obj) => {
      // if it is not an object, we can skip it directly
      if (obj && typeof obj !== 'object') {
        return;
      }

      // when the object to be checked already exists in the stackSet
      // it means that there is a circular reference
      if (stackSet.has(obj)) {
        return detected = true;
      }

      // save current obj to stackSet
      stackSet.add(obj);

      for (let key in obj) {
        // check all property of 'obj'
        if (obj.hasOwnProperty(key)) {
          detect(obj[key]);
        }
      }

      // after the detection of the same level is completed
      // the current object should be deleted to prevent misjudgment
      stackSet.delete(obj);
    }

    detect(obj);

    return detected;
  }


  let tempObj = {
    name: 'bytefish'
  };

  let obj4 = {
    obj1: tempObj,
    obj2: tempObj
  }

  // throws a TypeError ("cyclic object value") exception when a circular reference is found
  if (isCyclic(data)) {
    throw new TypeError('Converting circular structure to JSON');
  }

  // throws a TypeError when trying to stringify a BigInt value
  if (typeof data === 'bigint') {
    throw new TypeError('Do not know how to serialize a BigInt');
  }

  const type = typeof data;
  const commonKeys1 = ['undefined', 'function', 'symbol'];
  const getType = (s) => {
    return Object.prototype.toString().call(s).replace(/\[object (.*?)\]/, '$1').toLowerCase();
  }

  if (type !== 'object' || data === null) {
    let result = data;
    if ([NaN, Infinity, null].includes(data)) {
      // the numbers Infinity and NaN, as well as the value null, are all considered null.
      result = 'null';
    } else if (commonKeys1.includes(type)) {
      // undefined, arbitrary functions, and symbol values are converted individually and return undefined
      return undefined;
    } else if (type === 'string') {
      result = '"' + data + '"';
    }
    return String(result);
  } else if (type === 'object') {
    // if the target object has a toJSON() method, it's responsible to define what data will be serialized.
    // the instances of Date implement the toJSON() function by returning a string (the same as date.toISOString()). Thus, they are treated as strings.
    if (typeof data.toJSON() === 'function') {
      return jsonstringify(data.toJSON());
    } else if (Array.isArray(data)) {
      let result = data.map((it) => {
        // 3# undefined, Functions, and Symbols are not valid JSON values. if any such values are encountered
        // during conversion they are either omitted (when found in an object) or changed to null (when found in an array)
        return commonKeys1.includes(typeof it) ? 'null' : jsonstringify(it);
      });
      return `[${result}]`.replace(/'/g, '"');
    } else {
      // 2# Boolean, Number, and String objects are converted to the corresponding primitive values
      // during stringification, in accord with the traditional conversion semantics.
      if (['boolean', 'number'].includes(getType(data))) {
        return String(data);
      } else if (getType(data) === 'string') {
        return '"' + data + '"';
      } else {
        let result = [];
        // 7# all the other Object instances (including Map, Set, WeakMap, and WeakSet) will have only their enumerable
        // properties serialized.
        Object.keys(data).forEach((key) => {
          // 4# all Symbol-keyed properties will be completely ignored
          if (typeof key !== 'symbol') {
            const value = data[key];
            // 3# undefined, Functions, and Symbols are not valid JSON values. if any such values are encountered
            // during conversion they are either omitted (when found in an object)
            // or changed to null (when found in an array).
            if (!commonKeys1.includes(typeof value)) {
              result.push(`"${key}":${jsonstringify(value)}`);
            }
          }
        });

        return `{${result}`.replace(/'/, '"');
      }
    }
  }

  console.log(isCyclic(obj4));

}

jsonstringify();