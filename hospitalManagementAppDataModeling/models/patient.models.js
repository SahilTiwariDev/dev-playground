import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    guardian: {
      type: String,
    },
    sickness: [
      {
        type: String,
        required: true,
      },
    ],
    roomNumber: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
    },
  },
  { timestamps: true }
);

export const Patient = mongoose.model("Patient", patientSchema);
