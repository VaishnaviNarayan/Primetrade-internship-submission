// 1. First Config
const adminEmail = "admin330@example.com"; // We will update this after running create_admin
const password = "password123";

const testCycle = async () => {
    // A. Login as Admin
    console.log("1. Logging in...");
    const loginRes = await fetch('http://localhost:5001/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: adminEmail, password })
    });
    const loginData = await loginRes.json();
    const token = loginData.token;

    if (!token) {
        console.log("Login Failed", loginData);
        return;
    }
    console.log("Login Success! Token obtained.");

    // B. Create Product
    console.log("\n2. Creating Product...");
    const productRes = await fetch('http://localhost:5001/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // Show the badge!
        },
        body: JSON.stringify({
            name: "iPhone 15",
            description: "Cool phone",
            price: 999
        })
    });
    const productData = await productRes.json();
    console.log("Created:", productData.name);

    // C. Get Products
    console.log("\n3. Fetching All Products...");
    const getRes = await fetch('http://localhost:5001/api/products');
    const allProducts = await getRes.json();
    console.log("Total Products:", allProducts.length);
};

// Note: To make this robust, we usually pass the email dynamically,
// but for this simple test, we will just copy-paste the email from step 1 output.
