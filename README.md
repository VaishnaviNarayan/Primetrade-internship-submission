# 🚀 MERN Stack Internship Assignment
> **Scalable REST API with Authentication & React Frontend**

This project is a complete Full Stack application built as part of the backend developer internship assignment. It features secure JWT authentication, role-based access control (RBAC), and a responsive React frontend.

---

## 🛠️ Tech Stack
*   **Backend:** Node.js, Express.js
*   **Database:** MongoDB Atlas (Cloud)
*   **Frontend:** React.js (Vite)
*   **Authentication:** JSON Web Tokens (JWT) & BCrypt

---

## 📂 Project Structure
```
/project4
├── /backend          # Node.js API Logic (The Kitchen)
│   ├── /config       # Database Connection
│   ├── /controllers  # Logic for Users & Products
│   ├── /middleware   # Auth & Admin Security
│   ├── /models       # Database Schemas (User, Product)
│   └── /routes       # API Endpoints
│
├── /frontend         # React.js UI (The Waiter)
│   ├── /src/pages    # Login & Dashboard Screens
│   └── App.jsx       # Routing
│
└── .env              # Environment Variables (Secrets)
```

---

## ⚙️ Setup & Installation

### 1. Prerequisites
*   Node.js (v18 or higher)
*   MongoDB Atlas Account

### 2. Backend Setup
```bash
# Install dependencies
npm install

# Start the Server (Runs on Port 5001)
npm start
```

### 3. Frontend Setup
```bash
cd frontend

# Install dependencies
npm install

# Start the React App (Runs on Port 5173)
npm run dev
```

---

## 🔑 Environment Variables
Create a file named `.env` in the root folder with the following:
```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/users` | Register a new user | Public |
| `POST` | `/api/users/login` | Login user & get Token | Public |
| `GET` | `/api/products` | Get all products | Public |
| `POST` | `/api/products` | Create a product | **Admin Only** |
| `DELETE` | `/api/products/:id` | Delete a product | **Admin Only** |

---

## 🧪 How to Test
1.  **Register:** You can register a user via Postman or the API.
2.  **Login:** Use the Frontend Login page.
3.  **Admin:** To test Admin features, ensure your user has `role: "admin"` in the database.

---

## 📝 Author
*   **Name:** [Your Name]
*   **Submission for:** Backend Developer Internship
