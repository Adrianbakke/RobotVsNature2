const gravity = 4;
const velocity = -40;
const baseline = 500;
const changeImage = 30;
const robotSpeed = 20;

function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(30);
  robot = new Robot(100, 535-135);
  ground = new Ground();
  sheep = new Sheep(1500);
}

function draw() {
  background(255,255,255);
  logic();
  ground.display();
  robot.display();
  sheep.display();
}

function logic() {
  robot.groundY = ground.groundY[robot.posX];
  if ((ground.angle(robot.posX)<(PI/2)-0.5) && !robot.jump) {
    robot.posY = robot.groundY;
  }
  if (robot.screenScroll>1000 && robot.screenScroll<4000)  {
    robot.groundMove = true;
    sheep.displacement = robot.screenScroll-1000;
  } else {
    robot.groundMove = false;
  }
  robot.boundingBox(sheep);
}

