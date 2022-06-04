import { getDatabase, ref, set, remove } from "firebase/database";
import { app } from "./firebase";

class CardRepository{
  saveCard(userId, card) {
    const db = getDatabase();
    set(ref(db, `${userId}/cards/${card.id}`), 
    {1: userId, 2: card,});
  }
}
export default CardRepository;