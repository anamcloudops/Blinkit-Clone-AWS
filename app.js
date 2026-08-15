const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to Blinkit Clone</h1>
        <h2>India's Last Minute App</h2>
        <p>Get groceries, fruits, vegetables, dairy products and more delivered in minutes.</p>
    `);
});

app.get('/products', (req, res) => {
    const products = [
        {
            id: 1,
            name: "Amul Milk",
            category: "Dairy",
            price: 30
        },
        {
            id: 2,
            name: "Fresh Bananas",
            category: "Fruits",
            price: 60
        },
        {
            id: 3,
            name: "Bread",
            category: "Bakery",
            price: 45
        }
    ];

    res.json(products);
});

app.get('/categories', (req, res) => {
    const categories = [
        "Fruits & Vegetables",
        "Dairy & Breakfast",
        "Snacks",
        "Cold Drinks",
        "Bakery",
        "Personal Care"
    ];

    res.json(categories);
});

app.listen(port, () => {
    console.log(`Blinkit Clone running at http://localhost:${port}`);
});