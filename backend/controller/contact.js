const express = require("express");
const router = express.Router();
const contacts = require("../model/Contact");

// url = /api
router.get("/", function (req, res) {
    res.json({
        status: 200,
        payload: "api ready"
    });
});

router.get("/contact", function (req, res) {
    contacts.getAll(req, res);
});

router.get("/contact/:id", function (req, res) {
    contacts.getById(req, res);
});

router.post("/contact", function (req, res) {
    contacts.add(req, res);
});

router.put("/contact/:id", function (req, res) {
    contacts.update(req, res);
});

router.delete("/contact/:id", function (req, res) {
    contacts.delete(req, res);
});

module.exports = router;