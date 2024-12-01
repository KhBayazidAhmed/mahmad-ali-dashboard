import mongoose from "mongoose";

const NoticeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  running: {
    type: Boolean,
  },
  content: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Notice || mongoose.model("Notice", NoticeSchema);
