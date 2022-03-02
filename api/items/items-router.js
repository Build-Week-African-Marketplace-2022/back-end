const router = require('express').Router()

const { validator, sendEntries, sendEntry, sendEntryId } = require('../global-middleware')
const { newItemSchema, updatedItemSchema } = require('./items-schema')
const {
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
} = require('./items-middleware')

// [GET] /api/items
router.get('/', [getItems, convertItemPrices], sendEntries('items'))

// [GET] /api/items/:item_id
router.get(
  '/:item_id',
  [getItemAndUser, itemExists, constructItemAndUser, convertItemPrices],
  sendEntry('item')
)

// [POST] /api/items
router.post(
  '/',
  [validator(newItemSchema), constructItem, addItem, convertItemPrices],
  sendEntry('item', 201)
)

// [PUT] /api/items/:item_id
router.put(
  '/:item_id',
  [
    validator(updatedItemSchema),
    getItem,
    itemExists,
    onlyCreator,
    constructItem,
    updateItem,
    convertItemPrices,
  ],
  sendEntry('item')
)

// [DELETE] /api/items/:item_id
router.delete('/:item_id', [getItem, itemExists, deleteItem], sendEntryId('item', 'item_id'))

module.exports = router