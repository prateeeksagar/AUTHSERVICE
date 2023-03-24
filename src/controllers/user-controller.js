const UserService = require("../services/user-service");

const userService = new UserService();

const create = async (req, res) => {
  try {
    const response = await userService.create({
      email: req.body.email,
      password: req.body.password,
    });
    return res.status(201).json({
      success: true,
      message: "successfully created a new user",
      data: response,
      err: {},
    });
  } catch (error) {
    console.log(error);
    console.log("something went wrong in user controller");
    return res.status(500).json({
      message: "not able to create User",
      success: false,
      err: error,
    });
  }
};

module.exports = {
  create,
};
