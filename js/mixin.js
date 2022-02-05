const { HasHash } = require('./HasHash');

class Transaction {
  transactionId = '';
  timestamp = Date.now();
  #feePercent = 0.6;  // private field

  constructor(sender, recipient, funds = 0.0, description = 'Generic') {
    this.sender = sender;
    this.recipient = recipient;
    this.funds = Number(funds);
    this.description = description;
    this.transactionId = this.calculateHash()
  }

  displayTransaction() {
    return `Transaction from ${this.sender} to ${this.recipient} for ${this.funds}`;
  }

  get netTotal() {
    return Transaction.#precisionRound(this.funds * this.#feePercent, 2);
  }

  // static private method
  static #precisionRound(number, precision) {
    const factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
  }
}

Object.assign(
  Transaction.prototype,
  HasHash(['timestamp', 'sender', 'recipient', 'funds'])
)