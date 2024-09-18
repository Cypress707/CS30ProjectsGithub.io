// Drawing Challenge
// Ryder Taylor
// 9-13-2024


let rX = 50;    let rY = 50;
let x = 50, y = 50, z = 50;
let Rd = 0, Bu = 0, Gn= 0

function setup() {
  createCanvas(400, 1000);
  rectMode(CENTER);
}

function draw() {
  background(220);
  
  
  if (Rd == 255) {
    Rd = 0
  } 
  else Rd += 5
  if (Bu == 255) {
    Bu = 0
  } 
  else Bu += 3
  if (Gn == 255) {
    Gn = 0
  } 
  else Gn += 2

  fill(Rd,Bu,Gn);
  rect(rX, rY, 100, 50, 10, 20, 0, 10);

  fill(Rd, Bu, Gn);
  rect(500, 500, 50, 50, 90, 90, 0, 0);
  noStroke();

  fill(Rd,Bu,Gn);
  rect(477.5, 520,5,30);

  fill(Rd,Bu,Gn);
  rect(522.5, 520,5,30);

  fill(0,0,0);
  rect(500,510,20,10,0,0,190,190)

  fill(0,0,0);
  circle(485,500,5,5)

  fill(0,0,0);
  circle(515,500,5,5)
}


