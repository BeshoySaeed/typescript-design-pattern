// allows one class to inherit properties and methods from another class thereby promoting code reusability and modularity

class Animal {
  constructor(public name: string) {}
  move(distanceInMeters: number): void {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Cat extends Animal {
  constructor(name: string = "Cat") {
    super(name);
  }
}

const cat = new Cat("catty");
cat.move(20);

// products example

class Product {
  constructor(
    public id: string,
    public price: number,
    public description: string
  ) {}

  display(): void {
    console.log(
      `product with id ${this.id} and price ${this.price} have a description ${this.description}`
    );
  }
}

class Book extends Product {
  constructor(
    public id: string,
    public price: number,
    public description: string,
    public author: string,
    public title: string
  ) {
    super(id, price, description);
  }

  display(): void {
    super.display();
    console.log("updated from book class", this.author, this.title);
  }
}

class Electronics extends Product {
  constructor(
    public id: string,
    public price: number,
    public description: string,
    public brand: string,
    public model: string
  ) {
    super(id, price, description);
  }

  display(): void {
    super.display();
    console.log("updated from electronics class", this.brand, this.model);
  }
}

const book = new Book("1", 200, "good book", "author", "testBook");

book.display();

const electronics = new Electronics("2", 300, "good device", "BMW", "2020");

electronics.display();
