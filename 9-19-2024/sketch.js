//drawing with loops
// Ryder Taylor
// 9-19-2024

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  myBackground();
  myForeground();
}
function myBackground(){
  // use a loop to draw a gradient background
  background(200);
}
function myForeground(){
  //use FOR / WHILE loops to draw on the canvas
  // loop var ; condition ; var modification
  for (let x = 0 ; x < 200 ; x = x + 40){
    fill(0);
    circle(x, height/2, 40);
    fill(255);
    text(x, x, height/2);
  }

  let starCount = 0;
  while(starCount < 100){
    let x = random(0, height);
    let y = random(0, width);
    circle(x, y,10);
    starCount++;
  }
}