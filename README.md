# Book Management REST API - Task 3

A simple REST API built with Node.js and Express to perform CRUD (Create, Read, Update, Delete) operations on a list of books.

This mini task project was created to understand the basics of REST APIs, Express routing, HTTP methods, request handling, and JSON data processing. No database is used; all book data is stored in memory.

---

## Features

* Get all books
* Add a new book
* Update an existing book
* Delete a book
* JSON request and response handling

---

## Technologies Used

* Node.js
* Express.js
* Postman (for API testing)

---

## Project Structure

```
BookAPI/
├── node_modules/
├── src/
│   └── app.js
├── package.json
├── package-lock.json
└── server.js
```

---

## How to Run

1. Clone the repository:
   git clone https://github.com/HarshKevadiya18/BookAPI.git
2. Open the project folder.
3. Install dependencies:
   npm install
4. Start the server:
   node server.js
5. Open Postman and test the API at:
   http://localhost:3000/

---

## API Endpoints

### Get All Books

```http
GET /api/books
```

### Add a New Book

```http
POST /api/books
```

Sample Request Body:

```json
{
  "id": "3",
  "title": "Atomic Habits",
  "author": "James Clear"
}
```

### Update a Book

```http
PUT /api/books/:id
```

Sample Request Body:

```json
{
  "title": "Updated Title",
  "author": "Updated Author"
}
```

### Delete a Book

```http
DELETE /api/books/:id
```

---

Built as part of internship - Task 3
