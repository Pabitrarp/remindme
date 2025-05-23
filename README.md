
# 📌 Remind Me – Reminder App

This is a full-stack MERN (MongoDB, Express, React, Node.js) reminder app that lets users schedule reminders via **email** or **SMS**. The project is split into two main folders:

- `remindme/` – contains all backend (server-side) code
- `remindmeui/` – contains all frontend (client-side) code built with Vite + Tailwind CSS

---

## 📁 Project Structure

```
remindme-project/
│
├── remindme/             # Backend folder
│   ├── routers/
│   ├── controller/
│   ├── models/
│   ├── service/
│   ├── .env
│   ├── server.js
│   └── package.json
│
└── remindmeui/           # Frontend folder
    ├── public/
    ├── src/
    ├── index.html
    ├── vite.config.js
    └── package.json
```

---

## 🔧 Backend Setup (`remindme`)

### 1. Install dependencies

```bash
cd remindme
npm install
```

### 2. Set up `.env` file

Create a `.env` file in the `remindme/` directory:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/remindme
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password_or_app_password
```

> Replace the email values with actual credentials or app-specific passwords.

### 3. Start the backend server

```bash
npm run dev
```

The backend runs at: `http://localhost:3000`

---

## 🎨 Frontend Setup (`remindmeui`)

### 1. Install dependencies

```bash
cd remindmeui
npm install
```

### 2. Start the Vite development server

```bash
npm run dev
```

The frontend runs at: `http://localhost:5173`

---

## ✨ Features

- ⏰ Set a reminder message with a future date and time
- 📩 Choose to receive the reminder via **Email** or **SMS**
- ✅ Form validations (including time validation: must be at least 6 minutes from now)
- 📤 Email reminders sent automatically using `node-cron`
- 💅 Responsive and styled using **Tailwind CSS**

---

## ⚙️ Tech Stack

| Area       | Tech                          |
|------------|-------------------------------|
| Frontend   | React, Vite, Tailwind CSS     |
| Backend    | Node.js, Express              |
| Database   | MongoDB + Mongoose            |
| Scheduler  | Node-Cron                     |
| Mailer     | Nodemailer                    |
