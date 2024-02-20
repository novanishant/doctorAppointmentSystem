const Doctor = require("../models/doctor.model");
const User = require("../models/user.model");

const getDoctorInfoController = async (req, res) => {
  try {
    const doctor = await Doctor.findOne({ userId: req.body.userId });
    res.status(201).send({
      success: true,
      message: "doctor data fetch successfully",
      data: doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error While fetching doctors data",
    });
  }
};
module.exports = { getDoctorInfoController };
