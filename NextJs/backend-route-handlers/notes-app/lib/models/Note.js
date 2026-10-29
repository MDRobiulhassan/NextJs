import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      maxlength: 150,
    },
    content: {
      type: String,
      required: [true, "Content is required"],
      trim: true,
      maxlength: 10000,
    },
  },
  {
    timestamps: true,
  },
);

export const Note = mongoose.models.Note || mongoose.model("Note", noteSchema);
