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
function setup() {
  createCanvas(350, 180);
}

function draw() {
  background(light1, light2, light3);

  if (keyIsPressed){
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
  
  fill(moon1, moon2, moon3);
  ellipse(run,rise,50, 50, 42, 4);
  noStroke();
}
