const MyStore = {
  init(element) {
    this.length = 0;
    this.push(element);
  },
  push(b) {
    this[this.length] = b;
    return ++this.length;
  }
};

const Blockchain = Object.create(MyStore);



const Transaction = {
  init(sender, recipient, funds = 0.0) {
    this.sender = sender;
    this.recipient = recipient;
    this.funds = Number(funds);
    return this;
  },

  displayTransaction() {
    return `Transaction from ${this.sender} to ${this.recipient} for ${this.funds}`;
  }
};

const HashTransaction = Object.assign(Object.create(Transaction), HasHash(['sender', 'recipient', 'funds']));