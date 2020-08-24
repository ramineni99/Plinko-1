const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
const Constraint = Matter.Constraint;

function setup() {
  

  engine = Engine.create();
  world = engine.world
  createCanvas(800,800);
  for(var k = 0;k<=width;k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
   }
   for(var t=0;t<width;t=t+50){
     plinkos.push(new Plinko(t,75,10));
     plinkos.push(new Plinko(t,150,10));
     plinkos.push(new Plinko(t,225,10));
     plinkos.push(new Plinko(t,300,10));
     plinkos.push(new Plinko(t,375,10));

   }
 // create bodies here
  ground = new Ground(400,height,800,20);
  
  Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  if(frameCount%90==0){
    particles.push(new Particle(random(width/2-30,width/2+30),10,10));
  }

 //display bodies here
   ground.display();
   for(var e = 0;e<divisions.length;e=e+1){
    divisions[e].display();
   }
   for(var q = 0;q<plinkos.length;q=q+1){
    plinkos[q].display();
   }
   for(var w = 0;w<particles.length;w=w+1){
     particles[w].display();
   }
   drawSprites();
}
