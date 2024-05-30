import express from "express";
import path from "path";
import { addPost, addLike, getPosts } from "../controllers/controller.js";

const __dirname = path.resolve();
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

router.post("/post", addPost);

router.put("/post", addLike);

router.get("/posts", getPosts);

export default router;
