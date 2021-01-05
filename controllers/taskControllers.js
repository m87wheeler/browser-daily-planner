const Task = require("../models/Task");

// method:  POST
// route:   api/create
// desc:    *
const createTask = async (req, res) => {
  const { task, type, date } = req.body;
  if (!task || !type)
    return res
      .status(400)
      .json({ success: false, message: "A task must contain text." });

  try {
    const newTask = new Task({ task, type, date });
    const { _id } = await newTask.save();
    return res
      .status(201)
      .json({ success: true, message: "Created successfully.", _id });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

// method:  POST
// route:   api/update/:id
// desc:    *
const updateTask = async (req, res) => {
  const { id } = req.params;

  if (!req.body.task && req.body.complete === undefined)
    return res
      .status(400)
      .json({ success: false, message: "Update unsuccessful." });
  try {
    if (req.body.task) {
      await Task.findByIdAndUpdate(id, { task: req.body.task });
    } else if (req.body.complete !== undefined) {
      await Task.findByIdAndUpdate(id, { complete: req.body.complete });
    }
    return res
      .status(201)
      .json({ success: true, message: "Update successful." });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

// method:  DELETE
// route:   api/delete/:id
// desc:    *
const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    await Task.findByIdAndDelete(id);
    return res
      .status(201)
      .json({ success: true, message: "Task successfully deleted." });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

// method:  GET
// route:   api/
// desc:    *
const getTasks = async (req, res) => {
  const { from, to } = req.query;
  try {
    let tasks;
    if (from && to) {
      tasks = await Task.find({
        date: {
          $gte: new Date(parseInt(from)),
          $lt: new Date(parseInt(to)),
        },
      });
    } else {
      tasks = await Task.find();
    }
    if (!tasks || !tasks.length)
      return res
        .status(400)
        .json({ success: false, message: "No tasks found." });
    return res.status(200).json({ success: true, total: tasks.length, tasks });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

// method:  GET
// route:   api/:id
// desc:    *
const getTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findById(id);
    if (!task)
      return res
        .status(400)
        .json({ success: false, message: "No task found." });
    return res.status(200).json({ success: true, task });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

// method:  GET
// route:   api/?from=''&to=''
// desc:    *
const getTaskByDateRange = async (req, res) => {
  const { from, to } = req.query;
  console.log(from, to);
};

module.exports = {
  createTask,
  updateTask,
  deleteTask,
  getTasks,
  getTask,
  getTaskByDateRange,
};
