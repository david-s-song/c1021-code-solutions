/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var transaction = new Transaction('deposit', amount);
    this.transactions.push(transaction);
    return true;
  }
  return false;
};

Account.prototype.withdraw = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var transaction = new Transaction('withdrawal', amount);
    this.transactions.push(transaction);
    return true;
  }
  return false;
};

Account.prototype.getBalance = function () {
  var getBalance = 0;
  var withdrawal = 0;
  var deposit = 0;
  if (this.transactions.length === 0) {
    return 0;
  }
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      deposit += this.transactions[i].amount;
    } else if (this.transactions[i].type === 'withdrawal') {
      withdrawal += this.transactions[i].amount;
    } getBalance = deposit - withdrawal;
  } return getBalance;
};

// create var getBalance = 0
// write a for loop, loops thru this.transactions
// checks each transaction whether which is deposit or withdraw
// subract or add the amount to get balance (var)
// return balance
