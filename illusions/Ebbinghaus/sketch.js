const SIZE = 300;
let canvasElement;

const centerD = 30;

let show = false;

function setup() {
  canvasElement = createCanvas(SIZE, SIZE);
  canvasElement.position(
    windowWidth / 2 - SIZE / 2,
    windowHeight / 2 - SIZE / 2
  );
  canvasElement.mouseClicked(toggleShow)
}

function draw() {
  background(255);
  strokeWeight(2.5);

  let flowerOne = new Flower(
    width / 4 + 15,
    height / 2,
    7,
    centerD,
    40,
    50,
    "#ffff00",
    "#ffa500"
  );

  let flowerTwo = new Flower(
    width - width / 4 + 15,
    height / 2,
    12,
    centerD,
    10,
    25,
    "#ffff00",
    "#ffa500"
  );

  flowerOne.drawFlower();
  flowerTwo.drawFlower();


  if (show) {
    line(0, height / 2 - centerD / 2, width, height / 2 - centerD / 2);
    line(0, height / 2 + centerD / 2, width, height / 2 + centerD / 2);
  }
}

function toggleShow(){
  show = !show;
}


function windowResized() {
  canvasElement.position(
    windowWidth / 2 - SIZE / 2,
    windowHeight / 2 - SIZE / 2
  );
}
