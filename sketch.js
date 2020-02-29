function setup() {
  let img1 = loadImage('images/Robot_1.png'); // Load the image
  let img2 = loadImage('images/Robot_2.png'); // Load the image
  let img3 = loadImage('images/Robot_3.png'); // Load the image
  let img4 = loadImage('images/Robot_4.png'); // Load the image
  let robotImgs = [img1, img3, img2, img3, img4]
  createCanvas(innerWidth, innerHeight);
  robot = new Robot(0, 400+135, robotImgs);
  ground = new Ground();
}

function draw() {
  frameRate(30);
  background(255,255,255);
  ground.display();
  robot.groundy = ground.Y(robot.x);
  if ((ground.angle(robot.x)<(PI/2)-0.5) && !robot.jump) {
    robot.y = robot.groundy;
  } else {
    //TODO: stop
    console.log("stop");
  }
  robot.display();
}

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

  moveX(sign=1) {
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

class Ground {
  Y(x) {
    return (500 + 40 * sin(x/50));
  }

  slope(x) {
    return (this.Y(x-0.001)-this.Y(x))/0.001;
  }

  angle(x) {
    return atan(this.slope(x));
  }

  display() {
    beginShape();
    for (let i = 0; i < 1000; i++) {
      curveVertex(i, this.Y(i));
    }
    endShape();
  }
}
