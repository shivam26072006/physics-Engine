const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;

function setup(){

createCanvas(600,600);

myEngine = Engine.create();
myWorld = myEngine.world;

var rest = {
  isStatic : true 
}

box = Bodies.rectangle(300,300,50,150,rest);
World.add(myWorld,box);

}

function draw() {

background(0);
Engine.update(myEngine);

var pos=box.position;
rect(pos.x,pos.y,50,150);
console.log(box.position.y);

}