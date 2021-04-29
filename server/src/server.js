const express = require("express");
const morgan = require("morgan");
const app = express();
const logger = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");

require("dotenv").config({ path: `${__dirname}/config/.env` });

// Config
app.set("PORT", process.env.PORT);
app.use(cors({ origin: process.env.CLIENT_URL }));

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Routes
const routes = require("./routes/routes");
app.use(routes);

// Database
require("./database/db");

// Server
app.listen(app.get("PORT"), () => {
  console.log("Server listening on port", app.get("PORT"));
});
