const API_URL = 'http://127.0.0.1:5001/api/users'; // IPv4 to avoid Node fetch issues

const newUser = {
    name: "Verification User",
    email: "verify_" + Math.floor(Math.random() * 100000) + "@example.com",
    password: "password123"
};

console.log("🚀 Testing Registration via API...");
console.log("   👉 Target:", API_URL);
console.log("   👉 User:", newUser.email);

// Native fetch in Node 18+
fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newUser)
})
    .then(async (res) => {
        const text = await res.text(); // Get raw text first in case JSON fails
        try {
            const data = JSON.parse(text);
            if (res.ok) {
                console.log("\n✅ SUCCESS: User Registered Successfully!");
                console.log("   -------------------------------------");
                console.log("   Name:  ", data.name);
                console.log("   Email: ", data.email);
                console.log("   ID:    ", data._id);
                console.log("   Token: ", data.token ? "Generated (Logged In)" : "Missing");
                console.log("   -------------------------------------");
            } else {
                console.log("\n❌ API FAILURE: " + res.status);
                console.log("   Message:", data.message || text);
            }
        } catch (e) {
            console.log("\n❌ PARSE ERROR: Could not parse response.");
            console.log("   Raw Response:", text);
        }
    })
    .catch(err => {
        console.error("\n❌ NETWORK ERROR:");
        console.error("   Make sure the backend server is running on port 5001.");
        console.error("   Error details:", err.cause || err);
    });
