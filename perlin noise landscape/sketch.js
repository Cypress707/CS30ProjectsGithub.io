// Perlin Noise Landscape
// Ryder Taylor
// October 1st, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rTime1 = 5
let rInterval = 0.02
let rWidth = 1
function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(135,206,255);


  mountainRange();
 
  //makeFlag(flagx, maxY);
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

  
  let maxY = 0
  let rTime = rTime1
  for(let x = 0; x < width; x += rWidth){
  fill(0,0,0);
  let rectHeight = noise(rTime);
  rectHeight = map(rectHeight,0, 1, 50, 500);

  rect(x, height, rWidth, -rectHeight)

  rTime += rInterval;
  if(rectHeight > maxY){
    flagx = x;
    maxY = rectHeight;
  }
  }
  makeFlag(flagx, maxY);
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
  line(x, y, x, y);
  print(x,y,height)
}

function clouds(){
  for(let i = 0; i < width; i += 1){
    let cloudY = noise(rTime);
    cloudY = map(cloudY, 0, 1, 50, 100)
  }
  
  fill(255,255,255)
  circle()
}