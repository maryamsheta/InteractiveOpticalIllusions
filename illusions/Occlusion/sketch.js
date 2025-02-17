const SIZE = 300;
let canvasElement;

let squareX = -10;
let drag = false;
let squareSize = 125;

function setup() {
  canvasElement = createCanvas(SIZE, SIZE);
  canvasElement.position(
    windowWidth / 2 - SIZE / 2,
    windowHeight / 2 - SIZE / 2
  );
}

function draw() {
  background(255);

  translate(width / 2 - 35, height / 2);

  noStroke();
  fill(0, 0, 255);
  circle(0, 0, 100);
  rect(0, -50, 100, 100);

  stroke(0);
  strokeWeight(2.5);
  fill(0);
  square(squareX, -65, squareSize);
}

function mousePressed() {
  if (
    mouseX > width / 2 - 35 + -10 &&
    mouseX < width / 2 - 35 + (-10 + squareSize) &&
    mouseY > height / 2 + squareX &&
    mouseY < height / 2 + squareX + squareSize
  ) {
    drag = true;
  } else {
    squareX = -10;
  }
}

function mouseDragged() {
  if (drag) {
    squareX = constrain(
      squareX + (mouseX - pmouseX) * 0.5,
      -squareSize,
      width - squareSize
    );
  }
}

function mouseReleased() {
  drag = false;
}

function windowResized() {
  canvasElement.position(
    windowWidth / 2 - SIZE / 2,
    windowHeight / 2 - SIZE / 2
  );
}
