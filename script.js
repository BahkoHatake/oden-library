const myLibrary=[];
function Book(name,author,pages,read){
    this.name=name;
    this.author=author;
    this.pages=+pages;
    if(read==true){
        this.read="Read";
    }
    else{
        this.read="Unread"
    }
};

function addBookToLibrary(book){
    myLibrary.push(book);
};

const main=document.querySelector("main");

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
    let cardButton1=document.createElement("button");
    cardButton1.classList.add("read-button")
    cardButton1.innerHTML="&#10003;";
    card.appendChild(cardButton1);
    let cardButton2=document.createElement("button");
    cardButton2.classList.add("remove-button");
    cardButton2.innerHTML="Remove";
    card.appendChild(cardButton2);
    let index=myLibrary.indexOf(book)
    cardButton1.setAttribute("id",index);
    cardButton2.setAttribute("id",index);
}

function displayBook(){
    main.innerHTML="";
    myLibrary.forEach(book =>{
        let card = document.createElement("div");
        card.classList.add("card");
        fillUpTheCard(card,book);
        main.appendChild(card);
    })
};

const buttonCard=document.createElement("div");
const addButton=document.createElement("button");
function addAddButton(){
    buttonCard.classList.add("add-card-button");
    main.appendChild(buttonCard);
    addButton.classList.add("add");
    addButton.innerHTML="+"
    buttonCard.appendChild(addButton);
}

addButton.addEventListener("click", ()=>{
    newBookForm.classList.add("toggle");
    blur.classList.add("toggle");
})

const newName=document.getElementById("title");
const newAuthor=document.getElementById("author")
const newPages=document.getElementById("pages")
const newRead=document.getElementById("read")

const newBookForm=document.getElementById("newBookForm")
const blur=document.querySelector(".blur")
newBookForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    let newBook= new Book(newName.value,newAuthor.value,newPages.value,newRead.checked)
    addBookToLibrary(newBook);
    displayBook();
    addRemoveBookBtn();
    closeAndClear();
    addAddButton();
    displayInfo()
}) 

const cancel=document.getElementById("cancel")
cancel.addEventListener("click", closeAndClear)

function closeAndClear(){
    newName.value="";
    newAuthor.value="";
    newPages.value="";
    newBookForm.classList.remove("toggle");
    blur.classList.remove("toggle");
}
function addRemoveBookBtn(){
    let removeBtn =document.querySelectorAll(".remove-button")
    removeBtn.forEach(btn=>{btn.addEventListener("click", function(){
        myLibrary.splice(this.id,1)
        displayBook();
        addRemoveBookBtn()
        addReadBookBtn()
        addAddButton();
        displayInfo()
})})}

Book.prototype.toggleRead=function() {
    if (this.read=="Read"){
        this.read="Unread"
    }
    else if(this.read=="Unread"){
        this.read="Read"
    }
}

function addReadBookBtn(){
    let readBtn=document.querySelectorAll(".read-button")
    readBtn.forEach(btn=>{btn.addEventListener("click",function(){
        myLibrary[this.id].toggleRead();
        displayBook();
        addRemoveBookBtn();
        addReadBookBtn();
        addAddButton();
        displayInfo()
    })})
}
const booksInfoDsp=document.querySelector(".books-info");
const booksReadDsp=document.querySelector(".read-info");
const booksPagesDsp=document.querySelector(".pages-info");
function displayInfo(){
    booksInfo=myLibrary.length;
    let booksRead = 0;
    let booksPages = 0;
    myLibrary.forEach(book =>{
        if (book.read=="Read"){
            booksRead+=1
            booksPages+=book.pages;
        }
    })
    booksInfoDsp.innerHTML=booksInfo;
    booksReadDsp.innerHTML=booksRead;
    booksPagesDsp.innerHTML=booksPages;
}

let book1= new Book("The Wheel Of Time","Robert Jordan",654,true);
let book2= new Book("The Great Hunt","Robert Jordan",597,false);
let book3= new Book("Hobbit","J.R.R Tolkien",312,true);
let book4= new Book("Malazan The Book Of Fallen","Steven Ericson",610,false);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);

displayBook();
addAddButton();
addRemoveBookBtn();
addReadBookBtn();
displayInfo();