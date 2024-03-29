const User = require("../models/UserModel");
const bcrypt = require("bcrypt");

const createUsers = async (req, res) => {
  try {
    let hash = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({ ...req.body, password: hash });
    res.send(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  createUsers,
  getUsers,
};
