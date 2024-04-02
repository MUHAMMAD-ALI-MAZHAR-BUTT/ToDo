const mongoose =require("mongoose");

async function dbConnection() {
  try {
    await mongoose.connect(process.env.MONGOOSE_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: {conn.connection.host}`);
  } catch (e) {
    console.error("Error connecting to Mongoose:", e.message);
    process.exit(1); // Exit the process if unable to connect to MongoDB
  }
}

module.exports=dbConnection;
