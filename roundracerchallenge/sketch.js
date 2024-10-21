// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let start = input("");
function setup() {
  createCanvas(windowWidth, windowHeight);
  //Racer = RoundRacer(0, 0, );
  racer1 = new roundRacer(height/4, );
}

function draw() {
  background(220);
  racer1.move();
  racer1.display();
}

class RoundRacer{
  constructor(xPos, yPos, xSpeed, color){
    this.xPos = 0;
    this.yPos = yP;
    this.xSpeed = random(3, 15);
    this.color = colour;
  }

  move(){
    this.xPos = this.xPos += this.xSpeed;
    if(this.xPos > width){
      this.xPos = 0;
    }
  }


  display(){
    fill(this.color);
    circle(this.xPos, this.yPos);
  }
  
}