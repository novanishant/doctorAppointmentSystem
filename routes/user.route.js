const {
  loginController,
  registerController,
} = require("../controllers/user.controller");
const express = require("express");

// router object
const router = express.Router();

// routes
router.post("/login", loginController);
router.post("/register", registerController);

module.exports = router;
