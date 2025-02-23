// open for extension closed for modifications
// state space explosion

let Color = Object.freeze({
  red: "red",
  green: "reen",
  yellow: "yellow",
});

let Size = Object.freeze({
  small: "small",
  large: "large",
});

class Product {
  constructor(name, color, size) {
    this.name = name;
    this.color = color;
    this.size = size;
  }
}

let house = new Product("House", Color.red, Size.large);
let tree = new Product("Tree", Color.green, Size.large);
let apple = new Product("Apple", Color.yellow, Size.small);

let products = [house, apple, tree];

// by this approach we will modify the class every time with new feature;
// that's break the open closed principle

// old way
class FilterProducts {
  filterWithSize(products, size) {
    return products.filter((p) => p.size === size);
  }

  filterWithColor(products, color) {
    return products.filter((p) => p.color === color);
  }
}

let fp = new FilterProducts();

for (let i of fp.filterWithColor(products, Color.yellow)) {
}

// new way

class ColorSpecification {
  constructor(color) {
    this.color = color;
  }

  isSatisfied(items) {
    return items.color === this.color;
  }
}
class SizeSpecification {
  constructor(size) {
    this.size = size;
  }

  isSatisfied(items) {
    return items.size === this.size;
  }
}

class BetterFilter {
  filter(products, spec) {
    return products.filter((p) => spec.isSatisfied(p));
  }
}

let bf = new BetterFilter();

for (let j of bf.filter(products, new ColorSpecification(Color.red))) {
}

// here if i want to add a new filter or something new i can add new class
