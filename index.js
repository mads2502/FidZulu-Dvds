const express = require("express");
const bodyparser = require("body-parser");
const dotenv = require("dotenv");
const router = require("./api/router/router");
//config
dotenv.config({ path: "./config.env" });
const app = express();
app.use(bodyparser.json());
const PORT = process.env.PORT | 3033;
app.use("/api", router);
app.listen(PORT, () => {
  console.log("Listening to port 3033");
});

// handle unhandled promises rejection
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
