# Items

---

### `GET /api/items` - _Fully Implemented_

_Returns an array containing all items in the database._

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

### `GET /api/items/:item_id` - _Fully Implemented_

_Returns the item in the database with a specific item_id._

Parameters:

```json
item_id: integer
```

Request Body:

```json

```

Returns:

```json
{
  "data": {
    "item_id": "integer",
    "item_name": "string",
    "item_description": "string",
    "item_location": "string",
    "item_creator": {
      "user_id": "integer",
      "username": "string"
    }
  }
}
```

---

### `POST /api/items` - _Fully Implemented_

_Adds request body to database as a new item and returns the new item._

Parameters:

```json

```

Request Body:

```json
{
  "item_name": "string - required",
  "item_description": "string - required",
  "item_location": "string - required",
  "item_price": "float - required"
}
```

Returns:

```json
{
  "data": {
    "item_id": "integer",
    "item_name": "string",
    "description": "string",
    "location": "string",
    "price": "float"
  }
}
```

---

### `PUT /api/items/:item_id` - _Fully Implemented_

_Replaces item in database by item_id with request body and returns the updated item._

Parameters:

```json
item_id: integer
```

Request Body:

```json
{
  "item_name": "string - required",
  "item_description": "string - required",
  "item_location": "string - required",
  "item_price": "float - required"
}
```

Returns:

```json
{
  "data": {
    "item_id": "integer",
    "item_name": "string",
    "item_description": "string",
    "item_location": "string",
    "item_price": "float"
  }
}
```

---

### `DELETE /api/items/:item_id` - _Fully Implemented_

_Removes item from database using item_id and returns the item_id of the deleted item._

Parameters:

```json
item_id: integer
```

Request Body:

```json

```

Returns:

```json
{
  "data": {
    "item_id": "integer"
  }
}
```