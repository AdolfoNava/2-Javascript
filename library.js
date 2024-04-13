class Book {
    constructor(title, author, available = true) {
        this.title = title;
        this.author = author;
        this.available = available;
    }
}
const newBooks = `[
{"title": "Lord of the Flies", "author": "William Golding"},
{"title": "Game of Thrones", "author": "George R. R. Martin"},
{"title": "The Man in the Brown Suit", "author": "Agatha Christie"},
{"title": "Frankenstein", "author": "Mary Shelley"},
{"title": "The Art of War", "author": "Sun Tzu"},
{"title": "No Longer Human", "author": "Osamu Dazai"},
{"title": "Coraline", "author": "Neil Gaiman"}
]`;
const Library = {
    books: [],
    addbook(title, author) {
        const book = new Book(title, author);
        this.books.push(book);
        console.log(`Added ${book.title} by ${book.author} to the library! There are now ${this.books.length} books in the library's database.`);
    }, recieveBooks(bookData) {
        console.log(`Adding new collection of books from someone.`);
        const booksToAdd = JSON.parse(bookData);
        for (let book of booksToAdd) {
            Library.addbook(book.title, book.author);
        }
    },
    checkOutBook(title) {
        try {
            for (let book of this.books) {
                if (book.title === title && book.available) {
                    found = true;
                    book.available = false;
                    console.log(`Checked out: ${book.title}`)
                    break;
                }
            }
            if (!found) {
                throw new Error(`The book: ${title} not found in the collection or it was already checked out.`);
            }
        }
        catch (error) {
            console.log(error.message);
        }
    },
    getAvailableBooks() {
        let bookList = [];
        for (let book of this.books) {
            if (book.available)
                bookList.push(book.title)
        }
        console.log(`There are ${bookList.length} titles currently on the shelf: ${bookList.join(`,`)}`);
    },
    returnBook(title) {
        try {
            console.log(`Returning ${title} to the library.`);
            let returned = false;
            for (let book of this.books) {
                if (title === book.title && !available) {
                    book.available = true;
                    break;
                }
            } if (!returned) {
                throw new Error(`Book isn't in our library and can't take a book that we didn't own beforehand or we already had a copy of ${title} meaning that this book isn't ours.`);
            }
        }catch(err)
        {
            console.log(err.message);
        }
    }
}
Library.recieveBooks(newBooks);