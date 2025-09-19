<img width="1280" height="720" alt="screenshot-for-readme" src="https://github.com/user-attachments/assets/a129a710-c243-4375-b108-50407b9b34dc" />

💬 Realtime Chat App

A full-stack realtime chat application built with React (Vite), Node.js, Express.js, MongoDB, and Socket.io.
This app allows users to register, login, and chat in realtime with instant message delivery using WebSockets.

🚀 Features

🔐 Authentication – User register & login (JWT-based).

👥 User Management – Displays online/offline status.

💬 Realtime Messaging – Instant 2-way communication with Socket.io.

📡 WebSockets – Bi-directional realtime communication.

💾 MongoDB Database – Stores user accounts & chat history.

⚡ Vite + React Frontend – Modern, fast development experience.

🎨 Responsive UI – Works on desktop & mobile.

🛠️ Tech Stack
Frontend

⚡ React (Vite)

🎨 TailwindCSS
 (optional if you used it)

🔗 Socket.io-client

Backend

🟢 Node.js

🚀 Express.js

📡 Socket.io

🍃 MongoDB
 with Mongoose

🔑 JWT Authentication

Realtime-Chat-App/
├── backend/
│   ├── src/
│   │   ├── server.js         # Main server file
│   │   ├── lib/           # DB & JWT config
│   │   ├── models/           # Mongoose models
│   │   ├── routes/           # API routes
│   │   ├── controllers/      # Controller logic
|   |   ├── middleware/       # middleware
|   |   ├── emails/           # emails
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/            # App pages
│   │   ├── lib/          # Auth & socket context
|   |   ├── hooks/          # Auth & socket context
|   |   ├── store/          # Auth & socket context
│   │   └── App.jsx
|   |   └── index.css
|   |   └── main.jsx
│   └── package.json
│
└── README.md



