import { db } from "./firebase.js";
import { doc, updateDoc }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.setAvg = async ()=>{
  await updateDoc(doc(db,"queues",service.value),
    {avgTime:Number(avg.value)});
  alert("Updated");
};

window.reset = async ()=>{
  await updateDoc(doc(db,"queues",service.value),
    {users:[]});
  alert("Reset");
};
