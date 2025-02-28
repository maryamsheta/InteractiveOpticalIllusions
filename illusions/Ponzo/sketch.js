const SIZE = 300;
let canvasElement;

let nearY, nearYInit, farY;

let animationAllowed = true;
let animationActive = false;
let animationForwards = false;
let animationComplete = false;

function setup() {
  canvasElement = createCanvas(SIZE, SIZE);
  canvasElement.position(
    windowWidth / 2 - SIZE / 2,
    windowHeight / 2 - SIZE / 2
  );
  canvasElement.mouseClicked(toggleAnimation)

  strokeCap(SQUARE);
  angleMode(DEGREES);

  farY = 22;
  nearYInit = height - 20;
  nearY = nearYInit;
}

function draw() {
  background(255);

  drawGround();
  drawWalls();
  drawRectangles();

  animateIllusion();
}

function drawWalls() {
  noStroke();
  fill(112);
  triangle(0, 0, width / 2 - 15, 0, width / 2 - width / 1.2, height);
  triangle(width, height / 2 + 20, width, 0, width / 2 + 15, 0);

  stroke(0);
  strokeWeight(2.5);
  line(width / 2 - 15, 0, width / 2 - width / 1.2, height);
  line(width / 2 + 15, 0, width / 2 + width / 1.2, height);
}

function drawGround() {
  strokeWeight(1.5);
  let yOffset = 10;
  for (let i = 0; i <= 20; i++) {
    let y = yOffset;
    let lineLength = map(y, 10, height, 10, width);
    let startX = width / 2 - lineLength / 2;
    let endX = width / 2 + lineLength / 2;
    line(startX, y, endX, y);
    yOffset += map(i, 0, 20, 15, 25);
  }
}

function drawRectangles() {
  stroke(0);
  strokeWeight(2);
  fill(255);
  rect(width / 4 + 10, farY, width / 2 - 20, 10);
  rect(width / 4 + 10, nearY, width / 2 - 20, 10);
}

function animateIllusion() {
  if (animationAllowed && animationActive) {
    if (animationForwards) {
      nearY += 2;
      if (nearY >= nearYInit) {
        animationActive = false;
        animationAllowed = true;
        animationComplete = true;
        animationForwards = false;
      }
    } else {
      nearY -= 2;
      if (nearY <= farY) {
        animationActive = false;
        animationAllowed = true;
        animationComplete = true;
        animationForwards = true;
      }
    }
  }
}

function toggleAnimation() {
  if (animationAllowed) {
    animationActive = !animationActive;
  }
}

function windowResized() {
  canvasElement.position(
    windowWidth / 2 - SIZE / 2,
    windowHeight / 2 - SIZE / 2
  );
}
