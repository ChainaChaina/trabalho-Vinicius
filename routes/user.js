const { Router } = require('express');
const router = Router();

const User = require('../models/user');


// faz singin
router.get('/singin', function (req, res, next) {
  res.render('node');
});

// faz login
router.get('/login', function (req, res, next) {
  res.render('login');
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
  const { email,firstName, password, lastName } = req.body;

  const userObject = new User({
    firstName: firstName,
    lastName: lastName,
    password: password,
    email: email,
  });

  await userObject.save();

  res.redirect('/node-mongodb-mongoose-user');
});

router.get('/node-mongodb-mongoose-user-busca', async function (req, res, next) {
  var {email, password} = req.query;
  console.log('ewre')
  console.log('aaaa',req.query.password)
  let documents = await User.findOne({email:req.query.email ,password:req.query.password})
  console.log(email)
  console.log(documents)
  setTimeout(()=>{
    console.log(req.body)
  },1000)
  res.render('logged', {
      firstNameV: documents.firstName,
      lastNameV: documents.lastName,
      passwordV: documents.password,
      emailV: documents.email,
      messagesV: documents.message
  });

});

module.exports = router;
