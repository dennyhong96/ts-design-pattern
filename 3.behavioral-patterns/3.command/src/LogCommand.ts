import fs from "fs/promises";

import { ICommand } from "./types/ICommand";
import { ILogCommandParams } from "./types/ILogCommandParams";

export class LogCommand implements ICommand {
  // readonly fields can only be initialized once, here or in constructor
  private readonly _logCommandParams: ILogCommandParams;

  constructor(params: ILogCommandParams) {
    this._logCommandParams = params;
  }

  async execute(): Promise<any> {
    const contents = `${new Date()} - ${this._logCommandParams.title}: ${
      this._logCommandParams.body
    } - ${this._logCommandParams.error}\n`;
    console.log(contents);
    await fs.appendFile(this._logCommandParams.filename, contents, "utf-8");
  }
}
