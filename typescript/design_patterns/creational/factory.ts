// factory design pattern
// A factory pattern is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.

// Car example

type fCarTypes = "sedan" | "suv" | "hatchback";
type fCarModels = "1" | "2" | "3";

abstract class FCar {
  constructor(public carModel: fCarModels, public productionYear: number) {}

  abstract displayCar(): void;
}

class SUV extends FCar {
  displayCar(): void {
    console.log(
      `this is SUV car with model: ${this.carModel}, the production year is: ${this.productionYear}`
    );
  }
}

class Hatchback extends FCar {
  displayCar(): void {
    console.log(
      `this is hatchback car with model: ${this.carModel}, the production year is: ${this.productionYear}`
    );
  }
}

class Sedan extends FCar {
  displayCar(): void {
    console.log(
      `this is sedan car with model: ${this.carModel}, the production year is: ${this.productionYear}`
    );
  }
}

class CarFactory {
  createCar(type: fCarTypes, model: fCarModels, productionYear: number): FCar {
    switch (type) {
      case "sedan":
        return new Sedan(model, productionYear);
      case "suv":
        return new SUV(model, productionYear);
      case "hatchback":
        return new Hatchback(model, productionYear);
    }
  }
}

const carFactory = new CarFactory();
const sedan = carFactory.createCar("sedan", "1", 2022);
const suv = carFactory.createCar("suv", "2", 2022);
const hatchback = carFactory.createCar("hatchback", "3", 2022);

// in future i think we can make a dynamic form with the factory design pattern

/**
    * i was thinking to make it with builder 
    * whenever i still think the builder will be a good choice because it's too complex but the factory still can do the task
    * we nee to make a method which take an options like u need a question or need a just label 
    * if you need a question so we need to make another factory to ask us which question u need
    * text field or select etc,, and what about it's interface place holders or validations and so on


    i'll update the repo in feature with this amazing feature 
    i implement it without design patterns it was not cool at all

*/

// Payment example

enum PaymentType {
  CASH = "cash",
  PAYPAL = "paypal",
  STRIPE = "stripe",
}

abstract class Payment {
  constructor(private amount: number) {}

  abstract pay(): void;
  getPayment() {
    return this.amount;
  }
}

class CashPayment extends Payment {
  pay(): void {
    console.log("pay on cash, amount:", this.getPayment());
  }
}

class PaypalPayment extends Payment {
  pay(): void {
    console.log("pay on paypal, amount: ", this.getPayment());
  }
}

class StripePayment extends Payment {
  pay(): void {
    console.log("pay on stripe , amount: ", this.getPayment());
  }
}

class PaymentFactory {
  createPayment(type: PaymentType, amount: number): Payment {
    switch (type) {
      case PaymentType.CASH:
        return new CashPayment(amount);
      case PaymentType.PAYPAL:
        return new PaypalPayment(amount);
      case PaymentType.STRIPE:
        return new StripePayment(amount);
    }
  }
}

const paymentFactory = new PaymentFactory();
const paypal = paymentFactory.createPayment(PaymentType.PAYPAL, 2000);
const strip = paymentFactory.createPayment(PaymentType.STRIPE, 1000);
const cash = paymentFactory.createPayment(PaymentType.CASH, 5000);
