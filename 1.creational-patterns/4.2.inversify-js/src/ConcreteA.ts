import { injectable } from "inversify";

import { IDepA } from "./IDepA";

@injectable()
export class ConcreteA implements IDepA {
  doA() {
    console.log("DOING A...");
  }
}
