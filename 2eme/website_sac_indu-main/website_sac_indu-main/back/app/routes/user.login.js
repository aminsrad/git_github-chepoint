module.exports = (app) => {
  const express = require("express");
  const router = express.Router();

  const db = require("../models");
  db.users;

  const User = db.users;

  const jwt = require("jsonwebtoken");
  const bcrypt = require("bcrypt");

  router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: "Authentication failed1" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Authentication failed2" });
    }
    const token = jwt.sign({ userId: user._id }, "your-secret-key", {
      expiresIn: "1h",
    });
    res.status(200).json({ token });
  });

  app.use("/api", router);
};
