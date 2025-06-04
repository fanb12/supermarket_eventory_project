const { query } = require("express");
const serviceShopInput = require("../services/shopinput.service");

async function createShopInput(req, res, next) {
  //   console.log(req.body);

  try {
    const newShopInput = await serviceShopInput.createShopInput(req.body);

    if (!newShopInput) {
      return res.status(400).json({
        error: "Failed to add the shopinput!",
      });
    } else {
      res.status(200).json({ status: "Shop inoput added successfully" });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: "Something went wrong!",
    });
  }
}

async function getAllShopInput(req, res, next) {
  try {
    const product = await serviceShopInput.getAllShopInput();

    if (!product) {
      res.status(400).json({
        error: "Failed to get all inputproduct!",
      });
    } else {
      res.status(200).json({
        status: "input product retrieved successfully!",
        product: product,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: "Something went wrong!",
    });
  }
}

async function updateShopInput(req, res, next) {
  // console.log(req.body)
  try {
    const updateShopInput = await serviceShopInput.updateShopInput(req.body);

    // console.log(updateService.affectedRows)

    const rows = updateShopInput.affectedRows;

    if (!updateShopInput) {
      return res.status(400).json({
        error: "Failed to update the Shop Input!",
      });
    } else if (rows === 1) {
      return res.status(200).json({
        status: "Shop Input Successful Updated!",
      });
    } else {
      return res.status(400).json({
        status: "Shop Input Update Incomplete!",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: "Something went wrong!",
    });
  }
}

async function getsingleSHopInput(req, res, next) {
  const shop_input_id = req.params.shop_input_id;

  // console.log(service_id)

  try {
    const singleShopInput = await serviceShopInput.getsingleShopInput(
      shop_input_id
    );

    // console.log(singleService[0].service_id);

    if (!singleShopInput[0]?.shop_input_id) {
      res.status(400).json({
        error: "Failed to get shop input!",
      });
    } else {
      res.status(200).json({
        status: "Shop input retrieved successfully! ",
        singleShopInput: singleShopInput,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: "Something went wrong!",
    });
  }
}
async function deleteSHopInput(req, res, next) {
  const shop_input_id = req.params.shop_input_id;

  try {
    const deleteCount = await serviceShopInput.deleteShopInput(shop_input_id);

    if (deleteCount === 0) {
      res.status(400).json({
        error: "Failed to delete shop input",
      });
      return;
    }

    res.status(200).json({
      status: "Shop input deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: "Something went wrong",
    });
  }
}
/**
 * Searches shop input records based on the provided date range.
 *
 * @param req - The request object containing the date range in the request body.
 * @param res - The response object.
 * @param next - The next middleware function.
 * @returns A promise that resolves to the JSON response containing the search results.
 */

module.exports = {
  deleteSHopInput,
  createShopInput,
  getAllShopInput,
  getsingleSHopInput,
  updateShopInput,
};
