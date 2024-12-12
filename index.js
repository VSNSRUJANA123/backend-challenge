const express = require("express");
const mysql2 = require("mysql2");
const app = express();
const productRoute = require("./routes");
const PORT = 5000;
app.use(express.json());
app.use("/api", productRoute);
app.get("/", (req, res) => {
  return res.send("congrats🎉 you successfully deployed the backend project");
});
app.listen(PORT, () => {
  console.log(`port run`, PORT);
});
