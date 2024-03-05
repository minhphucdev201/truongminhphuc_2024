const express = require("express");
const bodyParser = require("body-parser");
// const route = require("./src/routes/index.route");
const app = express();
const dotenv = require("dotenv");
const db = require("./src/config/db");
dotenv.config();

// route(app);
db.connect();
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
