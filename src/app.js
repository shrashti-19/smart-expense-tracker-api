const express = require("express");

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Smart Expense Tracker API is running!"
    });
});

module.exports = app;