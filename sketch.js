
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world,paperCrushed;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperCrushed = new Paper(100,100,120);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  keyIsBeingPressed();

  groundObject.display();
  dustbinObj.display();
  paperCrushed.display();

}


function keyIsBeingPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperCrushed.body, paperCrushed.body.position, { x: 30, y: -90 });
	}
}
