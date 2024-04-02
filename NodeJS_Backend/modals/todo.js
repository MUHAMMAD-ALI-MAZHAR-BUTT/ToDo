const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  taskDescription: {
    type: String,
    required: true,
  },
  date: { type: Date, required: false, default: new Date() },
});

const todoModal = mongoose.model("Tasks", todoSchema);


module.exports = todoModal;
