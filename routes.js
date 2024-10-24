const mysql2 = require("mysql2");
const db = require("./db");
const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  const query = `select * from producttable`;
  db.query(query, (err, result) => {
    if (err) {
      return res.send("Failed to fetch data").status(500);
    }

    return res.status(200).json(result);
  });
});

router.post("/", (req, res) => {
  const { name, price, quality } = req.body;
  if (!name || !price || !quality) {
    console.log("required all fields");
  }
  const query = `insert into producttable (name,price,quality) values (?,?,?)`;
  console.log(query);
  db.query(query, [name, price, quality], (err, result) => {
    if (err) {
      return res.status(500).send("there is not table");
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "failed to add product" });
    }
    return res.status(200).json({ message: "product added" });
  });
});
router.get("/sum-product", (req, res) => {
  const query = "select sum(price) as sum_of_product_price from producttable";
  db.query(query, (err, result) => {
    if (err) {
      return res.status(500).send("error to fetch sum product price");
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "failed to fetch " });
    }
    return res.status(200).json(result);
  });
});
module.exports = router;
