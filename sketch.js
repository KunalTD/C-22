const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var myengine, myworld, ground, ball;

function setup() {
  createCanvas(600,600);
  myengine=Engine.create();
  myworld=myengine.world;

  var groundOptions=
  {
    isStatic:true
  }
  ground=Bodies.rectangle(300,560, 600, 10, groundOptions);
  World.add(myworld, ground);

  var ballOptions=
  {
    restitution:1.0
  }
  ball=Bodies.circle(300,100,34, ballOptions);
  World.add(myworld, ball);
}

function draw() {
  background(0);  
  
  Engine.update(myengine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 600, 30);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 25, 25)
}