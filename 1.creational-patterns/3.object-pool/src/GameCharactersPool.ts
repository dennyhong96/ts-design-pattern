import { GameCharactersFactory } from "./GameCharactersFactory";
import { IGameCharacter } from "./IGameCharacter";

export class GameCharactersPool {
  private WARRIORS_POOL_SIZE = 30;
  private MAGE_POOL_SIZE = 20;

  // Items are expensive to initialize, store a pool of items available to use
  // reload the pool when empty
  private _warriorsPool: IGameCharacter[] = [];
  private _magePool: IGameCharacter[] = [];

  constructor(private _level: number = 30) {
    this.loadWarriors();
    this.loadMages();
  }

  private loadWarriors() {
    for (let i = 0; i < this.WARRIORS_POOL_SIZE; i++) {
      this._warriorsPool.push(GameCharactersFactory.getWarrior(this._level));
    }
  }

  private loadMages() {
    for (let i = 0; i < this.MAGE_POOL_SIZE; i++) {
      this._magePool.push(GameCharactersFactory.getMage(this._level));
    }
  }

  private getPoolItem<T>(pool: T[], reloadFn: () => void): T {
    const item: T = pool.pop() as T;
    if (!pool.length) reloadFn();
    return item;
  }

  // Only expose method to get an item from pool
  public getWarrior() {
    return this.getPoolItem(this._warriorsPool, this.loadWarriors.bind(this));
  }

  public getMage() {
    return this.getPoolItem(this._magePool, this.loadMages.bind(this));
  }
}
