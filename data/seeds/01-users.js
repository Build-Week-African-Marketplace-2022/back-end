const bcrypt = require('bcryptjs')
const { BCRYPT_ROUNDS } = require('../../config')

// eslint-disable-next-line
exports.seed = (knex, Promise) => {
  return knex('users').insert([
    {
      username: 'lambda',
      password: bcrypt.hashSync('school', BCRYPT_ROUNDS),
    },
  ])
}