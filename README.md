# How to start guide?

1. Install dependencies:
```
npm install
```

2. Start the code:
```
npm start
```

# Endpoints Documentation

This documentation provides information about the payload structure required for each endpoint.

## 1. POST: /items

**Description:**
Add a new user to the user table.

**Request Payload:**

```json
{
    "name": "Sandeep",
    "phoneNumber": "6378327796",
    "email": "sd769113@gmail.com",
    "hobbies": "dfdfd"
}
```

**Response Body:**
```json
{
    "name": "Sandeep",
    "phoneNumber": "6378327796",
    "email": "sd769113@gmail.com",
    "hobbies": "dfdfd",
    "_id": "65788d1f7dd7ae9aad4c9071",
    "__v": 0
}
```


## 2. GET: /items
**Description:**
Get user list.

**Response Body:**
```json
[
    {
        "_id": "65781a0a56f2ffd058ee6cf0",
        "name": "kumar",
        "phoneNumber": "6378327796",
        "email": "sd769113@gmail.com",
        "hobbies": "fdfd",
        "__v": 0
    },
    {
        "_id": "65787f1363dcd08d2d9728be",
        "name": "Sandeep",
        "phoneNumber": "6378327796",
        "email": "sd769113@gmail.com",
        "hobbies": "sdsd",
        "__v": 0
    }
]
```


## 3. POST: /sendMail
**Description:**
Send a mail for selected row/rows data.
**Request Payload:**

```json

```

**Response Body:**
```json

```

## 4. DElETE: /items/:id
**Description:**
Delete user 
**Request Payload:**
```json
{
    "_id":"65787f1363dcd08d2d9728be"
}
```

**URL Structure:**
```
/items/:id
```

**Response Body:**
```json
{
    "message": "Payment successful",
    "remaining_amount": 712.911
}
```

## 5. PUT: /items/:id
**Description:**
Update user data 
**URL Structure:**
```
/items/:id```

**Response Body:**
```json
 {
        "_id": "65787f1363dcd08d2d9728be",
        "name": "Sandeep2",
        "phoneNumber": "6378327796",
        "email": "sd769113@gmail.com",
        "hobbies": "sdsd",
        "__v": 0
    }
```
```
