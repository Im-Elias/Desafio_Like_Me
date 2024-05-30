import express from "express";
import path from "path";

const __dirname = path.resolve();
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

export default router;
