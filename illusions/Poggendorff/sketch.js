const SIZE = 300;
let canvasElement;

let rectY = 0;
let drag = false;
let prevTouchY = 0;

function setup() {
  canvasElement = createCanvas(SIZE, SIZE);
  canvasElement.position(
    windowWidth / 2 - SIZE / 2,
    windowHeight / 2 - SIZE / 2
  );

  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(255);
  strokeWeight(2.5);
  translate(width / 2, height / 2);

  push();
  rotate(-30);

  stroke(0);
  line(0, -115, 0, 0); // black line

  stroke(255, 0, 0);
  line(0, 0, 0, 115); // red line

  stroke(0, 0, 255);
  line(11, 0, 11, 120); // blue line
  pop();

  fill(128);
  rect(0, rectY, 40, 200);
}

function mousePressed() {
  checkDrag(mouseX, mouseY);
}

function mouseDragged() {
  if (drag) moveRect(mouseY - pmouseY);
}

function mouseReleased() {
  drag = false;
}

function touchStarted() {
  if (touches.length > 0) {
    prevTouchY = touches[0].y;
    checkDrag(touches[0].x, touches[0].y);
  }
}

function touchMoved() {
  if (drag && touches.length > 0) {
    moveRect(touches[0].y - prevTouchY);
    prevTouchY = touches[0].y;
  }
  return false;
}

function touchEnded() {
  drag = false;
}

function checkDrag(x, y) {
  let rectTop = height / 2 + rectY - 100;
  let rectBottom = height / 2 + rectY + 100;
  let rectLeft = width / 2 - 20;
  let rectRight = width / 2 + 20;

  if (x > rectLeft && x < rectRight && y > rectTop && y < rectBottom) {
    drag = true;
  } else {
    rectY = 0;
  }
}

function moveRect(deltaY) {
  if (drag) {
    rectY = constrain(rectY + deltaY * 0.5, -200, 200);
  }
}

function windowResized() {
  canvasElement.position(
    windowWidth / 2 - SIZE / 2,
    windowHeight / 2 - SIZE / 2
  );
}
