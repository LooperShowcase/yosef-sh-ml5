class Player {
  constructor() {
    this.size = 400;
    this.x = 50;
    this.y = height - this.size;
    this.velocityY = 0;
    this.gravity = 0.5;
  }

  show() {
    image(pImg, this.x, this.y, this.size, this.size);
  }

  jump() {
    if (this.y == height - this.size) {
      this.velocityY = -25;
    }
    this.velocityY = -18;
  }

  move() {
    this.y += this.velocityY;
    this.velocityY += this.gravity;
    this.y = constrain(this.y, 0, height - this.size);
  }
  collided(curObs) {
    let isCol = collideRectRect(
      this.x,
      this.y,
      this.size-200,
      this.size-200,
      curObs.x,
      curObs.y,
      curObs.size-100,
      curObs.size-100
    );
    return isCol;
  }
}
