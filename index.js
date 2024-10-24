const express = require("express");
const mysql2 = require("mysql2");
const app = express();
const productRoute = require("./routes");
const PORT = 5000;
app.use(express.json());
app.use("/api", productRoute);
app.listen(PORT, () => {
  console.log(`port run`, PORT);
});
