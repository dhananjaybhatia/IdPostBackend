import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  postdata: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const post = mongoose.model("Post", postSchema);
export default post