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
  for (let i = 0; i < 20; i++) {
    eastbound.push(new Vehicle(random(0, width), random(height / 2 - height / 4 - 60, height / 2 - 50)));
    print(eastbound.length);
  }
  for (let i = 0; i < 20; i++) {
    westbound.push(new Vehicle(random(0, width), random(height / 2 - height / 4 - 60, height / 2 - 50)));
    print(westbound.length);
  }
}

function draw() {
  background(220);
  drawRoad();
  for (let v of eastbound) {
    v.display();
    v.createVehicle();
  }
  for (let t of westbound) {
    t.display2();
    t.createVehicle2();
  }
}

function drawRoad() {
  fill(50);
  rectMode(CENTER);
  rect(width / 2, height / 2, width, height / 1.5);
  fill(255);
  for (let i = 0; i < width; i += 100) {
    rect(i, height / 1.5, 40, 10);
    rect(i, height / 3, 40, 10);
  }

  fill(200, 180, 20);
  rect(width / 2, height / 2 + 10, width, 7.5);
  rect(width / 2, height / 2 - 10, width, 7.5);

}


class Vehicle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.c1 = random(255);
    this.c2 = random(255);
    this.c3 = random(255);
    this.s = 15;
  }
  createVehicle() {
    //let randoRam = random(1,2);
    //randoRam = Math.round(randoRam);
    //print(randoRam);
    //if(randoRam === 1){
    //if(this.e.length < 20){
    //this.y === random(300,400);
    //this.x === 0;
    for (let i = 0; i > 20; i++) {
      this.e.push(new Vehicle(this.x, this.y));
      print(this.e.length);
    }
    //}
    //} 
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
  createVehicle2() {
    for (let i = 0; i < 20; i++) {
      westbound.push(new Vehicle(random(0, width), random(height / 2 + 50, height / 2 + height / 4)));
      print(westbound.length);
    }
  }


  //}
  display() {

    fill(this.c1, this.c2, this.c3);
    rectMode(CENTER);
    rect(this.x, this.y, 80, 40);
    //print(this.x,this.y);
    this.move();
    this.move2();
    let randoRan = random(100);
    randoRan = Math.round(randoRan);
    print(randoRan);

    if (randoRan === 1) {
      this.c1 = random(255);
      this.c2 = random(255);
      this.c3 = random(255);
      print(randoRan);
      randoRan = 0;
    }

  }
  display2() {

    fill(this.c1, this.c2, this.c3);
    rectMode(CENTER);
    rect(this.x, this.y, 80, 40);
    //print(this.x,this.y);
    this.move2();
    let randoRan = random(100);
    randoRan = Math.round(randoRan);
    print(randoRan);

    if (randoRan === 1) {
      this.c1 = random(255);
      this.c2 = random(255);
      this.c3 = random(255);
      print(randoRan);
      randoRan = 0;
    }

  }


  
  move() {
    //let ranRan = random(100);
    //print(ranRan);
    //if(ranRan === 50){
    //   this.s = this.s *= random(-3,3);
    // }
    // print(this.x,this.s);
    this.x += this.s;
    let randoRan2 = random(100);
    randoRan2 = Math.round(randoRan2);
    print(randoRan2);
    if (this.s <= 45) {
      if (randoRan2 === 1) {
        this.s += random(15);

        print(randoRan2);
        randoRan2 = 0;
      }
    }
    if (this.s >= 15) {
      if (randoRan2 === 2) {
        this.s + - random(15);
      }
    }
    if (this.x >= width) {
      this.x = 0;
    }
    print(this.s);
  }
  move2() {
    this.x -= this.s;
    let randoRan2 = random(100);
    randoRan2 = Math.round(randoRan2);
    print(randoRan2);
    if (this.s <= 45) {
      if (randoRan2 === 1) {
        this.s += random(15);

        print(randoRan2);
        randoRan2 = 0;
      }
    }
    if (this.s >= 15) {
      if (randoRan2 === 2) {
        this.s + - random(15);
      }
    }
    if (this.x <= 0) {
      this.x = 0;
    }
    print(this.s);
  }
}