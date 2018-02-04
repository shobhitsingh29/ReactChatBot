const express = require('express');
const messageController = require('../controllers/message');
const router = express.Router();
const helper = require('../helper/response');

router.get('/', [messageController.getRoomChat, helper.handleSuccess]);

module.exports = router;
