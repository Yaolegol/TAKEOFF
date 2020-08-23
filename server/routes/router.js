const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile('dist/index.html');
});

router.get('/contacts', (req, res, next) => {
    res.send('<h1>Contacts</h1>');
});

module.exports = router;