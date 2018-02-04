const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        default : ""
    },
    status : {
        type : String,
        default: "offline"
    },
    userid : {
        type : Number
    },
    password : {
        type: String
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    socketId: {
        type: String,
        default: ""
    }
});

module.exports = mongoose.model('User', UserSchema);
