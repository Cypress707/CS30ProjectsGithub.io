// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  update();
}


function drawTitleScreen(x,y){
  let textySize = 100;
  textAlign(CENTER);
  textSize(textySize);
  text("BOSS BATTLE",width/2, height/2 - height/4);
  for(let i = 0; i < 25; i++){
    print(textySize);
    textSize(textySize);
    textySize += 2;
  }
}
class Title{
  constructor(){
    this.s = 100;
    this.y = height/4;
    this.t = []
  }

  update(){
    for(let i = 0; i < 20; i++){
      this.s += 1;
    }
    for(let t = 0; t < 20; t++){
      this.s -= 1;
    }
    drawTitleScreen(width/2,height/4);
  }

}
