const myLibrary = [];

function Book(title, writer, pages, read) {
  this.title = title;
  this.writer = writer;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  // take params, create a book then store it in the array
  const title = prompt("Please enter the title of the book:");
  const writer = prompt("Please enter the writer of the book:");
  const pages = prompt("Please enter the pages of the book:");
  const read = prompt("Have you read the book?");

  const aBook = new Book(title, writer, pages, read);
  myLibrary.push(aBook);
}

addBookToLibrary();
console.log(myLibrary);