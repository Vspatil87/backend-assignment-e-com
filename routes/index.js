const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getUsers', controllers.getUsers);

module.exports = router;
