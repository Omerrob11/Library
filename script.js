// Constructor 
counter = 0;
function Book(title,author,numOfPages,finished) {
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.finished = finished;
    this.counter = counter;

    this.info = () => {
       return `${this.title} by ${this.author}, ${this.numOfPages}, ${this.finished}`;
    }
}


// Global Variables
const myLibrary = []; 

// data strctures functions
function addBookToLibrary(bookObj) {
    myLibrary.push(bookObj)
}

// Dom elemetns related function
myLibrary.forEach((book) => {
    const bookContainer = createBookContainer();
    const bookItems = createBookDomElement(book);
    appendBookItems(bookContainer,bookItems);
    appendBookContainer(bookContainer);
});


// Create HTML ELEMENTS functions
function createBookContainer () {
     const bookContainer = document.createElement("div");
     bookContainer.setAttribute("counter", counter)
     // adding classslist of index it's a problem, because if we remove an element
     // the index will shift;

    // what i think of is to add another identifier for the object
    // so we can have the same unique identifer to the object and the container with class;
    // than we serach in the object lists the correct property, so when you press remove.
    // you look on the container - the father unique id.
    // than, you search in the array, you use one of the methods, to find the correct id in the list of objects.
     return bookContainer;
}

function createBookDomElement(book) {
    const title = document.createElement("p");

    const author = document.createElement("p");

    const numOfPages = document.createElement("p");

    const finished = document.createElement("p");

    const removeBookFromLibrary = document.createElement("button");
    
    removeBookFromLibrary.addEventListener("click",handleRemoveBook);

    updateText(title,author,numOfPages,finished,removeBookFromLibrary,book)
    return [title,author,numOfPages,finished,removeBookFromLibrary];
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

function updateText(title,author,numOfPages,finished,removeBtn,book) {
    title.textContent = "Book Title: " + book.title;
    author.textContent = "Book Author: " + book.author;
    numOfPages.textContent = "Numfer Of Pages: " + book.numOfPages;
    finished.textContent = "Did you read it " + book.finished;
    removeBtn.textContent = "remove";
}

// form elements references
const titleInput = document.getElementById("book_title");
const authorInput = document.getElementById("book_author");
const numOfPagesInput = document.getElementById("num_pages");
const haveReadInput = document.getElementById("have_read");


// Modal

const dialog = document.querySelector(".dialog");
const formContainer = document.querySelector(".form_container");
const showDialogBtn = document.querySelector(".show_dialog_btn");
const closeDialogBtn = document.querySelector(".close_dialog_btn");
const submitBtn = document.querySelector(".submit_btn")


showDialogBtn.addEventListener("click", (e) => {
    dialog.showModal();

});

closeDialogBtn.addEventListener("click", (e) => {
    dialog.close();

});

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const bookObj = createBookObject();
    addBookToLibrary(bookObj);
    reset();
    dialog.close();
    appendBookObj(bookObj);
    counter++;
});

function createBookObject() {
    const book = new Book(titleInput.value, authorInput.value,numOfPagesInput.value,haveReadInput.checked);
    return book;
}

function appendBookObj(bookObj) {
    const bookContainer = createBookContainer();
    const bookItems = createBookDomElement(bookObj);
    appendBookItems(bookContainer,bookItems);
    appendBookContainer(bookContainer);
}



// function reset 
function reset() {
    titleInput.value = "";
    authorInput.value = "";
    numOfPagesInput.value = "";
    haveReadInput.checked = false;

}


function handleRemoveBook(e) {
    let containerParent = document.querySelector(".book_cards");
    let bookContainer = e.target.parentElement;
    let contaierCounter = e.target.parentElement.getAttribute("counter");
    let indexOfContainer = myLibrary.findIndex(obj => obj.counter === +contaierCounter );
    myLibrary.splice(indexOfContainer,1);
    containerParent.removeChild(bookContainer);
    // contaierCounter.remove();
}












// create get functions of the current values in the inputs...
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
