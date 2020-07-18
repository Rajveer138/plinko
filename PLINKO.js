class Plinko {
    constructor(x,y) {
        var options = {
            isStatic:true
        }
        this.width = 10;
        this.body = Bodies.circle(x,y,this.width,options);
        
         
        World.add(world,this.body);
    }
    display() {
       var pos = this.body.position;
   push();
       fill("white");
       ellipseMode(RADIUS);
       ellipse(pos.x,pos.y,this.width,this.width);
       pop();
    }
}