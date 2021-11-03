// /* exported Account */
// function Account(number, holder) {
//   this.number = number;
//   this.holder = holder;
//   this.transactions = [];
// }

// Account.prototype.deposit = function (amount) {
//   if (Number.isInteger(amount) && amount > 0) {
//     var transaction = new Transaction('deposit', amount);
//     this.transactions.push(transaction);
//     return true;
//   }
//   return false;
// };

// Account.prototype.withdraw = function (amount) {
//   if (parseInt(amount) === amount && amount > 0) {
//     var transaction = new Transaction('withdrawal', amount);
//     this.transactions.push(transaction);
//     return true;
//   }
//   return false;
// };

// Account.prototype.getBalance = function () {
//   var getBalance = 0;
//   for (var i = 0; i < Transaction.length; i++) {
//     if (Transaction[i] === this.deposit) {
//       this.deposit.push(Transaction[i]);
//     } else if (Transaction[i] === this.withdraw) {
//       this.withdraw.push(Transaction[i]);
//     } getBalance = this.deposit - this.withdraw;
//   } return getBalance;
// };

// // create var getBalance = 0
// // write a for loop, loops thru this.transactions
// // checks each transaction whether which is deposit or withdraw
// // subract or add the amount to get balance (var)
// // return balance
