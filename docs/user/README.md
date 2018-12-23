# User API Docs

[User](../../../server/user/user.controller)

### Get All Users
<kbd>GET</kbd> `/api/users`

Query Params:
```
```

Sample Response
```
[
  {
    "isDeleted": false,
    "_id": "5c1ea44ade4a18002476f3d9",
    "username": "SandraLakinMD",
    "password": "997.093.5873 x44286",
    "mobileNumber": "3295379549",
    "school": "5c1ea2dede4a18002476f3d8",
    "firstName": "Bins Inc",
    "lastName": "pooper",
    "email": "jj@jj.com",
    "createdAt": "2018-12-22T20:53:30.295Z",
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
    "message": "Internal Server Error",
    "stack": {}
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
    "stack": {}
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
    "stack": "APIError: No such user exists!\n    at new ExtendableError (C:\\Users\\cod18\\Documents\\PTO\\server\\helpers\\APIError.js:14:11)\n    at new APIError (C:\\Users\\cod18\\Documents\\PTO\\server\\helpers\\APIError.js:30:5)\n    at findById.exec.then (C:\\Users\\cod18\\Documents\\PTO\\server\\user\\user.model.js:86:21)\n    at runCallback (timers.js:705:18)\n    at tryOnImmediate (timers.js:676:5)\n    at processImmediate (timers.js:658:5)\nFrom previous event:\n    at Function.get (C:\\Users\\cod18\\Documents\\PTO\\server\\user\\user.model.js:82:8)\n    at load (C:\\Users\\cod18\\Documents\\PTO\\server\\user\\user.controller.js:8:8)\n    at paramCallback (C:\\Users\\cod18\\Documents\\PTO\\node_modules\\express\\lib\\router\\index.js:404:7)\n    at param (C:\\Users\\cod18\\Documents\\PTO\\node_modules\\express\\lib\\router\\index.js:384:5)\n    at Function.process_params (C:\\Users\\cod18\\Documents\\PTO\\node_modules\\express\\lib\\router\\index.js:410:3)\n    at next (C:\\Users\\cod18\\Documents\\PTO\\node_modules\\express\\lib\\router\\index.js:275:10)\n    at Function.handle (C:\\Users\\cod18\\Documents\\PTO\\node_modules\\express\\lib\\router\\index.js:174:3)\n    at router (C:\\Users\\cod18\\Documents\\PTO\\node_modules\\express\\lib\\router\\index.js:47:12)\n    at Layer.handle [as handle_request] (C:\\Users\\cod18\\Documents\\PTO\\node_modules\\express\\lib\\router\\layer.js:95:5)\n    at trim_prefix (C:\\Users\\cod18\\Documents\\PTO\\node_modules\\express\\lib\\router\\index.js:317:13)\n    at C:\\Users\\cod18\\Documents\\PTO\\node_modules\\express\\lib\\router\\index.js:284:7\n    at Function.process_params (C:\\Users\\cod18\\Documents\\PTO\\node_modules\\express\\lib\\router\\index.js:335:12)\n    at next (C:\\Users\\cod18\\Documents\\PTO\\node_modules\\express\\lib\\router\\index.js:275:10)\n    at Function.handle (C:\\Users\\cod18\\Documents\\PTO\\node_modules\\express\\lib\\router\\index.js:174:3)\n    at router (C:\\Users\\cod18\\Documents\\PTO\\node_modules\\express\\lib\\router\\index.js:47:12)\n    at Layer.handle [as handle_request] (C:\\Users\\cod18\\Documents\\PTO\\node_modules\\express\\lib\\router\\layer.js:95:5)\n    at trim_prefix (C:\\Users\\cod18\\Documents\\PTO\\node_modules\\express\\lib\\router\\index.js:317:13)\n    at C:\\Users\\cod18\\Documents\\PTO\\node_modules\\express\\lib\\router\\index.js:284:7\n    at Function.process_params (C:\\Users\\cod18\\Documents\\PTO\\node_modules\\express\\lib\\router\\index.js:335:12)\n    at next (C:\\Users\\cod18\\Documents\\PTO\\node_modules\\express\\lib\\router\\index.js:275:10)\n    at C:\\Users\\cod18\\Documents\\PTO\\node_modules\\express-winston\\index.js:353:9\n    at Layer.handle [as handle_request] (C:\\Users\\cod18\\Documents\\PTO\\node_modules\\express\\lib\\router\\layer.js:95:5)\n    at trim_prefix (C:\\Users\\cod18\\Documents\\PTO\\node_modules\\express\\lib\\router\\index.js:317:13)\n    at C:\\Users\\cod18\\Documents\\PTO\\node_modules\\express\\lib\\router\\index.js:284:7\n    at Function.process_params (C:\\Users\\cod18\\Documents\\PTO\\node_modules\\express\\lib\\router\\index.js:335:12)"
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
    "stack": "APIError: No such user exists!\n    at new ExtendableError (C:\\Users\\cod18\\Documents\\PTO\\server\\helpers\\APIError.js:14:11)\n    at new APIError (C:\\Users\\cod18\\Documents\\PTO\\server\\helpers\\APIError.js:30:5)\n    at findById.exec.then (C:\\Users\\cod18\\Documents\\PTO\\server\\user\\user.model.js:86:21)\n    at runCallback (timers.js:705:18)\n    at tryOnImmediate (timers.js:676:5)\n    at processImmediate (timers.js:658:5)\nFrom previous event:\n    at Function.get (C:\\Users\\cod18\\Documents\\PTO\\server\\user\\user.model.js:82:8)\n    at load (C:\\Users\\cod18\\Documents\\PTO\\server\\user\\user.controller.js:8:8)\n    at paramCallback (C:\\Users\\cod18\\Documents\\PTO\\node_modules\\express\\lib\\router\\index.js:404:7)\n    at param (C:\\Users\\cod18\\Documents\\PTO\\node_modules\\express\\lib\\router\\index.js:384:5)\n    at Function.process_params (C:\\Users\\cod18\\Documents\\PTO\\node_modules\\express\\lib\\router\\index.js:410:3)\n    at next (C:\\Users\\cod18\\Documents\\PTO\\node_modules\\express\\lib\\router\\index.js:275:10)\n    at Function.handle (C:\\Users\\cod18\\Documents\\PTO\\node_modules\\express\\lib\\router\\index.js:174:3)\n    at router (C:\\Users\\cod18\\Documents\\PTO\\node_modules\\express\\lib\\router\\index.js:47:12)\n    at Layer.handle [as handle_request] (C:\\Users\\cod18\\Documents\\PTO\\node_modules\\express\\lib\\router\\layer.js:95:5)\n    at trim_prefix (C:\\Users\\cod18\\Documents\\PTO\\node_modules\\express\\lib\\router\\index.js:317:13)\n    at C:\\Users\\cod18\\Documents\\PTO\\node_modules\\express\\lib\\router\\index.js:284:7\n    at Function.process_params (C:\\Users\\cod18\\Documents\\PTO\\node_modules\\express\\lib\\router\\index.js:335:12)\n    at next (C:\\Users\\cod18\\Documents\\PTO\\node_modules\\express\\lib\\router\\index.js:275:10)\n    at Function.handle (C:\\Users\\cod18\\Documents\\PTO\\node_modules\\express\\lib\\router\\index.js:174:3)\n    at router (C:\\Users\\cod18\\Documents\\PTO\\node_modules\\express\\lib\\router\\index.js:47:12)\n    at Layer.handle [as handle_request] (C:\\Users\\cod18\\Documents\\PTO\\node_modules\\express\\lib\\router\\layer.js:95:5)\n    at trim_prefix (C:\\Users\\cod18\\Documents\\PTO\\node_modules\\express\\lib\\router\\index.js:317:13)\n    at C:\\Users\\cod18\\Documents\\PTO\\node_modules\\express\\lib\\router\\index.js:284:7\n    at Function.process_params (C:\\Users\\cod18\\Documents\\PTO\\node_modules\\express\\lib\\router\\index.js:335:12)\n    at next (C:\\Users\\cod18\\Documents\\PTO\\node_modules\\express\\lib\\router\\index.js:275:10)\n    at C:\\Users\\cod18\\Documents\\PTO\\node_modules\\express-winston\\index.js:353:9\n    at Layer.handle [as handle_request] (C:\\Users\\cod18\\Documents\\PTO\\node_modules\\express\\lib\\router\\layer.js:95:5)\n    at trim_prefix (C:\\Users\\cod18\\Documents\\PTO\\node_modules\\express\\lib\\router\\index.js:317:13)\n    at C:\\Users\\cod18\\Documents\\PTO\\node_modules\\express\\lib\\router\\index.js:284:7\n    at Function.process_params (C:\\Users\\cod18\\Documents\\PTO\\node_modules\\express\\lib\\router\\index.js:335:12)"
}
```
<hr/>
