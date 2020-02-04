const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    description: {
      required: true,
      trim: true,
      type: String
    },
    completed: {
      default: false,
      type: Boolean
    },
    owner: {
      ref: "User",
      required: true,
      type: mongoose.Schema.Types.ObjectId
    }
  },
  {
    timestamps: true
  }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
