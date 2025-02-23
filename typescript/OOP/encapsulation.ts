// separation of concerns and data hiding

class BankAccount {
  private _balance: number;

  constructor(initialBalance: number) {
    this._balance = initialBalance;
  }

  get balance(): number {
    return this._balance;
  }

  public deposit(amount: number): void {
    if (amount < 0) {
      return;
    }
    this._balance += amount;
  }

  public withdraw(amount: number): void {
    if (amount < 0) {
      return;
    } else if (amount > this._balance) {
      return;
    }
    this._balance -= amount;
  }
}
