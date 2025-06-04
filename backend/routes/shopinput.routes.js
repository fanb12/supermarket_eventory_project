// import the express module
const express = require("express");

// call the router method from express to create the router
const router = express.Router();

// import the authMiddlew9are
const {
  verifyToken,
  isAdmin,
  isAdmin_Manager,
  isAdmin_Manager_Employee,
} = require("../middlewares/auth.middleware");

// import the customer controller
const shopinputhouseControllerhouse = require("../controllers/shopinput.controller");

// create a route to handle the service request in post
router.post(
  "/apihouse/shopinputhouse",

  [verifyToken],
  shopinputhouseControllerhouse.createShopInput
);

// create a route to handle the service request in get
router.get(
  "/apihouse/shopinputhouses",
  [verifyToken, isAdmin, isAdmin_Manager],
  shopinputhouseControllerhouse.getAllShopInput
);

// create a route to handle the customer request in put
router.put(
  "/apihouse/shopinputhouse/update",
  [verifyToken, isAdmin, isAdmin_Manager],
  shopinputhouseControllerhouse.updateShopInput
);
// create a route to handle the get single service request in get
router.get(
  "/apihouse/shopinputhouse/single/:shop_input_id",
  [verifyToken, isAdmin, isAdmin_Manager],
  shopinputhouseControllerhouse.getsingleSHopInput
);
router.delete(
  "/apihouse/shopinputhouse/delete/:shop_input_id",
  [verifyToken, isAdmin],
  shopinputhouseControllerhouse.deleteSHopInput
);
// export the router
module.exports = router;
