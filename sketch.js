function setup() {
  let img1 = loadImage('images/Robot_1.png'); // Load the image
  let img2 = loadImage('images/Robot_2.png'); // Load the image
  let img3 = loadImage('images/Robot_3.png'); // Load the image
  let img4 = loadImage('images/Robot_4.png'); // Load the image
  let robotImgs = [img1, img3, img2, img3, img4]
  let randNums = (Array(4).fill()).map(_ => random(10,50)); 
  createCanvas(innerWidth, innerHeight);
  frameRate(30);
  robot = new Robot(0, 400+135, robotImgs);
  ground = new Ground(randNums);
}

function draw() {
  background(255,255,255);
  ground.display();
  robot.groundy = ground.groundPoints[robot.x];
  if ((ground.angle(robot.x)<(PI/2)-0.5) && !robot.jump) {
    robot.y = robot.groundy;
  } else {
    //TODO: stop
    console.log("stop");
  }
  robot.display();
}

