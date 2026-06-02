const express = require("express");

const app = express();

app.use(express.json());

let bookArr = [
  {
    id: "1",
    title: "The Alchemist",
    author: "Paulo Coelho",
  },
  {
    id: "2",
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
  },
];

app.post("/api/books", (req, res) => {
  bookArr.push(req.body);

  return res.status(200).json({ message: "Book details added successfully." });
});

app.get("/api/books", (req, res) => {
  return res.send(bookArr);
});

app.put("/api/books/:id", (req, res) => {
  const id = req.params.id;

  const book = bookArr.find((b) => b.id === id);
  if (!book) {
    return res.status(404).json({
      message: "Book not found",
    });
  }

  book.title = req.body.title || book.title;
  book.author = req.body.author || book.author;

  return res.json({
    message: "Book updated successfully",
    book,
  });
});

app.delete("/api/books/:id", (req, res) => {
  const id = req.params.id;
  const book = bookArr.find((b) => b.id === id);
  if (!book) {
    return res.status(404).json({
      message: "Book not found",
    });
  }

  bookArr = bookArr.filter((b) => b.id !== id);
  return res.status(200).json({
    message: "Book deleted successfully",
  });
});

module.exports = app;
