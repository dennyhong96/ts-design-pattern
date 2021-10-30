import { ICardComponent } from "./types/ICardComponent";

export class Card implements ICardComponent {
  constructor(
    public name: string,
    public attack: number,
    public defense: number
  ) {}

  add(component: ICardComponent): void {
    throw new Error("Operation not supported"); // This violates interface segregation principle
    // but we need it this way since we want Card and CardDeck both implement ICardComponent
  }

  remove(component: ICardComponent): void {
    throw new Error("Operation not supported");
  }

  get(index: number): ICardComponent {
    throw new Error("Operation not supported");
  }

  display(): string {
    return `${this.name}: ${this.attack} / ${this.defense}`;
  }
}
