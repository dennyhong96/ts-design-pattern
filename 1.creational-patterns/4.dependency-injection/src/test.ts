// method decorator
function disabled(
  target: InstanceType<new () => {}>, // class prototype
  methodName: string,
  descriptor: PropertyDescriptor
) {
  // For method decorators, descriptor.value is the method implementation
  descriptor.value = () => {
    throw new Error("Method is disabled.");
  };
}

// method decorator factory - Run some code before the method runs
function before(handler: () => void) {
  return function (
    target: object, // class prototype
    methodName: string,
    descriptor: PropertyDescriptor
  ) {
    return {
      get: function (this) {
        const originalMethod = descriptor.value.bind(this);
        handler = handler.bind(this);
        return () => {
          handler();
          originalMethod();
        };
      },
    };
  };
}

// constructor decorator factory
function capitalize() {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    // constructor decorator needs to return a new class
    return class extends constructor {
      constructor(...args: any[]) {
        super();

        // @ts-ignore
        this._a = "A";

        // @ts-ignore
        this._b = "B";
      }
    };
  };
}

@capitalize()
export class Test {
  protected _a = "a";
  protected _b = "b";

  // @disabled
  public foo() {
    console.log("foo from Test");
  }

  @before(() => {
    console.log("Before hook.");
  })
  public bar() {
    console.log("bar from Test");
  }

  public baz() {
    console.log(this._a, this._b);
  }
}

const test = new Test();
test.bar();
test.baz();
