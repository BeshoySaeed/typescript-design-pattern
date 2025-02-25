// make a deep or shallow copy of an object
// make a new object with the same values

interface Prototype {
  clone(): Prototype;
}

interface UserDto {
  name: string;
  age: number;
  email: string;
  phone: string;
}
export class Person implements Prototype {
  userDetails: UserDto;
  constructor(user: UserDto) {
    this.userDetails = user;
  }

  clone(): Person {
    // for deep copy
    // return new Person(structuredClone(this.userDetails));

    // simple for shallow copy + more optimized if not required deep copy
    return new Person({ ...this.userDetails });
  }
}

const user1 = new Person({
  name: "John",
  age: 20,
  email: "a@b.com",
  phone: "123",
});

const user2 = user1.clone();

user2.userDetails.name = "mark";

/** shape prototype */

interface ShapeProperties {
  color: string;
  x: number;
  y: number;
}

abstract class Shape {
  properties: ShapeProperties;

  constructor(properties: ShapeProperties) {
    this.properties = properties;
  }
  abstract clone(): Shape;
}

class Rectangle extends Shape {
  constructor(
    properties: ShapeProperties,
    public width: number,
    public height: number
  ) {
    super(properties);
  }
  clone(): Rectangle {
    return new Rectangle({ ...this.properties }, this.width, this.height);
  }
}
class Circle extends Shape {
  constructor(properties: ShapeProperties, public radius: number) {
    super(properties);
  }
  clone(): Circle {
    return new Circle({ ...this.properties }, this.radius);
  }
}
