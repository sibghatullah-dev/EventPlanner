const express = require("express");
const Event = require("../models/Event");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Create Event
router.post("/", authMiddleware, async (req, res) => {
    try {
        const { name, description, category, date, reminderTime } = req.body;
        const event = await Event.create({ user: req.user, name, description, category, date, reminderTime });
        res.status(201).json(event);
    } catch (error) {
        res.status(500).json({ error: "Error creating event" });
    }
});

// Get User Events
router.get("/", authMiddleware, async (req, res) => {
    const events = await Event.find({ user: req.user }).sort({ date: 1 });
    res.json(events);
});

// Get Events by Category
router.get("/category/:category", authMiddleware, async (req, res) => {
    const events = await Event.find({ user: req.user, category: req.params.category });
    res.json(events);
});

module.exports = router;
