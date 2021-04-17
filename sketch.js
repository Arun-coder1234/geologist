
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stone, plane, hammer, rubber;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	stone = new Stone(700, 320, 70, 70);

	plane =new Plane(600, 330, 1200, 20);
	
	hammer = new Hammer(300, 300);

	rubber = new Rubber(500, 320);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  stone.display();
  plane.display();
  hammer.display();
  rubber.display();
  
  
 
}



