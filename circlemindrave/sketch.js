// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(220);
  //translate(0,10);
  drawingCircles();
}

function drawingCircles(){
  let x = 0;
  let y = 0;
  if(x === 0, y === 0){
    for(let x = 0; x < width; x += 100){
      circle(x,y,50);
      line(x,y,mouseX,mouseY);
    }
  }
  if(x === width, y === 0){
   for(let y = 0; y < height; y += 100){
    fill(0)
    circle(x,y,50);
    //stroke(19,20,80)
    //strokeWeight(1);
    line(x,y,mouseX,mouseY);
    }
  }
  
    for(let x = width; x > 0; x += 100){
      circle(x,y,50);
      line(x,y,mouseX,mouseY);
    }
  
  if(x === 0, y === 0){
    for(let x = 0; x < width; x += 100){
      circle(x,y,50);
      line(x,y,mouseX,mouseY);
    }
  }
}