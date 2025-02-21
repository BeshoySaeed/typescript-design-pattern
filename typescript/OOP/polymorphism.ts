// it's enable a single interface or method to work with different type of data , provide flexibility and reusability in the code

// abstraction file is also an example of polymorphism
//  scalability and reusability for interface and function based polymorphism

interface Shape {
  area(): number;
  perimeter(): number;
}

function calcAreaPoly(shape: Shape): number {
  return shape.area();
}

// so here the function can work whenever the class implements the Shape interface


// beside that we have overloading and overriding
// to make the function work with different implementations 