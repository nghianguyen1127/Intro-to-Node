const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
var cors = require("cors");

const { myOwnMiddleware } = require("./middlewares/myOwnMiddleware");
const postRoutes = require("./routes/post");

// Env Configurarion
dotenv.config();

// Mongo Connection

mongoose
  .connect(process.env.MONGO_URI, { useUnifiedTopology: true })
  .then(() => console.log("Connected DB"));
mongoose.connection.on("error", (err) => {
  console.log("Connection error " + err.message);
});

// Middleware Custom
app.use(myOwnMiddleware);
app.use(cors());
app.use(bodyParser.json()); // or express.json()
app.use(expressValidator());
app.use("/", postRoutes);

const PORT = process.env.PORT || 7777;
app.listen(PORT);
