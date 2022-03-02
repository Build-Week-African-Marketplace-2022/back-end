const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { JWT_SECRET, BCRYPT_ROUNDS } = require('../../config')
const { tokenBuilder } = require('./auth-helpers')

const restricted = (req, res, next) => {
  const token = req.headers.authorization

  if (!token) {
    return next({ status: 401, message: 'token required' })
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return next({ status: 401, message: 'token invalid' })
    }

    req.decodedJwt = decoded
    next()
  })
}

const hashPassword = (req, res, next) => {
  const { password } = req.user
  req.user.password = bcrypt.hashSync(password, BCRYPT_ROUNDS)
  next()
}

const authenticate = (req, res, next) => {
  if (bcrypt.compareSync(req.body.password, req.user.password)) return next()
  next({ status: 401, message: 'invalid credentials' })
}

const constructToken = (req, res, next) => {
  const token = tokenBuilder(req.user)
  req.token = token
  next()
}

const constructPayload = (req, res, next) => {
  req.user = {
    ...req.user,
    token: req.token,
    password: undefined,
  }
  next()
}

module.exports = {
  restricted,
  hashPassword,
  authenticate,
  constructToken,
  constructPayload,
}
