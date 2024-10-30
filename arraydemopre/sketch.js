// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let myArray = [3,5,7,9];

function setup() {
  createCanvas(windowWidth, windowHeight);
  //Rearrange
  let lastItem = myArray.pop();
  let secondLast = myArray.pop();

  myArray.unshift(lastItem);
  myArray.unshift(secondLast);

  shallow = myArray;
  deep = structuredClone(myArray);
  print(myArray,);

  //unshift random zeroes
  myArray.shift();
  let n = random(0,3);
  for (let i = 0; i < n; i++){
    myArray.unshift(0);
  }
  print(myArray);
  //remove 9
  for (let i = 0; i < myArray.length; i++){
    if (myArray[i] === 9){
      myArray.splice(i, 1);
      print(myArray,shallow,deep);
    }
  }
}

function draw() {
  background(220);
}
