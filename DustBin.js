class dustBin {
    constructor(x,y,width,height){
        this.sprite=createSprite(x,y,width,height);
        this.image=loadImage("sprites/dust bin.png");
        this.sprite.addImage("img",this.image);
        this.sprite.scale=0.5;
    }

    display(){
        console.log(this.sprite.height)
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
    }
}