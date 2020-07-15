class Bookshelf {
  constructor() {
    this.favoriteBooks = [];
  }
  addFavoriteBook(bookName) {
    if (!bookName.includes("Great")) {
      this.favoriteBooks.push(bookName);
    }
  }
  printFavoriteBooks() {
    console.log(`Favorite Books: ${String(this.favoriteBooks.length)}`);
    for (let bookName of this.favoriteBooks) {
      console.log(bookName);
    }
  }
}

function loadBooks(bookShelf) {
  fakeAjax(BOOK_API, (bookArray) => {
    for (let book of bookArray) {
      bookShelf.addFavoriteBook(book);
    }
    bookShelf.printFavoriteBooks();
  });
}

const BOOK_API = "https://some.url/api";

// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url, cb) {
  setTimeout(function fakeLoadingDelay() {
    cb([
      "A Song of Ice and Fire",
      "The Great Gatsby",
      "Crime & Punishment",
      "Great Expectations",
      "You Don't Know JS",
    ]);
  }, 500);
}

const bsInstance = new Bookshelf();
loadBooks(bsInstance);
