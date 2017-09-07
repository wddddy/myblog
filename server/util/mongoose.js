const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

let userSchema = new mongoose.Schema({
    username: String,
    password: String
})
let userModle = mongoose.model('user',userSchema)
module.exports = {
    userModle: userModle
}

