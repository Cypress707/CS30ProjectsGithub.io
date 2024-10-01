// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rTime = 5
let rInterval = 0.02
let rWidth = 1
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(20)
}

function draw() {
  background(220);


  mountainRange();
  makeFlag();
}
function makeFlag(){
  fill(0,0,0);
  triangle(xFlag, fHeight += 15, x += 15, fHeight += 10, xFlag, fHeight += 5)
  if(rectHeight > rectHeight){
    xFlag = x;
    flagHeight = rectHeight;
  }
}

function mountainRange(){
  randomSeed(2);
  for(let x = 0; x < width; x += 1){
  fill(0,0,0);
  let rectHeight = noise(rTime);
  rectHeight = map(rectHeight,0, 1, 50, 500);

  rect(x, height, rWidth, -rectHeight)

  rTime += rInterval;
  }
}

function buttonIsPressed(){
  if(key = a){
    if(rWidth >= 1){
      rWidth = rWidth += 1
    }
  }
}