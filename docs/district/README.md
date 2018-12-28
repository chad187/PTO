# District API Docs

[District](/server/district/district.controller)

### Get All Districts
<kbd>GET</kbd> `api/districts?limit=2&skip=1`

Query Params:
```
limit: (number) Maximum number of results to return
skip: (number) Skip the first N results
```

Sample Response
```
[
    {
        "_id": "5c2020956bd5cc0f40390324",
        "name": "Peggie Weber",
        "city": "East Mohammedstad",
        "phone": "5365939030",
        "address": "346 Fernando Valley",
        "state": "Arkansas",
        "createdAt": "2018-12-23T23:56:05.549Z",
        "__v": 0
    },
    {
        "_id": "5c201fd69e7c6430441fbf8b",
        "name": "Makenzie Mayer",
        "city": "Heathcoteside",
        "phone": "4126415567",
        "address": "275 Halie Plains",
        "state": "Kansas",
        "createdAt": "2018-12-23T23:52:54.668Z",
        "__v": 0
    }
]
```
<hr/>

### Create New District
<kbd>POST</kbd> `/api/districts`

Query Params:
```
No query params
```

Sample Request Body:
```
{
    "name": "Peggie Weber",
    "city": "East Mohammedstad",
    "phone": "5365939032",
    "address": "346 Fernando Valley",
    "state": "Arkansas"  
}
```

Sample Success Response:
```
{
    "_id": "5c2520826d6be42e70f6c771",
    "name": "Peggie Weber",
    "phone": "5365939032",
    "address": "346 Fernando Valley",
    "city": "East Mohammedstad",
    "state": "Arkansas",
    "createdAt": "2018-12-27T18:57:06.410Z",
    "__v": 0
}
```

Sample Failure Response:
```
{
    "message": "Internal Server Error",
    "stack": "APIError: E11000 duplicate key error collection: express-mongoose-es6-rest-api-development.districts index: phone_1 dup key: { : \"5365939030\" }\n    at new...
}
```
<hr/>

### Single District Details
<kbd>GET</kbd> `/api/districts/:did`

Query Params:
```
did: _id of an existing district
```

Sample Success Response:
```
{
    "_id": "5c2520826d6be42e70f6c771",
    "name": "Peggie Weber",
    "phone": "5365939032",
    "address": "346 Fernando Valley",
    "city": "East Mohammedstad",
    "state": "Arkansas",
    "createdAt": "2018-12-27T18:57:06.410Z",
    "__v": 0
}
```

Sample Failure Response:
```
{
    "message": "Not Found",
    "stack": "APIError: No such district exists!\n    at new ExtendableError (C:\\Users\\cod18\\Documents\\PTO\\server\\helpers\\APIError.js:14:11)\n ...
}
```
<hr/>

### Update District
<kbd>PUT</kbd> `/api/districts/:did`

Query Params:
```
did: _id of an existing district
```

Sample Request Body:
```
{
    "name": "Peggie Web"
}

```

Sample Success Response:
```
{
    "_id": "5c2520826d6be42e70f6c771",
    "name": "Peggie Web",
    "phone": "5365939032",
    "address": "346 Fernando Valley",
    "city": "East Mohammedstad",
    "state": "Arkansas",
    "createdAt": "2018-12-27T18:57:06.410Z",
    "__v": 0
}
```

Sample Failure Response:
```
{
    "message": "Internal Server Error",
    "stack": "APIError: E11000 duplicate key error collection: express-mongoose-es6-rest-api-development.districts index: phone_1 dup key: { : \"5365939030\" }\n  ...
}
```
<hr/>

### Delete District
<kbd>DELETE</kbd> `/v1/districts/:did`

Query Params:
```
did: _id of an existing district
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
    "stack": "APIError: District not found\n    at new ExtendableError (C:\\Users\\cod18\\Documents\\PTO\\server\\helpers\\APIError.js:14:11)\n    at new APIError (...
}
```
<hr/>
