const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
// dotenv config
dotenv.config();

// mongodb connection
connectDB()
// rest object
const app = express();

// middleware
app.use(express.json());
app.use(morgan("dev"));

// CORS middleware
app.use(cors());

// routes
app.use("/api/v1/user",require("./routes/user.route.js"))


// listen
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(
    `server is running in ${process.env.NODE_MODE} MODE at port ${port}`.bgCyan.white
  );
});
