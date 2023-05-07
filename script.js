const myLibrary=[];

function Book(name,author,pages,read){
    this.name=name;
    this.author=author;
    this.pages=pages;
    this.read=read;
};

function addBookToLibrary(book){
    myLibrary.push(book);
};

const main=document.querySelector("main");

function displayBook(){
    myLibrary.forEach(book =>{
        let card = document.createElement("div")
        card.classList.add("card")
        fillUpTheCard(card,book)
        main.appendChild(card)
    })
};

let book1= new Book("The Wheel Of Time","Robert Jordan",654,"read");
let book2= new Book("The Great Hunt","Robert Jordan",597,"read");
let book3= new Book("Hobbit","J.R.R Tolkien",312,"read");
let book4= new Book("Malzan The Book Of Fallen","Steven Ericson",610,"unred");

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);

function fillUpTheCard(card,book){
    let bookTitle=document.createElement("div");
    bookTitle.classList.add("title")
    bookTitle.innerHTML=book.name;
    card.appendChild(bookTitle);
    let bookAuthor=document.createElement("div");
    bookAuthor.classList.add("author")
    bookAuthor.innerHTML=book.author;
    card.appendChild(bookAuthor);
    let bookPages=document.createElement("div");
    bookPages.classList.add("pages")
    bookPages.innerHTML=book.pages;
    card.appendChild(bookPages);
    let bookRead=document.createElement("div");
    bookRead.classList.add("read")
    bookRead.innerHTML=book.read;
    card.appendChild(bookRead);
}
displayBook()