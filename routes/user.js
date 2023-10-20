const { Router } = require('express');
const router = Router();

const User = require('../models/user');

router.get('/node-mongodb-mongoose-user', function (req, res, next) {
  res.render('node');
});

router.get("/user", async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error)
  }
});

router.post('/node-mongodb-mongoose-user', async (req, res, next) => {
  const { emailBody } = req.body;

  const userObject = new User({
    firstName: 'Vinicius',
    lastName: 'Rosalen',
    password: 'Segredo',
    email: emailBody,
  });

  await userObject.save();

  res.redirect('/node-mongodb-mongoose-user');
});

router.get('/node-mongodb-mongoose-user-busca', function (req, res, next) {
  User.findOne({}, function (err, documents) {
    if (err) {
      return res.send('Error!! :-(');
    }
    res.render('node', {
      firstNameV: documents.firstName,
      lastNameV: documents.lastName,
      passwordV: documents.password,
      emailV: documents.email,
      messagesV: documents.message,
    });
  });
});

module.exports = router;
