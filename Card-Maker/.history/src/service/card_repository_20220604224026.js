import { getDatabase, ref, set, remove } from "firebase/database";

import { app } from "./firebase";

class CardRepository {
  saveCard(userId, card) {
    const db = getDatabase();
    const cardRef = ref(db, `${userId}/cards/${card.id}`);
    set(cardRef, card);
  }

  removeCard(userId, card) {
    const db = getDatabase();
    const cardRef = ref(db, `${userId}/cards/${card.id}`);
    remove(cardRef);
  }

}

export default CardRepository;