// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let eastbound = [];
let westbound = [];
let myVehicle;
//let lane = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myVehicle = new Vehicle(0,height/2.4);
}

function draw() {
  background(220);
  drawRoad();
  myVehicle.display();
  myVehicle.createVehicle();
}

function drawRoad(){
  fill(50);
  rectMode(CENTER);
  rect(width/2, height/2, width,height/1.5 );
  fill(255);
  for(let i = 0; i < width; i += 100){
    rect(i,height/1.5,40,10);
    rect(i,height/3,40,10);
  }

  fill(200,180,20);
  rect(width/2, height/2 + 10, width, 7.5);
  rect(width/2, height/2 - 10, width, 7.5);

}


class Vehicle{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.s = 5;
    this.v = [];
    this.side = 0;
    this.e = [];
    this.w = [];
  }
  createVehicle(){
    if(this.e.length < 20){
      this.e.push(new Vehicle(this.x,this.y));
    } 
    //this.side = random(0,2);
    //if(this.side === 1){
      //let lane = random(1,2);
     // print(lane);
      //if(lane === 1){
      // this.x = 0;
       // this.y = 2.75;
       // this.e.push(new Vehicle(this.x,this.y));
     // }
     // else{
      //  this.x = 0;
      //  this.y = 2.25;
      //  this.e.push(new Vehicle(thix.x,this.y));
    //  }
      
    }

  //}
  display(){
    let c1 = random(1,255);
    let c2 = random(1,255);
    let c3 = random(1,255);
    fill(c1,c2,c3);
    rectMode(CENTER);
    rect(this.x,this.y,80,40);
    print(this.x,this.y);
    this.update();
  }
  update(){
    let ranRan = random(100);
    //print(ranRan);
    if(ranRan === 50){
      this.s = this.s *= random(-3,3);
    }
    print(this.x,this.s);
    this.x += this.s;
    if(this.x >= width){
      this.e.pop;
    }
  }
}