# Login Microservice

Please run `npm install` after cloning

## Requsting data

To request data from the microservice. Send and HTTP POST request to localhost:5001/login that contains a json body with username and password fields.

Example json:

{
    "username": "myUsername",
    "password": "myPassword"
}

## Receiving data

The API will respond to the request with a JSON web token if the provided credentials are valid, or a HTTP Error response if not.

Example:

{
    "message": "Authenticated successfully",
    "Authorization": "token would be here"
}

{
    "message": "No user account information found"
}