// import the query function from the db.config.js file
const connection = require("../config/db.config");

// import the crypto module to generate random id
const crypto = require("crypto");

async function createShopOutput(shopoutput) {
  // const input_hash = shopoutput.input_hash;
  // const query1 = "SELECT * FROM shop_input_product where input_hash = ?";

  // const rows1 = await connection.query(query1, [input_hash]);
  // console.log(input_hash);
  // const shop_input_id = rows1[0].shop_input_id;
  // console.log(rows1);
  //const shop_input_id = rows1[0].shop_input_id;

  //9console.log(shopoutput);
  //let createdCustomer = {};
  const query = ` INSERT INTO shop_output_product ( shop_output_name,shop_output_code, shop_output_quantity,shop_output_price, payment_id, shop_description, added_date) VALUES ( ?,?, ?, ?,?, ?,CURRENT_TIMESTAMP)
`;

  const rows = [
    shopoutput.shop_output_name,
    shopoutput.shop_output_code,
    shopoutput.shop_output_quantity,
    shopoutput.shop_output_price,
    shopoutput.payment_id,
    shopoutput.shop_description, // Handle missing customer_name
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

async function getAllShopOutput() {
  try {
    const query =
      "SELECT * FROM payment_ways INNER JOIN shop_output_product ON payment_ways.payment_id = shop_output_product.payment_id ORDER BY shop_output_product.shop_output_id DESC ";

    const rows = await connection.query(query);

    console.log(rows);

    return rows;
  } catch (error) {
    console.log(error);
  }
}

async function updateShopOutput(shopoutput) {
  console.log(shopoutput);

  const query =
    "UPDATE shop_output_product SET shop_output_name = ?,shop_output_code = ?, shop_output_quantity = ?, shop_output_price = ?, payment_id = ?,shop_description = ? WHERE shop_output_id = ?";

  const rows = await connection.query(query, [
    shopoutput.shop_output_name,
    shopoutput.shop_output_code,
    shopoutput.shop_output_quantity,
    shopoutput.shop_output_price,

    shopoutput.payment_id,
    shopoutput.shop_description,
    shopoutput.shop_output_id,
  ]);

  return rows;
}

async function getsingleShopOutput(shopoutput) {
  // console.log(service)

  const query = `SELECT * FROM payment_ways INNER JOIN shop_output_product ON payment_ways.payment_id = shop_output_product.payment_id WHERE shop_output_product.shop_output_id = ?`;

  const rows = await connection.query(query, [shopoutput]);

  console.log(rows);

  return rows;
}
async function deleteShopOutput(shopoutput) {
  // console.log(service)

  const query = "DELETE FROM shop_output_product WHERE shop_output_id = ?";

  const rows = await connection.query(query, [shopoutput]);

  console.log(rows);

  return rows;
}
module.exports = {
  deleteShopOutput,
  createShopOutput,
  getAllShopOutput,
  getsingleShopOutput,
  updateShopOutput,
};
