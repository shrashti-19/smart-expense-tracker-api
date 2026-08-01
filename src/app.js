const express = require("express");

const app = express();
const expenseRoutes = require("./routes/expenseRoutes");
// Middleware to parse JSON request bodies
app.use(express.json());

app.use(expenseRoutes);

// Test route
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Smart Expense Tracker API is running!"
    });
});

module.exports = app;