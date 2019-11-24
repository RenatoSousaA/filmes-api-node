# filmes-api-node

## /AUTH

Method: POST
Body:
{
    "email": "admin",
    "password": "admin"
}
Response: TOKEN

## /movies or /movies/:id

Method: GET | POST | PUT | DELETE
Body (POST and PUT):
{
    "title": "title",
    "description": "description",
    "rating": "rating"
}

## /users or /users/:id

Method: GET | POST | PUT | DELETE
Body (POST and PUT):
{
    "email": "email",
    "password": "password",
    "name": "name"
}


