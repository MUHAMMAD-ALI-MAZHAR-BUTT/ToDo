const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const dbConnection = require("./confiurations/dbconnection");
const routes = require("./routes/todoRoutes");

const app = express();
const PORT = process.env.PORT || 4000;

//Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  dbConnection(); // Connect to MongoDB when the server starts
  // it's a good practice to connect to the database when the server starts and disconnect when the server is stopped
});
