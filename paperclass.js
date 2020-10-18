class paperclass{
    constructor (x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2,
            
        }
       this.radius=radius;
       this.ballimage = loadImage("paper.png");
        this.body=Bodies.circle(x,y,this.radius,options)
        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS)
        fill("pink");
        ellipse(0,0,this.radius,this.radius)
        image(this.ballimage, this.body.position.x, this.body.position.y);
        pop();
    }
    
     }
