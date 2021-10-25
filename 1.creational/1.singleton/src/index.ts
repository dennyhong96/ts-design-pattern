import { StatsTracker } from "./StatsTracker";

const statsTracker = StatsTracker.instance;
console.log(statsTracker);

statsTracker.clicks = 10;
statsTracker.likes = 100;
statsTracker.shares = 5;
statsTracker.views = 10000;

console.log(statsTracker); // the same instance
console.log(StatsTracker.instance); // the same instance
