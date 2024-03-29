const express = require("express");
const userRoutes = express.Router();

const { createUsers, getUsers } = require("../Controllers/userController");

userRoutes.post("/", createUsers);
userRoutes.get("/", getUsers);

module.exports = userRoutes;
