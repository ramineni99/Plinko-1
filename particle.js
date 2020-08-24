class Particle {
    constructor (x,y,radius) {
        var options = {
          isStatic:false,
          restitution:0,
          friction:0,
          density:1.2,
        }
    this.body = Bodies.circle(x,y,radius,options);
    this.radius=radius;
    this.color=color(random(0,255),random(0,255),random(0,255));
    World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        ellipseMode(CENTER);
        fill(this.color);
        stroke("white");
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}