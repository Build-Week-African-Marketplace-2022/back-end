const router = require('express').Router()

const {
  sendEntries,
  sendUnpackedEntry,
} = require('../global-middleware')
const {
  getUsers,
  getUserItems,
  getUserById,
  sanitizeUsers,
  sanitizeItems,
  constructUserPayload,
} = require('./user-middleware')


router.get('/', [getUsers, sanitizeUsers], sendEntries('users'))

router.get(
  '/:user_id',
  [getUserById, getUserItems, sanitizeItems, constructUserPayload],
  sendUnpackedEntry('user')
)

router.get('/:user_id/items', [getUserById, getUserItems], sendUnpackedEntry('items'))

module.exports = router