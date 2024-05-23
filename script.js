// Constructor 

function Book(title,author,numOfPages,finished) {
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.finished = finished;

    this.info = () => {
       return `${this.title} by ${this.author}, ${this.numOfPages}, ${this.finished}`;
    }
}


// Global Variables
const myLibrary = []; 
const book1 = new Book("lord of the rings", "omer",453,"yes");
const book2 = new Book("NBA", "roey",342,"yes");
const book3 = new Book("Fiba", "tomer",234,"no");


// data strctures functions
function addBookToLibrary(bookObj) {
    myLibrary.push(bookObj)
}

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);


// Dom elemetns related function
myLibrary.forEach((book) => {
    const bookContainer = createBookContainer();
    const bookItems = createBookItems(book);
    appendBookItems(bookContainer,bookItems);
    appendBookContainer(bookContainer);
});


// Create HTML ELEMENTS functions
function createBookContainer () {
    return document.createElement("div");
}

function createBookItems(book) {
    const title = document.createElement("p");

    const author = document.createElement("p");

    const numOfPages = document.createElement("p");

    const finished = document.createElement("p");

    updateText(title,author,numOfPages,finished,book)
    return [title,author,numOfPages,finished];
}


// append html elements

function appendBookItems(bookContainer,bookItems) {
    bookItems.forEach((item) => {
        bookContainer.appendChild(item);
    })
}

function appendBookContainer(bookContainer) {
    const bookCard = document.querySelector(".book_cards");
    bookCard.appendChild(bookContainer)
}


// change html elements

function updateText(title,author,numOfPages,finished,book) {
    title.textContent = "Book Title: " + book.title;
    author.textContent = "Book Author: " + book.author;
    numOfPages.textContent = "Numfer Of Pages: " + book.numOfPages;
    finished.textContent = "Did you read it " + book.finished
}



// Modal




/*

function createBookElement(book) {
    const bookContainer = document.createElement("div");
    const title = document.createElement("p");
    const author = document.createElement("p");
    const numOfPages = document.createElement("p");
    const finished = document.createElement("p");

    appendBookElements( bookContainer,title,author,numOfPages,finished);
    updateText(bookContainer,title,author,numOfPages,finished,book);
    //return bookContainer;

    return [bookContainer,title,author,numOfPages,finished]
}

function appendBookElements(bookContainer,title,author,numOfPages,finished) {
    bookContainer.appendChild(title);
    bookContainer.appendChild(author);
    bookContainer.appendChild(numOfPages);
    bookContainer.appendChild(finished);
}


*/
