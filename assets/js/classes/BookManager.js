import { Book } from './Book.js';


class BookManager {

    #books;

    constructor(books = []) {
        this.#books = books;

    }

    get() {
        return this.#books;
    }

    set books(books) {
        this.#books = books;

    }

    findAllBooks() {
        return this.#books;
    }

    findBookById(id) {
        for (let i = 0; i < this.#books.length; i++) {
            if (this.#books[i].id === id) {
                return this.#books[i];
            }
            else {
                return null;
            }
        }
    }

    findBooksByTitle(title) {
        let titleBooks = [];
        for (let i = 0; i < this.#books.length; i++) {
            if (this.#books[i].title === title) {
                return titleBooks.push(this.#books[i]);
            }
            else {
                return null;
            }
        }
    }

    findBooksByAuthor(author) {
        let authorBooks = [];
        for (let i = 0; i < this.#books.length; i++) {
            if (this.#books[i].author === author) {
                return authorBooks.push(this.#books[i]);
            }
            else {
                return null;
            }
        }
    }

    findBooksByPublicationYear(year) {
        let yearBooks = [];
        for (let i = 0; i < this.#books.length; i++) {
            if (this.#books[i].year === year) {
                return yearBooks.push(this.#books[i]);
            }
            else {
                return null;
            }
        }
    }

    createBook(book) {
        return this.#books.push(book);
    }

    deleteBook(bookId) {
        for (let i = 0; i < this.#books.length; i++) {
            if (this.#books[i].id === bookId) {
                this.#books.splice(i, 1);
            }
        }
    }

    editBook(book) {
        for (let i = 0; i < this.#books.length; i++) {
            if (this.#books[i].id === book.id) {
                this.#books[i] = book;
            }
        }
    }

    save() {
        let jsonBook = JSON.stringify(books);
        sessionStorage.setItem("books", jsonBook);
    }

    load() {
        let booksStorage = JSON.parse(sessionStorage.getItem("books"));
        let newBooks = [];

        for (let i = 0; i < booksStorage.length; i++) {
            let parseBook = JSON.parse(booksStorage[i]);
            let newBook = new Book(parseBook.id, parseBook.title, parseBook.author, parseBook.publicationDate, parseBook.totalPages, parseBook.excerpt, parseBook.coverImage);
            newBooks.push(newBook);
        }
    }
}

export { BookManager };