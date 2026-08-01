const expenseService = require("../services/expenseService");

const addExpense = async (req, res) => {
    try {
        const expense = await expenseService.addExpense(req.body);

        res.status(201).json({
            success: true,
            data: expense,
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Failed to add expense",
        });
    }
};

const getAllExpenses = async (req, res) => {
    try {
        const expenses = await expenseService.getExpenses();

        const { category } = req.query;

        const filteredExpenses = category
            ? expenses.filter(
                  (expense) =>
                      expense.category.toLowerCase() === category.toLowerCase()
              )
            : expenses;

        res.status(200).json({
            success: true,
            count: filteredExpenses.length,
            data: filteredExpenses,
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch expenses",
        });
    }
};

const calculateTotalExpenses = async (req, res) => {
    try {
        const { category } = req.query;

        const total = await expenseService.calculateTotalExpenses(category);

        res.status(200).json({
            success: true,
            category: category || "All",
            total,
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Failed to calculate total expenses",
        });
    }
};

module.exports = {
    addExpense,
    getAllExpenses,
    calculateTotalExpenses
};