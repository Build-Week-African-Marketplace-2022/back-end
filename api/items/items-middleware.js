const Model = require('../global-model')

const getItems = (req, res, next) => {
  Model.get('items')
    .then((items) => {
      req.items = items
      next()
    })
    .catch(next)
}

const getItemAndUser = (req, res, next) => {
  const { item_id } = req.params

  Model.getOn('items', 'users', 'items.user_id', 'users.user_id', { item_id }, [
    'items.*',
    'username',
  ])
    .then((item) => {
      req.item = item
      next()
    })
    .catch(next)
}

const getItem = (req, res, next) => {
  const { item_id } = req.params

  Model.getBy('items', { item_id })
    .then((item) => {
      req.item = item
      next()
    })
    .catch(next)
}

const constructItemAndUser = (req, res, next) => {
  req.item = {
    ...req.item,
    item_creator: {
      username: req.item.username,
      user_id: req.item.user_id,
    },
    username: undefined,
    user_id: undefined,
  }
  next()
}

const itemExists = (req, res, next) => {
  if (req.item) return next()
  next({ status: 401, message: 'item_id does not exist' })
}

const onlyCreator = (req, res, next) => {
  if (req.decodedJwt.user_id === req.item.user_id) return next()
  next({ status: 401, message: 'invalid credentials' })
}

const constructItem = (req, res, next) => {
  req.item = {
    ...req.item,
    ...req.body,
    item_price: parseFloat(req.body.item_price),
    user_id: req.decodedJwt.user_id,
  }
  next()
}

const addItem = (req, res, next) => {
  Model.add('items', req.item)
    .then(([item]) => {
      req.item = item
      next()
    })
    .catch(next)
}

const updateItem = (req, res, next) => {
  const { item_id } = req.item

  Model.update('items', { item_id }, req.item)
    .then(([item]) => {
      req.item = item
      next()
    })
    .catch(next)
}

const deleteItem = (req, res, next) => {
  const { item_id } = req.item

  Model.remove('items', { item_id })
    .then(() => next())
    .catch(next)
}

const convertItemPrice = (item) => ({ ...item, item_price: parseFloat(item.item_price) })

const convertItemPrices = (req, res, next) => {
  if (req.items) req.items = req.items.map(convertItemPrice)
  if (req.item) req.item = convertItemPrice(req.item)
  next()
}

module.exports = {
  getItems,
  getItemAndUser,
  getItem,
  constructItemAndUser,
  itemExists,
  onlyCreator,
  constructItem,
  addItem,
  updateItem,
  deleteItem,
  convertItemPrices,
}