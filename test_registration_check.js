const API_URL = 'http://localhost:5001/api/users';

const newUser = {
    name: "Test Register",
    email: "test_reg_" + Math.floor(Math.random() * 100000) + "@example.com", // Random email to avoid duplicates
    password: "password123"
};

console.log("🚀 Testing Registration...");
console.log("   👉 Sending data:", newUser);

fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newUser)
})
    .then(async (res) => {
        const data = await res.json();
        if (res.ok) {
            console.log("\n✅ SUCCESS: Registration is WORKING!");
            console.log("   - User Created:", data.name);
            console.log("   - Email:", data.email);
            console.log("   - ID:", data._id);
            console.log("   - Token Generated:", data.token ? "Yes (Logged In)" : "No");
        } else {
            console.log("\n❌ FAILURE: Registration Failed.");
            console.log("   - Error:", data.message);
        }
    })
    .catch(err => console.error("   ❌ ERROR:", err));
