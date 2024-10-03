// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const NUM_CIRCLES = 40;
let seed; //to stabilize random numbers...



function setup() {
  createCanvas(windowWidth, windowHeight);
  seed = random(100);
}

function draw() {
  randomSeed(seed);
  background(220);
  drawCircles();
}
function drawCircles(){
  //draw NUM_CIRCLES circles on the screen
  // with random x,y and diameter fill smallest one red
  noFill();
  let smallest = Infinity; //dummy value
  let smallX = 0;
  let smallY = 0;
  for(let i = 0; i<NUM_CIRCLES; i++){
    let x = random(0,width);
    let y = random(0, height);
    let d = random(20,60);
    if(d < smallest){
      smallest = d;
      smallX = x; smallY = y;
    }
    circle(x,y,d);
  }
  fill(255,0,0)
  circle(smallX,smallY,smallest)
  text(smallest,width/2,height/2)
}