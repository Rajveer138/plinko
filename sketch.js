  
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var particles = [];
var plinkos = [];

function setup() {
  createCanvas(800,400);
  background(0);
  engine=Engine.create();
world = engine.world

  ground=new Ground(400,370,800,10);

  for(var j = 40;j <=width; j=j+50){
    plinkos.push(new Plinko(j,75));
  }
  for(var j = 15; j <=width-10; j=j+50) {
    plinkos.push( new Plinko(j,175));
  }



  division = new Division(100,290,10,150);
  division2 = new Division(200,290,10,150);
  division3 = new Division(300,290,10,150);
  division4= new Division(400,290,10,150);
  division5 = new Division(500,290,10,150);
  division6 = new Division(600,290,10,150);
  division7 = new Division(700,290,10,150);
  
}

function draw() {
  background(0);  
  Engine.update(engine);
  if(frameCount%60===0){
    particles.push(new Particle(random(800,10),10,10));
  }
  ground.display();
  division.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  for(var i = 0;i<plinkos.length;i++){
    plinkos[i].display();
  }
  for(var j = 0;j<particles.length;j++){
    particles[j].display();
  }
  drawSprites();
}