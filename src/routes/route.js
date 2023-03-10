const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {

    res.json({ status: true, message: "start your nodeJS developement now..." })
});


router.get("/user", (req, res) => {

    res.json({ status: true, message: "this is from router successful" })
});


router.get("/bank", (req, res) => {

    res.json({ status: true, message: "banking system server created successfully" })
});




module.exports = router;