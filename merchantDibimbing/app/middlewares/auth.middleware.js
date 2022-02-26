const db = require('../../config/db') 
const jwt = require('jsonwebtoken')

function isAuthenticate(req, res, next) {
  if (!req.headers.authorization) {
    res.status(401).json({message: 'Unauthorized'})
    return
  }

  const splitToken = req.headers.authorization.split(' ')
  if (splitToken.length !== 2 || splitToken[0] !== 'Bearer') {
    res.status(400).json({message: 'Wrong authorization format'})
    return
  }

  jwt.verify(splitToken[1], 'secret', { algorithms: ['HS256'] }, async (err, payload) => {
    if (err && err.name === 'TokenExpiredError') {
      res.status(401).json({message: 'Expired Token'})
    } else if (err) {
      res.status(401).json({message: 'Invalid Token'})
    } else {
       next()
    }
  })
}

module.exports = {
    isAuthenticate
}