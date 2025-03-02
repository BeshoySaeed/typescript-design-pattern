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

// Home Theater example

interface IAmplifier {
  turnOn(): void;
  setVolume(level: number): void;
}

interface IDvdPlayer {
  turnOn(): void;
  play(movie: string): void;
}

interface IProjector {
  turnOn(): void;
  setInput(dvdPlayer: IDvdPlayer): void;
}

interface ILight {
  dim(level: number): void;
}

interface IFacade {
  watchMovie(movie: string, volume: number, level: number): void;
}

class Amplifier implements IAmplifier {
  turnOn(): void {
    console.log("amplifier is on");
  }
  setVolume(level: number): void {
    console.log(`amplifier volume set to ${level}`);
  }
}

class DvdPlayer implements IDvdPlayer {
  turnOn(): void {
    console.log("dvd player is on");
  }

  play(): void {
    console.log("dvd player Play");
  }
}

class Projector implements IProjector {
  turnOn(): void {
    console.log("projector is on");
  }

  setInput(dvdPlayer: IDvdPlayer): void {
    console.log("projector set input to dvd player");
  }
}

class Light implements ILight {
  dim(level: number): void {
    console.log("light is dimmed level: ", level);
  }
}

class HomeThreaterFacade implements IFacade {
  constructor(
    private amplifier: IAmplifier,
    private dvdPlayer: IDvdPlayer,
    private projector: IProjector,
    private light: ILight
  ) {}

  watchMovie(movie: string, volume: number, level: number): void {
    this.light.dim(level);
    this.amplifier.turnOn();
    this.amplifier.setVolume(volume);
    this.dvdPlayer.turnOn();
    this.projector.turnOn();
    this.dvdPlayer.play(movie);
    this.projector.setInput(this.dvdPlayer);
  }
}
