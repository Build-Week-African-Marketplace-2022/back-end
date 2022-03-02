const Model = require('../global-model')

const getUsers = (req, res, next) => {
  Model.get('users')
    .then((users) => {
      req.users = users
      next()
    })
    .catch(next)
}

const getUser = (req, res, next) => {
  const { username } = req.body

  Model.getBy('users', { username })
    .then((user) => {
      req.user = user
      next()
    })
    .catch(next)
}

const getUserById = (req, res, next) => {
  const { user_id } = req.params

  Model.getBy('users', { user_id })
    .then((user) => {
      req.user = user
      console.log(user)
      next()
    })
    .catch(next)
}

const getUserItems = (req, res, next) => {
  const { user_id } = req.user

  Model.getBy('items', { user_id }, true)
    .then((items) => {
      console.log(items)
      req.items = items
      next()
    })
    .catch(next)
}

const sanitizeUsers = (req, res, next) => {
  const sanitize = (user) => ({ ...user, password: undefined })
  req.users = req.users.map(sanitize)
  next()
}

const sanitizeItems = (req, res, next) => {
  const sanitize = ({ item_id, item_name }) => ({ item_id, item_name })
  req.items = req.items.map(sanitize)
  next()
}

const constructUserPayload = (req, res, next) => {
  req.user = {
    ...req.user,
    items_listed: [...req.items],
    password: undefined,
  }

  next()
}

const usernameIsUnique = (req, res, next) => {
  if (req.user) return next({ status: 404, message: 'username must be unique' })
  req.user = req.body
  next()
}

const userExists = (req, res, next) => {
  if (req.user) return next()
  next({ status: 404, message: 'user not found' })
}

const registerUser = (req, res, next) => {
  Model.add('users', req.user)
    .then((user) => {
      req.user = user
      next()
    })
    .catch(next)
}

module.exports = {
  getUser,
  getUsers,
  getUserById,
  getUserItems,
  sanitizeUsers,
  sanitizeItems,
  constructUserPayload,
  usernameIsUnique,
  userExists,
  registerUser,
}