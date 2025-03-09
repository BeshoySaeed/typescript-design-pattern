/**
 * Composite is a structural design pattern that lets you compose objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly.
 * component
 * composite
 * leaf
 */

// file system example

// component part
interface FileSystemComponent {
  getName(): string;
  getSize(): number;
}

// leaf part
class file implements FileSystemComponent {
  constructor(private name: string, private size: number) {}

  getName(): string {
    return this.name;
  }

  getSize(): number {
    return this.size;
  }
}

// composite part
interface CompositeFileSystemComponent extends FileSystemComponent {
  addComponent(component: FileSystemComponent): void;
  removeComponent(component: FileSystemComponent): void;
  getComponents(): FileSystemComponent[];
}

class Folder implements CompositeFileSystemComponent {
  private components: FileSystemComponent[] = [];
  constructor(private name: string, private size: number) {}

  getName(): string {
    return this.name;
  }
  getSize(): number {
    return this.size;
  }

  getComponents(): FileSystemComponent[] {
    return this.components;
  }
  addComponent(component: FileSystemComponent): void {
    this.components.push(component);
  }
  removeComponent(component: FileSystemComponent): void {
    const index = this.components.indexOf(component);
    if (index > -1) {
      this.components.splice(index, 1);
    }
  }
}

// client && user

const file1 = new file("first file", 200);
const file2 = new file("second file", 300);
const file3 = new file("third file", 400);

const directory = new Folder("first directory", 1000);

console.log("file name size: ", file1.getName(), file1.getSize());

console.log("directory files 1: ", directory.getComponents());
directory.addComponent(file1);
directory.addComponent(file2);
console.log("directory files 2: ", directory.getComponents());
directory.removeComponent(file1);
console.log("directory files: 3 ", directory.getComponents());

// employee and manager example

enum Roles {
  EMPLOYEE = "employee",
  MANAGER = "manager",
}

// component part
interface Employee {
  getName(): string;
  getSalary(): number;
  getRole(): Roles;
}

// leaf part
class employee implements Employee {
  constructor(
    private name: string,
    private salary: number,
    private role: Roles
  ) {}

  getName(): string {
    return this.name;
  }
  getSalary(): number {
    return this.salary;
  }
  getRole(): Roles {
    return this.role;
  }
}

// composite part
interface CompositeEmployee extends Employee {
  addEmployee(employee: Employee): void;
  removeEmployee(employee: Employee): void;
  getEmployees(): Employee[];
}

class Manager implements CompositeEmployee {
  private employees: Employee[] = [];

  constructor(
    private name: string,
    private salary: number,
    private role: Roles
  ) {}

  getName(): string {
    return this.name;
  }
  getSalary(): number {
    return this.salary;
  }
  getRole(): Roles {
    return this.role;
  }

  getEmployees(): Employee[] {
    return this.employees;
  }

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  removeEmployee(employee: Employee): void {
    const index = this.employees.indexOf(employee);
    if (index > -1) {
      this.employees.splice(index, 1);
    }
  }
}

// client && user

const employee1 = new employee("first employee", 2000, Roles.EMPLOYEE);
const employee2 = new employee("second employee", 3000, Roles.EMPLOYEE);
const employee3 = new employee("third employee", 4000, Roles.EMPLOYEE);

const manager = new Manager("first manager", 5000, Roles.MANAGER);

console.log("manager employee 1: ", manager.getEmployees());
manager.addEmployee(employee1);
manager.addEmployee(employee2);
console.log("manager employee 2: ", manager.getEmployees());
manager.removeEmployee(employee1);
console.log("manager employee 3: ", manager.getEmployees());
