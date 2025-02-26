// A Builder pattern is a creational design pattern that lets you construct complex objects step by step.
// The pattern allows you to produce different types and representations of an object using the same construction code.

// i wanna to create a car creation builder patter
/** 
    to help me to create different types of car 
    normal car
    4by4 car
    trunk car
*/

/**
 * interfaces
 *
 */
interface Car {
  color: CarColors;
  model: CarModel;
  wheels: CarWheels;
  turbo: CarTurbo;
}

interface CarBuilder {
  setColor(color: CarColors): CarBuilder;
  setModel(model: CarModel): CarBuilder;
  setWheels(wheels: CarWheels): CarBuilder;
  setTurbo(turbo: CarTurbo): CarBuilder;
  build(): Car;
}

interface CarDirector {
  setBuilder(builder: CarBuilder): void;
  buildNormalCar(): Car;
  build4by4Car(): Car;
  buildTrunkCar(): Car;
}

// Enums
enum CarModel {
  Normal = "normal",
  FourByFour = "4by4",
  Trunk = "trunk",
}

enum CarColors {
  Red = "red",
  Blue = "blue",
  Black = "black",
}

enum CarWheels {
  Four = 4,
  Six = 6,
  Eight = 8,
}

enum CarTurbo {
  Yes = 1,
  No = 0,
}

class CarClass {
  public car: Car;

 // we can here scale the Class as much as we want
}

// Concrete Builder
class ConcreteCarBuilder implements CarBuilder {
  private car: Car;

  constructor() {
    this.reset();
  }

  private reset(): void {
    const instance = new CarClass();
    this.car = instance.car;
    this.car = {
      color: CarColors.Black, // Default values
      model: CarModel.Normal,
      wheels: CarWheels.Four,
      turbo: CarTurbo.No,
    };
  }

  public setColor(color: CarColors): CarBuilder {
    this.car.color = color;
    return this;
  }

  public setModel(model: CarModel): CarBuilder {
    this.car.model = model;
    return this;
  }

  public setWheels(wheels: CarWheels): CarBuilder {
    this.car.wheels = wheels;
    return this;
  }

  public setTurbo(turbo: CarTurbo): CarBuilder {
    this.car.turbo = turbo;
    return this;
  }

  public build(): Car {
    const builtCar = this.car;
    this.reset();
    return builtCar;
  }
}

// Director
class CarDirector implements CarDirector {
  private builder!: CarBuilder;

  public setBuilder(builder: CarBuilder): void {
    this.builder = builder;
  }

  public buildNormalCar(): Car {
    return this.builder
      .setColor(CarColors.Red)
      .setModel(CarModel.Normal)
      .setWheels(CarWheels.Four)
      .setTurbo(CarTurbo.No)
      .build();
  }

  public buildFourByFourCar(): Car {
    return this.builder
      .setColor(CarColors.Black)
      .setModel(CarModel.FourByFour)
      .setWheels(CarWheels.Six)
      .setTurbo(CarTurbo.Yes)
      .build();
  }

  public buildTrunkCar(): Car {
    return this.builder
      .setColor(CarColors.Blue)
      .setModel(CarModel.Trunk)
      .setWheels(CarWheels.Eight)
      .setTurbo(CarTurbo.Yes)
      .build();
  }
}

// Usage Example
const builder = new ConcreteCarBuilder();
const director = new CarDirector();
director.setBuilder(builder);

const normalCar = director.buildNormalCar();
console.log("Normal Car:", normalCar);

const fourByFourCar = director.buildFourByFourCar();
console.log("4x4 Car:", fourByFourCar);

const trunkCar = director.buildTrunkCar();
console.log("Trunk Car:", trunkCar);
