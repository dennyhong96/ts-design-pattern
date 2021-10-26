import { GameCharactersFactory } from "./GameCharactersFactory";

const myWarrior = GameCharactersFactory.getWarrior(5);
const myMage = GameCharactersFactory.getMage(20);

console.log("My weak warrior at level 5", myWarrior);
console.log("My strong mage at level 20", myMage);
