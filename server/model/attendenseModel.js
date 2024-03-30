const mongoose = require("mongoose");

const attendenseSchema = new mongoose.Schema(
  {
    res_id: {
      type: mongoose.ObjectId,
      ref: "Restaurants",
    },
    branchID: {
      type: mongoose.ObjectId,
      ref: "Branchs",
    },
    date: {
      type: String,
    },
    month: {
      type: String,
    },
    attendense: [
      {
        user_id: {
          type: mongoose.ObjectId,
          ref: "users",
        },
        status: {
          type: Boolean,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("attendense", attendenseSchema);
