// Book Constructor
function Book(title, author, pages, read) {
  if (!new.target) {
    alert("Use the 'new' constructor to create a new book");
  }
  let id = crypto.randomUUID();
  Object.assign(this, { title, author, pages, read, id });
  this.about = `${this.title} is written by ${this.author} which has ${this.pages} pages.`;
}

// Function to create book and add it to Library
const myLibrary = [];
function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
}
addBookToLibrary("Harry Potter", "JK Rowling", 999, true);
addBookToLibrary("Rum Diary", "Hunter Thompson", 345, false);
addBookToLibrary("Paris", "Marc Levi", 212, false);
addBookToLibrary("Stoic", "Marcus Aureli", 467, false);
