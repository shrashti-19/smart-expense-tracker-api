const express = require("express");
const router = express.Router();

const { addExpense, getAllExpenses } = require("../controllers/expenseController");
const validateExpense = require("../middleware/validateExpense");

router.get("/expenses", getAllExpenses);
router.post("/expenses", validateExpense, addExpense);

module.exports = router;