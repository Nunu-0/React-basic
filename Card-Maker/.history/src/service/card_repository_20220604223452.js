import { app } from "./firebase";

class CardRepository{
  saveCard(userId, card) {
    const db = getDatabase();
    set(ref(db, `${userId}/cards/${card.id}`), card);
  }
}
export default CardRepository;