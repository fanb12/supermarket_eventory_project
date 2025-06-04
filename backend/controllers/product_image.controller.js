const { query } = require("express");
const serviceImages = require("../services/product.imge.service");
const e = require("express");


async function createImages(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded." });
    }

    const imageUrl = `http://localhost:5000/images/${req.file.filename}`;
    const image = {
      image_url: imageUrl,
      image_name: req.body.image_name,
      image_price: req.body.image_price,
      category_id: req.body.category_id,
      image_description: req.body.image_description,
    };
console.log("image", image);
    // Save image to database (use your service logic here)
    const newImage = await serviceImages.createCustomerStatus(image);
    if (!newImage) {
      return res.status(400).json({ error: "Failed to add the image!" });
    } else {
      return res.status(200).json({ status: "Image added successfully" });
    }
  } catch (error) {
    console.error("Error in createImages:", error);
    return res.status(500).json({ error: "Something went wrong!" });
  }
}


async function getAllImages(req, res, next) {
  try {
    const product = await serviceImages.getAllImages();

    if (!product) {
      res.status(400).json({
        error: "Failed to get all inputproduct!"|| error
      });
    } else {
      res.status(200).json({
        status: "input product retrieved successfully!",
        product: product,
      });
    }
  } catch (error) {
    //console.log(error);
    res.status(400).json({
      error: "Something went wrong!",
    });
  }
}

async function updateImages(req, res, next) {
  //console.log(req.body);
  try {
   
    const categoryId = req.body.category_id

    console.log("category_id:", categoryId); // Add this line for debugging
    // Validate category_id
    
    const imagePrice = req.body.image_price; // Define imagePrice

    const image_url = `http://localhost:5000/images/${req.file.filename}`;
    const image = {
        image_url: image_url,
        image_name: req.body.image_name,
        image_price: imagePrice,
        category_id: categoryId,
        image_description: req.body.image_description,
        id: req.body.id
    };
    const updateShopInput = await serviceImages.editProductImage(image);


    console.log("updateShopInput",updateShopInput);

    if (!updateShopInput) {
      return res.status(400).json({
        error: "Failed to update the Shop Input!",
      });
    }

    const rows = updateShopInput.affectedRows; // Assuming affectedRows indicates the number of rows updated
    console.log("rowsnn", rows);
    if (rows === 1) {
      return res.status(200).json({
        status: "Product Successfully Updated!",
      });
    } else {
      return res.status(400).json({
        status: "Shop Input Update Incomplete!",
      });
    }
  } catch (error) {
    //console.log(error);
    res.status(400).json({
      error: "Something went wrong!",
    });
  }
}

async function getsingleImages(req, res) {
  const id = req.params.id;

   //console.log(id)

  try {
    const singleShopInput = await serviceImages.getSingleImage(
      id
    );

//console.log(singleShopInput[0]?.id);

    if (!singleShopInput[0]?.id) {
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
    //console.log(error);
    res.status(400).json({
      error: "Something went wrong!",
    });
  }
}
async function deleteImages(req, res, next) {
  const Images_id = req.params.Images_id;

  try {
    const deleteCount = await serviceImages.deleteProductImage(Images_id);

    if (deleteCount === 0) {
      res.status(400).json({
        error: "Failed to delete product",
      });
      return;
    }

    res.status(200).json({
      status: "product deleted successfully",
    });
  } catch (error) {
    //console.log(error);
    res.status(400).json({
      error: "Something went wrong",
    });
  }
}
module.exports = {
  deleteImages,
  createImages,
  getAllImages,
  getsingleImages,
  updateImages
};
