import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
      required: true,
    },
    patientPresent: [
      {
        type: Number,
        required: true,
      },
    ],
  },
  { timestamps: true }
);

export const Room = mongoose.model("Room", roomSchema);
