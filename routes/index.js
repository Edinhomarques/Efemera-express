const express = require('express');
const router = express.Router();
const homeController = require('../controllers/HomeController')
/* GET home page. */
router.get('/', homeController.index);
router.post('/contato', homeController.contato)
router.post('/sucesso', homeController.newsletter)

module.exports = router;
