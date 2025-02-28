const SIZE = 300;
let canvasElement;

let squareX = -10;
let squareSize = 125;
let drag = false;

let prevTouchX = 0;

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
  checkDrag(mouseX, mouseY);
}

function mouseDragged() {
  if (drag) moveSquare(mouseX - pmouseX);
}

function mouseReleased() {
  drag = false;
}

function touchStarted() {
  if (touches.length > 0) {
    prevTouchX = touches[0].x;
    checkDrag(touches[0].x, touches[0].y);
  }
}

function touchMoved() {
  if (drag && touches.length > 0) {
    moveSquare(touches[0].x - prevTouchX);
    prevTouchX = touches[0].x;
  }
  return false;
}

function touchEnded() {
  drag = false;
}

function checkDrag(x, y) {
  let squareLeft = width / 2 - 35 + squareX;
  let squareRight = squareLeft + squareSize;
  let squareTop = height / 2 - 65;
  let squareBottom = squareTop + squareSize;

  if (x > squareLeft && x < squareRight && y > squareTop && y < squareBottom) {
    drag = true;
  } else {
    squareX = -10;
  }
}

function moveSquare(deltaX) {
  if (drag) {
    squareX = constrain(squareX + deltaX * 0.5, -squareSize - 75, width - squareSize - 35);
  }
}

function windowResized() {
  canvasElement.position(
    windowWidth / 2 - SIZE / 2,
    windowHeight / 2 - SIZE / 2
  );
}
