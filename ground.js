class Ground
{
constructor(){
    var options = {
        isStatic: true 
    }
    this.object = Bodies.rectangle(200,380,400,20,options)
    World.add(world,this.object);
}
display(){
    
    rectMode(CENTER)
    fill("green")
    rect(this.object.position.x,this.object.position.y,400,20);

}

}