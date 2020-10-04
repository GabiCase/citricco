const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      default: "unknown",
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      default: 0,
    },
    image: {
      type: String,
      default: "",
    },
    category: {
      type: [String],
      enum: ["no", "se", "bla", "bla"],
    },
    ownwer: {
      type: Schema.Types.ObjectId,
      rel: "user",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("product", productSchema);
module.exports = Product;
