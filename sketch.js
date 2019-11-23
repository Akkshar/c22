const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var object,ball;

function setup() {
  var canvas = createCanvas(400,400);
  engine  = Engine.create();
  world = engine.world;
  var object_options = {
    isStatic:true
  }
  object = Bodies.rectangle(200,375,400,5,object_options);
  World.add(world,object);
  var ball_options = {
    restitution:1
  }
  ball = Bodies.circle(200,200,30,ball_options);
  World.add(world,ball);
}

function draw() {
  background(255,0,0); 
  Engine.update(engine);
  rectMode(CENTER);
  fill(127,0,255);
  rect(object.position.x,object.position.y,400,5);
  fill(51,255,51);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30);
  
}