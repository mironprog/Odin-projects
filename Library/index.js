const myLibrary = [];

function Book(title, writer, pages, read) {
  this.title = title;
  this.writer = writer;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(event) {
  event.preventDefault();
  // take params, create a book then store it in the array
  const title = document.getElementById('title').value;
  const writer = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById("btnToggle").checked;

  console.log(title)
  const aBook = new Book(title, writer, pages, read);
  myLibrary.push(aBook);

  document.getElementById("registrationModal").remove();
  showBookInfo(aBook);
} 

function showBookInfo(book) {
  const bookInfo = document.createElement("div");
  bookInfo.id = "bookInfo";
  bookInfo.classList.add("card");

  bookInfo.innerHTML = `
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.writer}</p>
      <p><strong>Pages:</strong> ${book.pages}</p>
      <p><strong>Read:</strong> ${book.read ? "Yes" : "No"}</p>
      <button class="close-info" id="closeInfoBtn">Remove</button>
  `;

  document.getElementById("card-container").appendChild(bookInfo);

  document.getElementById("closeInfoBtn").addEventListener("click", function () {
    bookInfo.remove();
  });
}

document.addEventListener("DOMContentLoaded", function() {
  const openModalBtn = document.getElementById("openModalBtn");

  openModalBtn.addEventListener("click", function() {
      if (document.getElementById("registrationModal")) return;

      const modal = document.createElement("div");
      modal.id = "registrationModal";
      modal.classList.add("modal");

      modal.innerHTML = `
          <div class="modal-content">
              <button class="close-btn" id="closeModalBtn">X</button>
              <h2>Tell me more about your book</h2>
              <form>
                  <label for="title">Title of the book:</label>
                  <input type="text" id="title" required><br><br>

                  <label for="author">Author of the book:</label>
                  <input type="text" id="author" required><br><br>

                  <label for="pages">How many pages:</label>
                  <input type="number" id="pages" required><br><br>

                  <label for="btnToggle">Have you read it?</label><br><br>
                  <label class="toggle">
                    <input type="checkbox" id="btnToggle" name="btnToggle" />
                    <span class="slider"></span>
                  </label><br><br>

                  <button type="submit" id="submitBtn" class="button-62">Add</button>
              </form>
          </div>
      `;

      document.body.appendChild(modal);

      document.getElementById("closeModalBtn").addEventListener("click", function() {
          modal.remove();
      });

      window.addEventListener("click", function(event) {
          if (event.target === modal) {
              modal.remove();
          }
      });

      document.getElementById("submitBtn").addEventListener("click", addBookToLibrary);
  });
});



