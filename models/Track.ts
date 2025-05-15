import mongoose from "mongoose";

const TrackSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  lyrics: {
    type: String,
    default: "",
  },
  mood: {
    type: String,
    enum: ["happy", "sad", "aggressive", "angry", "chill"],
    required: true,
    default: "chill",
  },
  beatType: {
    type: String,
    enum: ["upload", "youtube"],
    required: false,
  },
  beatUrl: {
    type: String,
    required: false,
  },
  startLoop: {
    type: Number, // in seconds
    default: 0,
  },
  endLoop: {
    type: Number, // in seconds
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Track || mongoose.model("Track", TrackSchema);

