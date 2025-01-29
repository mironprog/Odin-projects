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
}

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

                  <button type="submit" id="submitBtn" class="button-62">Add</button>
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

      document.getElementById("submitBtn").addEventListener("click", addBookToLibrary);
  });
});



