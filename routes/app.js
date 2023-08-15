var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index');
});

router.get('/message', (req, res, next) => {
    res.render('node', { message: "Nova página." });
});

router.post('/message', (req, res, next) => {
    var messageVar = req.body.messageBody
    res.redirect('/message/' + messageVar);
});

router.get('/message/:msgParam', (req, res, next) => {
    res.render('node', { message: req.params.msgParam });
});

module.exports = router; 
