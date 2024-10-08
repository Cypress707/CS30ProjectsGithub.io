// Perlin Noise Landscape
// Ryder Taylor
// October 1st, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rTime1 = 5
let rInterval = 0.01
let rWidth = 1


function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(135,206,255);
  fill(255,255,255);
  //to make the landscape
  mountainRange();
 
  

}

function mountainRange(){

  
  let maxY = 0
  let rTime = rTime1

  for(let x = 0; x < width; x += rWidth){

  //making the landscape
  let rectHeight = noise(rTime);
  rectHeight = map(rectHeight,0, 1, 50, 500);
  //making the rectangles
  fill(0);
  rect(x, height, rWidth, -rectHeight)
  //going to the next rectangle
  rTime += rInterval;
  //finding the max height
  if(rectHeight > maxY){
    flagx = x;
    maxY = rectHeight;
  }
  }
  //flag making function
  makeFlag(flagx, height - maxY);
  
}
//changing the rectangle width
function keyPressed(){
  if(key === "a"){
    if(rWidth > 1){
      rWidth = rWidth -= 1;
    }
  }
  if(key === "d"){
    if(rWidth < 100){
      rWidth = rWidth += 1;
    }
  }
}
//making the flag
function makeFlag(x,y){
  fill(255,255,255);
  triangle(x,y - 42.5, x + 10, y - 35, x, y - 27.5);
  line(x, y - 42.5, x, y);
  print(x,y,height)
}
