// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let eastbound = [];
let westbound = [];
let myVehicle;
let vehX = 80;
let vehY = 40;

//let lane = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 20; i++) {
    eastbound.push(new Vehicle(random(0, width), random(height / 2 - height / 4 - 60, height / 2 - 50)));
    print(eastbound.length);
  }
  for (let r = 0; r < 20; r++) {
    westbound.push(new Vehicle(random(0, width), random(height / 2 + height / 4 - 200, height - 200)));
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
    //t.createVehicle2();
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
    this.co1 = random(255);
    this.co2 = random(255);
    this.co3 = random(255);
    this.vx = 80;
    this.vy = 40;
    this.v = Math.round(random(1, 2));
  }
  createVehicle() {
    for (let i = 0; i > 20; i++) {
      this.e.push(new Vehicle(this.x, this.y));
      //print(this.e.length);
    }

  }



  //}
  display() {
    let randoRan5 = this.v;
    print(randoRan5);
    fill(this.c1, this.c2, this.c3);
    rectMode(CENTER);
    if (randoRan5 === 1) {
      this.vx = 100;
      this.vy = 70;
    }
    if (randoRan5 === 2) {
      this.vx = 80;
      this.vy = 40;
    }
    rect(this.x, this.y, this.vx, this.vy);
    //print(this.x,this.y);
    this.move();
    let randoRan = random(100);
    randoRan = Math.round(randoRan);
    //print(randoRan);

    if (randoRan === 1) {
      this.c1 = random(255);
      this.c2 = random(255);
      this.c3 = random(255);
      //print(randoRan);
      randoRan = 0;
    }

  }
  display2() {
    let randoRan5 = this.v;
    print(randoRan5);
    fill(this.c1, this.c2, this.c3);
    rectMode(CENTER);
    if (randoRan5 === 1) {
      this.vx = 100;
      this.vy = 70;
    }
    if (randoRan5 === 2) {
      this.vx = 80;
      this.vy = 40;
    }

    fill(this.c1, this.c2, this.c3);
    rectMode(CENTER);
    rect(this.x, this.y, this.vx, this.vy);
    //print(this.x,this.y);
    this.move2();
    let randoRan4 = random(100);
    randoRan4 = Math.round(randoRan4);
    //print(randoRan4);

    if (randoRan4 === 1) {
      this.co1 = random(255);
      this.co2 = random(255);
      this.co3 = random(255);
      //print(randoRan4);
      randoRan4 = 0;
    }

  }



  move() {
    //stoplight();
    //let ranRan = random(100);
    //print(ranRan);
    //if(ranRan === 50){
    //   this.s = this.s *= random(-3,3);
    // }
    // print(this.x,this.s);
    this.x += this.s;
    let randoRan2 = random(100);
    randoRan2 = Math.round(randoRan2);
    //print(randoRan2);
    if (this.s <= 45) {
      if (randoRan2 === 1) {
        this.s += random(15);

        //print(randoRan2);
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
    //print(this.s);
  }
  move2() {
    //stoplight();
    this.x -= this.s;
    let randoRan3 = random(100);
    randoRan3 = Math.round(randoRan3);
    //print(randoRan3);
    if (this.s <= 45) {
      if (randoRan3 === 1) {
        this.s += random(15);

        //print(randoRan3);
        randoRan3 = 0;
      }
    }
    if (this.s >= 15) {
      if (randoRan3 === 2) {
        this.s + - random(15);
      }
    }
    if (this.x <= 0) {
      this.x = width;
    }
    //print(this.s);
  }
}
// function stoplight() {
//   print("hi");
//   if (key === 'f') {
//     this.s = 15;
//     print("hello");
//     for (let i = this.s; i > 0; i--){
//       this.s -= 1;
//     }
//   }   
//   if (this.s <= 0) {
//     for (let f = 0; f < 15; f++) {
//       this.s += 1;
//     }
//   }
// }