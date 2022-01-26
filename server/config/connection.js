const mongoose = require("mongoose");

mongoose.createConnection(process.env.MONGODB_URI || "mongodb://localhost/jester", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
