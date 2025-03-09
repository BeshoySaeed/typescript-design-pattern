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
