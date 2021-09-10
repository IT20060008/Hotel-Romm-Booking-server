const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reservationSchema = new Schema ({
    
    Customer_name : {
        type : String,
        required: true
    },

    National_Identy_Card_No:{
        type : String,
        required: true
    },

    Mobile:{
        type : Number,
        required: true
    },

    Date:{
        type : String,
        required: true
    }
})


const reservation = mongoose.model("reservation",reservationSchema) ;

module.exports = reservation;