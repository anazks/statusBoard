const mongoose = require("mongoose");



const newsUpdates = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
})



module.exports = mongoose.model("news", newsUpdates);