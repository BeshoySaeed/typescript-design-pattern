// adapter design pattern is a structural design pattern that allows objects with incompatible interfaces to collaborate.
// The adapter acts as a wrapper that translates the original interface into a compatible one.
// The adapter design pattern is particularly useful when working with third-party libraries or with complex legacy code.
// It allows you to introduce a new interface that is compatible with the existing code without modifying it.
// The adapter design pattern is often used in conjunction with the decorator pattern to add new functionality to an existing object without modifying its structure.

// example 1 --   square to rectangle adapter

interface IRectangle {
  getWidth(): number;
  getHeight(): number;
  area(): number;
}

interface ISquare {
  getSide(): number;
  area(): number;
}

class Rectangle implements IRectangle {
  constructor(private height: number, private width: number) {}

  getWidth(): number {
    return this.width;
  }

  getHeight(): number {
    return this.height;
  }

  area(): number {
    return this.height * this.width;
  }
}

class Square implements ISquare {
  constructor(private side: number) {}

  getSide(): number {
    return this.side;
  }
  area(): number {
    return Math.pow(this.side, 2);
  }
}

class SquareToRectangleAdapter implements IRectangle {
  constructor(private square: ISquare) {}

  getWidth(): number {
    return this.square.getSide();
  }

  getHeight(): number {
    return this.square.getSide();
  }

  area(): number {
    return this.square.area();
  }
}

// with this implementation we can use the square whenever the rectangle is used without changing the existing code
