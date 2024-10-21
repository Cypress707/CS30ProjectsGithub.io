// intro to objects
// Ryder Taylor
// Oct 10, 2024
let myBook;
let shelf = 500;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myBook = new Book("Cool dude with a hat", "Ryder Taylor",
    6942069, "hard", 1000, shelf*0.1);
  
}

function draw() {
  background(220);
  myBook.display();
}

class Book{
  constructor(title, author, isbn, cover, pages, x){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.coverType = cover;
    this.pageCount = pages;
    this.x = x;
  }

  display(){
    rectMode(CENTER); textAlign(CENTER,CENTER);
    textSize(20);
    //if(this.coverType===)
    switch(this.coverType){
    case "softcover":
      fill(250,150,60);   break;
    case "hardcover":
      fill(150,70,32);    break;
    case "leatherbound":
      fill(100,50,50);    break;
    }
    for(let shelf = 500; x < width; x += 100){
  
      rect(this.x, height/2, this.pageCount/10, 150);
      fill(255);
      text(this.title[0], this.x,height/2 - 50);
    }

  }



  printOut(){
    print(this.title + ", Written by " + this.author);
    print("length: " + this.pageCount);
    print("ISBN: " + this.isbn);
  }
}
