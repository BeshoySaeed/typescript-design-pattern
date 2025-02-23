// Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program.
// Subtypes must be substitutable for their base types.

class Bird {
  fly() {}
}

class Penguin extends Bird {
  fly() {}
}
