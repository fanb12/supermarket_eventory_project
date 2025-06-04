// import the express module
const express = require("express");

// call the router method from express to create the router
const router = express.Router();

// import the authMiddleware
const {
  verifyToken,
  isAdmin,
  isAdmin_Manager,
  isAdmin_Manager_Employee,
} = require("../middlewares/auth.middleware");

// import the customer controller
const storeInputController = require("../controllers/storeinput.controller");

// create a route to handle the service request in post
router.post(
  "/api/storeinput",
  [verifyToken, isAdmin, isAdmin_Manager],
  storeInputController.createStoreInput
);

// create a route to handle the service request in get
router.get(
  "/api/storeinputs",
  [verifyToken, isAdmin, isAdmin_Manager],
  storeInputController.getAllStoreInput
);

// create a route to handle the customer request in put
router.put(
  "/api/storeinput/update",
  [verifyToken, isAdmin, isAdmin_Manager],
  storeInputController.updateStoreInput
);

// create a route to handle the get single service request in get
router.get(
  "/api/storeinput/single/:store_input_id",
  [verifyToken, isAdmin_Manager, isAdmin_Manager],
  storeInputController.getsingleStoreInput
);
router.delete(
  "/api/storeinput/delete/:store_input_id",
  [verifyToken, isAdmin],
  storeInputController.deleteStoreInput
);
// export the router
module.exports = router;
