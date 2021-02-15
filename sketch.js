const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter. Constraint

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;
var world;

function preload(){
	
}

function setup() {
	createCanvas(800, 800);
	engine = Engine.create();
	world = engine.world;
	
	RoofObject = new Roof (400,100,350,20);

	BobDiameter = 40;

	startBobPositionX = width/2;
	startBobPositionY = height/4+500;
	BobObject1 = new Bob(startBobPositionX-BobDiameter*2,startBobPositionY,BobDiameter)
	BobObject2 = new Bob(startBobPositionX-BobDiameter,startBobPositionY,BobDiameter)
	BobObject3 = new Bob(startBobPositionX,startBobPositionY,BobDiameter)
	BobObject4 = new Bob(startBobPositionX+BobDiameter,startBobPositionY,BobDiameter)
	BobObject5 = new Bob(startBobPositionX+BobDiameter*2,startBobPositionY,BobDiameter)


	rope1 = new Rope(BobObject1.body,RoofObject.body,-BobDiameter*4,0)
	rope2 = new Rope(BobObject2.body,RoofObject.body,-BobDiameter*2,0)
	rope3 = new Rope(BobObject3.body,RoofObject.body,0,0)
	rope4 = new Rope(BobObject4.body,RoofObject.body,BobDiameter*2,0)
	rope5 = new Rope(BobObject5.body,RoofObject.body,BobDiameter*4,0)

	Engine.run(engine); 
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  RoofObject.display();
  BobObject1.display();
  BobObject2.display();
  BobObject3.display();
  BobObject4.display();
  BobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display()
  rope5.display();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(BobObject1.body, BobObject1.body.position, {x:-250, y: -50})
	}
}


