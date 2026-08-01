const addExpense = (req, res) => {
    console.log(req.body);

    res.status(201).json({
        message: "Expense received successfully!",
        data: req.body
    });
};

module.exports = {
    addExpense
};