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
const storeOutputController = require("../controllers/storeoutput.controller");

// create a route to handle the service request in post
router.post(
  "/api/storeoutput",
  //   [verifyToken, isAdmin],
  storeOutputController.createStoreOutput
);

// create a route to handle the service request in get
router.get(
  "/api/storeoutputs",
  [verifyToken, isAdmin],
  storeOutputController.getAllStoreOutput
);

// create a route to handle the customer request in put
router.put(
  "/api/storeoutput/update",
  [verifyToken, isAdmin],
  storeOutputController.updateStoreOutput
);

// create a route to handle the get single service request in get
router.get(
  "/api/storeoutput/single/:store_output_id",
  [verifyToken, isAdmin, isAdmin_Manager],
  storeOutputController.getsingleStoreOutput
);
router.delete(
  "/api/storeoutput/delete/:store_output_id",
  [verifyToken, isAdmin],
  storeOutputController.deleteStoreOutput
);
// export the router
module.exports = router;
