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
  
  console.log("circle area:", calcArea(circle));
  console.log("rectangle area:", calcArea(rectangle));
  
  const date = new Date();
  
  console.log(date.getFullYear());
  console.log(date.getDate());
  console.log(date.getMonth());
  