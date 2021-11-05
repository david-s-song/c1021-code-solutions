/* exported Bank */

function Bank() {
  this.nextAccountNumber = Bank.nextAccountNumber;
  this.accounts = Bank.accounts;
}

Bank.prototype.openAccount = function (holder, balance) {
  if (Number.isInteger(balance) && balance > 0) {
    var account = new Account(this.nextAccountNumber, holder);
    account.push(balance);
    this.accounts.push(account);
    this.nextAccountNumber++;
    return balance;
  } else { return null; }
};

// A prototype method of the Bank constructor
// that finds the account object stored in this.accounts

// how do i find account object?

Bank.prototype.getAccount = function (number) {
  var accountNumbers = [];
  for (var i = 0; i < this.accounts.length; i++) {
    if (Number.isInteger(number) && number > 0) {
      accountNumbers.push(number[i]);
    }
  } return accountNumbers;
};

// object store in this.accoun
// whose account.number matches the value of number.

// Bank.prototype.getTotalAssets = funciton () {

// };
