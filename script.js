const author = document.querySelector("#author");
const tittle = document.querySelector("#tittle");
const pages = document.querySelector("#pages");
const btnAdd = document.querySelector("#add");
let myLibrary = [];

function Book(author, tittle, pages) {
  //constructor
  this.author = author;
  this.tittle = tittle;
  this.pages = pages;
}

function userBook() {
  const newBook = new Book(author.value, tittle.value, pages.value);
  if (author.value === "" || tittle.value === "" || pages.value === "") {
    alert("Please fill all the data.");
  } else {
    myLibrary.push(newBook);
  }
}

btnAdd.addEventListener("click", userBook);

function openForm() {
  document.getElementById("book-input").style.display = "block";
}

function closeForm() {
  document.getElementById("book-input").style.display = "none";
}

const btnOpen = document.querySelector(".form-button");
btnOpen.addEventListener("click", openForm);

const hideFormBtn = document.querySelector(".hide-form");
hideFormBtn.addEventListener("click", closeForm);

function createBookCard() {
  const bookContainer = document.querySelector(".book-container");
  const bookCard = document.createElement("div");
  const author = document.createElement("p");
  const tittle = document.createElement("p");
  const pages = document.createElement("p");

  myLibrary.forEach((book) => {
    author.textContent = `Author: ${book.author}`;
    tittle.textContent = `Tittle: ${book.tittle}`;
    pages.textContent = `Pages: ${book.pages}`;
  });

  bookContainer.append(bookCard);
  bookCard.appendChild(author);
  bookCard.appendChild(tittle);
  bookCard.appendChild(pages);
}
