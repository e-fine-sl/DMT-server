const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // dbName: 'dmt_db' is set explicitly here so the correct database is
    // ALWAYS used regardless of what is written in the MONGODB_URI string.
    // This prevents Mongoose from defaulting to the "test" database.
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'dmt_db'
    });
    console.log(`[DMT-DB] MongoDB Connected: ${conn.connection.host}`);
    console.log(`[DMT-DB] Database Name: ${conn.connection.name}`);
    // Must print "dmt_db" — confirming it is separate from e-Fine SL DB
  } catch (err) {
    console.error(`[DMT-DB] Connection Error: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
