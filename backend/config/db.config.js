// Import the mysql2 module Promise Wrapper
const mysql = require("mysql2/promise");
const { hostname } = require("os");

// Prepare connection parameters we use to connect to the database
const dbconfig = {
  connectionLimit: 10,
  // port: 5222,
  password: process.env.DB_PASS,
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
};

console.log(
  process.env.DB_HOST,
  process.env.DB_NAME,
  process.env.DB_PASS,
  process.env.DB_USER
);

// create the connection pool.
const pool = mysql.createPool(dbconfig);

// Prepare a function that will execute the SQL queries asynchronously
async function query(sql, params) {
  try {
    const [rows, fields] = await pool.execute(sql, params);
    return rows;
  } catch (err) {
    console.log(err.message);
  }
}

// Export the query function for use in the application
module.exports = { query };
