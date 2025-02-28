const SIZE = 300;
let canvasElement;

let squareSize = 35;
let numStrips;

let offset = -15;

function setup() {
  canvasElement = createCanvas(SIZE, SIZE);
  canvasElement.position(
    windowWidth / 2 - SIZE / 2,
    windowHeight / 2 - SIZE / 2
  );

  stroke(128);
  strokeWeight(2);

  numStrips = SIZE / squareSize;

  document.addEventListener("touchmove", (e) => e.preventDefault(), { passive: false });
}

function draw() {
  background(255);

  for (let row = 0; row <= numStrips; row++) {
    let xOffset = (row % 2) * offset;
    for (let col = -1; col <= numStrips; col++) {
      let isBlack = (col + row) % 2 !== 0;
      fill(isBlack ? 0 : 255);
      square(col * squareSize + xOffset, row * squareSize, squareSize);
    }
  }
}

function mouseDragged() {
  if (mouseX > pmouseX) {
    if (offset <= squareSize) {
      offset += 0.3;
    }
  } else {
    if (offset >= -squareSize) {
      offset -= 0.3;
    }
  }
}

function touchMoved() {
  if (touches.length > 0) {
    if (touches[0].x > pmouseX) {
      if (offset <= squareSize) {
        offset += 0.3;
      }
    } else {
      if (offset >= -squareSize) {
        offset -= 0.3;
      }
    }
  }
  return false;
}

function windowResized() {
  canvasElement.position(
    windowWidth / 2 - SIZE / 2,
    windowHeight / 2 - SIZE / 2
  );
}
