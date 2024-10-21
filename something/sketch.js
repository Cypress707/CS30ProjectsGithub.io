// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let names = ['ryder', 'gavin', 'saddam'];

function setup() {
  createCanvas(windowWidth, windowHeight);
  print(names);
  names.push('gabler');
  print(names);

  let lastname = names.pop();
  print(lastname);
  print(names);

  let firstname = names.shift();
  print(firstname);
  print(names);

  names.push('hero');
  names.push('kim');
  names.push('aubrey');
  names.push('kel');
  names.push('sunny');

  for(n of names){
    print(n);
  }
  
}

function draw() {
  background(220);
}
