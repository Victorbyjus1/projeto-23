

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var plane_optinos={
		isStatic: true
	}

	rotator1 = Bodies.rectangle(250,200,150,20,rotator_options);
	World.add(world,rotator1);

	Matter.Boddy.rotate(rotator1,angle1)
	push();
	translate(rotator1.position.x,rotator1.position.y);
	rotate(angle1);
	rect(0,0,150,20);
	pop();
	angle1 +=0.2;


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(green);

  Engine.update(engine);
  
  drawSprites();
 
}



