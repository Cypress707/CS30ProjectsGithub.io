// Stained glass/ balloon tree assignment
// Ryder Taylor
//  Nov 11
//
// Extra for Experts:
// added a user selected size changer and a solid colour for each leaf


//user selected size changer
let user = 5;

let scale = 15;
//declaring the seed
let seed;
//for the circle's diamter
let d = 0;

function setup() {
  seed = random(100);
  createCanvas(500, 500);
  background(255);

}

function draw() {
  background(255);

  //for the seed to take effect
  randomSeed(seed); 


  drawTree(width / 2, height * 0.9, 90, 6);
}

function drawLine(x1, y1, x2, y2, depth) {
  //draw a line segment connecting (x1,y1) to (x2,y2)
  //stroke size from the bottom to the top
  strokeWeight(depth);
  line(x1, y1, x2, y2);
}

function drawTree(x1, y1, angle, depth) {
  if (depth > 0) {
    //changing the angle
    let den = mouseX / (width / 10);

    let x2 = x1 + (cos(radians(angle)) * depth * (scale));     //calculate endpoints of current branch
    let y2 = y1 - (sin(radians(angle)) * depth * (scale));     //using trig ratios. Get shorter based on depth


    drawLine(x1, y1, x2, y2, depth);
    drawBalloons(x2, y2, depth, user);

  
    //third branch in the middle
    drawTree(x2, y2, angle, depth - 1);

    //for a 2-branch tree:
    drawTree(x2, y2, (angle - 18) - den, depth - 1);
    drawTree(x2, y2, (angle + 18) + den, depth - 1);

  }
}
//draws the balloons/leaves
function drawBalloons(x, y, depth, user) {
  //if (diameter > 0) {
  if (depth < user) {
    //making the balloons nicer
    strokeWeight(0);
    //randomizing colours
    fill(random(255), random(255), random(255), 50);
    //randomizing diameter
    d = 10 * depth + random(20);;
    circle(x, y, d);

  }
  //}
}
function keyPressed() {
  if (keyIsPressed) {
    if (key === 'z') {
      if (user > 1) {
        user --;
      }
    }
    if (key === 'x') {
      if (user < 6) {
        user ++;
      }
    }
  }
}
