const express = require("express");
const { getDoctorInfoController,updateProfileController } = require("../controllers/doctor.controller");
const verifyJWT = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/getDoctorInfo", verifyJWT, getDoctorInfoController);
router.post("/updateProfile", verifyJWT, updateProfileController);

module.exports = router;
