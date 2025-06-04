// import the express module
const express = require("express");

// call the router method from express to create the router
const router = express.Router();

// import the authMiddleware
const {
  verifyToken,
  isAdmin,
  isAdmin_Manager,
} = require("../middlewares/auth.middleware");

// import the employee controller
const employeeController = require("../controllers/employee.controller");

// create a route to handle the employee request in post
router.post(
  "/houseapi/houseemployee",
  [verifyToken, isAdmin],
  employeeController.createEmployee
);

// create a route to handle the get all employee request in get
router.get(
  "/houseapi/houseemployees",
  [verifyToken, isAdmin_Manager, isAdmin],
  employeeController.getAllEmployeees
);

// create a route to handle the get single employee request in get
router.get(
  "/houseapi/houseemployee/single/:employee_id",
  [verifyToken, isAdmin_Manager, isAdmin],
  employeeController.getSingleEmployee
);

// create a route to handle the employee request in put
router.put(
  "/houseapi/houseemployee/update",
  // [verifyToken, isAdmin],
  employeeController.updateEmployee
);

// create a route to handle the employee request in delete
router.delete(
  "/api/employee/delete",
  // [verifyToken, isAdmin],
  employeeController.deleteEmployee
);

// export the router
module.exports = router;
