var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/message', function (req, res, next) {
    res.render('node', { message: 'Olá nova rota de mensagem.' });
});

router.get(' ', function (req, res, next) {
    res.render('node', { message: req.params.msgParam });
});

router.post('/message', function (req, res, next) {
    var messageVar = req.body.messageVar;
    res.redirect('/message/' + messageVar);
});

var User = require('../models/user');
const { last } = require('rxjs/operator/last');
const Message  = require('../models/message')
router.get('/node-mongodb-mongoose-user', function (req, res, next) {
    res.render('node');
});

//salva no BD

router.post('/node-mongodb-mongoose-user', async function (req, res, next) {
    var emailVar = req.body.emailBody;
    var userObject = new User({
        firstName: 'Vinicius',
        lastName: 'Rosalen',
        password: 'Segredo',
        email: emailVar,
    });
    await userObject.save();

    res.redirect('/node-mongodb-mongoose-user');
});

router.get('/node-mongodb-mongoose-user-busca', async function (req, res, next) {
    let documents = await User.findOne({})
    res.render('node', {
        firstNameV: documents.firstName,
        lastNameV: documents.lastName,
        passwordV: documents.password,
        emailV: documents.email,
        messagesV: documents.message
    });
})

router.get('/login',  function (req, res, next){
    res.render('login');
});


module.exports = router; 
