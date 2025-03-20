const cron = require("node-cron");
const Event = require("../models/Event");

const sendReminder = async () => {
    const now = new Date();
    const upcomingEvents = await Event.find({ reminderTime: { $lte: now }, isReminderSent: false });

    upcomingEvents.forEach(async (event) => {
        console.log(`Reminder: Event '${event.name}' is coming up!`);
        await Event.findByIdAndUpdate(event._id, { isReminderSent: true });
    });
};

// Run every minute
cron.schedule("* * * * *", sendReminder);
