import { IErrorDisplayStrategy } from "./types/IErrorDisplayStrategy";
import { IErrorLoggingStrategy } from "./types/IErrorLoggingStrategy";

export class ErrorHandler {
  // Dependency inversion principle
  // Provide separate parts of the funcionality to ErrorHandler class
  // Able to switch at runtime based on needs.
  constructor(
    private _displayStrategy: IErrorDisplayStrategy,
    private _loggingStrategy: IErrorLoggingStrategy
  ) {}

  // Handler only provides an easy way to allow client to act on an identified error,
  // It does not have concrete implementation that do anything with the error
  // It delegates their the responsibilities to display and logging strategies
  public handle(err: Error, title: string, body: string): Promise<any> {
    this._displayStrategy.display(title, body);
    return this._loggingStrategy.log(err);
  }
}
