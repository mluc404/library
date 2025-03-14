// Book Constructor
function Book(title, author, pages, read) {
  if (!new.target) {
    alert("Use the 'new' constructor to create a new book");
  }
  let id = crypto.randomUUID();
  Object.assign(this, { title, author, pages, read, id });
  this.about = `${this.title} is written by ${this.author} which has ${this.pages} pages.`;
}

// Read Status function
Book.prototype.readStatus = function () {
  this.read = !this.read;
  console.log("readStatus() triggered");
  return this.read;
};

// Function to create book and add it to Library
const myLibrary = [];
function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
}
let book1 = new Book("Harry Potter", "JK Rowling", 999, true);
addBookToLibrary("Harry Potter", "JK Rowling", 999, true);
addBookToLibrary("Rum Diary", "Hunter Thompson", 345, false);
addBookToLibrary("Paris", "Marc Levi", 212, true);
addBookToLibrary("Stoic", "Marcus Aureli", 467, false);

// Function to display books
let container = document.querySelector(".container");
let bookCard = document.querySelector(".bookCard");

function displayBook(arr) {
  arr.forEach((book) => {
    let eachBook = document.createElement("div");
    eachBook.innerHTML = bookCard.innerHTML;

    eachBook.setAttribute("id", book.id);
    eachBook.setAttribute("class", "bookCard");

    let title = eachBook.querySelector(".title");
    title.textContent = `Title: ${book.title}`;

    let author = eachBook.querySelector(".author");
    author.textContent = `Author: ${book.author}`;

    let pages = eachBook.querySelector(".pages");
    pages.textContent = `Pages: ${book.pages}`;

    let checkRead = eachBook.querySelector(".read");
    checkRead.textContent = `Read: ${book.read}`;

    console.log(book.read.value);

    container.appendChild(eachBook);

    ////////////////////////////////////////////////
    // Remove book button
    let removeBtn = eachBook.querySelector(".removeBtn");

    removeBtn.addEventListener("click", (e) => {
      // Make the book card fade before removing
      eachBook.style.opacity = "0";

      setTimeout(() => {
        container.removeChild(eachBook);
      }, 1000);
    });

    ////////////////////////////////////////////////
    // Read Status Button
    let readBtn = eachBook.querySelector(".readBtn");
    readBtn.addEventListener("click", (e) => {
      console.log(e);
      // WORKING FINE
      // console.log(checkRead.textContent);
      if (checkRead.textContent.includes("true")) {
        checkRead.textContent = "Read: false";

        // change button appearance
        e.target.textContent = "Not Read";
        e.target.style.backgroundColor = "red";
      } else {
        checkRead.textContent = "Read: true";
        // change button appearance
        e.target.textContent = "Read";
        e.target.style.backgroundColor = "green";
      }

      // // TRYING NEW METHODS USING PROTOTYPE
      // book.readStatus();
      // checkRead.textContent = `Read: ${book.read}`;
    });
  });
}
displayBook(myLibrary);

// Get input from New Book
let form = document.querySelector("form");
let inputs = form.querySelectorAll("input");
let inputTitle = form.querySelector("#title");
let inputAuthor = form.querySelector("#author");
let inputPages = form.querySelector("#pages");
let checkRead = document.querySelector("#checkRead");
let submitBtn = form.querySelector("#submit");

// Submit and add new book
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let isValid = true;

  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      console.log("input trimmed", input.value.trim());
      input.style.border = "red solid 2px";
      isValid = false;
      console.log("inside", isValid);
    } else {
      input.style.border = "black solid 2px";
    }
  });

  if (isValid) {
    addBookToLibrary(
      inputTitle.value,
      inputAuthor.value,
      inputPages.value,
      checkRead.checked
    );
    let newBookArr = myLibrary.splice(-1);
    displayBook(newBookArr);

    // // Reset input fields manually
    // inputs.forEach((input) => {
    //   if (input.id === "checkRead") {
    //     console.log(input);
    //   } else {
    //     input.value = "";
    //   }
    // });

    // Reset form auto
    form.reset();
  }
});

// Toggle button to show modal
let dialog = document.querySelector(".bookDialog");
let openButton = document.querySelector(".openDialog");
let closeButton = document.querySelector(".closeDialog");

openButton.addEventListener("click", (e) => {
  dialog.showModal();
});
closeButton.addEventListener("click", (e) => {
  dialog.close();
});

// done:
// add Remove book feature
// style book card to fade
// Read Status button

// done:
// try Read Status using Book prototype function
// Edit Submit button to reset fields
// Tweak Read Status style
// Make Remove book fade effect smoothly
