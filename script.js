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
  this.id = Math.floor(Math.random() * 1000000);
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

function createBookCard(book, index) {
  const bookContainer = document.querySelector(".book-container");
  const bookCard = document.createElement("div");
  const author = document.createElement("p");
  const tittle = document.createElement("p");
  const pages = document.createElement("p");
  const createRemoveBtn = document.createElement("button");
  const toggleSwitchLabel = document.createElement("label");
  const toggleSwitchInput = document.createElement("input");
  const toggleSwitchSpan = document.createElement("span");
  const isRead = document.createElement("p");
  const isRead2 = document.createElement("p");

  bookCard.setAttribute("id", index);

  myLibrary.forEach((book, index) => {
    author.textContent = `Author: ${book.author}`;
    tittle.textContent = `Tittle: ${book.tittle}`;
    pages.textContent = `Pages: ${book.pages}`;
    createRemoveBtn.textContent = "Remove";
    for (let i = 0; i < myLibrary.length; i++) {
      createRemoveBtn.setAttribute("id", i);
    }
  });

  bookContainer.append(bookCard);
  bookCard.appendChild(author);
  bookCard.appendChild(tittle);
  bookCard.appendChild(pages);
  bookCard.appendChild(isRead);
  bookCard.appendChild(toggleSwitchLabel);
  toggleSwitchLabel.appendChild(toggleSwitchInput);
  toggleSwitchLabel.appendChild(toggleSwitchSpan);
  bookCard.appendChild(isRead2);
  bookCard.appendChild(createRemoveBtn);

  isRead.textContent = "Read :";
  isRead2.textContent = "NO / YES";
  bookCard.classList.add("book-card");
  // -------------Toggle Switch-------------

  toggleSwitchLabel.classList.add("switch");
  toggleSwitchInput.type = "checkbox";
  toggleSwitchSpan.classList.add("slider-round");

  //// -------------remove button -------------
  createRemoveBtn.classList.add("remove-button");
  createRemoveBtn.addEventListener("click", (event) => {
    let bookId = parseInt(event.target.id);
    myLibrary.map((book, index) => {
      if (index === bookId) {
        myLibrary.splice(index, 1);
      }
    });
    // remove(bookId);
    removeDisplayBook(event);
  });
}

//------ Functions to remove books from display and library ----

function removeDisplayBook(event) {
  event.currentTarget.parentNode.remove();
}

////////////work in progress

function remove(bookId) {
  myLibrary.splice(bookId, 1);
}
