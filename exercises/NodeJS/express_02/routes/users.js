const express = require("express");
const router = express.Router();

//IMPORT CONTROLLER
const usersController = require("../controllers/usersController");

router.get('/',usersController.showUsers)
router.get('/add',usersController.addUserForm)
router.post('/add',usersController.addUserLogic)

module.exports = router;

// /users/users