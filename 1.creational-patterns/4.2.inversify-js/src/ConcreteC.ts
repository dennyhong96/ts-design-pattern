import { inject, injectable } from "inversify";

import { IDepA } from "./IDepA";
import { IDepB } from "./IDepB";
import { IDepC } from "./IDepC";
import { TYPES } from "./types";

@injectable()
export class ConcreteC implements IDepC {
  @inject(TYPES.IDepA) private _depA!: IDepA;
  @inject(TYPES.IDepB) private _depB!: IDepB;
  doC() {
    this._depA.doA();
    this._depB.doB();
    console.log("DOING C...");
  }
}
