
function setup() {
  let img1 = loadImage('images/Robot_1.png'); // Load the image
  let img2 = loadImage('images/Robot_2.png'); // Load the image
  let img3 = loadImage('images/Robot_3.png'); // Load the image
  //let img4 = loadImage('images/Robot_4.png'); // Load the image
  let robotImgs = [img1, img3, img2, img3]
  createCanvas(innerWidth, innerHeight);
  robot = new Robot(50, 400, robotImgs);
}

function draw() {
  background(255,255,255);
  robot.display();
}

class Robot {
  constructor(x, y, imgs) {
    this.x = x;
    this.y = y;
    this.levely = y;
    this.imgs = imgs;
    this.imgNum = 0;
    this.velocity = -20;
    this.gravity = 1;
    this.jump = false;
  }

  moveX(sign=1) {
    this.x += 5*sign;
    if (this.x%40 == 0) {
      this.imgNum = (this.imgNum+1)%this.imgs.length;
    }
  }

  moveY() {
    this.velocity += this.gravity; 
    this.y += this.velocity;
    if (this.y > this.levely) {
      this.jump = false;
      this.y = this.levely;
      this.velocity = -20;
    }
  }

  display() {
    image(this.imgs[this.imgNum], this.x, this.y);
    moveRobot();
  }
}

function moveRobot() {
  if (keyIsDown(RIGHT_ARROW)) {
    robot.moveX();
  }

  if (keyIsDown(LEFT_ARROW)) {
    robot.moveX(sign=-1);
  }

  if (keyIsDown(UP_ARROW) || robot.jump) {
    robot.jump = true;
    robot.moveY();
  }
}
