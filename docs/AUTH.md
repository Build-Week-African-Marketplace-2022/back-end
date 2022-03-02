# Authentication

---

### `POST /api/auth/register` - _Fully Implemented_

_Registers a new user in the database and returns nothing._

Parameters:

```json

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

```

---

### `POST /api/auth/login` - _Fully Implemented_

_Authenticates a user based on username and password and returns the username, user_id, and a generated JWT._

Parameters:

```json

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
    "username": "string",
    "token": "string - JWT"
  }
}
```

---

### `GET /api/auth/logout` - _Fully Implemented_

_Returns a farewell message._

Parameters:

```json

```

Request Body:

```json

```

Returns:

```json
{
  "message": "string"
}
```