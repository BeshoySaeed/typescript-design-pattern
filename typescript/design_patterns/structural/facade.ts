// facade deign pattern
// A facade is a structural design pattern that provides a simplified interface to a complex subsystem.
// It hides the complexity of the subsystem from the client, making it easier to use and maintain.
// The facade pattern is often used to abstract away the details of a subsystem, such as a database, from the client code.
// The client code can then use the facade to interact with the subsystem, without knowing the details of how the subsystem works.

// coffee maker example

interface IGrinder {
  grindBeans(): void;
}
interface IBoiler {
  biolWater(): void;
}
interface IBrewer {
  brewCoffee(): void;
}

interface ICoffeeMaker {
  makeCoffee(): void;
  boilWater(): void;
}

class Grinder implements IGrinder {
  grindBeans(): void {
    console.log("grind beans");
  }
}
class Boiler implements IBoiler {
  biolWater(): void {
    console.log("boil water");
  }
}
class Brewer implements IBrewer {
  brewCoffee(): void {
    console.log("brew coffee");
  }
}

class CoffeeMakerFacade implements ICoffeeMaker {
  constructor(
    private grinder: IGrinder,
    private boiler: IBoiler,
    private brewer: IBrewer
  ) {}

  makeCoffee(): void {
    this.grinder.grindBeans();
    this.boiler.biolWater();
    this.brewer.brewCoffee();
    console.log("coffee is ready");
  }

  boilWater(): void {
    this.boiler.biolWater();
  }
}
