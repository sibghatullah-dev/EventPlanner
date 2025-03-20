const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    description: { type: String },
    category: { type: String, enum: ["Meeting", "Birthday", "Appointment"], required: true },
    date: { type: Date, required: true },
    reminderTime: { type: Date }, // When to send notification
    isReminderSent: { type: Boolean, default: false }
});

module.exports = mongoose.model("Event", EventSchema);
