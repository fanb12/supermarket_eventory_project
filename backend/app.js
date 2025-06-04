// import the express module
const express = require("express");

// import the dotenv module and call the config method to load the enviroment variable
require("dotenv").config();

// import the sanitizer module
const sanitize = require("sanitize");

// import the cors module
const cors = require("cors");

// Set up the Cors options to allow requests from our front-end
const corsOptions = {
  origin: process.env.FRONTEND_URL,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// create a variable to hold our port number
const port = process.env.PORT;

// import the router
const router = require("./routes");

const imagesRoutes = require('./routes/image.routes');
//import imagesRoutes from "./routes/images.routes.js";
//import dotenv from "dotenv";
//app.use(cors());
const app = express();
app.use(express.json());
app.use('/api/images', imagesRoutes);

// create a webserver


// add the CORS middleware
app.use(cors(corsOptions));

// Add the express.json middleware to the application


// Add the sanitizer to the express middleware
app.use(sanitize.middleware);

// Add the routes to the application as middleware
app.use(router);
app.use("/listen", (req, res) => {
  res.send("I am listening");
});

app.listen(port, () => {
  console.log(`Server Running on Port: ${port}`);
});

module.exports = app;
