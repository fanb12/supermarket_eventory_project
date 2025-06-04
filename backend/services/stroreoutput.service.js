// import the query function from the db.config.js file
const connection = require("../config/db.config");

// import the crypto module to generate random id
const crypto = require("crypto");

async function createStoreOutput(storeoutput) {
  console.log(storeoutput);

  const query = `
    INSERT INTO store_output_product (store_output_name, store_output_quantity, store_output_price, customer_name, color,store_description, added_date)
    VALUES (?, ?, ?, ?,?,?,  CURRENT_TIMESTAMP)
`;

  const rows = [
    storeoutput.store_output_name,
    storeoutput.store_output_quantity,
    storeoutput.store_output_price,
    storeoutput.customer_name,
    storeoutput.color,
    storeoutput.store_description, // Handle missing customer_name
  ];
  try {
    const result = await connection.query(query, rows);
    console.log(result);
    return result;
  } catch (error) {
    console.error("Error inserting data:", error);
    throw error; // Re-throw the error for handling
  }
}

async function getAllStoreOutput() {
  try {
    const query =
      "SELECT * FROM store_output_product ORDER BY store_output_id DESC";

    const rows = await connection.query(query);

    console.log(rows);

    return rows;
  } catch (error) {
    console.log(error);
  }
}

async function updateStoreOutput(storeoutput) {
  console.log(storeoutput);

  const query =
    "UPDATE store_output_product SET store_output_name = ?, store_output_quantity = ?, store_output_price = ?, customer_name = ?, color = ?,store_description = ? WHERE store_output_id = ?";

  const rows = await connection.query(query, [
    storeoutput.store_output_name,
    storeoutput.store_output_quantity,
    storeoutput.store_output_price,
    storeoutput.customer_name,
    storeoutput.color,
    storeoutput.store_description,
    storeoutput.store_output_id,
  ]);

  return rows;
}

async function getsingleStoreOutput(storeoutput) {
  // console.log(service)

  const query = `SELECT * FROM store_output_product WHERE store_output_id = ?`;

  const rows = await connection.query(query, [storeoutput]);

  console.log(rows);

  return rows;
}
async function deleteStoreOutput(storeinput) {
  // console.log(service)

  const query = "DELETE FROM store_output_product WHERE  store_output_id = ?";

  const rows = await connection.query(query, [storeinput]);

  console.log(rows);

  return rows;
}
module.exports = {
  deleteStoreOutput,
  createStoreOutput,
  getAllStoreOutput,
  getsingleStoreOutput,
  updateStoreOutput,
};
