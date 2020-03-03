class Sheep {
  constructor(x) {
    this.posX = x;
    this.posY = ground.Y(x);
    this.img = loadImage('images/sheep_white.png'); 
    this.width = 131;
    this.height = 95;
    this.displacement = 0;
  }

  display() {
    image(this.img, this.posX-(this.width/2)-this.displacement, this.posY-this.height)
  }

}
