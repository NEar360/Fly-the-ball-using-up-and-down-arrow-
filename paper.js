class Paper{
    constructor(x,y,r){
        var options = {
            'density': 1.2,
            'friction': 0.0,
            'restitution': 0.3,
            'isStatic':false
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x, this.y,90, options)
        World.add(world, this.body);
        this.image = loadImage("paper.png");
    }
    display() {
        var paperpos = this.body.position;
        push()
        translate(paperpos.x, paperpos.y);
        imageMode(RADIUS);
        image(this.image, 0, 0,this.r,this.r);
       
        //draw the ellipse here to display the rubber ball
        //ellipse(this.x,this.y, this.r, this.r);
        pop()
    }
}