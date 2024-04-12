const mongoose = require("mongoose");

const blindScheme = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    confirmPassword:{
        type: String
    }
})

module.exports = mongoose.model("Blind", blindScheme);