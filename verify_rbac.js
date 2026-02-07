// Native fetch is available in Node 18+

const API_URL = 'http://localhost:5001/api';

// 1. Setup Test Users
const normalUser = {
    name: "Normal User",
    email: "user" + Math.floor(Math.random() * 10000) + "@example.com",
    password: "password123",
    role: "user"
};

const adminUser = {
    name: "Admin User",
    email: "admin" + Math.floor(Math.random() * 10000) + "@example.com",
    password: "password123",
    role: "admin"
};

async function testRBAC() {
    console.log("🚀 Starting RBAC Verification...");

    // --- STEP 1: REGISTER USERS ---
    console.log("\n1️⃣ Registering Users...");

    // Register Normal User
    let res = await fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(normalUser)
    });
    const userReg = await res.json();
    const userToken = userReg.token;
    console.log(`   - Created Normal User: ${normalUser.email} (Role: ${userReg.role || 'user'})`);

    // Register Admin User
    res = await fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(adminUser)
    });
    const adminReg = await res.json();
    const adminToken = adminReg.token;
    console.log(`   - Created Admin User:  ${adminUser.email} (Role: ${adminReg.role})`);


    // --- STEP 2: TEST ACCESS (Create Product) ---
    console.log("\n2️⃣ Testing Admin Route (Create Product)...");

    // Test as Normal User (Should FAIL)
    console.log("   👉 Attempting as NORMAL USER...");
    res = await fetch(`${API_URL}/products`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userToken}`
        },
        body: JSON.stringify({ name: "User Bot", price: 100, description: "Should fail" })
    });

    if (res.status === 401 || res.status === 403) {
        console.log("      ✅ SUCCESS: Normal User was BLOCKED. (Status: " + res.status + ")");
    } else {
        console.log("      ❌ FAILURE: Normal User was NOT blocked! (Status: " + res.status + ")");
    }


    // Test as Admin User (Should SUCCEED)
    console.log("   👉 Attempting as ADMIN USER...");
    res = await fetch(`${API_URL}/products`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${adminToken}`
        },
        body: JSON.stringify({ name: "Admin Bot", price: 999, description: "Should succeed" })
    });

    if (res.status === 201) {
        const data = await res.json();
        console.log("      ✅ SUCCESS: Admin User Created Product. (ID: " + data._id + ")");
    } else {
        const err = await res.text();
        console.log("      ❌ FAILURE: Admin User Failed! (Status: " + res.status + ") - " + err);
    }

    console.log("\n🎉 RBAC Verification Complete.");
}

testRBAC();
