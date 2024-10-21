// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawRoad();
}

function drawRoad(){
  fill(50);
  rectMode(CENTER);
  rect(width/2, height/2, width,height/2 );
  //fill(255);
  //for(let i = 0; i < width; i += 100){
 //   rect(i,height/2,40,10);
 // }
 fill(200,180,20);
  rect(width/2, height/2 + 10, width, 7.5)
  rect(width/2, height/2 - 10, width, 7.5)
}


class Vehicle{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.s = speed;
    this.t = truck;
    this.c = car
  }

}