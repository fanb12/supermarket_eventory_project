// import the query function from the db.config.js file
const connection = require("../config/db.config");

// import the crypto module to generate random id
const crypto = require("crypto");

async function createShopInput(shopinput) {
  // console.log(servicee)
  const hash_id = crypto.randomUUID();
  //   console.log(hash_id)
  const query =
    "INSERT INTO shop_input_product (input_hash,shop_input_name, shop_input_quantity, shop_input_code, shop_input_price, shop_description,shop_remark, added_date) VALUES(?,?,?,?,?,?,?,CURRENT_TIMESTAMP)";

  const rows = await connection.query(query, [
    hash_id,
    shopinput.shop_input_name,
    shopinput.shop_input_quantity,
    shopinput.shop_input_code,
    shopinput.shop_input_price,
    shopinput.shop_description,
    shopinput.shop_remark,
  ]);

  console.log(rows);

  return rows;
}

async function getAllShopInput() {
  try {
    const query =
      "SELECT * FROM shop_input_product ORDER BY shop_input_id DESC";

    const rows = await connection.query(query);

    console.log(rows);

    return rows;
  } catch (error) {
    console.log(error);
  }
}
9;

async function updateShopInput(shopinput) {
  console.log(shopinput);

  const query =
    "UPDATE shop_input_product SET shop_input_name = ?, shop_input_quantity = ?, shop_input_price = ?, shop_input_code = ?, shop_description = ?,shop_remark = ? WHERE shop_input_id = ?";

  const rows = await connection.query(query, [
    shopinput.shop_input_name,
    shopinput.shop_input_quantity,
    shopinput.shop_input_price,
    shopinput.shop_input_code,
    shopinput.shop_description,
    shopinput.shop_remark,
    shopinput.shop_input_id,
  ]);

  return rows;
}

async function deleteShopInput(shopinput) {
  // console.log(service)

  const query = "DELETE FROM shop_input_product WHERE shop_input_id = ?";

  const rows = await connection.query(query, [shopinput]);

  console.log(rows);

  return rows;
}
async function getsingleShopInput(shopinput) {
  // console.log(service)

  const query = "SELECT * FROM shop_input_product WHERE shop_input_id = ?";

  const rows = await connection.query(query, [shopinput]);

  console.log(rows);

  return rows;
}
async function searchShopInput(shop) {
  //const { from, to } = req.body;
  const query = `SELECT * FROM shop_input_product WHERE added_date >= ? AND added_date <= ? ORDER BY added_date DESC`;

  const [rows] = await connection.query(query, [shop.from, shop.to]);
  console.log(rows);
  return rows;
}

module.exports = {
  deleteShopInput,
  createShopInput,
  getAllShopInput,
  getsingleShopInput,
  updateShopInput,
  searchShopInput,
};
