// qorking with images
// ryder taylor
// october 4th 2024



let lionL, lionR;
let facingRight = true;
let pinImages = [];
let currentFrame = 0;

function preload(){
  lionL = loadImage("assets/lion-left.png");
  lionR = loadImage("assets/lion-right.png");
  for(let i = 0 ; i < 9 ; i++){
    pinImages.push(loadImage("assets/pin-0" + i + ".png"))
  }
  
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60)
}

function draw() {
  background(220);
  imageMode(CENTER);
  drawLions();
  pinwheel();
  
}

function drawLions(){

if(mouseX > pmouseX) facingRight = true;
else if(mouseX < pmouseX) facingRight = false;

  if(facingRight){
    image(lionR, mouseX, mouseY, width/5, height/5)
  }
  else{
    image(lionL, mouseX, mouseY, width/5, height/5)
  }
}

function pinwheel(){
  if (frameCount % 5 === 0){
  image(pinImages[currentFrame], width/2, height/2)
  currentFrame++;
  if(currentFrame === 9){
    currentFrame = 0
  }
  }
}