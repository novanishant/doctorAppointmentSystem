const express = require("express");
const {
  getAllUsersController,
  getAllDoctorsController,
} = require("../controllers/admin.controller");
const verifyJWT = require("../middlewares/auth.middleware");
const router = express.Router();

router.get("/getAllUsers", verifyJWT, getAllUsersController);
router.get("/getAllDoctors", verifyJWT, getAllDoctorsController);

module.exports = router;
