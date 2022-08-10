let myLibrary = [];

const btnAdd = document.querySelector("#add");
const btnOpen = document.querySelector(".form-button");
btnOpen.addEventListener("click", openForm);

const hideFormBtn = document.querySelector(".hide-form");
hideFormBtn.addEventListener("click", closeForm);

function Book(author, tittle, pages) {
  //constructor
  this.author = author;
  this.tittle = tittle;
  this.pages = pages;
}

// -------------Getting book from the user input-------------

function userBook() {
  const author = document.querySelector("#author");
  const tittle = document.querySelector("#tittle");
  const pages = document.querySelector("#pages");

  const newBook = new Book(author.value, tittle.value, pages.value);
  if (author.value === "" || tittle.value === "" || pages.value === "") {
    alert("Please fill all the data.");
  } else {
    myLibrary.push(newBook);
    createBookCard();
  }
}

btnAdd.addEventListener("click", userBook);

// -------------Pop up form hide / open -------------
function openForm() {
  document.getElementById("book-input").style.display = "block";
}

function closeForm() {
  document.getElementById("book-input").style.display = "none";
}

// -------------Adding books to display-------------

function createBookCard() {
  let bookCounter = myLibrary.length;
  const bookContainer = document.querySelector(".book-container");
  const bookCard = document.createElement("div");
  const author = document.createElement("p");
  const tittle = document.createElement("p");
  const pages = document.createElement("p");
  const createRemoveBtn = document.createElement("button");
  const bookNumber = document.createElement("p");

  myLibrary.forEach((book) => {
    author.textContent = `Author: ${book.author}`;
    tittle.textContent = `Tittle: ${book.tittle}`;
    pages.textContent = `Pages: ${book.pages}`;
    createRemoveBtn.textContent = "Remove";
    bookNumber.textContent = `Book number: ${bookCounter}`;
  });

  bookContainer.append(bookCard);
  bookCard.appendChild(author);
  bookCard.appendChild(tittle);
  bookCard.appendChild(pages);
  bookCard.appendChild(createRemoveBtn);
  bookCard.appendChild(bookNumber);
  bookCard.classList.add("book-card");
  createRemoveBtn.classList.add("remove-button");
  createRemoveBtn.addEventListener("click", () => {
    removeDisplayBook();
    removeFromLibrary(myLibrary, author);
  });
}

//------ Functions to remove books from display and library ----

function removeDisplayBook() {
  const div = document.querySelector(".book-card");
  div.remove();
}

function removeFromLibrary(array, element) {
  const index = array.indexOf(element);
  array.splice(index, 1);
}
