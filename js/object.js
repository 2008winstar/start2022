const proto = {
  sender: 'luis@tjoj.com'
};

/**
 * Object.create(proto[, propertiesObject]);
 */
const child = Object.create(proto);
child.recipient = 'luke@tjoj.com';
console.log(child.sender);

const transaction = {
  sender: 'luis@tjoj.com',
  recipient: 'luke@tjoj.com'
};
const moneyTransaction = Object.create(transaction);
moneyTransaction.funds = 0.0;
moneyTransaction.addFunds = function addFunds(funds = 0) {
  this.funds += Number(funds);
}

/**
 * Object.getPrototypeOf()
 */
console.log(Object.getPrototypeOf(moneyTransaction) === transaction); // true
console.log(moneyTransaction.sender); // luis@tjoj.com

/**
 * Object#isPrototypeOf()
 */
console.log(transaction.isPrototypeOf(moneyTransaction)); // true

/**
 * Object.create(proto, {
 *   pty: {
 *     value: 0,
 *     enumerable: true,
 *     writable: true,
 *     configurable: false
 *   }
 * });
 */
const moneyTransaction1 = Object.create(transaction, {
  funds: {
    value: 0.0,
    enumerable: true,
    writable: true,
    configurable: false
  }
});

const hashTransaction = Object.create(transaction);
hashTransaction.calculateHash = function calculateHash() {
  const data = [this.sender, this.recipient].join('');
  let hash = 0;
  let i = 0;
  while (i < data.length) {
    hash = ((hash << 5) - hash + data.charCodeAt(i++)) << 0;
  }
  return hash ** 2;
}

/**
 * Object.setPrototypeOf()
 */
const moneyHashTransaction = Object.setPrototypeOf({}, hashTransaction);
console.log(moneyHashTransaction.calculateHash());

/**
 * under the hood of Object.create
 */
Object.create = function (proto, propertiesObject) {
  if (typeof proto !== 'object' && typeof proto !== 'function') {
    throw new TypeError(`Object prototype may only be an Object: ${proto}`);
  }

  function F() {}
  F.prototype = proto;
  return new F();
};

/**
 * Object.assign copies the enumerable properties that one or more objects own into a target object,
 * returning the target object.
 * Object.assign invokes the [[Set]] meta-operation for an existing property key.
 */
Object.assign()

