import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    floor: {
      type: String,
      required: true,
    },
    roomNumber: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Department = mongoose.model("Department", departmentSchema);
