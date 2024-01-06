const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const axios = require('axios').default;
const public_users = express.Router();

public_users.post("/register", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

async function getBookbyISBN(){
    const response = axios.get('/isbn/:isbn');
  const isbn = response.data;
  const book = books[isbn];
    res.send(JSON.stringify(book, null, 4));
}
  
// Get book details based on author
async function getBookbyAuthor(){
    const response = axios.get('/author/:author');
  const author = response.data;
  for (let key in books) {
    if (books[key].author == author) {
      book = books[key];
    }
  }
    res.send(JSON.stringify(book, null, 4));
}

// Get all books based on title
async function getBookbyTitle(){
    const response = axios.get('/title/:title');
  const title = response.data;
  for (let key in books) {
    if (books[key].title == title) {
      book = books[key];
    }
  }
    res.send(JSON.stringify(book, null, 4));
}

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  const isbn = req.params.isbn;
  let book = books[isbn];
  return res.status(300).json({ reviews: book.reviews });
});

module.exports.general = public_users;
