import mongoose from "mongoose";

// database validations
const userSchema = new mongoose.Schema(
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
    role: {
      type: String,
      required: true,
      default: "Customer",
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema, "UserRegistration");
