import { ICommand } from "./types/ICommand";

export class CommandWorker {
  private _commands: ICommand[] = [];
  private readonly _interval: number;

  constructor(interval: number) {
    this._interval = interval;
    this.startWorker();
  }

  public registerCommand(command: ICommand) {
    if (!this._commands.includes(command)) {
      console.log("Registering command...");
      this._commands.push(command);
    }
  }

  private startWorker() {
    setInterval(() => {
      const lastCommand = this._commands.pop();
      if (!lastCommand) return;
      lastCommand.execute();
    }, this._interval);
  }
}
