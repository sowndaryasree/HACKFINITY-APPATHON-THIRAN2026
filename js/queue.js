import { db } from "./firebase.js";
import { doc, updateDoc, arrayUnion } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export async function joinQueue(service, uid) {
  await updateDoc(doc(db, "queues", service), {
    users: arrayUnion(uid)
  });
}
