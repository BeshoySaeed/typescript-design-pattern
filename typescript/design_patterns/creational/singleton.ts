/*
    Singleton Pattern 

    someway in angular expose a key with a singleton instance based on provideIn or dependency injection config i'll back again when completely 
    understand what happen under the hood
    */

// angular version
interface SingletonInstances {
  key: string;
  instance: Singleton;
}

class Singleton {
  private static Instances: SingletonInstances[] = [];

  private constructor() {}

  public static getInstance(key: string): Singleton {
    let instance = this.Instances.find(
      (instance) => instance.key === key
    )?.instance;
    if (!instance) {
      instance = new Singleton();
      this.Instances.push({ key, instance: instance });
    }
    return instance;
  }
}

// basic version

class SingletonBasic {
  private static singletonInstance: SingletonBasic;

  private constructor() {}

  public static get instance(): SingletonBasic {
    if (!this.singletonInstance) {
      this.singletonInstance = new SingletonBasic();
    }
    return this.singletonInstance;
  }
}
