import { db } from "./firebase.js";
import { doc, getDoc } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.login = async () => {
  const role = document.getElementById("role").value;
  const id = document.getElementById("userid").value.trim();
  const secret = document.getElementById("secret").value;
  const error = document.getElementById("error");

  error.innerText = "";

  if (!id || !secret) {
    error.innerText = "Fill all fields";
    return;
  }

  try {
    const ref = doc(db, "users", id);
    const snap = await getDoc(ref);

    if (!snap.exists()) {
      error.innerText = "User not found";
      return;
    }

    const user = snap.data();

    // 🔐 ADMIN LOGIN
    if (role === "admin") {
      if (user.role !== "admin") {
        error.innerText = "Invalid admin";
        return;
      }

      if (user.password !== secret) {
        error.innerText = "Wrong password";
        return;
      }

      localStorage.setItem("role", "admin");
      location.href = "admin.html";
      return;
    }

    // 🎓 STUDENT / STAFF LOGIN
    if (user.role !== role) {
      error.innerText = "Wrong role selected";
      return;
    }

    if (user.dob !== secret) {
      error.innerText = "Wrong DOB";
      return;
    }

    localStorage.setItem("roll", id);
    localStorage.setItem("role", role);

    if (role === "student") location.href = "student.html";
    if (role === "staff") location.href = "staff.html";

  } catch (e) {
    error.innerText = "Login failed";
    console.error(e);
  }
};
