# 🚀 Primetrade.ai - Internship Assignment
> **Scalable REST API & "Apexify" Data Dashboard**

![Dashboard Preview](Screenshot%202026-02-06%20191134.png)
*Snapshot of the Dashboard*

This project is a complete Full Stack application built as part of the backend developer internship assignment. It features secure JWT authentication, role-based access control (RBAC), and a **Modern Dark-Themed Dashboard** inspired by "Apexify".

---

## 🎨 Key Features
*   **Secure Authentication:** JWT-based login with BCrypt password hashing.
*   **Role-Based Access Control (RBAC):**
    *   **Admin:** Full access to Products and Analytics.
    *   **User:** Restricted view (Sales & Dashboard only).
    *   **Role Selection:** Users can choose their role (Admin/User) during Registration.
*   **Modern UI (Apexify Theme):**
    *   **Dark Mode:** Professional fintech aesthetic (`#111827` background).
    *   **Interactive Sidebar:** Functional navigation switching between Dashboard, Sales, Products, etc.
    *   **Data Visualization:** Area charts, progress bars, and transaction tables.
*   **Responsive Layout:** Flexbox architecture adapting to screen sizes.

---

## 🛠️ Tech Stack
*   **Backend:** Node.js, Express.js
*   **Database:** MongoDB Atlas (Cloud)
*   **Frontend:** React.js (Vite), Recharts, React Icons
*   **Styling:** CSS Modules, Google Fonts (Outfit)

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

# Start the React App (Strictly on Port 5175)
npm run dev -- --port 5175
```
> **Note:** Access the frontend at `http://localhost:5175`

---

## 📚 Documentation & Deliverables

*   **[Scalability Note (scalability.md)](./scalability.md):** Explanation of Microservices, Caching (Redis), and Load Balancing strategies used to scale this app.
*   **API Documentation:** See the table below for available endpoints.

### 🔌 API Endpoints

| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/users` | Register a new user | Public |
| `POST` | `/api/users/login` | Login user & get Token | Public |
| `GET` | `/api/products` | Get all bots/products | Public |
| `POST` | `/api/products` | Create a bot entry | **Admin Only** |

---

## 🔑 Environment Variables
Create a file named `.env` in the root folder with the following:
```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## 📝 Author
*   **Vaishnavi**
*   **Submission for:** Primetrade.ai Backend Developer Internship
