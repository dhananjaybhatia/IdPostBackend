import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import bcrypt from "bcrypt";

import userModel from "./models/user.js";
import postModel from "./models/post.js";

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("Hello");
});
app.get("/create", async (req, res) => {
  let user = await userModel.create({
    username: "sadaf",
    email: "micky@micky.com",
  });
  res.send(user);
});

app.get("/post/create", async (req, res) => {
  let post = await postModel.create({
    postdata: "How are you doing today?",
    user: "67104feab3cd4da7b95be14c",
  });

  let user = await userModel.findOne({ _id: "67104feab3cd4da7b95be14c" });
  user.posts.push(post._id);
  await user.save();
  res.send({ post, user });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App is successfully running on port ${port}`);
});
