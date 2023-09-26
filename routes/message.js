const { Router } = require('express');
const router = Router();

router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/message', function (req, res, next) {
  res.render('node', { message: 'Olá nova rota de mensagem.' });
});

router.get('/message/:msgParam', function (req, res, next) {
  res.render('node', { message: req.params.msgParam });
});

router.post('/message', function (req, res, next) {
  var messageVar = req.body.messageVar;
  res.redirect('/message/' + messageVar);
});

module.exports = router;
