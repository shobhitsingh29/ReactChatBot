const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    status : {
        type : String
    },
    employeeId : {
        type : Number
    },
    userid : {
        type : Number
    },
    password : {
        type: String
    },
    socketId : {
        type: String
    },
    user: {
        type: String
    }
});

module.exports = mongoose.model('Admin', AdminSchema);
