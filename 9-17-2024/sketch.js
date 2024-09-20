// interactive scene
// Ryder Taylor
// 9-17-2024
// 
let rise = 90
let run = 0
let moon1 = 255
let moon2 = 221
let moon3 = 33
let light1 = 135
let light2 = 206
let light3 = 235
let stars1 = 0
let stars2 = 0
let stars3 = 0
let stars4 = 0
let stars5 = 0
let star1 = 0
let star2 = 0
let star3 = 0
let star4 = 0
let star5 = 0
function setup() {
  createCanvas(350, 180);
}

function draw() {
  background(light1, light2, light3);
  textSize(5)
  text("Ryder Taylor",320, 178)


  let starCount = 0;
  if (light1 === 0){
    if (keyIsPressed){
      let y = 0
      let x = 0
    if (x === 0){
    let x = random(0, width);
    }
    circle(x, 0, 2);
    while (y < 180, x < 350){
      y = y += 5
      x = x += 5
    }
    x = 0
    y = 0

    }
  }
  fill(moon1, moon2, moon3);
  ellipse(run,rise,50, 50, 42, 4);
  noStroke();

  fill(255, 255, 255);
  ellipse(stars1, stars1, star1, star1)
  noStroke();

}
function mouseClicked() {
  run += 10
  if (run >= 350){
    run = 0
    rise = 90
    if (moon1 === 255){
      moon1 = 140.7
      moon2 = 150.7
      moon3 = 150.7
      light1 = 0
      light2 = 0
      light3 = 0
    
    
    }
    else (moon1 = 255, moon2 = 221, moon3 = 33, light1 = 135, light2 = 206, light3 = 235);
  }
  if (run <= 175){
    rise = rise - (run / 15 )
  }
  if (run >= 175){
    rise = rise + (run / 40)
  }
}
function randomNumber(max){
  Math.floor(Math.random() * max)
}
