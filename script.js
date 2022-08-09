const bookAuthor = document.querySelector("#author").value;
const bookTittle = document.querySelector("#tittle").value;
const bookPages = document.querySelector("#pages").value;
const addButton = document.querySelector("#add");

let myLibrary = [];

function Book(author, tittle, pages) {
  //constructor
  this.author = author;
  this.tittle = tittle;
  this.pages = pages;
}

function addBookToLibrary() {}

function userBook(bookAuthor, bookTittle, pages) {
  const newBook = new Book();
  newBook.author = bookAuthor;
  newBook.tittle = bookTittle;
  newBook.pages = pages;
  myLibrary.push(newBook);
  return myLibrary;
}

addButton.addEventListener("click", (value) => {
  userBook(value);
});
