import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  hashedPassword: { 
    type: String,
    required: true,
  },
  isVerified:{
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // For password reset flow
  forgotPasswordToken: { type: String, default: null },
  forgotPasswordTokenExpiry: { type: Date, default: null },

  // For email verification
  verifyToken: { type: String, default: null },
  verifyTokenExpiry: { type: Date, default: null },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
