import { PaidState } from "./PaidState";
import { Subscription } from "../Subscription";
import { ISubscriptionState } from "../types/ISubscriptionState";

export class TrialExpiredState implements ISubscriptionState {
  constructor(private _subscription: Subscription) {}

  pay(amount: number): void {
    // Transition from TrialState to PaidState
    this._subscription.state = new PaidState(this._subscription, amount);
  }

  checkExpiration(): void {
    throw new Error("Trial already expired.");
  }

  report(): string {
    return `"Trial expired"`;
  }
}
