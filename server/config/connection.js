const mongoose = require("mongoose");
require("dotenv").config();

mongoose.createConnection(process.env.MONGODB_URI || "mongodb://localhost/jester", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
