const SIZE = 300;
let canvasElement;

let locX = 60;
let locY = -15;
let fell = false;
let toggleHash = true;

function setup() {
  canvasElement = createCanvas(SIZE, SIZE);
  canvasElement.position(
    windowWidth / 2 - SIZE / 2,
    windowHeight / 2 - SIZE / 2
  );
  angleMode(DEGREES);
  rectMode(CENTER);

  canvasElement.elt.addEventListener("touchstart", (e) => e.preventDefault(), {
    passive: false,
  });
}

function draw() {
  background(250);
  translate(width / 2, height / 2);

  drawFace();
  drawStructure();
  updatePosition();
}

function drawFace() {
  strokeWeight(2.5);
  fill(0);
  circle(0, 18, 10);

  push();
  textSize(35);
  translate(locX, locY);
  rotate(-3);
  textFont("Noto Emoji");
  textStyle(BOLD);
  text("👀", 0, -1);
  pop();
}

function drawStructure() {
  if (toggleHash) {
    drawHatchedRectangle(0, 0, 200, 25, 7, true); // Top
    drawHatchedRectangle(0, 35, 90, 25, 7, false); // Bottom
  } else {
    fill(255);
    rect(0, 0, 200, 25);
    rect(0, 35, 90, 25);
  }
}

function updatePosition() {
  if (mouseIsPressed && !fell) {
    locX -= 0.85;
  }

  if (locX < -125 && !fell) {
    locY += 50;
    if (locY > height + 1000) {
      fell = true;
      locX = 60;
      locY = -15;
    }
  }
}

function drawHatchedRectangle(x, y, w, h, spacing, topLeft) {
  push();
  let xLeft = x - w / 2;
  let yTop = y - h / 2;
  let xRight = xLeft + w;

  noFill();
  strokeWeight(2.5);
  rect(x, y, w, h);

  beginClip();
  rect(x, y, w, h);
  endClip();

  strokeWeight(1.5);
  for (let i = 0; i < w + h; i += spacing) {
    let x1, y1, x2, y2;
    if (topLeft) {
      x1 = xRight - i;
      y1 = yTop;
      x2 = xRight;
      y2 = yTop + i;
    } else {
      x1 = xLeft + i;
      y1 = yTop;
      x2 = xLeft;
      y2 = yTop + i;
    }
    line(
      x1 + (topLeft ? -165 : 165),
      y1 - 70,
      x2 + (topLeft ? 165 : -165),
      y2 + 70
    );
  }
  pop();
}

function mouseClicked() {
  if (fell && !isTouchDevice()) {
    toggleHash = !toggleHash;
  }
}

function touchStarted() {
  if (fell && isTouchDevice()) {
    toggleHash = !toggleHash;
  }
}

function isTouchDevice() {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}

function windowResized() {
  canvasElement.position(
    windowWidth / 2 - SIZE / 2,
    windowHeight / 2 - SIZE / 2
  );
}
