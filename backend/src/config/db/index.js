const mongoose = require("mongoose");

// Connect database
async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://truongminhphuc2001:mambau2001@zigvyinterview.befbdif.mongodb.net/blog",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("connect successfully");
  } catch (error) {
    console.log("connect fail");
  }
}

module.exports = { connect };
