class Division{
    constructor (x,y,width,height) {
        var options = {
          isStatic:true
        }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width
    this.height = height;
    World.add(world,this.body)
    }
    display(){
        push();
        var angle = this.body.angle;
        var pos = this.body.position
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
      
        fill("red");
        stroke("white");
        rect(0,0,this.width,this.height);
        pop();
    }
}