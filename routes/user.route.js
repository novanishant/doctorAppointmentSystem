const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
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
router.post("/get-all-notification", verifyJWT, getAllNotificationController);
router.post(
  "/delete-all-notification",
  verifyJWT,
  deleteAllNotificationController
);

module.exports = router;
