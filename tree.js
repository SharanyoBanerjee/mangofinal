class Tree{
    constructor(x,y,width,height){
        var options = {
            isStatic:true,
            restitution:0,
            friction:0,
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage("tree.png")
        World.add(world, this.body);

    }
    display(){
        var treepos = this.body.position;
        
        push()
        translate(treepos.x,treepos.y);
        imageMode(CENTER)
        strokeWeight(3);
        image(this.image,0,0,500,600);
        pop()
    }
}