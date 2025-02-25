const SIZE = 300;
let canvasElement;

let rectS = 5;

let squareS,squareX,squeareY;

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

  squareS = 40;
  squareX = random(width)
  squareY = random(height)
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

if (squareX < 0) {
  squareX = 0;
  squareSpeedX *= -1;
} else if (squareX + squareS > SIZE) {
  squareX = SIZE - squareS;
  squareSpeedX *= -1;
}

if (squareY < 0) {
  squareY = 0;
  squareSpeedY *= -1;
} else if (squareY + squareS > SIZE) {
  squareY = SIZE - squareS;
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
