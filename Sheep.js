class Sheep {
  constructor(x) {
    this.posX = x;
    this.posY = ground.Y(x);
    this.img = loadImage('images/sheep_white.png'); 
    this.width = 131;
    this.height = 95;
    this.displacement = 0;
  }

  imgPosX() {
    return this.posX-this.displacement;
  }
  
  imgPosY() {
    return this.posY-this.height;
  }

  display() {
    image(this.img, this.imgPosX(), this.imgPosY());
  }

}
