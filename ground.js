//class for ground
class Ground{
    constructor(){
        this.body=Bodies.rectangle(500,690,1000,20,{isStatic:true});
	    World.add(world,this.body);
    }
    display(){
        fill("brown");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,1000,20);
    }
}