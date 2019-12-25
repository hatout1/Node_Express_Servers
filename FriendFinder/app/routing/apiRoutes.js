const express = require("express");
const router = express.Router();
const db = require("../config/connection");

router.get("/api/friends", (req, res) => {

    console.log("res");
});

router.get("/:id", (req, res) => {
    console.log("Hello World");
});

router.post('/', (req, res) => {

})




module.exports = router;