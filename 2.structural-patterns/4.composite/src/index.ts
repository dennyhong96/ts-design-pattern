import { Card } from "./Card";
import { CardDeck } from "./CartDeck";

const cardDeck = new CardDeck();
cardDeck.add(new Card("Card 1", 10, 10));
cardDeck.add(new Card("Card 2", 12, 8));

const cardDeck2 = new CardDeck();
cardDeck2.add(new Card("Card 3", 15, 12));
cardDeck2.add(new Card("Card 4", 17, 8));

// cardDeck can add either a Card instance or a CardDeck instance.
// Because they implement the same interface.
cardDeck.add(cardDeck2);

console.log(cardDeck.display());
