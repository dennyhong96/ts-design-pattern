import { StatsTracker } from "./StatsTracker";

const tracker = StatsTracker.instance;
console.log(tracker);

tracker.clicks = 10;
tracker.likes = 100;
tracker.shares = 5;
tracker.views = 10000;

console.log(tracker);
console.log(StatsTracker.instance);
