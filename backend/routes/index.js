// import the express module
const express = require("express");

// call the router method from express to create the router
const router = express.Router();

const storeinput = require("./storeinput.routes");
const storeoutput = require("./storeoutput.routes");
const image = require("./image.routes");
//import shop input routes
const houseshopinput = require("./shopinput.routes");

//import shop output routes
const houseshopoutput = require("./shopoutput.routes");

// import the install routes
const houseinstallRouter = require("./install.routes");

// import the employee routes
const houseemployeeRouter = require("./employee.routes");

// import the login routes
const houselogInRouter = require("./login.routes");

// Add the install router to the main router
router.use(houseinstallRouter);

// Add the employee router to the main router
router.use(houseemployeeRouter);

// Add the shopoutput router to the main router
router.use(houseshopoutput);
// Add the shopoutput router to the main router

router.use(houseshopinput);
// Add the image router to the main router
router.use(image);
// Add the shopinput-1 router to the main router

router.use(storeinput);
// Add the storeoutput router to the main router
router.use(storeoutput);

// Add the login router to the main router
router.use(houselogInRouter);

// export the router
module.exports = router;
