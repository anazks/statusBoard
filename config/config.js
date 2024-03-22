const mongoose = require("mongoose");


const connect = () => {
  let url ='mongodb+srv://user:123@cluster0.kop4wrn.mongodb.net/multipurpose-status-Board?retryWrites=true&w=majority&appName=Cluster0'
  return mongoose.connect(url)
}


module.exports = connect;