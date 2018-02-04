const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
    title: String,
    owner: String
});

module.exports = mongoose.model('Room', roomSchema)