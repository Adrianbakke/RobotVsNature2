class Ground {
  constructor() {
    this.points = (Array(4).fill()).map(_ => random(10,50));
    this.groundPoints = [...Array(innerWidth).keys()].map(x => this.Y(x));
  }

  Y(x) {
    let func = 0;
    for (let i=0; i < this.points.length; i++) {
      func += this.points[i] * sin(x/(this.points[i]*5));
    }
    return (500 + func);
  }

  slope(x) {
    return (this.Y(x-0.001)-this.Y(x))/0.001;
  }

  angle(x) {
    return atan(this.slope(x));
  }

  display() {
    beginShape();
    for (let i = 0; i < innerWidth; i++) {
      curveVertex(i, this.groundPoints[i]);
    }
    endShape();
  }
}

