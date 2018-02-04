const Message = require('../models/user');
const helper = require('../helper/response');

module.exports = {

    getRoomChat: function (req, res, next) {
        const { name, email } = req.body;
        Message.find({name : name, email : email}).exec(function (err, messages) {
            if (err) {
                res.status(422).json(helper.responseObject(422, err, null, true));
            } else {
                req.result = messages;
                next();
            }
        });
    }
};




