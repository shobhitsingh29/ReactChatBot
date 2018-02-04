const Users = require('../models/user');
const helper = require('../helper/response');

module.exports = {

    createUser: function (req, res, next) {
        const {name, userid, password, email} = req.body;
        Users.findOne({name: name, userid: userid, password: password}).exec(function (err,user) {
            if (err) {
                res.status(422).json(helper.responseObject(422, err, null, true));
            } else if(user){
                req.result = {};
                req.result.user = user;
                next();
            }else {
                new Users(req.body).save(function (err, user) {
                    if (err) {
                        res.status(422).json(helper.responseObject(422, err, null, true));
                    } else {
                        req.result = {};
                        req.result.user = user;
                        next();
                    }
                });
            }
        });
    },
    getOnlineUsers: function (req, res, next) {
        Users.find({isAdmin: false}).exec(function (err, onlineUsers) {
            if (err) {
                res.status(422).json(helper.responseObject(422, err, null, true));
            } else {
                req.result = {};
                req.result.onlineUsers = onlineUsers;
                next();
    }
        });
    }





};




