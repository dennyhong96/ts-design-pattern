import { injectable } from "inversify";

import { IDepB } from "./IDepB";

@injectable()
export class ConcreteB implements IDepB {
  doB() {
    console.log("DOING B...");
  }
}
