function Rocket(tx,ty,tr){
	this.velocity = createVector(0,0);
	this.pos = createVector(width/2, height-height/8);
	this.acc = createVector(0,0);
	this.w = width/30;
	this.h = width/6;
	this.neurons = new DNA();
	this.finished = false;
	this.killed = false;
	this.target = {
		x:tx,
		y:ty,
		r:tr
	};
	this.fitness;
	this.applyForce = function(force){
		this.acc.add(force);
	}
	for(var i = 0; i < this.neurons.genes.length; i++){
		this.velocity[i] = this.neurons.genes[i];
	}
	this.checkFitness = function(){
		var d = dist(this.pos.x,this.pos.y,target.x,target.y);
		this.fitness = 1/d + 0.01;
		if(this.finished){
			this.fitness *= 10;
		}
		if(this.killed){
			this.fitness /= 10;
		}
	}
	this.update = function(){
		this.applyForce(this.neurons.genes[lifeP]);
		this.velocity.add(this.acc);
		this.pos.add(this.velocity);
		if(this.finished){
			this.pos.x = target.x;
			this.pos.y = target.y;
		}
		this.acc.mult(0);
		lifeP++;
		if(this.pos.x-this.w < this.target.x+this.target.r && this.pos.x+this.w > this.target.x-this.target.r && this.pos.y-this.h < this.target.y+this.target.r && this.pos.y+this.h > this.target.y+this.target.r){
			this.finished = true;
		}
	}
	this.show = function(){
		push();
		fill(255,176);
		rectMode(CENTER);
		translate(this.pos.x,this.pos.y);
		rotate(this.pos.heading());
		rect(0,0,this.w,this.h);
		pop();
	}
	this.crossover = function(partner){
		var mid = floor(random(this.neurons.genes.length));
		var child = new Rocket(target.x,target.y,target.r);
		for(var i = 0; i < mid; i++){
			if(i < mid){
				child.neurons.genes[i] = this.neurons.genes[i];
			}else{
				child.neurons.genes[i] = partner.neurons.genes[i];
			}
		}
		child.mutate();
		child.pos.x = width/2;
		child.pos.y = height-height/8
		return child;
	}
	this.mutate = function(){
		for(var i = 0; i < this.neurons.genes.length; i++){
			if(random(1) < 0.01){
				this.neurons.genes[i] = p5.Vector.random2D();
				this.neurons.genes[i].setMag(0.2);
			}
		}
	}
}