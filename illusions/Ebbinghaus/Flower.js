class Flower {
  constructor(
    flowerX,
    flowerY,
    petalNum,
    centerD,
    petalD,
    distance,
    centerCol,
    petalCol
  ) {
    this.flowerX = flowerX;
    this.flowerY = flowerY;
    this.centerD = centerD;
    this.petalD = petalD;
    this.petalNum = petalNum;
    this.distance = distance;
    this.centerCol = centerCol;
    this.petalCol = petalCol;
  }

  petal(angle) {
    let x = this.distance * cos(angle);
    let y = this.distance * sin(angle);
    fill(this.petalCol);
    circle(x, y, this.petalD);
  }

  drawFlower() {
    push();
    translate(this.flowerX, this.flowerY);
    fill(this.centerCol);
    circle(0, 0, this.centerD);
    for (let i = 0; i < this.petalNum; i++) {
      this.petal(TWO_PI * (i / this.petalNum));
    }
    pop();
  }

  removePetals() {
    push();
    translate(this.flowerX, this.flowerY);
    fill(this.centerCol);
    circle(0, 0, this.centerD);
    pop();
  }
}
