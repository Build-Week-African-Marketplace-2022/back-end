# Users

### `GET /api/users` - _Fully Implemented_

_Returns an array of all users in the database._

Parameters:

```json

```

Request Body:

```json

```

Returns:

```json
{
  "data": [
    {
      "user_id": "integer",
      "username": "string",
      "image_url": "string | null"
    },
    {
      "user_id": "integer",
      "username": "string",
      "image_url": "string | null"
    }
    // ...
  ]
}
```

---

### `GET /api/users/:user_id` - _Fully Implemented_

_Returns the user in the database with a specific user_id._

Parameters:

```json
user_id: integer
```

Request Body:

```json

```

Returns:

```json
{
  "data": {
    "user_id": "integer",
    "username": "string",
    "image_url": "string | null",
    "items_listed": [
      { "item_id": "integer", "item_name": "string" },
      { "item_id": "integer", "item_name": "string" }
      // ...
    ]
  }
}
```

---

### `GET /api/users/:user_id/items` - _Fully Implemented_

_Returns the items in the database with a specific user_id._

Parameters:

```json
user_id: integer
```

Request Body:

```json

```

Returns:

```json
{
  "data": [
    {
      "item_id": "integer",
      "item_name": "string",
      "item_description": "string",
      "item_location": "string",
      "item_price": "float"
    },
    {
      "item_id": "integer",
      "item_name": "string",
      "item_description": "string",
      "item_location": "string",
      "item_price": "float"
    }
    // ...
  ]
}
```

---

### `PUT /api/users/:user_id` - _NOT IMPLEMENTED_

_Replaces user in database by user_id with request body and returns the updated user._

Parameters:

```json
user_id: integer
```

Request Body:

```json
{
  "username": "string - required",
  "password": "string - required"
}
```

Returns:

```json
{
  "data": {
    "user_id": "integer",
    "username": "string"
  }
}
```