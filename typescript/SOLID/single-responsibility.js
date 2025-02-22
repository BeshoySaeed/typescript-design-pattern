// Single responsibility

// just each object have a signle job

// if i wanna to save the journal in a seperation file and manage the file
// so i have to make a new object which handle the file manage

class Journal {
  constructor() {
    this.entries = {};
  }

  addEnter(text) {
    let c = ++Journal.count;
    const enter = `${c}: ${text}`;
    this.entries[c] = enter;
    return c;
  }

  removeEnter(c) {
    delete this.entries[c];
  }

  toString() {
    return Object.values(this.entries).join("\n");
  }
}
