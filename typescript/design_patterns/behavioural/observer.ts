/**
 * observer design pattern is a behavioural design pattern that lets you define a subscription mechanism to notify multiple objects about events that happen outside of them.
 */

interface IObserver {
  update(subject: ISubject): void;
}

interface ISubject {
  addObserver(observer: IObserver): void;
  removeObserver(observer: IObserver): void;
  notifyObservers(): void;
  getState(): string;
  setStatus(status: string): void;
}

class ConcreteSubject implements ISubject {
  observers: IObserver[] = [];
  state: string;

  addObserver(observer: IObserver): void {
    this.observers.push(observer);
  }

  removeObserver(observer: IObserver): void {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(): void {
    this.observers.forEach((observer) => observer.update(this));
  }

  getState(): string {
    return this.state;
  }

  setStatus(status: string): void {
    this.state = status;
    this.notifyObservers();
  }
}

class ConcreteObserver implements IObserver {
  constructor(private id: number) {}

  update(subject: ISubject): void {
    console.log(subject.getState(), this.id);
  }
}

// client use cases

const subject = new ConcreteSubject();

const observer1 = new ConcreteObserver(1);
const observer2 = new ConcreteObserver(2);

subject.addObserver(observer1);
subject.addObserver(observer2);
subject.setStatus("new status");
