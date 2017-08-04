/**
 * Created by wxy on 2017/8/4.
 */
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

let userSchema = mongoose.Schema({
    username: String,
    userpwd: String
})
let userModle = mongoose.model('users',userSchema)
module.exports = {
    userModle: userModle
}

