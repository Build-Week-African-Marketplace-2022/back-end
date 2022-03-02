exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (users) => {
      users.increments('user_id')
      users.string('username', 128).notNullable()
      users.string('password', 512).notNullable()
      // users.timestamps(false, true)
    })
    .createTable('items', (items) => {
      items.increments('item_id')
      items.string('item_name', 128).notNullable()
      items.string('item_description', 256).notNullable()
      items.string('item_location', 128).notNullable()
      items.decimal('item_price', 8, 2).notNullable()
      items
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('user_id')
        .inTable('users')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
      // items.timestamps(false, true)
    })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('items').dropTableIfExists('users')
}