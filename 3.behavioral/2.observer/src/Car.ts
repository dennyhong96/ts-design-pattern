export class Car {
  private readonly _maxSpeed: number;
  private _currentSpeed = 0;
  private _currentSpeedObservers: ((
    newValue: number,
    oldValue: number
  ) => void)[] = [];

  constructor(maxSpeed: number) {
    this._maxSpeed = maxSpeed;
  }

  public get maxSpeed(): number {
    return this._maxSpeed;
  }

  public get currentSpeed(): number {
    return this._currentSpeed;
  }

  public set currentSpeed(newCurrentSpeed: number) {
    if (newCurrentSpeed < 0) {
      throw new Error(
        `Current speed ${newCurrentSpeed} cannot be smaller than 0`
      );
    }
    if (newCurrentSpeed > this._maxSpeed) {
      throw new Error(
        `Current speed ${newCurrentSpeed} cannot be greater than max speed ${this._maxSpeed}`
      );
    }
    if (newCurrentSpeed === this._currentSpeed) return;
    const oldCurrentSpeed = this._currentSpeed;
    this._currentSpeed = newCurrentSpeed;
    this.triggerCurrentSpeedObservers(newCurrentSpeed, oldCurrentSpeed);
  }

  public registerCurrentSpeedObserver(
    observer: (newValue: number, oldValue: number) => void
  ) {
    if (!this._currentSpeedObservers.includes(observer)) {
      this._currentSpeedObservers.push(observer);
    }
  }

  private triggerCurrentSpeedObservers(newValue: number, oldValue: number) {
    this._currentSpeedObservers.forEach((observer) =>
      observer(newValue, oldValue)
    );
  }
}
