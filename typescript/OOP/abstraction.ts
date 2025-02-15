// hiding the implementation details of a system and exposing only the essential features to the user

interface Shape {
  area(): number;
  perimeter(): number;
}

class Circle implements Shape {
  constructor(private radius: number) {}
  area(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  area(): number {
    return this.width * this.height;
  }
  perimeter(): number {
    return 2 * (this.width + this.height);
  }
}

function calcArea(shape: Shape): number {
  return shape.area();
}

const circle = new Circle(4);
const rectangle = new Rectangle(4, 5);

// real example
const date = new Date();
