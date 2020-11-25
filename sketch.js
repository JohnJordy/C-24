var ball
var ground
var shapetomakebox1,shapetomakebox2,shapetomakebox3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(600,350);


	engine = Engine.create();
	world = engine.world;

ball=createSprite(100,100,35,35)
ball.velocityX=25
ball.velocityY=15
ball.shapeColor='lime'
ground =createSprite(400,350,40000,50)
ground.shapeColor='cyan'
shapetomakebox1=createSprite(400,318,175,15)
shapetomakebox1.shapeColor='white'
shapetomakebox2=createSprite(306,291,15,70)
shapetomakebox2.shapeColor='white'
shapetomakebox3=createSprite(494,291,15,70)
shapetomakebox3.shapeColor='white'
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.collide(ground)
  ball.collide(shapetomakebox3)
  ball.collide(shapetomakebox2)
  ball.collide(shapetomakebox1)
  drawSprites();
 
}



