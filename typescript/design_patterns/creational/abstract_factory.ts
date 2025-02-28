// Abstract factory design pattern is a creational design pattern that lets you produce families of related objects without specifying their concrete classes.
// It is a way to create objects in a group that are related to each other, but not in a specific way.
// The pattern allows you to produce different types and representations of an object using the same construction code.

interface IProductA {
  operationA(): void;
}

interface IProductB {
  operationB(): void;
  combinedOperationProductA(productA: IProductA): void;
}

interface ProductFamily {
  createProductA(): IProductA;
  createProductB(): IProductB;
}

class ConcreteProductA1 implements IProductA {
  operationA(): void {
    console.log("creation process of product A");
  }
}

class ConcreteProductB1 implements IProductB {
  operationB(): void {
    console.log("creation process of product B");
  }
  combinedOperationProductA(productA: IProductA): void {
    console.log("combined operation of product A and B", productA.operationA());
  }
}

// abstract factory
class ConcreteProductFamily implements ProductFamily {
  createProductA(): IProductA {
    return new ConcreteProductA1();
  }

  createProductB(): IProductB {
    return new ConcreteProductB1();
  }
}

const factory = new ConcreteProductFamily();
const productA = factory.createProductA();
const productB = factory.createProductB();

productA.operationA();
productB.combinedOperationProductA(productA);

// button checkbox for different OS

interface IButton {
  render(): void;
  onClick(): void;
}

interface ICheckbox {
  render(): void;
  toggle(): void;
}

interface GUIFactory {
  createButton(): IButton;
  createCheckbox(): ICheckbox;
}

class ButtonWindows implements IButton {
  render(): void {
    console.log("render button for windows");
  }

  onClick(): void {
    console.log("click button for windows");
  }
}

class ButtonForMacos implements IButton {
  render(): void {
    console.log("render button for macos");
  }

  onClick(): void {
    console.log("click button for macos");
  }
}

class CheckboxWindows implements ICheckbox {
  render(): void {
    console.log("render checkbox for windows");
  }

  toggle(): void {
    console.log("toggle checkbox for windows");
  }
}

class CheckboxForMacos implements ICheckbox {
  render(): void {
    console.log("render checkbox for macos");
  }

  toggle(): void {
    console.log("toggle checkbox for macos");
  }
}

class GUIFactoryWindows implements GUIFactory {
  createButton(): IButton {
    return new ButtonWindows();
  }
  createCheckbox(): ICheckbox {
    return new CheckboxWindows();
  }
}

class GUIFactoryMacos implements GUIFactory {
  createButton(): IButton {
    return new ButtonForMacos();
  }
  createCheckbox(): ICheckbox {
    return new CheckboxForMacos();
  }
}

const guiWindowsFactory = new GUIFactoryWindows();

const button = guiWindowsFactory.createButton();
const checkbox = guiWindowsFactory.createCheckbox();
button.render();
checkbox.toggle();

const guiMacFactory = new GUIFactoryMacos();
const macButton = guiMacFactory.createButton();
const macCheckbox = guiMacFactory.createCheckbox();
macButton.render();
macCheckbox.toggle();
