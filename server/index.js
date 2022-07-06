const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.post("/api", (req, res) => {
  console.log(req.data);
});
app.listen(5000, () => {
  console.log("Server Started at port 5000");
});
