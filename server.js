require("dotenv").config();
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const {
  createTask,
  updateTask,
  deleteTask,
  getTasks,
  getTask,
} = require("./controllers/taskControllers");

const server = express();

// middleware
server.use(express.json());
server.use(
  cors({
    origin: "http://localhost:5000",
  })
);

// database
const dbString = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.ycdxj.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`;
const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};
mongoose.connect(dbString, dbOptions, (err) => {
  if (err) {
    throw new Error(err);
  } else {
    console.log(`MongoDB Connected: ${process.env.MONGO_DATABASE}`);
  }
});

// start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

// routes
server
  .get("/api", getTasks)
  .get("/api/:id", getTask)
  .post("/api/create", createTask)
  .post("/api/update/:id", updateTask)
  .delete("/api/delete/:id", deleteTask);

// serve static assets in production
if (process.env.NODE_ENV === "production") {
  // set a static folder
  server.use(express.static("client/build"));
  server.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
