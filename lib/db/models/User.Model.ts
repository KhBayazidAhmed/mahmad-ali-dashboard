import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    balance: {
      type: Number,
      default: 0,
    },
    whatsapp: {
      type: String,
    },
    role: {
      type: String,
      default: "user",
    },
    whatsappService: {
      type: Boolean,
      default: false,
    },
    signCopy: {
      type: Boolean,
      default: false,
    },
    signCopyPrice: {
      type: Number,
      default: 5,
    },
    nidCopy: {
      type: Boolean,
      default: false,
    },
    nidCopyPrice: {
      type: Number,
      default: 5,
    },
    serverCopy: {
      type: Boolean,
      default: false,
    },
    serverCopyPrice: {
      type: Number,
      default: 5,
    },
    minimumBalance: {
      type: Number,
      default: 100,
    },
    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
      },
    ],
  },
  {
    timestamps: true,
  }
);
export default mongoose.models.User || mongoose.model("User", UserSchema);
