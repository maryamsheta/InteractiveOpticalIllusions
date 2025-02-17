const SIZE = 300;
let canvasElement;

let rectY = 75;

function setup() {
  canvasElement = createCanvas(SIZE, SIZE);
  canvasElement.position(
    windowWidth / 2 - SIZE / 2,
    windowHeight / 2 - SIZE / 2
  );

  colorMode(HSB);
  rectMode(CENTER);
}

function draw() {
  background(255);
  strokeWeight(1);

  for (let x = 0; x < width + 1; x++) {
    let b = map(x, width, 0, 0, 100);
    stroke(0, 0, b);
    line(x, 0, x, height / 2);
  }

  strokeWeight(2.5);
  line(0, height / 2, width, height / 2);

  fill(0, 0, 40);
  strokeWeight(0);

  rect(50, rectY, 20, 50);
  rect(100, rectY, 20, 50);
  rect(150, rectY, 20, 50);
  rect(200, rectY, 20, 50);
  rect(250, rectY, 20, 50);

  noFill();
  strokeWeight(2);

  rect(50, 225, 20, 50);
  rect(100, 225, 20, 50);
  rect(150, 225, 20, 50);
  rect(200, 225, 20, 50);
  rect(250, 225, 20, 50);
}

function mouseDragged() {
  rectY = constrain(rectY + (mouseY - pmouseY) * 0.5, 75, 225);
}

function windowResized() {
  canvasElement.position(
    windowWidth / 2 - SIZE / 2,
    windowHeight / 2 - SIZE / 2
  );
}

function touchStarted() {
  return false; 
}
