const { query } = require("express");
const serviceStoreOutput = require("../services/stroreoutput.service");

async function createStoreOutput(req, res, next) {
  //   console.log(req.body);

  try {
    const newstoreOutPut = await serviceStoreOutput.createStoreOutput(req.body);

    if (!newstoreOutPut) {
      return res.status(400).json({
        error: "Failed to add the storeoutput!",
      });
    } else {
      res.status(200).json({ status: "storeoutput added successfully" });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: "Something went wrong!",
    });
  }
}

async function getAllStoreOutput(req, res, next) {
  try {
    const storeuoutput = await serviceStoreOutput.getAllStoreOutput();

    if (!storeuoutput) {
      res.status(400).json({
        error: "Failed to get all storeoutput!",
      });
    } else {
      res.status(200).json({
        status: "storeoutput retrieved successfully!",
        services: storeuoutput,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: "Something went wrong!",
    });
  }
}

async function updateStoreOutput(req, res, next) {
  // console.log(req.body)
  try {
    const updatestoreOutput = await serviceStoreOutput.updateStoreOutput(
      req.body
    );

    // console.log(updateService.affectedRows)

    const rows = updatestoreOutput.affectedRows;

    if (!updatestoreOutput) {
      return res.status(400).json({
        error: "Failed to update the storeoutput!",
      });
    } else if (rows === 1) {
      return res.status(200).json({
        status: "storeoutput Successful Updated!",
      });
    } else {
      return res.status(400).json({
        status: "storeoutput Update Incomplete!",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: "Something went wrong!",
    });
  }
}

async function getsingleStoreOutput(req, res, next) {
  const store_output_id = req.params.store_output_id;

  // console.log(service_id)

  try {
    const singlestoreOutput = await serviceStoreOutput.getsingleStoreOutput(
      store_output_id
    );

    // console.log(singleService[0].service_id);

    if (!singlestoreOutput[0]?.store_output_id) {
      res.status(400).json({
        error: "Failed to get storeoutput!",
      });
    } else {
      res.status(200).json({
        status: "storeoutput retrieved successfully! ",
        singlestoreOutput: singlestoreOutput,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: "Something went wrong!",
    });
  }
}
async function deleteStoreOutput(req, res, next) {
  const store_output_id = req.params.store_output_id;

  try {
    const deleteCount = await serviceStoreOutput.deleteStoreOutput(
      store_output_id
    );

    if (deleteCount === 0) {
      res.status(400).json({
        error: "Failed to delete store output",
      });
      return;
    }

    res.status(200).json({
      status: "Store output deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: "Something went wrong",
    });
  }
}
module.exports = {
  deleteStoreOutput,
  createStoreOutput,
  getAllStoreOutput,
  updateStoreOutput,
  getsingleStoreOutput,
};
