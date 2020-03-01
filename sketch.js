function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(30);
  robot = new Robot(0, 400+135);
  ground = new Ground();
}

function draw() {
  background(255,255,255);
  robotGroundLogic();
  ground.display();
  robot.display();
}

function robotGroundLogic() {
  robot.groundy = ground.groundPoints[robot.x];
  if ((ground.angle(robot.x)<(PI/2)-0.5) && !robot.jump) {
    robot.y = robot.groundy;
  } else {
    //TODO: stop
    console.log("stop");
  }
}

