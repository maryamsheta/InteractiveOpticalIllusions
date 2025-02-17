const SIZE = 300;
let canvasElement;

let num = 4;
let col = "#00ff00";

let colorPicker;

function setup() {
  canvasElement = createCanvas(SIZE, SIZE);
  canvasElement.position(
    windowWidth / 2 - SIZE / 2,
    windowHeight / 2 - SIZE / 2
  );
  canvasElement.mousePressed(changeNum);

  angleMode(DEGREES);

  colorPicker = createColorPicker(col)
    .position(canvasElement.x + SIZE / 4, canvasElement.y + SIZE + 10)
    .addClass("colorPicker");
}

function draw() {
  background(255);
  col = colorPicker.value();
  initializeCircles();
}

function initializeCircles() {
  let tl = new Circle(width / 4, height / 4, 20, 0, num, col);
  tl.drawShape();

  let tr = new Circle(width - width / 4, height / 4, 20, 90, num, col);
  tr.drawShape();

  let br = new Circle(
    width - width / 4,
    height - height / 4,
    20,
    180,
    num,
    col
  );
  br.drawShape();

  let bl = new Circle(width / 4, height - height / 4, 20, 270, num, col);
  bl.drawShape();
}

let inc = true;
function changeNum() {
  if (num >= 10) {
    inc = false;
  }
  if (num <= 4) {
    inc = true;
  }
  num += inc ? 1 : -1;
}

function windowResized() {
  canvasElement.position(
    windowWidth / 2 - SIZE / 2,
    windowHeight / 2 - SIZE / 2
  );
  colorPicker.position(canvasElement.x + SIZE / 4, canvasElement.y + SIZE + 10);
}

function touchMoved() {
  return false; 
}

