import express from "express";
import router from "./routes/router.js";

const PORT = process.env.PORT || 3000;

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", router);

// Server
app.listen(PORT, () => {
  console.log("Server running on http://localhost:" + PORT);
});
