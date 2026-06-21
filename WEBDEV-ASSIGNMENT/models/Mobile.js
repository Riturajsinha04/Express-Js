const mongoose = require("mongoose");

const mobileSchema = new mongoose.Schema({
    brand:{
        type: String,
        required:true
    },
    model:{
        type: String,
        required: true
    },
    ram:{
        type: String,
        required: true
    },
    storage:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Mobile", mobileSchema, "AllMobile");