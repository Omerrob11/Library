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
     bookContainer.setAttribute("counter", counter);
     return bookContainer;
}

function createBookDomElement(book) {
    const title = document.createElement("p");

    const author = document.createElement("p");

    const numOfPages = document.createElement("p");

    const finished = document.createElement("p");

    const toggleRead = document.createElement("button");

    toggleRead.addEventListener("click",handleToggleRead);

    const removeBookFromLibrary = document.createElement("button");
    
    removeBookFromLibrary.addEventListener("click",handleRemoveBook);

    updateText(title,author,numOfPages,finished,removeBookFromLibrary,toggleRead,book)
    return [title,author,numOfPages,finished,removeBookFromLibrary,toggleRead];
}


// append html elements

function appendBookItems(bookContainer,bookItems) {
    bookItems.forEach((item) => {
        bookContainer.appendChild(item);
    })
}

function appendBookContainer(bookContainer) {
    const bookCard = document.querySelector(".book_cards");
    bookCard.appendChild(bookContainer);
}


// change html elements

function updateText(title,author,numOfPages,finished,removeBtn,toggleReadBtn,book) {
    title.textContent = "Book Title: " + book.title;
    author.textContent = "Book Author: " + book.author;
    numOfPages.textContent = "Numfer Of Pages: " + book.numOfPages;
    finished.textContent = book.finished ? "Did you read it: Yes" : "Did you read it: No"
    removeBtn.textContent = "remove";
    toggleReadBtn.textContent = book.finished ? "Read" : "Not read";
}

// form elements references
const titleInput = document.getElementById("book_title");
const authorInput = document.getElementById("book_author");
const numOfPagesInput = document.getElementById("num_pages");
const haveReadInput = document.getElementById("have_read");
const errorMessage = document.querySelector(".error_message");


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
    if (!errorMessage.classList.contains("hidden")) {
        errorMessage.classList.add("hidden");
    }
    dialog.close();

});

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (!formIsValid()) {
        return;
    }
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


// event listener functions

function handleRemoveBook(e) {
    let containerParent = document.querySelector(".book_cards");
    let bookContainer = e.target.parentElement;
    let contaierCounter = e.target.parentElement.getAttribute("counter");
    let indexOfContainer = myLibrary.findIndex(obj => obj.counter === +contaierCounter );
    myLibrary.splice(indexOfContainer,1);
    containerParent.removeChild(bookContainer);
    // contaierCounter.remove();
}

function handleToggleRead (e) {
    let contaierCounter = e.target.parentElement.getAttribute("counter")
    let indexOfContainer = myLibrary.findIndex(obj => obj.counter === +contaierCounter );
    let book = myLibrary[indexOfContainer];
    toggleReadBtn.textContent = book.finished ? "Read" : "Not read";
    // check this, if it is stored as true or false
    book.finished = !book.finished;
}


function formIsValid() {
    let errorMessageText = "Please Fill:";
    if (titleInput.value === "" || authorInput.value === "" || numOfPagesInput.value === "") {
        if (titleInput.value === "") {
            errorMessageText = errorMessageText + " Book Title";
        }
        if (authorInput.value === "") {
            errorMessageText = errorMessageText + " ,Author Name";
        }


        if (numOfPagesInput.value === "") {
            errorMessageText = errorMessageText + " ,Number of pages";
        }
        errorMessage.classList.remove("hidden");
        errorMessage.textContent = errorMessageText;
        return false;
    }
    errorMessage.classList.add("hidden");
    return true;
}
// what else:
// slight form validation - just check if everythins is filled
// check if all the logic is correct
// apply minimal css
// check for others code