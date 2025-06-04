const { query } = require("express");
const serviceStoreInput = require("../services/storeinput.service");

async function createStoreInput(req, res, next) {
  //   console.log(req.body);

  try {
    const newstoreInput = await serviceStoreInput.createStoreInput(req.body);

    if (!newstoreInput) {
      return res.status(400).json({
        error: "Failed to add the storeinput!",
      });
    } else {
      res.status(200).json({ status: "store inoput added successfully" });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: "Something went wrong!",
    });
  }
}

async function getAllStoreInput(req, res, next) {
  try {
    const product = await serviceStoreInput.getAllStoreInput();

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

async function updateStoreInput(req, res, next) {
  // console.log(req.body)
  try {
    const updatestoreInput = await serviceStoreInput.updateStoreInput(req.body);

    // console.log(updateService.affectedRows)

    const rows = updatestoreInput.affectedRows;

    if (!updatestoreInput) {
      return res.status(400).json({
        error: "Failed to update the store Input!",
      });
    } else if (rows === 1) {
      return res.status(200).json({
        status: "store Input Successful Updated!",
      });
    } else {
      return res.status(400).json({
        status: "store Input Update Incomplete!",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: "Something went wrong!",
    });
  }
}

async function getsingleStoreInput(req, res, next) {
  const store_input_id = req.params.store_input_id;

  // console.log(service_id)

  try {
    const singleStoreInput = await serviceStoreInput.getsingleStoreInput(
      store_input_id
    );

    // console.log(singleService[0].service_id);

    if (!singleStoreInput[0]?.store_input_id) {
      res.status(400).json({
        error: "Failed to get store input!",
      });
    } else {
      res.status(200).json({
        status: "store input retrieved successfully! ",
        singlestoreInput: singleStoreInput,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: "Something went wrong!",
    });
  }
}
async function deleteStoreInput(req, res, next) {
  const store_input_id = req.params.store_input_id;

  try {
    const deleteCount = await serviceStoreInput.deleteStoreInput(
      store_input_id
    );

    if (deleteCount === 0) {
      res.status(400).json({
        error: "Failed to delete store input",
      });
      return;
    }

    res.status(200).json({
      status: "Store input deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: "Something went wrong",
    });
  }
}
module.exports = {
  deleteStoreInput,
  createStoreInput,
  getAllStoreInput,
  getsingleStoreInput,
  updateStoreInput,
};
