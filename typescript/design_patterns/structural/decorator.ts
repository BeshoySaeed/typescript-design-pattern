// decorator design pattern is used to add new functionality to an existing object without altering its structure. This pattern creates a decorator class that wraps the original class and provides additional functionality keeping class methods signature intact.
// decorator in angular it's just add metadata to the object or the class and change the behavior of the object or the class

// coffee example   standalone coffee and with milk

interface Coffee {
  cost(): number;
  description(): string;
}

class CoffeeStandalone implements Coffee {
  cost(): number {
    return 20;
  }

  description(): string {
    return "standalone coffee";
  }
}

abstract class MilkDecorator implements Coffee {
  constructor(protected coffee: Coffee) {}

  abstract cost(): number;

  abstract description(): string;
}

class CoffeeMild extends MilkDecorator {
  constructor(coffee: Coffee) {
    super(coffee);
  }

  public cost(): number {
    return this.coffee.cost() + 20;
  }

  public description(): string {
    return this.coffee.description() + " with milk";
  }
}

let BishoCoffee = new CoffeeStandalone();

console.log("BishoCoffee", BishoCoffee.cost(), BishoCoffee.description());

BishoCoffee = new CoffeeMild(BishoCoffee);

console.log(
  "BishoCoffee with mild",
  BishoCoffee.cost(),
  BishoCoffee.description()
);

// SERVER EXAMPLE

interface ServerRequest {
  handle(request: any): void;
}

class BaseServer implements ServerRequest {
  handle(request: any): void {
    console.log("base server request", request);
  }
}

abstract class ServerRequestsDecorator implements ServerRequest {
  constructor(protected serverRequest: ServerRequest) {}

  abstract handle(request: any): void;
}

class LoggingMiddleware extends ServerRequestsDecorator {
  constructor(serverRequest: ServerRequest) {
    super(serverRequest);
  }

  handle(request: any): void {
    console.log("middleware layer");

    if (true) {
      this.serverRequest.handle(request);
    }
  }
}

class AuthMiddleware extends ServerRequestsDecorator {
  constructor(serverRequest: ServerRequest) {
    super(serverRequest);
  }

  handle(request: any): void {
    console.log("auth middleware layer");

    if (true) {
      this.serverRequest.handle(request);
    }
  }
}

// user

let request = new BaseServer();
request.handle("request");
request = new LoggingMiddleware(request);
request.handle("request");
request = new AuthMiddleware(request);
request.handle("request");
