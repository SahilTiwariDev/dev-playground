import mongoose from "mongoose";

const subTaskSchema = new mongoose.Schema(
  {
    taskName: {
      type: String,
      required: true,
      unique: true,
    },
    taskContent: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: ture }
);

export const SubTask = mongoose.model("Subtask", subTaskSchema);
