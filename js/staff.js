import { db } from "./firebase.js";
import { doc, getDoc, updateDoc } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.serve = async (service) => {
  const ref = doc(db, "queues", service);
  const q = (await getDoc(ref)).data();

  if (q.users.length === 0) return alert("Queue empty");

  q.users.shift();
  await updateDoc(ref, { users: q.users });
  alert("Next student served");
};
