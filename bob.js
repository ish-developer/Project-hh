class Bob{
    constructor(x,y,radius){
        var options = {
            isStatic : true,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x,y,radius,options)
        this.radius=radius
        World.add(world,this.body)
    }

    display(){
        fill("yellow")
        var pos = this.body.position
        var angle = this.body.angle
        push();
        rotate(angle);
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,this.body.radius) 
        pop();
    }

}