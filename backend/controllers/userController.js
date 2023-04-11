const User = require("../models/userModel");
const sendToken = require("../utils/jwt");

// post route to register a user
const createUser = async (req, res, next) => {
  const { email, password } = req.body;

  let avatar;

  let BASE_URL = "http://localhost:3002";

  if (req.file) {
    avatar = `${BASE_URL}/uploads/user/${req.file.originalname}`;
  }

  const user = await User.create({ email, password, avatar });
  console.log(user);

  sendToken(user, 201, res);
};

// login -- api/login
const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({
      message: "Please enter email & password",
    });
  }

  const user = await User.findOne({ email }).select("+password");

  if (!(await user.isValidPassword(password))) {
    return res.status(401).send({
      message: "Invalid email or password",
    });
  }
  console.log(user);

  sendToken(user, 201, res);
};

const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json({
    success: true,
    users,
  });
};

module.exports = { createUser, loginUser, getAllUsers };
