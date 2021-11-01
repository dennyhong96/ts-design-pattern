import { TrialState } from "./states/TrialState";
import { ISubscriptionState } from "./types/ISubscriptionState";

export class Subscription {
  // The subscription has a reference of the state
  state: ISubscriptionState = new TrialState(this);

  // Delegate responsibility of changing states to the three concrete states
  // - TrialState, TrialExpiredState, and PaidState
  pay(amount: number) {
    this.state.pay(amount);
  }

  dayPassed() {
    this.state.checkExpiration();
  }

  checkSubscriptionStatus() {
    console.log(this.state.report());
  }
}
