class Robot {
  constructor(x, y) {
    this.x = x;
    this.posX = x;
    this.y = y;
    this.groundy = y;
    this.imgs = this.images();
    this.imgNum = 0;
    this.velocity = velocity;
    this.gravity = gravity;
    this.jump = false;
    this.height = 135;
    this.width = 100;
    this.groundMove = false;
  }

  images() {
    let img1 = loadImage('images/Robot_1.png');
    let img2 = loadImage('images/Robot_2.png');
    let img3 = loadImage('images/Robot_3.png');
    let img4 = loadImage('images/Robot_4.png');
    return [img1, img3, img2, img3, img4];
  }

  moveX(sign) {
    this.x += robotSpeed*sign;
    if (!this.groundMove) {
      this.posX = this.x;
    } else {
      ground.moveX(sign);
    }
    if (this.x%changeImage == 0) {
      this.imgNum = (this.imgNum+1)%(this.imgs.length-1);
    }
  }

  moveY() {
    this.velocity += gravity;
    this.y += this.velocity;
    if (this.y > this.groundy) {
      this.jump = false;
      this.y = this.groundy;
      this.velocity = velocity;
      this.imgNum = 1;
    }
  }

  display() {
    if (this.jump) {
      this.imgNum = 4;
    }
    image(this.imgs[this.imgNum], this.posX-(this.width/2), this.y-this.height);
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
