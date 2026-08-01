const express = require("express");
const router = express.Router();

const { addExpense, getAllExpenses, calculateTotalExpenses} = require("../controllers/expenseController");
const validateExpense = require("../middleware/validateExpense");

router.get("/expenses", getAllExpenses);
router.post("/expenses", validateExpense, addExpense);
router.get("/expenses/total", calculateTotalExpenses);

module.exports = router;