const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Database is connected");
  })
  .catch((e) => {
    console.log("Database Error: ", e);
  });
