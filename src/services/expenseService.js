const fs = require("fs/promises");
const path = require("path");
const { randomUUID } = require("crypto");

const filePath = path.join(__dirname, "../data/expenses.json");

// Read all expenses
async function getExpenses() {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
}

// Save expenses to file
async function saveExpenses(expenses) {
    await fs.writeFile(
        filePath,
        JSON.stringify(expenses, null, 2)
    );
}

// Add a new expense
async function addExpense(expenseData) {
    const expenses = await getExpenses();

    const newExpense = {
        id: randomUUID(),
        title: expenseData.title,
        amount: expenseData.amount,
        category: expenseData.category,
        date: expenseData.date
    };

    expenses.push(newExpense);

    await saveExpenses(expenses);

    return newExpense;
}

// Get all expenses
async function getAllExpenses() {
    return await getExpenses();
}

module.exports = {
    getExpenses,
    saveExpenses,
    addExpense,
    getAllExpenses
};