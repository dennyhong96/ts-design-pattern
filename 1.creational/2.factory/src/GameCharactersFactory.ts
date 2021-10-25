import { IGameCharacter } from "./IGameCharacter";

// Delegate the creation of game character to the GameCharactersFactory
export class GameCharactersFactory {
  public static getWarrior(level: number): IGameCharacter {
    let warrior: IGameCharacter;
    if (level < 10) {
      warrior = {
        health: 50,
        strenth: 50,
        dexterity: 25,
        magic: 15,
      };
    } else {
      warrior = {
        health: 75,
        strenth: 75,
        dexterity: 50,
        magic: 25,
      };
    }
    return warrior;
  }

  public static getMage(level: number): IGameCharacter {
    let mage: IGameCharacter;
    if (level < 10) {
      mage = {
        health: 45,
        strenth: 45,
        dexterity: 35,
        magic: 50,
      };
    } else {
      mage = {
        health: 70,
        strenth: 70,
        dexterity: 70,
        magic: 95,
      };
    }
    return mage;
  }

  // Open/Close principle
  // Can extend the functionality - Add new character types without changing existing ones
}
