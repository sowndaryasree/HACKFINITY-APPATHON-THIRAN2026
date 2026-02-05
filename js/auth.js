import { db } from "./firebase.js";
import { doc, getDoc } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.login = async () => {
  const role = document.getElementById("role").value;
  const id = document.getElementById("userid").value.trim();
  const secret = document.getElementById("secret").value.trim();
  const error = document.getElementById("error");
  error.innerText = "";

  if (!id || !secret) {
    error.innerText = "Fill all fields";
    return;
  }

  const ref = doc(db, "users", id);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    error.innerText = "User not found";
    return;
  }

  const user = snap.data();

  if (role === "admin") {
    if (user.role !== "admin" || user.password !== secret) {
      error.innerText = "Invalid admin";
      return;
    }
    localStorage.setItem("role", "admin");
    location.href = "admin.html";
    return;
  }

  if (user.role !== role || user.dob !== secret) {
    error.innerText = "Invalid credentials";
    return;
  }

  localStorage.setItem("userid", id);
  localStorage.setItem("role", role);

  role === "student"
    ? location.href = "student.html"
    : location.href = "staff.html";
};
