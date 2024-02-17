const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
} = require("../controllers/user.controller");
const express = require("express");
const verifyJWT = require("../middlewares/auth.middleware");

// router object
const router = express.Router();

// routes
router.post("/login", loginController);
router.post("/register", registerController);
router.post("/getUserData", verifyJWT, authController);
router.post("/apply-doctor", verifyJWT, applyDoctorController);

module.exports = router;
