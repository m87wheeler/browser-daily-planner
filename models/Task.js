const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema(
  {
    task: { type: String, required: true },
    type: {
      type: String,
      required: true,
      enum: ["todo", "social", "important", "marketing", "upcoming"],
    },
    date: { type: Date, required: true },
    complete: { type: Boolean, required: true, default: false },
    createdAt: { type: Date, default: Date.now() },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Task", taskSchema);
