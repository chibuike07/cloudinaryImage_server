const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageUpload = new Schema(
  {
    image: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("imageUpload", ImageUpload);
