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
const shopoutputhouseController = require("../controllers/shopoutput.controller");

// create a route to handle the service request in post
router.post(
  "/apihouse/shopoutputhouse",
  [verifyToken],
  shopoutputhouseController.createShopOutput
);

// create a route to handle the service request in get
router.get(
  "/apihouse/shopoutputhouses",
  [verifyToken, isAdmin, isAdmin_Manager],
  shopoutputhouseController.getAllShopOutput
);

// create a route to handle the customer request in put
router.put(
  "/apihouse/shopoutputhouse/update",
  [verifyToken, isAdmin, isAdmin_Manager],
  shopoutputhouseController.updateShopOutput
);

// create a route to handle the get single service request in get
router.get(
  "/apihouse/shopoutputhouse/single/:shop_output_id",
  [verifyToken, isAdmin, isAdmin_Manager],
  shopoutputhouseController.getsingleShopOutput
);
router.delete(
  "/apihouse/shopoutputhouse/delete/:shop_output_id",
  [verifyToken, isAdmin],
  shopoutputhouseController.deleteSHopOutput
);
// export the router
module.exports = router;
