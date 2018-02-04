const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    user: String,
    text: String,
    room: Number,
    type: String
})

module.exports = mongoose.model('Message', messageSchema);
