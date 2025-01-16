import mongoose from "mongoose";

const offerSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    signCopyPrice: {
      type: Number,
    },

    serverCopyPrice: {
      type: Number,
    },
    running: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.offer || mongoose.model("offer", offerSchema);
