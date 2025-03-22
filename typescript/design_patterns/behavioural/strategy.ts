interface ICart {
  setPaymentStrategy(paymentStrategy: IPaymentStrategy): void;
  addToCart(value: number): void;
  checkout(): void;
}

interface IPaymentStrategy {
  pay(amount: number): void;
}

class ShoppingCart implements ICart {
  constructor(
    private amount: number,
    private paymentStrategy: IPaymentStrategy
  ) {}

  setPaymentStrategy(paymentStrategy: IPaymentStrategy): void {
    this.paymentStrategy = paymentStrategy;
  }

  addToCart(value: number): void {
    this.amount += value;
  }

  checkout(): void {
    this.paymentStrategy.pay(this.amount);
  }
}

class cashPaymentStrategy implements IPaymentStrategy {
  pay(amount: number): void {
    console.log("pay with cache: ", amount);
  }
}

class PaypalPaymentStrategy implements IPaymentStrategy {
  pay(amount: number): void {
    console.log("pay with paypal ", amount);
  }
}

class StripePaymentStrategy implements IPaymentStrategy {
  pay(amount: number): void {
    console.log("pay with stripe ", amount);
  }
}

// client use
const cart = new ShoppingCart(0, new cashPaymentStrategy());

cart.addToCart(200);
cart.addToCart(300);
cart.setPaymentStrategy(new StripePaymentStrategy());

cart.checkout();
