class Transaction {
  sender = '';
  recipient = '';
  funds = 0.0;
  #feePercent = 0.6;  // private field

  constructor(sender, recipient, funds = 0.0) {
    this.sender = sender;
    this.recipient = recipient;
    this.funds = Number(funds);
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

class HashTransaction extends Transaction {
  transactionId;
  constructor(sender, recipient, funds = 0.0) {
    super(sender, recipient, funds);
    this.transactionId = this.calculateHash();
  }

  calculateHash() {
    const data = [this.sender, this.recipient, this.funds].join('');
    let hash = 0;
    let i = 0;
    while (i < data.length) {
      hash = ((hash << 5) - hash + data.charCodeAt(i++)) << 0;
    }
    return hash ** 2;
  }

  displayTransaction() {
    return `${this.transactionId}: ${super.displayTransaction()}`;
  }
}