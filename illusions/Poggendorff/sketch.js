const SIZE = 300;
let canvasElement;

let rectY = 0;
let drag = false;

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
  line(0, -115, 0, 0); //black line

  stroke(255, 0, 0);
  line(0, 0, 0, 115); // red line

  stroke(0, 0, 255);
  line(11, 0, 11, 120); // blue line

  pop();

  fill(128);
  rect(0, rectY, 40, 200);
}

function mousePressed() {
  let rectTop = height / 2 + rectY - 100;
  let rectBottom = height / 2 + rectY + 100;
  let rectLeft = width / 2 - 20;
  let rectRight = width / 2 + 20;

  if (
    mouseX > rectLeft &&
    mouseX < rectRight &&
    mouseY > rectTop &&
    mouseY < rectBottom
  ) {
    drag = true;
  } else {
    rectY = 0;
  }
}

function mouseDragged() {
  if (drag) {
    rectY = constrain(rectY + (mouseY - pmouseY) * 0.5, -200, 200);
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
