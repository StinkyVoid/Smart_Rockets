var lifespan = 200;
var lifeP = 0;
var target = {};
var popl;
function setup(){
	createCanvas(windowWidth,windowHeight);
	target = {
		x:width/2,
		y:height/5,
		r:width/20
	};
	popl = new Population();
}
function draw(){
	background(0);
	ellipse(target.x,target.y,target.r,target.r);
	popl.update();
}