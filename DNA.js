function DNA(genes){
	this.genes = [];
	if(genes){ this.genes = genes;
	}else{
		for(var i = 0; i < lifespan; i++){
			this.genes[i] = p5.Vector.random2D();
			this.genes[i].mag(0.2);
		}
	}
}