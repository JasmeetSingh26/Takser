import express from "express";
import dotenv from "dotenv";
import cors from "cors"; // Import CORS
import connectDB from "./config/database.js";
import userRoutes from "./routes/userRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

dotenv.config();

const app = express();

// ✅ Enable CORS for all requests
app.use(cors()); // Allow all origins

// ✅ If you want to allow only a specific frontend URL:
// app.use(cors({ origin: "https://yourfrontend.com" }));

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.get("/", (req, res) => res.send("Hello from the backend"));
app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
