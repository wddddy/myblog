var express = require('express');
var router = express.Router();
const mongoose = require('../lib/mongoose')
let save = new mongoose.userModle();
save.userpwd = 'World'
save.save(function (err) {

})
mongoose.userModle.find({}, function (err, doc) {
  // console.log(doc);
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    username: "wxy",
    sex: "男",
    desc: "本站作者"
  });
});
router.post('/login', function(req, res, next) {
  res.json({
    status: 1
  });
});

module.exports = router;
