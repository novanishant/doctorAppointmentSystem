const express = require("express");
const { getDoctorInfoController } = require("../controllers/doctor.controller");
const verifyJWT = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/getDoctorInfo", verifyJWT, getDoctorInfoController);

module.exports = router;
