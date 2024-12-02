import { dashboardFormIdTypes } from "@/lib/config";
import mongoose from "mongoose";
const OrderSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      required: true,
    },
    idNumber: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
    note: {
      type: String,
    },
    orderTime: {
      type: Date,
      required: true,
    },
    deliveryTime: {
      type: Date,
    },
    idType: {
      type: String,
      enum: dashboardFormIdTypes.map((item) => item.value),
      required: true,
    },
    copyType: {
      type: String,
      enum: ["server_copy", "sign_copy"],
    },
    serverCopyPath: {
      type: String,
    },
    nidCopyPath: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
