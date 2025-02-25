const SIZE = 300;
let canvasElement;

let rectS = 5;

let squareS;
let squareX = 0;
let squareY = 0;

let squareSpeedX = 3;
let squareSpeedY = 3;
let moveSquare = true;

function setup() {
  canvasElement = createCanvas(SIZE, SIZE);
  canvasElement.position(
    windowWidth / 2 - SIZE / 2,
    windowHeight / 2 - SIZE / 2
  );
  canvasElement.mouseClicked(toggleMove);

  squareS = width / 2;
  noStroke();
}

function draw() {
  randomSeed(1);
  drawNoise();

  if (moveSquare) {
    bounceSquare();
  }
}

function drawNoise() {
  for (let x = 0; x <= width; x += rectS) {
    for (let y = 0; y <= height; y += rectS) {
      let fillR = random() > 0.5 ? 255 : 0;
      
      if (
        x >= squareX &&
        x < squareX + squareS &&
        y >= squareY &&
        y < squareY + squareS
      ) {
        fillR = 255 - fillR;
      }

      fill(fillR);
      rect(x, y, rectS, rectS);
    }
  }
}

function bounceSquare() {
  squareX += squareSpeedX;
  squareY += squareSpeedY;

  if (squareX <= 0 || squareX + squareS >= SIZE) {
    squareSpeedX *= -1;
  }
  if (squareY <= 0 || squareY + squareS >= SIZE) {
    squareSpeedY *= -1;
  }
}

function toggleMove() {
  moveSquare = !moveSquare;
}

function windowResized() {
  canvasElement.position(
    windowWidth / 2 - SIZE / 2,
    windowHeight / 2 - SIZE / 2
  );
}
