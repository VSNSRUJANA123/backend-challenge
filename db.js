const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();
const db = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
});
db.getConnection((err, connection) => {
  if (err) {
    console.log("error to connect mysql", err);
  } else {
    console.log("mysql connected ");
    connection.release();
  }
});
module.exports = db;
