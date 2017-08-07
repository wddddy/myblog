var express = require('express');
var router = express.Router();


var userModle = require('../config/mongoose').userModle;
// var newUser = new userModle({
//     username: 'wu',
//     userpwd: '123456'
// });

// newUser.save(function (err) {
//     userModle.findOne({username:'li'}, function (err, docs) {
//         console.log(docs,err)
//     })
// });

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.json({
        username: "wxy",
        sex: "男",
        desc: "本站作者"
    });
});
router.post('/login', function (req, res, next) {
    console.log(req.body.username, req.body.userpwd);
    let userInfo = {
        username: req.body.username,
        userpwd: req.body.userpwd
    };
    userModle.findOne(userInfo, function (err, doc) {
        if (!doc) {
            res.json({
                status: 0,
                msg: '账号或密码错误！！！'
            })
        }else {
            res.json({
                status: 1,
                msg: '登录成功！！！'
            })
        }
    });
});

module.exports = router;
