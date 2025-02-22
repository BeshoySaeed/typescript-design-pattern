
class Machine {
  constructor() {
    if (this.constructor.name === "Machine")
      throw new Error("Machine is abstract");
  }

  print(doc) {}
  fax(doc) {}
  scan(doc) {}
}

// let fb = new Machine();  error

class MultiFunctionPrinter extends Machine {
  print(doc) {
    //
  }

  fax(doc) {
    //
  }

  scan(doc) {
    //
  }
}

class OldPrinter {
  print(doc) {
    //
  }
  // no fax and no scan   ------> least surprise so this is a bad behavior if i used them as empty
}

// so we should to make a separate interface fpr each method
// or for our requirements

class Printer {
  constructor() {
    if (this.constructor.name === "Printer") {
      throw new Error("this is an abstract");
    }
  }

  print(doc) {}
}

class Scanner {
  constructor() {
    if (this.constructor.name === "Scanner") {
      throw new Error("this is an Scanner");
    }
  }
  Scan(doc) {}
}

// i can use printer interface in old printer
