class Box extends BaseClass{
        constructor(x,y,width,height){
        var option={density:350}
        super(x,y,width,height,option);
        Matter.Body.setStatic(this.body,true);
    }
}