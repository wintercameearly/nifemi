const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const {User, ValidateUser} = require('../models/user');
const auth = require('../middleware/auth')

router.get('/login', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error")
  }
})

router.post('/login', async (req, res) => {
  const { userName, password } = req.body;

  try {
    // validate
    const { error } = ValidateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ userName });
    if (!user) return res.status(400).send('Invalid username or password.');

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).send('Invalid username or password.');

    const token = jwt.sign({id : user._id}, process.env.jwtsecretkey, {
      expiresIn: 86400 // expires in 24 hours
    });
    res.status(200).json({auth: true, token})
  } catch (err) {
    res.json({err})
  }
})

router.post('/register', async (req, res) => {
  const { userName, password } = req.body;

  try {
    // validate
    const { error } = ValidateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ userName });
    if (user) return res.status(400).send('User already registered.');

    user = new User({userName, password});
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();
    const token = jwt.sign({id : user._id}, process.env.jwtsecretkey, {
      expiresIn: 86400 // expires in 24 hours
    });
    res.status(200).json({auth: true, token})
  } catch (err) {
    res.json(err)
  }
})

router.get('/logout', (req, res) => {
  res.status(200).send({ auth: false, token: null });
});

module.exports = router;