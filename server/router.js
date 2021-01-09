const express = require('express');

const router = express.Router();

router.get('/signin', (req, res, next) => {
    res.send('<h1>SignIn</h1>');
});

router.get('/contacts', (req, res, next) => {
    res.send('<h1>Contacts</h1>');
});

module.exports = router;
