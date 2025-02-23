class Circle {
  constructor(x, y, diameter, rotationDegree, nCircles, maskColor) {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.nCircles = nCircles;
    this.rotationDegree = rotationDegree;
    this.maskColor = maskColor;
    this.strokeWidth = 2;
  }

  drawCircle() {
    noFill();
    strokeWeight(this.strokeWidth);

    for (let i = 0; i < this.nCircles; i++) {
      circle(0, 0, this.diameter * i + this.diameter);
    }
  }

  drawMask() {
    beginClip();
    square(0, 0, this.diameter * this.nCircles);
    endClip();

    noFill();
    stroke(this.maskColor);

    for (let i = 0; i < this.nCircles; i++) {
      circle(0, 0, this.diameter * i + this.diameter);
    }
  }

  drawShape() {
    push();
    translate(this.x, this.y);
    rotate(this.rotationDegree);
    this.drawCircle();
    this.drawMask();
    pop();
  }
}

function touchMoved() {
  return;
}