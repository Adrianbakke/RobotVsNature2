class Robot {
  constructor(x, y, imgs) {
    this.x = x;
    this.y = y;
    this.groundy = y;
    this.imgs = imgs;
    this.imgNum = 0;
    this.velocity = -40;
    this.gravity = 4;
    this.jump = false;
  }

  moveX(sign) {
    this.x += 10*sign;
    if (this.x%40 == 0) {
      this.imgNum = (this.imgNum+1)%(this.imgs.length-1);
    }
  }

  moveY() {
    this.velocity += this.gravity;
    this.y += this.velocity;
    if (this.y > this.groundy) {
      this.jump = false;
      this.y = this.groundy;
      this.velocity = -40;
      this.imgNum = 1;
    }
  }

  display() {
    if (this.jump) {
      this.imgNum = 4;
    }
    image(this.imgs[this.imgNum], this.x-50, this.y-135);
    this.moveRobot();
  }

  moveRobot() {
    if (keyIsDown(RIGHT_ARROW)) {
      this.moveX(1);
    }

    if (keyIsDown(LEFT_ARROW)) {
      this.moveX(-1);
    }

    if (keyIsDown(UP_ARROW) || this.jump) {
      this.jump = true;
      this.moveY();
    }
  }

}