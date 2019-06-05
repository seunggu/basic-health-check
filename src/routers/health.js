const router = require('express').Router();

const { health } = require('../controllers');

router.get('/check', health.check);

module.exports = router;
