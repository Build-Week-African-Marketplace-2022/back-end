// eslint-disable-next-line
exports.seed = (knex, Promise) => {
  return knex('items').insert([
    {
      item_name: 'Desk Lamp',
      item_description: 'Bright lamp perfect for desks.',
      item_location: 'San Francisco, CA',
      item_price: 19.95,
      user_id: 1,
    },
  ])
}