const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://mongodb+srv://user-1:jester#1@cluster0.bg2a7.mongodb.net/jester?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
  // useFindAndModify: false,
});

module.exports = mongoose.connection;
