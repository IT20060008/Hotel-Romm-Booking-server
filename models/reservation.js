const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reservationSchema = new Schema(
  {
    Customer_name: {
      type: String,
      required: true,
    },

    National_Identy_Card_No: {
      type: String,
      required: true,
    },

    Mobile: {
      type: Number,
      required: true,
    },

    Email: {
      type: String,
      required: true,
    },

    From_Date: {
      type: Date,
      required: true,
    },

    To_Date: {
      type: Date,
      required: true,
    },

    Payment_Option: {
      type: String,
      required: true,
    },
  },
  {
    collection: "reservation",
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const reservation = mongoose.model("reservation", reservationSchema);

module.exports = reservation;
