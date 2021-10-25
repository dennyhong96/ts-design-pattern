export class StatsTracker {
  public clicks = 0;
  public views = 0;
  public shares = 0;
  public likes = 0;

  private static _instance = new StatsTracker();

  constructor() {
    if (StatsTracker._instance) {
      throw new Error(`Can't instantiate StatsTracker with "new" keyword.`);
    }
    StatsTracker._instance = this;
  }

  public static get instance() {
    return StatsTracker._instance;
  }
}
