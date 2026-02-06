const validUser = {
    name: "Test User",
    email: "testuser" + Math.floor(Math.random() * 10000) + "@example.com", // Random email to avoid duplicates
    password: "password123"
};

console.log("Testing Registration with:", validUser);

fetch('http://localhost:5000/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(validUser)
})
    .then(res => res.json())
    .then(data => {
        console.log("Response from Server:");
        console.log(data);
        if (data.token) {
            console.log("SUCCESS! User registered and got a token.");
        } else {
            console.log("FAILED.", data);
        }
    })
    .catch(err => console.error("Error:", err));
