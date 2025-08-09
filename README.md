# 🔐 User Authentication System  
**Secure Login & Registration — React.js Frontend + Express.js Backend + MongoDB**

A full-stack authentication system with secure user registration, login, and JWT-based authentication.  
Frontend built with **React 19** + **Tailwind CSS 4** + **Radix UI**, backend powered by **Express 5** + **MongoDB** + **bcrypt**.

---

## 📂 Project Structure
root/
│
├── frontend/ # React.js client
│ ├── public/
│ ├── src/
│ ├── package.json
│ └── ...
│
├── backend/ # Express.js server
│ ├── index.js
│ ├── auth.middleware.js
│ ├── package.json
│ ├── user.model.js
│ └── ...
│
└── README.md

## 🚀 Features
- ✅ **Password hashing** with `bcrypt`
- ✅ **JWT authentication** for secure sessions
- ✅ **REST API** with Express 5
- ✅ **Responsive UI** with Tailwind CSS 4
- ✅ **Radix UI & Lucide Icons** for accessibility & visuals
- ✅ **Axios** for API calls
- ✅ **React Router v7** for navigation

## 🛠 Dependencies

### **Frontend**
@radix-ui/react-label ^2.1.7
@radix-ui/react-slot ^1.2.3
@tailwindcss/vite ^4.1.11
axios ^1.10.0
class-variance-authority ^0.7.1
clsx ^2.1.1
lucide-react ^0.525.0
react ^19.1.0
react-dom ^19.1.0
react-router-dom ^7.7.0
tailwind-merge ^3.3.1
tailwindcss ^4.1.11

### **Backend**
bcrypt ^6.0.0
cors ^2.8.5
express ^5.1.0
jsonwebtoken ^9.0.2
mongoose ^8.16.4

---

## 🛠 Prerequisites
Make sure you have:
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [MongoDB](https://www.mongodb.com/) (local or Atlas cloud)

---

## 📦 Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/ridael0/PRODIGY_FS_01.git
cd PRODIGY_FS_01
```
### 2️⃣ Install Backend Dependencies
```bash
cd backend
npm install
```
### 3️⃣ Install Frontend Dependencies
```bash
cd frontend
npm install
```

### ▶️ Running the App
```bash
cd backend
npm start

cd frontend
npm run dev
```
