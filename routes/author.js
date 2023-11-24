const express = require('express');

const router = express.Router();

const authorControllerClass = require('../controllers/author.js');
const authorController = new authorControllerClass()

router.get('/author/:id', (req, res) => authorController.getAuthorsByID(req,res));

module.exports = router;