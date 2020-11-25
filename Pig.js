class Pig{
    constructor(x,y){

        var rest = {
            restitution : 0.8,
            density : 1,
            friction : 1
       }

       this.body = Bodies.rectangle(x,y,50,50,rest);
       this.width = 50 ;
       this.height = 50 ;
       World.add(myWorld,this.body);

    }

    display(){
        var pos=this.body.position;
        var angle  = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("red");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}