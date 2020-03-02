const gravity = 4;
const velocity = -40;
const baseline = 500;
const changeImage = 30;
const robotSpeed = 20;

function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(30);
  robot = new Robot(0, 535);
  ground = new Ground();
}

function draw() {
  background(255,255,255);
  robotGroundLogic();
  ground.display();
  robot.display();
}

function robotGroundLogic() {
  robot.groundy = ground.groundPoints[robot.posX];
  if ((ground.angle(robot.posX)<(PI/2)-0.5) && !robot.jump) {
    robot.y = robot.groundy;
  } else {
    console.log("stop");
  }
  if (robot.x>1000 && robot.x<4000)  {
    robot.groundMove = true;
  } else {
    robot.groundMove = false;
  }
}

