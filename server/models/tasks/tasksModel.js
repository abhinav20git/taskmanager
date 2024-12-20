const mongoose = require("mongoose");

const tasksSchema = mongoose.Schema({
  userId: { type: String },
  title: { type: String },
  description: { type: String },
  dueDate: { type: String },
  priority: { type: Number },
  status: { type: String },
});

module.exports = mongoose.model("tasks", tasksSchema);
