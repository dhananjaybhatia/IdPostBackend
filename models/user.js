import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/idpostauth");

const userSchema = mongoose.Schema({
  username: String,
  email: String,
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

const user = mongoose.model("User", userSchema);
export default user;
