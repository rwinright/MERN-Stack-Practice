//Imports
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require('dotenv').config(); //Configure environment variables

//Setup middlewares
const app = express(); //Create express server
const port = process.env.PORT || 5000;

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true //MongoDB deprecated ensureCreateIndex
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB connected successfully");
})

//Middleware
app.use(cors()); //Make app use CORS
app.use(express.json()); //Parse json since we send/receive json to/from server.

const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

//Define the app routes
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => { //Starts listening on the port
  console.log(`App is running on port ${port}`);
})
