const Doctor = require("../models/doctor.model");
const User = require("../models/user.model");
const getAllUsersController = async (req, res) => {
  try {
      const users = await User.find({});
      res.status(200).send({
        success: true,
        data : users,
        message: "users data list",
      });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error While fetching users data",
    });
  }
};
const getAllDoctorsController = () => {
    try {
        const doctors = await Doctor.find({});
        res.status(200).send({
          success: true,
          data : doctors,
          message: "doctors data list",
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

module.exports = { getAllUsersController, getAllDoctorsController };
