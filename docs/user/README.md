# User API Docs

[User](/server/user/user.controller)

### Get All Users
<kbd>GET</kbd> `api/users?limit=2&skip=1`

Query Params:
```
limit: (number) Maximum number of results to return
skip: (number) Skip the first N results
```

Sample Response
```
[
    {
        "isDeleted": true,
        "_id": "5c2020d0ad707b36741f9eeb",
        "username": "Zechariah_Oberbrunner",
        "password": "VaQbkTTF6jbD8L8",
        "mobileNumber": "3984297875",
        "school": "5c2020d0ad707b36741f9eea",
        "firstName": "Bud",
        "lastName": "Murazik",
        "email": "Donnie_Feest72@gmail.com",
        "createdAt": "2018-12-23T23:57:04.710Z",
        "__v": 0
    },
    {
        "isDeleted": true,
        "_id": "5c2020986bd5cc0f40390328",
        "username": "Raymond.Farrell83",
        "password": "EstgpW1f_npZTDd",
        "mobileNumber": "6244582154",
        "school": "5c2020986bd5cc0f40390327",
        "firstName": "Mayra",
        "lastName": "Farrell",
        "email": "Alex_Rogahn36@yahoo.com",
        "createdAt": "2018-12-23T23:56:08.815Z",
        "__v": 0
    }
]
```
<hr/>

### Create New User
<kbd>POST</kbd> `/api/users`

Query Params:
```
No query params
```

Sample Request Body:
```
{ 
  "username": "SandraLakinMD",
  "password": "997.093.5873 x44286",
  "mobileNumber": "3295379549",
  "firstName": "Bins Inc",
  "lastName": "turbo",
  "email": "jj@jj.com",
  "school": "5c1ea2dede4a18002476f3d8"
}
```

Sample Success Response:
```
{
    "isDeleted": false,
    "_id": "5c20132c43f6290024227c30",
    "username": "SanadraLakinMD",
    "password": "999.193.5873 x44286",
    "mobileNumber": "3395379548",
    "school": "5c1ea2dede4a18002476f3d8",
    "firstName": "Bins dInc",
    "lastName": "podoper",
    "email": "jdj@jk.com",
    "createdAt": "2018-12-23T22:58:52.947Z",
    "__v": 0
}
```

Sample Failure Response:
```
{
    "message": "\"mobileNumber\" with value \"452336683\" fails to match the required pattern: /^[0-9][0-9]{9}$/",
    "stack": "APIError: \"mobileNumber\" with value \"452336683\" fails to match the required pattern: ...
}
```
<hr/>

### Single User Details
<kbd>GET</kbd> `/api/users/:uid`

Query Params:
```
uid: _id of an existing user
```

Sample Success Response:
```
{
    "isDeleted": false,
    "_id": "5c20132c43f6290024227c30",
    "username": "SanadraLakinMD",
    "password": "999.193.5873 x44286",
    "mobileNumber": "3395379548",
    "school": "5c1ea2dede4a18002476f3d8",
    "firstName": "Bins dInc",
    "lastName": "podoper",
    "email": "jdj@jk.com",
    "createdAt": "2018-12-23T22:58:52.947Z",
    "__v": 0
}
```

Sample Failure Response:
```
{
    "message": "Not Found",
    "stack": "APIError: No such user exists!\n    at new ExtendableError (...
}
```
<hr/>

### Update User
<kbd>PUT</kbd> `/api/users/:uid`

Query Params:
```
uid: _id of an existing user
```

Sample Request Body:
```
{ 
  "username": "Thomas"
}
```

Sample Success Response:
```
{
    "isDeleted": true,
    "_id": "5c1e9fb2dcd2180fb47c84e8",
    "username": "Thomas",
    "password": "6fre1jjBVCYtyZv",
    "mobileNumber": "9290661318",
    "school": "5c1e9fb2dcd2180fb47c84e7",
    "firstName": "Mayra",
    "lastName": "Orn",
    "email": "Alexandre94@gmail.com",
    "createdAt": "2018-12-22T20:33:54.513Z",
    "__v": 0
}
```

Sample Failure Response:
```
{
    "message": "Not Found",
    "stack": "APIError: No such user exists!\n    at new ExtendableError (...
}
```
<hr/>

### Delete User
<kbd>DELETE</kbd> `/v1/users/:uid`

Query Params:
```
uid: _id of an existing user
```

Sample Success Response:
```
{
    "isDeleted": true,
    "_id": "5c1e9fb2dcd2180fb47c84e8",
    "username": "Thomas",
    "password": "6fre1jjBVCYtyZv",
    "mobileNumber": "9290661318",
    "school": "5c1e9fb2dcd2180fb47c84e7",
    "firstName": "Mayra",
    "lastName": "Orn",
    "email": "Alexandre94@gmail.com",
    "createdAt": "2018-12-22T20:33:54.513Z",
    "__v": 0
}
```

Sample Failure Response:
```
{
    "message": "Not Found",
    "stack": "APIError: No such user exists!\n    at new ExtendableError (...
}
```
<hr/>
