class paper{
    constructor(){
      var options={
          
        restitution:0,
          friction:0,
          denstity:1.2
      
        }
        this.body = Bodies.circle(250, 540, 20, options);
        this.width = 33;
        this.image = loadImage("Image/paper.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.postion;
        var angle = this.body.angle;
        fill("white");
        rotate(angle);
        ImageMode(CENTRE);
        image(this.image, pos.x, pos.y, 33, 33);
    }
}