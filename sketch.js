const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var bining, bin;

function preload(){
    binImg = loadImage("Image/dustbingreen.png");
}
function setup(){
	var canvas = createCanvas(1200, 600);
    engine = Engine.create();
	world = engine.world;

    ground = new ground();
	crumpledpaper = new paper();

    bin = createSprite(954, 520, 20, 20);
	bin.addImage(binImg);
    bin.scale = 0.45;

    binPart1 = new dustbin(902, 520, 10, 120);
    binPart2 = new dustbin(962, 565, 130, 10);
	binPart3 = new dustbin(1024, 505, 10, 120);
}

function draw(){
	background(0);
	Engine.update(engine);

    //text(mouseX, mouseY, 200, 200);


	ground.display();
	crumpledpaper.display();
	binPart1.display();
	binPart2.display();
	binPart3.display();

	drawSprites();
}

function keyPressed(){
	if(keycode --- UP_ARROW){
		Matter.Body.applyforce(crumpledpaper.body, postion.x, position.y);
	}
}