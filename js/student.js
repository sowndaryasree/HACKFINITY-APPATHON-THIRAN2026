import { db } from "./firebase.js";
import { doc, getDoc, updateDoc } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const roll = localStorage.getItem("userid");
if (!roll) location.href = "index.html";

const services = ["Library", "Canteen", "Lab", "Office"];
const box = document.getElementById("queues");

let joined = null;

for (const s of services) load(s);

async function load(service) {
  const ref = doc(db, "queues", service);
  const snap = await getDoc(ref);
  const q = snap.data();

  if (q.users.includes(roll)) joined = service;

  const pos = q.users.indexOf(roll);
  const inQ = pos !== -1;

  const div = document.createElement("div");
  div.innerHTML = `
    <h3>${service}</h3>
    <p>Total: ${q.users.length}</p>
    <p>Your position: ${inQ ? pos + 1 : "-"}</p>
    <p>Estimated wait: ${inQ ? (pos + 1) * q.avgTime : "-"}</p>
    <button onclick="${inQ ? `leave('${service}')` : `join('${service}')`}"
      ${joined && !inQ ? "disabled" : ""}>
      ${inQ ? "Leave Queue" : "Join"}
    </button>
    <hr>
  `;
  box.appendChild(div);
}

window.join = async (service) => {
  if (joined) return alert("Already in a queue");
  const ref = doc(db, "queues", service);
  const q = (await getDoc(ref)).data();
  q.users.push(roll);
  await updateDoc(ref, { users: q.users });
  location.reload();
};

window.leave = async (service) => {
  const ref = doc(db, "queues", service);
  const q = (await getDoc(ref)).data();
  await updateDoc(ref, { users: q.users.filter(u => u !== roll) });
  location.reload();
};
