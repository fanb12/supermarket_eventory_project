// import the express module
const express = require("express");

// call the router method from express to create the router
const router = express.Router();

// Import the login controller
const loginControllerhouse = require("../controllers/login.controller");

// Create a route to handle the login request on post
router.post("/apihouse/employeehouse/login", loginControllerhouse.logIn);

// Export the router
module.exports = router;
