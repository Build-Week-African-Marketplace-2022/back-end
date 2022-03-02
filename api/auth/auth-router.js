const router = require('express').Router()

const { validator, sendUnpackedEntry, sendMessage } = require('../global-middleware')
const { userSchema } = require('../users/user-schema')
const { getUser, usernameIsUnique, userExists, registerUser } = require('../users/user-middleware')
const {
  restricted,
  hashPassword,
  authenticate,
  constructToken,
  constructPayload,
} = require('./auth-middleware')

router.post(
  '/register',
  [validator(userSchema), getUser, usernameIsUnique, hashPassword, registerUser],
  sendMessage('user registered successfully')
)

router.post(
  '/login',
  [validator(userSchema), getUser, userExists, authenticate, constructToken, constructPayload],
  sendUnpackedEntry('user')
)

router.get('/logout', restricted, sendMessage('user logged out successfully'))

module.exports = router