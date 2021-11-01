import { PaidState } from "./PaidState";
import { Subscription } from "../Subscription";
import { TrialExpiredState } from "./TrialExpiredState";
import { ISubscriptionState } from "../types/ISubscriptionState";

export class TrialState implements ISubscriptionState {
  daysRemaining: number = 14;

  // The state has a reference of the subscription
  constructor(private _subscription: Subscription) {}

  pay(amount: number): void {
    // Transition from TrialState to PaidState
    this._subscription.state = new PaidState(this._subscription, amount);
  }

  checkExpiration(): void {
    this.daysRemaining--;
    if (this.daysRemaining <= 0) {
      this._subscription.state = new TrialExpiredState(this._subscription);
    }
  }

  report(): string {
    return `${this.daysRemaining} left on trial.`;
  }
}
