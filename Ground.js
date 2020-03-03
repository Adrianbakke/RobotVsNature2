class Ground {
  constructor() {
    this.points = (Array(10).fill()).map(_ => random(10,60));
    this.groundY = [...Array(innerWidth).keys()].map(x => this.Y(x));
    this.lengthGround = this.groundY.length;
  }

  Y(x) {
    let func = 0;
    let sign = 1;
    for (let i=0; i<this.points.length; i++) {
      sign *= -1;
      func += sign * this.points[i] * sin(x/(this.points[i]*5));
    }
    return (baseline + func);
  }

  slope(x) {
    return (this.Y(x-0.001)-this.Y(x))/0.001;
  }

  angle(x) {
    return atan(this.slope(x));
  }
  
  moveX(sign) {
    if (sign>0) {
      this.groundY = (this.groundY
                           .slice(robotSpeed)
                           .concat(([...Array(robotSpeed).keys()]
                           .map(x => this.Y(x+this.lengthGround)))));
      this.lengthGround += robotSpeed; 
    } else {
      this.groundY = (([...Array(robotSpeed).keys()]
                            .map(x => this.Y(x-(this.groundY.length-this.lengthGround)-robotSpeed)))
                            .concat(this.groundY.slice(0,-1*robotSpeed)));
      this.lengthGround -= robotSpeed; 
    }
  }

  display() {
    beginShape();
    for (let i = 0; i<innerWidth; i++) {
      curveVertex(i, this.groundY[i]);
    }
    endShape();
  }
}

