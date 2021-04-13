class Mango {

    constructor(x,y)
    {

        var options = {
            'isStatic' :true,
            'restitution':0,
            'friction':1
        }
        this.width=60;
        this.height=70;
        this.body=Bodies.rectangle(x,y,50,40,options);

        this.image = loadImage("mango.png");
        World.add(world,this.body);
    }

    display()
    {
        fill("green");
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
       
    }
}