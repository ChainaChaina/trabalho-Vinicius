const { Router } = require('express');
const router = Router();
var User = require('../models/user');

router.post('/user', async (request, response) => {
  try {
    const { firstName, lastName, password, email } = request.body;
    var userObject = new User({
      firstName: firstName,
      lastName: lastName,
      password: password,
      email: email,
    });

    await userObject.save();
    response.status(200).json(userObject);
  } catch (error) {
    response.status(500).json({ message: error });
  }
});

module.exports = router;
