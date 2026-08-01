const validateExpense = (req, res, next) => {
    const { title, amount, category, date } = req.body;

    if (!title || typeof title !== "string" || title.trim() === "") {
        return res.status(400).json({
            success: false,
            message: "Title is required."
        });
    }

    if (typeof amount !== "number" || amount <= 0) {
        return res.status(400).json({
            success: false,
            message: "Amount must be a positive number."
        });
    }

    if (!category || typeof category !== "string" || category.trim() === "") {
        return res.status(400).json({
            success: false,
            message: "Category is required."
        });
    }

    if (!date || isNaN(Date.parse(date))) {
        return res.status(400).json({
            success: false,
            message: "Please provide a valid date."
        });
    }

    next();
};

module.exports = validateExpense;