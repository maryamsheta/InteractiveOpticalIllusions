const SIZE = 300;
let canvasElement;

let animate = false;

let mergeFactor = 0;
let mergeDirection = 1;

function setup() {
  canvasElement = createCanvas(SIZE, SIZE);
  canvasElement.position(
    windowWidth / 2 - SIZE / 2,
    windowHeight / 2 - SIZE / 2
  );
  canvasElement.mouseClicked(toggleAnimate)
}

function draw() {
  background(255);

  push();
  translate(width / 2, height / 2);

  stroke(0, 0, 119);
  strokeWeight(1);

  for (let i = -12; i < 12; i++) {
    let y = lerp(i * 95, 0, mergeFactor);
    line(-width, y, 0, 0);
    line(width, y, 0, 0);
  }
  pop();

  stroke(255, 0, 0);
  strokeWeight(2.5);
  line(120, 0, 120, height);
  line(180, 0, 180, height);

  if (animate) {
    mergeFactor += 0.005 * mergeDirection;

    if (mergeFactor >= 1 || mergeFactor <= 0) {
      mergeDirection *= -1;
      animate = !animate;
    }
  }
}

function toggleAnimate() {
  animate = !animate;
}

function windowResized() {
  canvasElement.position(
    windowWidth / 2 - SIZE / 2,
    windowHeight / 2 - SIZE / 2
  );
}

function touchMoved() {
  return false; 
}
