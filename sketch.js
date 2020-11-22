const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;

function setup(){

createCanvas(600,600);

myEngine = Engine.create();
myWorld = myEngine.world;

ground = new Ground(300,590,600,20);
box = new Box(300,400,50,50);
box2 = new Box(320,350,50,100);




 
}

function draw() {

background(0);
Engine.update(myEngine);

ground.display();
box.display();
box2.display();
 

}