class Obstacle {
  constructor() {
    this.size = 200;
    this.x = width;
    this.y = height - this.size;
  }
  show() {
    image(oImg, this.x, this.y, this.size, this.size);
  }

  move() {
    this.x = this.x - 6;
  }
}
