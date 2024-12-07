import mongoose from "mongoose";

const TransitionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    type: { type: String, enum: ["cashIn", "CashOut"], required: true }, // Transaction type
    amount: { type: Number, required: true }, // Positive for both types
    description: { type: String, default: "" },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Transition ||
  mongoose.model("Transition", TransitionSchema);
