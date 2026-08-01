const fs = require("fs/promises");
const path = require("path");
const { randomUUID } = require("crypto");

const filePath = path.join(__dirname, "../data/expenses.json");

// Read all expenses
async function getExpenses() {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
}

// Save expenses
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
        date: expenseData.date,
    };

    expenses.push(newExpense);

    await saveExpenses(expenses);

    return newExpense;
}

async function calculateTotalExpenses(category) {
    const expenses = await getExpenses();

    const filteredExpenses = category
        ? expenses.filter(
              expense =>
                  expense.category.toLowerCase() === category.toLowerCase()
          )
        : expenses;

    const total = filteredExpenses.reduce(
        (sum, expense) => sum + expense.amount,
        0
    );

    return total;
}

async function deleteExpense(id) {
    const expenses = await getExpenses();

    const expenseIndex = expenses.findIndex(
        expense => expense.id === id
    );

    if (expenseIndex === -1) {
        return null;
    }

    const deletedExpense = expenses[expenseIndex];

    expenses.splice(expenseIndex, 1);

    await saveExpenses(expenses);

    return deletedExpense;
}

module.exports = {
    getExpenses,
    saveExpenses,
    addExpense,
    calculateTotalExpenses,
    deleteExpense
};