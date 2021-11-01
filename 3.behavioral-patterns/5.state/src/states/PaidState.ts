import { Subscription } from "../Subscription";
import { TrialExpiredState } from "./TrialExpiredState";
import { ISubscriptionState } from "../types/ISubscriptionState";

export class PaidState implements ISubscriptionState {
  amountPaid: number = 0;

  constructor(private _subscription: Subscription, amount: number) {
    this.amountPaid = amount;
  }

  pay(amount: number): void {
    throw new Error("Subscription is already paid");
  }

  checkExpiration(): void {
    this._subscription.state = new TrialExpiredState(this._subscription);
  }

  report(): string {
    return `On paid plan with $${this.amountPaid} subscription`;
  }
}
