class Plinko {
    constructor (x,y,radius) {
        var options = {
          isStatic:true,
          restitution:0,
          friction:0,
          density:1.2,
        }
    this.body = Bodies.circle(x,y,radius,options);
    this.radius=radius;
   
    World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        ellipseMode(CENTER);
        fill("blue");
        stroke("white");
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}