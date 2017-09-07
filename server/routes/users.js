var express = require('express');
var router = express.Router();


var userModle = require('../util/mongoose').userModle;
// var newUser = new userModle({
//     username: 'wang',
//     password: '123456'
// });
//
// newUser.save(function (err) {
//     userModle.findOne({username:'wu'}, function (err, docs) {
//         console.log(docs,err)
//     })
// });

/* GET users listing. */
router.post('/register', function (req, res, next) {
    console.log(req.body.username, req.body.password);
    let newUser = new userModle({
        username:req.body.username,
        password:req.body.password
    })
    newUser.save(function (err) {
        if(err) {
            console.log(err)
            res.json({
                status:0,
                msg:'注册失败!'
            })
        }else {
            console.log('注册成功！！！')
            res.json({
                status:1,
                msg:'注册成功!'
            })
        }
    })
})
router.post('/login', function (req, res, next) {
    console.log(req.body.username, req.body.password);
    let userInfo = {
        username: req.body.username,
        password: req.body.password
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
                msg: {username:userInfo.username}
            })
        }
    });
});

module.exports = router;
