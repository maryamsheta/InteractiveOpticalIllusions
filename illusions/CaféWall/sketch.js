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

  numStrips = SIZE / squareSize;
}

function draw() {
  background(255);

  stroke(128);
  strokeWeight(2);

  // for each row
  for (let row = 0; row <= numStrips; row++) {
    // shift if the row is odd
    let xOffset = (row % 2) * offset;
    // for every col
    for (let col = -1; col <= numStrips; col++) {
      // black if diagonal is odd
      let isBlack = (col + row) % 2 != 0;
      fill(isBlack ? 0 : 255);
      square(col * squareSize + xOffset, row * squareSize, squareSize);
    }
  }
}

function windowResized() {
  canvasElement.position(
    windowWidth / 2 - SIZE / 2,
    windowHeight / 2 - SIZE / 2
  );
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
