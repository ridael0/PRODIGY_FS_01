const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const User = require("./user.model");
const authMiddleware = require("./auth.middleware");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/auth-app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const SECRET = "secret_key";

app.post("/api/register", async (req, res) => {
  const { name, email, password } = req.body;

  if(!name) return res.status(400).json({ error: "Name is Required" });

  if(!email) return res.status(400).json({ error: "Email is Required" });

  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ error: "Invalid Email" });

  if(!password || password?.length < 8) return res.status(400).json({ error: "password must be of 8 characters" });

  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const user = await User.create({ name, email, password: hashedPassword });
    res.status(201).json({ message: "User created", user });
  } catch (err) {
    res.status(400).json({ error: "Email already exists" });
  }
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ error: "Invalid credentials" });
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

  const token = jwt.sign({ userId: user._id,userName: user.name, role: user.role }, SECRET, {
    expiresIn: "1h",
  });
  res.json({ token });
});

app.get("/api/dashboard", authMiddleware, (req, res) => {
  res.json({ message: `Welcome ${req.user.userName}` });
});

app.listen(5000, () => console.log("Server running on port 5000"));