import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
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
});
export default mongoose.models.User || mongoose.model("User", UserSchema);
