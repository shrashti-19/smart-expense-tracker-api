const express = require("express");

const router = express.Router();

router.post("/expenses", (req, res) => {
    res.json({
        message: "POST endpoint working!"
    });
});

module.exports = router;