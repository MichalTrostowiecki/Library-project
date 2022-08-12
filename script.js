let myLibrary = [];

const btnAdd = document.querySelector("#add");
const btnOpen = document.querySelector(".form-button");
btnOpen.addEventListener("click", openForm);

const hideFormBtn = document.querySelector(".hide-form");
hideFormBtn.addEventListener("click", closeForm);

function Book(author, tittle, pages, id) {
  //constructor
  this.author = author;
  this.tittle = tittle;
  this.pages = pages;
  this.id = -1;
}

// -------------Getting book from the user input-------------

function userBook() {
  const author = document.querySelector("#author");
  const tittle = document.querySelector("#tittle");
  const pages = document.querySelector("#pages");

  const newBook = new Book(author.value, tittle.value, pages.value, (id = -1));

  if (author.value === "" || tittle.value === "" || pages.value === "") {
    alert("Please fill all the data.");
  } else {
    myLibrary.push(newBook);
    myLibrary.forEach((item, i) => {
      item.id = i + 1;
    });
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

  myLibrary.forEach((book) => {
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
  bookCard.appendChild(toggleSwitchLabel);
  toggleSwitchLabel.appendChild(toggleSwitchInput);
  toggleSwitchLabel.appendChild(toggleSwitchSpan);

  bookCard.appendChild(isRead);
  bookCard.appendChild(createRemoveBtn);
  isRead.textContent = "NO / YES";
  bookCard.classList.add("book-card");
  // -------------Toggle Switch-------------

  toggleSwitchLabel.classList.add("switch");
  toggleSwitchInput.type = "checkbox";
  toggleSwitchSpan.classList.add("slider-round");

  //// -------------remove button -------------
  createRemoveBtn.classList.add("remove-button");
  createRemoveBtn.addEventListener("click", (event) => {
    let dipslayBookId = parseInt(event.target.id);
    removeFromLibrary(myLibrary, dipslayBookId);
    removeDisplayBook(event);
  });
}

//------ Functions to remove books from display and library ----

function removeDisplayBook(event) {
  event.currentTarget.parentNode.remove();
}

// function removeFromLibrary(array, idNumber) {
//   const indexOfObject = array.findIndex((object) => {
//     return object.id === 2;
//   });
//};

////////////copy of this function
function removeFromLibrary(array, idNumber) {
  array.forEach((book, i) => {
    let libraryId = array[i]["id"];
    if (libraryId - 1 === idNumber) {
      arrayIndex = libraryId - 1;
      array.splice(arrayIndex, 1);
      arrayIndex -= 1;
    }
  });
}
