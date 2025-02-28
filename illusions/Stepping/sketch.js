const SIZE = 300;
let canvasElement;

let rectW = 10;
let startX = 0;

let drawLines = true;

function setup() {
  canvasElement = createCanvas(SIZE, SIZE);
  canvasElement.position(
    windowWidth / 2 - SIZE / 2,
    windowHeight / 2 - SIZE / 2
  );

  canvasElement.mouseClicked(toggleLines);

  noStroke();
}

function draw() {
  background(255);

  if (drawLines) {
    fill(0);
    for (let i = rectW / 2; i <= width - rectW * 1.5; i += rectW * 2) {
      rect(i, 0, rectW, height);
    }
  }

  fill(0, 0, 255);
  rect(startX, height / 2 - 30, 60, 25);

  fill(255, 255, 0);
  rect(startX, height / 2 + 30, 60, 25);

  startX += 1;
  if (startX > width) {
    startX = -60;
  }
}

function toggleLines() {
  drawLines = !drawLines;
}

function windowResized() {
  canvasElement.position(
    windowWidth / 2 - SIZE / 2,
    windowHeight / 2 - SIZE / 2
  );
}
