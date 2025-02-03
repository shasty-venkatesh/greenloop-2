const express = require("express");
const cors = require("cors");
const db = require("./db/db");
const workerSchema = require("./model/workerSchema.js");
const userSchema = require("./model/userSchema.js");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to DB once at startup
db()
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database connection error:", err));

app.get("/api/v1/worker", async (req, res) => {
  try {
    const workers = await workerSchema.find();
    res.status(200).json(workers);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

app.get("/api/v1/worker/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const workers = await workerSchema.findById(id);
    res.status(200).json(workers);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

app.post("/api/v1/worker", async (req, res) => {
  try {
    const worker = await workerSchema.create(req.body);
    res.status(201).json(worker);
  } catch (error) {
    res.status(400).json({ message: "Error creating worker", error });
  }
});

app.put("/api/v1/worker/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    console.log(body);

    const workerExists = await workerSchema.findById(id);
    if (!workerExists) {
      return res.status(404).json({ message: "User not found" });
    }

    const updatedWorker = await workerSchema.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json(updatedWorker);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Server error", error });
  }
});

app.get("/api/v1/user", async (req, res) => {
  try {
    const users = await userSchema.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

app.post("/api/v1/user", async (req, res) => {
  try {
    const user = await userSchema.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: "Error creating user", error });
  }
});

app.get("/api/v1/user/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const users = await userSchema.findById(id);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

app.put("/api/v1/user/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    console.log(body);

    const userExists = await userSchema.findById(id);
    if (!userExists) {
      return res.status(404).json({ message: "User not found" });
    }

    const updatedUser = await userSchema.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Server error", error });
  }
});

app.listen(3000, () => console.log("Server is running on port 3000"));
