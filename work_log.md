# 📋 Project Work Log & Technical Decisions

## 1. Initial Setup
*   Initialized Node.js backend with Express.
*   Connected MongoDB Atlas (Cloud Database) for data storage.
*   Setup React.js with Vite for the frontend.

## 2. Authentication System
*   Implemented `User` model with `email`, `password`, and `role`.
*   Used **BCrypt** to hash passwords for security.
*   Generated **JWT (JSON Web Tokens)** for keeping users logged in.

## 3. UI Design (Apexify Theme)
*   Adopted a Dark Theme (`#111827`) as requested.
*   Built a sidebar with active states (highlighting the current page).
*   Integrated **Recharts** for the Area Chart and Analytics.
*   Preserved Glassmorphism login page.

## 4. Debugging & Fixes
*   **Port Conflict:** Fixed the "multiple pages" issue by enforcing Port 5175 in `vite.config.js`.
*   **Layout:** Adjusted CSS to remove gaps between sidebar and content.
*   **CORS:** Configured backend to accept requests from the frontend port.

## 5. Deployment Preparation
*   Created `scalability.md` to demonstrate architectural knowledge.
*   Updated `README.md` with timestamps and setup guide.
