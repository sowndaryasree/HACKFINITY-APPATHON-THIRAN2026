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

