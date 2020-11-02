const express = require("express");
const mongoose = require("mongoose"); // new
const cors = require("cors");
const ImageUploadRouter = require("./route/uploadImageRoute");

//defining mongoose options
const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

const app = express();

//adding the middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", ImageUploadRouter);

// Connect to MongoDB database
mongoose
  .connect("mongodb://localhost:07017(express.server)", options)
  .then(() => {
    app.listen(5000, () => {
      console.log("Server has started!");
    });
  });
