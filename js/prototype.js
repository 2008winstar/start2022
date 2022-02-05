function Transaction(sender, recipient) {
  this.sender = sender;
  this.recipient = recipient;
}
Transaction.prototype.displayTransaction = function displayTransaction() {
  return `Transaction from ${this.sender} to ${this.recipient}`;
}

function HashTransaction(sender, recipient) {
  if (!new.target) {
    return new HashTransaction(sender, recipient);
  }
  Transaction.call(this, sender, recipient);
}

console.log(HashTransaction.constructor.toString());
HashTransaction.prototype = Object.create(Transaction.prototype);
HashTransaction.prototype.constructor = HashTransaction;
HashTransaction.prototype.calculateHash = function calculateHash() {
  const data = [this.sender, this.recipient].join('');
  let hash = 0;
  let i = 0;
  while (i < data.length) {
    hash = ((hash << 5) - hash + data.charCodeAt(i++)) << 0;
  }
  return hash ** 2;
}

const tx = new HashTransaction('a', 'b');
console.log(tx.calculateHash());