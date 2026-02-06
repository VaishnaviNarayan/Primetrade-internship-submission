const adminUser = {
    name: "Admin Boss",
    email: "admin" + Math.floor(Math.random() * 1000) + "@example.com",
    password: "password123",
    role: "admin" // We are explicitly asking for admin role
};

console.log("Creating Admin:", adminUser);

fetch('http://localhost:5001/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(adminUser)
})
    .then(res => res.json())
    .then(data => {
        console.log("Response:");
        console.log(data);
        if (data.role === 'admin') {
            console.log("SUCCESS! Admin created.");
        } else {
            console.log("WAIT. Role is", data.role);
        }
    })
    .catch(err => console.error(err));
