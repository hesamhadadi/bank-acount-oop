class BankAccount {
  private _balance: number;

  constructor(initialBalance: number) {
    this._balance = initialBalance;
  }

  get balance(): number {
    return this._balance;
  }

  set balance(newBalance: number) {
    if (newBalance < 0) {
      throw new Error("Balance cannot be negative");
    } else {
      this._balance = newBalance;
    }
  }

  withdraw(amount: number): void {
    if (amount > this._balance) {
      throw new Error("Insufficient funds");
    }
    this.balance -= amount;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }
}

export default BankAccount;
