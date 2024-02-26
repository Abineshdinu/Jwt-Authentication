const express = require("express");
const router = express.Router();
const { registerUser, loginUser, logoutUser } = require("../Controllers/authController");
const { authenticateUser, checkRole } = require("../Middlewares/auth");

// Register user
router.post("/register", registerUser);

// Login user
router.post("/login", loginUser);

// Logout user
router.get("/logout",  logoutUser);

module.exports = router;
