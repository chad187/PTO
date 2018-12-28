# School API Docs

[School](/server/school/school.controller)

### Get All Schools
<kbd>GET</kbd> `api/schools?limit=2&skip=1`

Query Params:
```
limit: (number) Maximum number of results to return
skip: (number) Skip the first N results
```

Sample Response
```
[
    {
        "_id": "5c2020d0ad707b36741f9eea",
        "name": "Emmerich",
        "phone": "2467975489",
        "district": "5c2020cdad707b36741f9ee7",
        "address": "0751 Hyatt Trace",
        "createdAt": "2018-12-23T23:57:04.701Z",
        "__v": 0
    },
    {
        "_id": "5c2020986bd5cc0f40390327",
        "name": "Konopelski",
        "phone": "6489302065",
        "district": "5c2020956bd5cc0f40390324",
        "address": "78340 Garrison Pass",
        "createdAt": "2018-12-23T23:56:08.805Z",
        "__v": 0
    }
]
```
<hr/>

### Create New School
<kbd>POST</kbd> `/api/schools`

Query Params:
```
No query params
```

Sample Request Body:
```
{ 
    "name": "Emmerich",
    "phone": "2467975489",
    "district": "5c2020cdad707b36741f9ee7",
    "address": "0751 Hyatt Trace"
}
```

Sample Success Response:
```
{
    "_id": "5c251bc029ba4328ec0d331e",
    "name": "Emmerich",
    "address": "0751 Hyatt Trace",
    "phone": "2467975488",
    "district": "5c2020cdad707b36741f9ee7",
    "createdAt": "2018-12-27T18:36:48.421Z",
    "__v": 0
}
```

Sample Failure Response:
```
{
    "message": "Internal Server Error",
    "stack": "APIError: E11000 duplicate key error collection: express-mongoose-es6-rest-api-development.schools index: phone_1 dup key: { : \"2467975489\" }\n    at ...
}
```
<hr/>

### Single School Details
<kbd>GET</kbd> `/api/schools/:sid`

Query Params:
```
sid: _id of an existing school
```

Sample Success Response:
```
{
    "_id": "5c251bc029ba4328ec0d331e",
    "name": "Emmerich",
    "address": "0751 Hyatt Trace",
    "phone": "2467975488",
    "district": "5c2020cdad707b36741f9ee7",
    "createdAt": "2018-12-27T18:36:48.421Z",
    "__v": 0
}
```

Sample Failure Response:
```
{
    "message": "Internal Server Error",
    "stack": "APIError: School not found\n    at new ExtendableError (C:\\Users\\cod18\\Documents\\PTO\\server\\helpers\\APIError.js:14:11)\n    at new APIError (
```
<hr/>

### Update School
<kbd>PUT</kbd> `/api/schools/:sid`

Query Params:
```
sid: _id of an existing school
```

Sample Request Body:
```
{ 
    "name": "Emmer"
}

```

Sample Success Response:
```
{
    "_id": "5c251bc029ba4328ec0d331e",
    "name": "Emmer",
    "address": "0751 Hyatt Trace",
    "phone": "2467975488",
    "district": "5c2020cdad707b36741f9ee7",
    "createdAt": "2018-12-27T18:36:48.421Z",
    "__v": 0
}
```

Sample Failure Response:
```
{
    "message": "Internal Server Error",
    "stack": "APIError: District not found\n    at new ExtendableError (C:\\Users\\cod18\\Documents\\PTO\\server\\helpers\\APIError.js:14:11)\n    at new APIError (...
}
```
<hr/>

### Delete School
<kbd>DELETE</kbd> `/v1/schools/:sid`

Query Params:
```
sid: _id of an existing school
```

Sample Success Response:
```
{
    "deleted": true,
    "deletedSchool": {
        "_id": "5c2020ec4d175c21e8704303",
        "name": "Walter",
        "phone": "1522799083",
        "district": "5c2020e94d175c21e8704300",
        "address": "0442 Camron Knolls",
        "createdAt": "2018-12-23T23:57:32.653Z",
        "__v": 0
    }
}
```

Sample Failure Response:
```
{
    "message": "Internal Server Error",
    "stack": "APIError: School not found\n    at new ExtendableError (C:\\Users\\cod18\\Documents\\PTO\\server\\helpers\\APIError.js:14:11)\n    at new APIError (...
}
```
<hr/>
