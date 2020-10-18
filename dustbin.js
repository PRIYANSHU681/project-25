class dustbin {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.groundimage = loadImage("dustbingreen.png");
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y, this.width, this.height);
      image(this.groundimage, this.body.position.x, this.body.position.y,100,100);
    }
  };
