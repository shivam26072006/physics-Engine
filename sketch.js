const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;

function setup(){

createCanvas(1200,600);

myEngine = Engine.create();
myWorld = myEngine.world;

ground = new Ground(600,590,1200,30);

box1 = new Box(800,550);
box2 = new Box(1000,550);
box3 = new Box(800,465);
box4 = new Box(1000,465);
box5 = new Box(900,400);

pig1 = new Pig(900,550);
pig2 = new Pig(900,465);

log1 = new Log(900,480,300,PI/2);
log2 = new Log(900,450,300,PI/2);
log3 = new Log(800,380,150,PI/7);
log4 = new Log(1000,380,150,-PI/7);

bird = new Bird(200,400);
 
}

function draw() {

background(0);
Engine.update(myEngine);

ground.display();

box1.display();
box2.display();
box3.display();
box4.display();
box5.display();

pig1.display();
pig2.display();

log1.display();
log2.display();
log3.display();
log4.display();

bird.display();

}