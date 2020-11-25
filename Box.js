class Box{
    constructor(x,y){

        var rest = {
            restitution : 0.8,
            density : 1,
            friction : 1.5
       }

       this.body = Bodies.rectangle(x,y,70,70,rest);
       this.width = 70 ;
       this.height = 70 ;
       World.add(myWorld,this.body);

    }

    display(){
        var pos=this.body.position;
        var angle  = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("blue");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}