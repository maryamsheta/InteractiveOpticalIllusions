const SIZE = 300;
let canvasElement;

let slider;
let rotation;

function setup() {
  canvasElement = createCanvas(SIZE, SIZE);
  canvasElement.position(
    windowWidth / 2 - SIZE / 2,
    windowHeight / 2 - SIZE / 2
  );

  angleMode(DEGREES);

  slider = createSlider(-10, 10, 0, 2)
    .position(canvasElement.x + SIZE / 4, canvasElement.y + SIZE + 10)
    .addClass("slider");
}

function draw() {
  background(255);

  fill(0);
  noStroke();

  rotation = slider.value();

  drawArc(width / 4, height / 4, 60, 90 + rotation);
  drawArc(width - width / 4, height / 4, 60, 180 - rotation);
  drawArc(width - width / 4, height - height / 4, 60, 270 + rotation);
  drawArc(width / 4, height - height / 4, 60, 360 - rotation);
}

function drawArc(x, y, size, rotationDegree) {
  push();
  translate(x, y);
  rotate(rotationDegree);
  arc(0, 0, size, size, 0, 270);
  pop();
}

function windowResized() {
  canvasElement.position(
    windowWidth / 2 - SIZE / 2,
    windowHeight / 2 - SIZE / 2
  );
  slider.position(canvasElement.x + SIZE / 4, canvasElement.y + SIZE + 10);
}
