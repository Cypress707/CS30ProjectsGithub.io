// perlin noise demo
// Ryder Taylor
// Sept 27, 2024


//random() vs noise()

let cTime = 5; //current noise time
let cInterval = 0.02; //how fast we move down the noise graph

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
}

function draw() {
  background(220);
  line(width/2, 0, width/2, height);

  // draw with random()
  randomCircle();
  // draw with noise()
  perlinCircle();

  staircase();
}
function perlinCircle(){
  let cSize = noise(cTime); //0-1
  let r = noise(cTime);
  let g = noise(cTime + 2);
  let b = noise(cTime + 5);
  r = map(r, 0 , 1, 10, 255);
  g = map(g, 0 , 1, 10, 255);
  b = map(b, 0 , 1, 10, 255);
  cSize = map(cSize, 0 , 1, 10, 255);

  fill(r, g, b);
  circle(width*0.75,height/2,cSize)
  text(round(cSize),  width *  0.75, height/2)
  cTime += cInterval;


  
}
function randomCircle(){
  //draw a circle using random()
  //unpredictable size and colour
  let cSize = random(1,255);
  let cColor = random(1, 255);
  let cColor2 = random(1, 255);
  fill(cColor, cSize, cColor2)
  circle(width*0.25, height/2, cSize)
  textAlign(CENTER, CENTER)
  textSize(30); fill(0);
  text(round(cSize),width*.25,height/2)
}
function staircase(){
  //draw a staircase using loops
  randomSeed(2);
  for(let x = 0; x < width; x += 1){
//20 rectangle spacing / width
  noFill();
  let rectHeight = random(50,500);
  rect(x, height, 20, -rectHeight)
  }
}