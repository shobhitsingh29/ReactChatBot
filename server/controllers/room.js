const Room = require('../models/room');
const helper = require('../helper/response');

module.exports = {

    createChatRoom: function (req, res, next) {
        const {title,  owner } = req.body;
        Room.findOne({title: title, owner : owner}).exec(function (err,room) {
            if (err) {
                res.status(422).json(helper.responseObject(422, err, null, true));
            } else if(room){
                req.result = {};
                req.result.room = room;
                next();
            }else {
                new Room(req.body).save(function (err, room) {
                    if (err) {
                        res.status(422).json(helper.responseObject(422, err, null, true));
                    } else {
                        req.result = {};
                        req.result.room = room;

                        next();
                    }
                });
            }
        });
    },

    getRoomById: function (req, res, next) {
        Room.find({socketId: req.params.id}).exec(function (err, room) {
            if (err) {
                res.status(422).json(helper.responseObject(422, err, null, true));
            } else {
                req.result = {};
                req.result.room = room;
                next();
            }
        });
    }

};




