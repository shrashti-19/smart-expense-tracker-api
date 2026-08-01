const expenseService = require("../services/expenseService");

const addExpense = async (req, res) => {
    try {
        const expense = await expenseService.addExpense(req.body);

        res.status(201).json({
            success: true,
            data: expense
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to add expense"
        });
    }
};

const getAllExpenses = async (req, res) => {
    try {
        const expenses = await expenseService.getAllExpenses();

        res.status(200).json({
            success: true,
            count: expenses.length,
            data: expenses
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch expenses"
        });
    }
};

module.exports = {
    addExpense,
    getAllExpenses
};