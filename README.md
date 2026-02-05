# Smart Campus Queue Management System 🎓⏳

A web-based application to manage queues in college campuses for **Library, Canteen, Lab, and Office** services.  
This system reduces physical waiting, shows estimated wait time, and provides separate dashboards for **Students, Staff, and Admin**.

---

## 🚀 Features

### 🔐 Authentication
- Role-based login:
  - **Student**
  - **Staff**
  - **Admin**
- Login using:
  - Student / Staff → ID + Date of Birth
  - Admin → ID + Password
- Firestore-based authentication (no OTP / Firebase Auth)

---

### 🎓 Student Dashboard
- View all campus services:
  - Library
  - Canteen
  - Lab
  - Office
- Join **only one queue at a time**
- View:
  - Total people in queue
  - Your position
  - Estimated waiting time
- Leave queue anytime
- Automatically removed from queue when tab is closed

---

### 👨‍🏫 Staff Dashboard
- View queues for services
- **Check-in / Serve next** student
- Queue automatically moves forward

---

### 👨‍💼 Admin Dashboard
- Login with admin credentials
- View system status
- (Extensible for analytics, reset queues, avg time control)

---

## 🧠 Estimated Time Logic

Example:
- Avg time = 3 minutes
- Position = 4  
→ Estimated wait = **12 minutes**

---

## 🛠 Tech Stack

| Layer       | Technology |
|------------|------------|
| Frontend   | HTML, CSS, JavaScript |
| Backend    | Firebase Firestore |
| Auth       | Custom Firestore-based |
| Hosting    | Live Server / GitHub Pages |
| Versioning | Git & GitHub |

---

## 📁 Project Structure

smart-campus-queue/
│
├── public/
│ ├── index.html # Login page |
│ ├── student.html # Student dashboard |
│ ├── staff.html # Staff dashboard |
│ └── admin.html # Admin dashboard |
│
├── css/
│ └── style.css # Modern dark-blue UI |
│
├── js/
│ ├── firebase.js # Firebase configuration |
│ ├── auth.js # Authentication logic |
│ ├── student.js # Student queue logic |
│ ├── staff.js # Staff check-in logic |
│ └── admin.js # Admin controls |
|
---
## 🎯 Use Cases

- College and university campuses to manage queues for library, canteen, labs, and offices
- Queue-based service systems where users need to track waiting time and position  
- Institutions looking to reduce physical crowding and improve service efficiency  

---
