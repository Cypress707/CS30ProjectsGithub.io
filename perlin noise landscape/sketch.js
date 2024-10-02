// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rTime1 = 5
let rInterval = 0.02
let rWidth = 1
let maxY = 0
function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(220);


  mountainRange();
 
  makeFlag(flagx, maxY);
}
//function makeFlag(){
 // fill(0,0,0);
 // triangle(xFlag, fHeight += 15, x += 15, fHeight += 10, xFlag, fHeight += 5);
 // if(rectHeight > flagHeight){
 //   let xFlag = x;
 //   let flagHeight = rectHeight;
  //}
//}

function mountainRange(){

  
  
  let rTime = rTime1
  randomSeed(2);
  for(let x = 0; x < width; x += rWidth){
  fill(0,0,0);
  let rectHeight = noise(rTime);
  rectHeight = map(rectHeight,0, 1, 50, 500);

  rect(x, height, rWidth, -rectHeight)

  rTime += rInterval;
  if(height - rectHeight > maxY){
    flagx = x;
    maxY = height - rectHeight;
  }
  }
}

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

function makeFlag(x,y){
  fill(0,0,0);
  triangle(x,y + 12.5, x + 10, y + 6.25, x, y);
  line(x, y + 35, x, y);
}