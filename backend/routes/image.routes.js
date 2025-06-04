// import the express module
const upload = require("../config/multerConfig");

const express = require("express");
const path = require("path");

// import the authMiddleware
const {
  verifyToken,
  isAdmin,
  isAdmin_Manager,
  isAdmin_Manager_Employee,
} = require("../middlewares/auth.middleware");

const router = express.Router();
router.use('/images', express.static(path.join(__dirname, '../uploads')));
// import the customer controller
const productionController = require("../controllers/product_image.controller");

// create a route to handle the service request in post
router.post(
  "/api/uploadImage", upload.single('image'),

  [verifyToken, isAdmin],
  productionController.createImages
);

// create a route to handle the service request in get
router.get(
  "/api/images",
  //[verifyToken, isAdmin,isAdmin_Manager],
  productionController.getAllImages
);

// create a route to handle the customer request in put
router.put(
  "/api/updateImage", upload.single('image'),

  [verifyToken, isAdmin],
  productionController.updateImages
);

// create a route to handle the get single service request in get
router.get(
  "/api/image/single/:id",
  [verifyToken, isAdmin,isAdmin_Manager],
  productionController.getsingleImages
);
router.delete(
  "/api/images/delete/:image_id",
  [verifyToken, isAdmin],
  productionController.deleteImages
);
// export the router
module.exports = router;
