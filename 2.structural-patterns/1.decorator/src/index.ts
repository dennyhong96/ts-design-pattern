// Concrete Base class
class Computer {
  boot() {
    console.log("Booting up the computer.");
  }
  shutdown() {
    console.log("Shutting down the computer.");
  }
  display() {
    console.log("Displaying content on one screen.");
  }
  print() {
    console.log("No printer found.");
  }
  renderVideo() {
    console.log("Cannot render video without a dedicated graphic card.");
  }
}

// Concrete Sub-class
class ServerComputer extends Computer {
  boot() {
    console.log("Booting server.");
  }
  shutdown() {
    console.log("Server is shutting down.");
  }
}

// Decorator Base Class
class ComputerComponentDecorator extends Computer {
  // Need to hold a reference of passed in computer instance
  constructor(private _computer: Computer) {
    super();
  }

  // Delegate all methods with those provided by the passed in computer instance
  // The methods that passed in computer instance doesn't implement are inherited from base class
  // This is so we can chain decorators
  boot() {
    this._computer.boot();
  }
  shutdown() {
    this._computer.shutdown();
  }
  display() {
    this._computer.display();
  }
  print() {
    this._computer.print();
  }
  renderVideo() {
    this._computer.renderVideo();
  }
}

// Decorator Sub-class
class ComputerWithPrinterDecorator extends ComputerComponentDecorator {
  constructor(computer: Computer) {
    super(computer);
  }
  print() {
    console.log("Printing....");
  }
}

// Decorator Sub-class
// Each decorator is not aware of other decorators
class ComputerWithDedicatedGPU extends ComputerComponentDecorator {
  constructor(computer: Computer) {
    super(computer);
  }
  renderVideo() {
    console.log("Rendering video...");
  }
}

const server = new ServerComputer();
const serverWithPrinter = new ComputerWithPrinterDecorator(server);
const serverWithPrinterAndDedicatedGraphics = new ComputerWithDedicatedGPU(
  serverWithPrinter
);
serverWithPrinterAndDedicatedGraphics.print();
serverWithPrinterAndDedicatedGraphics.renderVideo();
