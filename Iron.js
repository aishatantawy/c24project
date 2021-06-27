class Iron{
	constructor(x,y,width,height)
	{
	var options ={
		'restitution': 0.8, 
		'friction': 3,
		'density': 30
	}
		this.x=x;
		this.y=y;
		this.body=Bodies.rectangle(x,y,width,height);
		World.add(world, this.body);
	}
	display()
	{
			var rubberpos=this.body.position;		
			push();
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER);
			strokeWeight(4);
			stroke("black");
			fill("red");
			pop();
	}

}