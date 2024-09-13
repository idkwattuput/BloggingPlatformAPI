require("dotenv").config();
const express = require("express");
const cors = require("cors");
const logger = require("./middlewares/logEvents");
const postRoutes = require("./routes/post-routes");
const PORT = process.env.PORT;

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(logger);

// Routes
app.use("/api/v1/posts", postRoutes);

// Handling non-existent routes
app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
