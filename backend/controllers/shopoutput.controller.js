const { query } = require("express");
const serviceShopOutput = require("../services/shopoutput.service");

async function createShopOutput(req, res, next) {
  //   console.log(req.body);

  try {
    const newShopOutPut = await serviceShopOutput.createShopOutput(req.body);

    if (!newShopOutPut) {
      return res.status(400).json({
        error: "Failed to add the shopoutput!",
      });
    } else {
      res.status(200).json({ status: "Shopoutput added successfully" });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: "Something went wrong!",
    });
  }
}

async function getAllShopOutput(req, res, next) {
  try {
    const shopuoutput = await serviceShopOutput.getAllShopOutput();

    if (!shopuoutput) {
      res.status(400).json({
        error: "Failed to get all shopoutput!",
      });
    } else {
      res.status(200).json({
        status: "Shopoutput retrieved successfully!",
        services: shopuoutput,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: "Something went wrong!",
    });
  }
}

async function updateShopOutput(req, res, next) {
  // console.log(req.body)
  try {
    const updateShopOutput = await serviceShopOutput.updateShopOutput(req.body);

    // console.log(updateService.affectedRows)

    const rows = updateShopOutput.affectedRows;

    if (!updateShopOutput) {
      return res.status(400).json({
        error: "Failed to update the shopoutput!",
      });
    } else if (rows === 1) {
      return res.status(200).json({
        status: "Shopoutput Successful Updated!",
      });
    } else {
      return res.status(400).json({
        status: "Shopoutput Update Incomplete!",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: "Something went wrong!",
    });
  }
}

async function getsingleShopOutput(req, res, next) {
  const shop_output_id = req.params.shop_output_id;

  // console.log(service_id)

  try {
    const singleShopOutput = await serviceShopOutput.getsingleShopOutput(
      shop_output_id
    );

    // console.log(singleService[0].service_id);

    if (!singleShopOutput[0]?.shop_output_id) {
      res.status(400).json({
        error: "Failed to get shopoutput!",
      });
    } else {
      res.status(200).json({
        status: "Shopoutput retrieved successfully! ",
        singleShopOutput: singleShopOutput,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: "Something went wrong!",
    });
  }
}
async function deleteSHopOutput(req, res, next) {
  const shop_output_id = req.params.shop_output_id;

  try {
    const deleteCount = await serviceShopOutput.deleteShopOutput(
      shop_output_id
    );

    if (deleteCount === 0) {
      res.status(400).json({
        error: "Failed to delete shop output",
      });
      return;
    }

    res.status(200).json({
      status: "Shop output deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: "Something went wrong",
    });
  }
}
module.exports = {
  deleteSHopOutput,
  createShopOutput,
  getAllShopOutput,
  updateShopOutput,
  getsingleShopOutput,
};
