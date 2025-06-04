// import the query function from the db.config.js file
const connection = require("../config/db.config");

// import the crypto module to generate random id
const crypto = require("crypto");

async function createStoreInput(storeinput) {
  // console.log(servicee)
  const hash_id = crypto.randomUUID();
  const query =
    "INSERT INTO store_input_product (store_hash,store_input_name,store_input_quantity,store_input_price,store_description,added_date) VALUES(?,?,?,?,?,CURRENT_TIMESTAMP)";

  const rows = await connection.query(query, [
    hash_id,
    storeinput.store_input_name,
    storeinput.store_input_quantity,
    storeinput.store_input_price,
    storeinput.store_description,
  ]);

  console.log(rows);

  return rows;
}

async function getAllStoreInput() {
  try {
    const query =
      "SELECT * FROM store_input_product ORDER BY store_input_id DESC";

    const rows = await connection.query(query);

    console.log(rows);

    return rows;
  } catch (error) {
    console.log(error);
  }
}

async function updateStoreInput(storeinput) {
  console.log(storeinput);

  const query =
    "UPDATE store_input_product SET store_input_name = ?, store_input_quantity = ?, store_input_price = ?,store_description = ? WHERE store_input_id = ?";

  const rows = await connection.query(query, [
    storeinput.store_input_name,
    storeinput.store_input_quantity,
    storeinput.store_input_price,
    storeinput.store_description,
    storeinput.store_input_id,
  ]);

  return rows;
}

async function getsingleStoreInput(storeinput) {
  const query = "SELECT * FROM store_input_product WHERE store_input_id = ?";

  const rows = await connection.query(query, [storeinput]);

  console.log(rows);

  return rows;
}
async function deleteStoreInput(storeinput) {
  // console.log(service)

  const query = "DELETE FROM store_input_product WHERE store_input_id = ?";

  const rows = await connection.query(query, [storeinput]);

  console.log(rows);

  return rows;
}
module.exports = {
  deleteStoreInput,
  createStoreInput,
  getAllStoreInput,
  getsingleStoreInput,
  updateStoreInput,
};
