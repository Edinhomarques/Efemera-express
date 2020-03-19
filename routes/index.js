const express = require('express');
const router = express.Router();
const homeController = require('../controllers/HomeController')
/* GET home page. */
router.get('/', homeController.index);

module.exports = router;
