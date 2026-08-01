const expenseService = require("../services/expenseService");

const addExpense = async (req, res) => {
    try {
        const expense = await expenseService.addExpense(req.body);

        res.status(201).json({
            success: true,
            data: expense
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to add expense"
        });
    }
};

module.exports = {
    addExpense
};