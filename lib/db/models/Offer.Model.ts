import mongoose from "mongoose";

const offerSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    signCopyPrice: {
      type: Number,
      required: true,
    },
    nidCopyPrice: {
      type: Number,
      required: true,
    },
    serverCopyPrice: {
      type: Number,
      required: true,
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
