# How to Set Up MongoDB Atlas (Detailed Walkthrough)

## Step 1: Account Setup (You are here)
1.  **Survey Screen:** You are seeing a screen "Getting to Know You".
    *   **Action:** Click the **"Skip personalization"** button at the bottom right. (Or just pick random answers and click Finish).

## Step 2: Deploy Your Database
1.  You will see a page "Deploy your database".
2.  **Select Plan:** Look for the **M0 FREE** column (usually on the far right or bottom).
    *   **Action:** Click the **Create** button under "M0 Free".
3.  **Provider & Region:**
    *   **Provider:** Keep "AWS" selected.
    *   **Region:** Select the one closest to you (e.g., **N. Virginia** or **Mumbai**).
4.  **Cluster Name:** Leave it as `Cluster0`.
5.  **Final Action:** Click the green **"Create"** button at the bottom.

## Step 3: Security Setup (The "Security Quickstart" Model)
This popup is **crucial**. Do not close it until you do these two things:

### A. Create a Database User
1.  **Username:** Type `admin`.
2.  **Password:** Type `password123` (or any simple password you remember).
3.  **Action:** Click the green **"Create User"** button.

### B. Network Access (Where can you connect from?)
1.  Scroll down to "IP Address".
2.  **Action:** Click the button that says **"Allow Access from Anywhere"** (or type `0.0.0.0/0`).
    *   *Why?* This ensures your laptop can connect regardless of your WiFi IP changing.
3.  **Action:** Click **"Add Entry"** or "Confirm".

## Step 4: Get the Connection String
1.  After security is done, click **"Finish and Close"**.
2.  You will be on the main Dashboard. Click the **"Connect"** button (next to your Cluster name).
3.  Click **"Drivers"** (Node.js, Go, Python, etc.).
4.  **Version:** Keep it as "Node.js" and version "5.5 or later".
5.  **Copy:** You will see a string like:
    `many-letters-numbers.mongodb.net/?retryWrites=true&w=majority`
6.  **Action:** COPY that entire string.

## Step 5: Paste it!
Come back to this chat and paste the string.
It will look a bit like: `mongodb+srv://admin:password123@cluster0.xyz.mongodb.net/?retryWrites=true&w=majority`
