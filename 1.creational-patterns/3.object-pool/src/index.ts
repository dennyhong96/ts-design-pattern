import { GameCharactersPool } from "./GameCharactersPool";

const level = 15;
const gameCharactersPool = new GameCharactersPool(level);
for (let i = 0; i < 40; i++) {
  console.log(`Mage ${i + 1} from pool -`, gameCharactersPool.getMage());
  console.log(`Warrior ${i + 1} from pool -`, gameCharactersPool.getWarrior());
}
