import { IoCContainer } from "./IOCContainer";

interface IDepA {
  doA(): void;
}

interface IDepB {
  doB(): void;
}

interface IDepC {
  doC(): void;
}

class ConcreteA implements IDepA {
  doA() {
    console.log("Doing A");
  }
}

class ConcreteB implements IDepB {
  doB() {
    console.log("Doing B");
  }
}

class ConcreteC implements IDepC {
  constructor(private _concreteA: IDepA, private _concreteB: IDepB) {}
  doC() {
    this._concreteA.doA();
    this._concreteB.doB();
    console.log("Doing C");
  }
}

IoCContainer.instance.register("IDepA", [], ConcreteA);
IoCContainer.instance.register("IDepB", [], ConcreteB);
IoCContainer.instance.register("IDepC", ["IDepA", "IDepB"], ConcreteC);
const a = IoCContainer.instance.resolve<IDepA>("IDepA");
a.doA();
const b = IoCContainer.instance.resolve<IDepB>("IDepB");
b.doB();
const c = IoCContainer.instance.resolve<IDepC>("IDepC");
c.doC();
