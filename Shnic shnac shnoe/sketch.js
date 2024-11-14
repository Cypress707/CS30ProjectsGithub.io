// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const COLUMNS = 3, ROWS = 3; TILES = 200;

let myArray = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
]

function setup() {
  createCanvas(600,600);
}

function draw() {
  background(220);
  drawBoard();
}


function drawBoard(){
  for (let col = 0; col < COLUMNS; col++) {
    for (let row = 0; row < ROWS; row++) {
      let pos = myArray[row][col];
      rect(col * TILES, row * TILES);
    }
  }
  // fill(255);
  // strokeWeight(5);
  // line(200, height,200,0);
  // line(400, height,400, 0);
  // line(width, 200, 0, 200);
  // line(width, 400, 0, 400);
}



function xTurn(){
  if(mouseClicked){
    for(let i = 0; i < 9; i++){
      if(mouseX === 0){

      }
    }
  }
}
