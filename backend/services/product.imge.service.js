// import the query function from the db.config.js file
const connection = require("../config/db.config");

// import the crypto module to generate random id
const crypto = require("crypto");

// Import the bcrypt module
const bcrypt = require("bcryptjs");

// A function to create employee
async function createCustomerStatus(customer) {
 console.log(customer);
  const query =
    "INSERT INTO product_images (image_url, image_name, category_id, image_price, image_description, added_date)VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP)";

  const rows = [
    customer.image_url,
    customer.image_name,
    customer.category_id,
    customer.image_price,
    customer.image_description,
  ];
  try {
    const result = await connection.query(query, rows);
   console.log("result",result);
    return result;
  } catch (error) {
    console.error("Error inserting data:", error);
    throw error; // Re-throw the error for handling
  }
}

     // Return the ID of the inserted row
        
async function getSingleImage(image) {

const image_id = image;
const queryImage = "SELECT * FROM product_category INNER JOIN product_images ON product_category.category_id = product_images.category_id WHERE  product_images.id = ? ";

    const rows = await connection.query(queryImage, [image_id]);
  
    return rows; 
    
   
}

// Function to get all images
async function getAllImages() {     
      const query="SELECT * FROM product_category INNER JOIN product_images ON product_category.category_id = product_images.category_id ORDER BY product_images.id DESC ";
      
       const rows = await connection.query(query);
     //  //console.log(rows);
       return rows;

  }

// Function to edit product image information
async function editProductImage(image) {

      const queryImage = 
        'UPDATE product_images SET image_url = ?, image_name = ?, image_price = ?, category_id = ?, image_description = ? WHERE id = ?'
        
      const rows = await connection.query(queryImage, [
        image.image_url,
        image.image_name,
        image.image_price,
        image.category_id,
        image.image_description,
        image.id
      ]);
      //console.log("image",image);
      //console.log("rows",rows);
      return rows;
      
    
   
    
  }
  
  // Function to delete a product image
  async function deleteProductImage(image) {
    const imageId = image;
      const query = 'DELETE FROM product_images WHERE id = ?'
      const rows = await connection.query(query, [imageId]);
      return rows;
  }
  


module.exports = {
  createCustomerStatus,
 
  getSingleImage,
  getAllImages,
  editProductImage,
  deleteProductImage  
};
