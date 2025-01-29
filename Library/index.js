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

console.log(myLibrary);

document.addEventListener("DOMContentLoaded", function() {
  const openModalBtn = document.getElementById("openModalBtn");

  openModalBtn.addEventListener("click", function() {
      // Ellenőrizzük, hogy már létezik-e a modal
      if (document.getElementById("registrationModal")) return;

      // Modal létrehozása
      const modal = document.createElement("div");
      modal.id = "registrationModal";
      modal.classList.add("modal");

      // Modal tartalom
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

                  <button type="submit" class="btn">Add</button>
              </form>
          </div>
      `;

      // Modal hozzáadása az oldalhoz
      document.body.appendChild(modal);

      // Bezárás esemény hozzáadása
      document.getElementById("closeModalBtn").addEventListener("click", function() {
          modal.remove();
      });

      // Külső kattintásra bezárás
      window.addEventListener("click", function(event) {
          if (event.target === modal) {
              modal.remove();
          }
      });
  });
});
