 # 🎨 CollabBoard

> A full-stack real-time collaborative whiteboard application that enables multiple users to draw, brainstorm, and collaborate on a shared canvas simultaneously.

---

## 📖 Overview

CollabBoard is a modern collaborative whiteboard platform designed to provide seamless real-time collaboration for teams, students, educators, and professionals. The application allows multiple users to join virtual rooms, interact on a shared digital canvas, and instantly view updates made by other participants using WebSocket communication.

The project follows a scalable full-stack architecture with a strong focus on modularity, maintainability, and real-time synchronization.

---

## ✨ Features

### Current Features

* React + Vite frontend setup
* Express.js backend
* Socket.IO integration
* Tailwind CSS configuration
* Modular folder architecture
* Git & GitHub version control

### Planned Features

* 🎨 Real-time collaborative drawing
* 🏠 Room creation and joining
* 👥 Multi-user collaboration
* 🖊️ Pencil, Eraser & Shape tools
* 🎨 Color picker
* ↩️ Undo / Redo functionality
* 🔍 Zoom & Pan support
* 💾 Canvas auto-save
* 🖼️ Export whiteboard as PNG/PDF
* 📷 Image upload
* 🔐 User authentication
* 📜 Whiteboard history
* 💬 Real-time chat
* 👀 Live cursor tracking
* 📱 Responsive design

---

## 🌍 Real-World Applications

CollabBoard can be used for:

* Online classrooms
* Remote team collaboration
* Brainstorming sessions
* Technical interviews
* Project planning
* Design discussions
* Team meetings
* Whiteboard-based problem solving

---

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* Zustand
* React Router DOM
* Socket.IO Client

### Backend

* Node.js
* Express.js
* Socket.IO
* MongoDB
* Mongoose
* dotenv
* CORS

### Development Tools

* Git
* GitHub
* VS Code
* npm
* Nodemon

---

## 📂 Project Structure

```text
collab-board/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Canvas/
│   │   │   ├── Room/
│   │   │   └── UI/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── socket/
│   │   ├── store/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── socket/
│   ├── index.js
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/Pragati768/collab-board.git
```

Move into the project directory:

```bash
cd collab-board
```

Install frontend dependencies:

```bash
cd client
npm install
```

Install backend dependencies:

```bash
cd ../server
npm install
```

---

## 🚀 Running the Project

### Start Backend

```bash
cd server
npm run dev
```

Backend runs at:

```text
http://localhost:5000
```

---

### Start Frontend

```bash
cd client
npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

---

## 🏗️ Architecture

The project follows a modular architecture that separates the application into independent layers.

* **Components** – Reusable UI elements
* **Pages** – Application screens
* **Hooks** – Custom React hooks
* **Store** – Global state management using Zustand
* **Socket** – Real-time communication logic
* **Routes** – API endpoints
* **Controllers** – Business logic
* **Models** – MongoDB database models
* **Config** – Configuration files
* **Utils** – Helper functions

This structure improves readability, scalability, and long-term maintainability.

---

## 🎯 Project Objectives

* Learn full-stack web development
* Build a scalable real-time application
* Understand WebSocket communication
* Practice modular architecture
* Improve backend API development
* Implement collaborative features
* Follow professional software development practices

---

## 🛣️ Roadmap

* [x] Project setup
* [x] Frontend initialization
* [x] Backend initialization
* [x] Socket.IO setup
* [ ] MongoDB integration
* [ ] User authentication
* [ ] Room management
* [ ] Collaborative drawing
* [ ] Whiteboard persistence
* [ ] Export functionality
* [ ] Chat system
* [ ] Deployment

---

## 🤝 Contributing

Contributions are welcome.

If you'd like to contribute:

1. Fork the repository.
2. Create a new feature branch.
3. Commit your changes.
4. Push your branch.
5. Open a Pull Request.

Please ensure your code follows the project's structure and coding conventions.

---

## 👩‍💻 Author

**Pragati Tiwari**

If you found this project useful or interesting, consider giving it a ⭐ on GitHub.

Happy Coding! 🚀
