const myLibrary=[];

function Book(name,author,pages,read){
    this.name=name;
    this.author=author;
    this.pages=pages;
    if(read==true){
        this.read="read";
    }
    else{
        this.read="unread"
    }
};

function addBookToLibrary(book){
    myLibrary.push(book);
};

const main=document.querySelector("main");

function displayBook(){
    main.innerHTML="";
    myLibrary.forEach(book =>{
        let card = document.createElement("div")
        card.classList.add("card")
        fillUpTheCard(card,book)
        main.appendChild(card)
    })
};

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
const buttonCard=document.createElement("div");
const addButton=document.createElement("button");
function addAddButton(){
    buttonCard.classList.add("button-card");
    main.appendChild(buttonCard)
    addButton.classList.add("add");
    buttonCard.appendChild(addButton);
}

addButton.addEventListener("click", ()=>{
    newBookForm.classList.add("toggle")
})

const newBookForm=document.getElementById("newBookForm")
newBookForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    let newName=document.getElementById("title");
    let newAuthor=document.getElementById("author")
    let newPages=document.getElementById("pages")
    let newRead=document.getElementById("read")
    let newBook= new Book(newName.value,newAuthor.value,newPages.value,newRead.checked)
    addBookToLibrary(newBook);
    displayBook();
    addAddButton();
}) 



let book1= new Book("The Wheel Of Time","Robert Jordan",654,true);
let book2= new Book("The Great Hunt","Robert Jordan",597,false);
let book3= new Book("Hobbit","J.R.R Tolkien",312,true);
let book4= new Book("Malzan The Book Of Fallen","Steven Ericson",610,false);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);

displayBook();
addAddButton();