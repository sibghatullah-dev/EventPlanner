require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const eventRoutes = require("./routes/eventRoutes");
require("./utils/notificationService");

const app = express();
app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//writing comment to check the workflow
//writing comment to check the workflow
