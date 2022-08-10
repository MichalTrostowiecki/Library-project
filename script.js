const bookAuthor = document.querySelector("#author");
const bookTittle = document.querySelector("#tittle");
const bookPages = document.querySelector("#pages");
const btnAdd = document.querySelector("#add");
let myLibrary = [];

function Book(author, tittle, pages) {
  //constructor
  this.author = author;
  this.tittle = tittle;
  this.pages = pages;
}

function addBookToLibrary() {}

function addBookToLibrary() {
  let author = bookAuthor.value;
  let tittle = bookTittle.value;
  let pages = bookPages.value;
  userBook(author, tittle, pages);
}

function userBook(author, tittle, pages) {
  const newBook = new Book();
  newBook.author = author;
  newBook.tittle = tittle;
  newBook.pages = pages;
  myLibrary.push(newBook);
  return myLibrary;
}

btnAdd.addEventListener("click", () => {
  userBook(bookAuthor.value, bookTittle.value, bookPages.value);
});

function openForm() {
  document.getElementById("book-input").style.display = "block";
}

function closeForm() {
  document.getElementById("book-input").style.display = "none";
}

const btnOpen = document.getElementsByClassName("form-button");
