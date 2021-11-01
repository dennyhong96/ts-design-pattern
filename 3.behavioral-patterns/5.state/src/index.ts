import { Subscription } from "./Subscription";

const subscription = new Subscription();
subscription.checkSubscriptionStatus();

Array.from({ length: 14 }).forEach(() => {
  subscription.dayPassed();
  subscription.checkSubscriptionStatus();
});

subscription.pay(9.99);
subscription.checkSubscriptionStatus();
