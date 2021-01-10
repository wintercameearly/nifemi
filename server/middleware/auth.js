const jwt = require('jsonwebtoken');
require('dotenv/config');

module.exports = function (req, res, next) {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, process.env.jwtsecretkey);
    req.user = decoded;
    next();
  }
  catch (ex) {
    res.status(400).json({msg: 'Invalid token.'});
  }
}