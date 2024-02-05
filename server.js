const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
// dotenv config
dotenv.config();
// rest object
const app = express();

// middleware
app.use(express.json());
app.use(morgan("dev"));

// routes
app.get("/", (req, res) => {
  res.status(200).send({
    msg: "server running",
  });
});

// listen
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(
    `server is running in ${process.env.NODE_MODE} MODE at port ${port}`.bgCyan.white
  );
});
