// We will use the user we created earlier
const userCredentials = {
    email: "testuser8455@example.com", // Ensure this matches the one created in test_register.js
    password: "password123"
};

console.log("Testing LOGIN with:", userCredentials);

fetch('http://localhost:5001/api/users/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userCredentials)
})
    .then(res => res.json())
    .then(data => {
        console.log("Response from Server:");
        console.log(data);
        if (data.token) {
            console.log("SUCCESS! User Logged in and got a token.");
        } else {
            console.log("FAILED.", data);
        }
    })
    .catch(err => console.error("Error:", err));
