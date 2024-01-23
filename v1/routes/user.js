const Controller = require('../controller/index');
const router = require('express').Router();
// const userValidation = require('../validations/user')

// const {getUser, loginUser, updateUser, deleteUser, registerUser, getUsers} = require("../controller/UserController");

router.get("/:id", Controller.UserController.getUser);

router.get("/", Controller.UserController.getUsers);

router.post("/login", Controller.UserController.loginUser);

router.post("/register", Controller.UserController.registerUser);

router.put("/:id", Controller.UserController.updateUser);

router.delete("/:id", Controller.UserController.deleteUser);

module.exports = router;