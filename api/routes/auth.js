const router = require('express').Router();
const User = require('../framworks/database/mongoDB/models/User');
const bcrypt = require('bcrypt')
const { register, login} = require('../adapters/controllers/user');
//register
router.post('/register',register);
//router.route('/register').post(create);

//login

router.post('/login', login)


module.exports = router;