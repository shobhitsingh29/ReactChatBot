const express = require('express');
const roomController = require('../controllers/room');
const router = express.Router();
const helper = require('../helper/response');

router.post('/', [roomController.createChatRoom, helper.handleSuccess]);
router.get('/:id', [roomController.getRoomById, helper.handleSuccess]);

module.exports = router;
