function Population(){
	this.rockets = [];
	this.pool = [];
	for(var i = 0;i < 10; i++){
		this.rockets[i] = new Rocket(target.x,target.y,target.r);
	}
	this.update = function(){
		if(lifespan >= lifeP){
			for(i = 0;i < this.rockets.length; i++){
				this.rockets[i].update();
				this.rockets[i].checkFitness();
				this.rockets[i].show();
			}
		}else{
			var roc = [];
			var n = 0;
			for(var i = 0; i < this.rockets.length; i++){
				this.rockets[i].checkFitness();
				n = this.rockets[i].fitness * 100;
				for(var j = 0; j < n; j++){
					this.pool[j] = new Rocket(target.x, target.y, target.r);
				}
			}
			for(var i = 0; i < this.rockets.length; i++){
				var partnerA = this.pool[floor(random(this.pool.length))];
				var partnerB = this.pool[floor(random(this.pool.length))];
				roc[i] = partnerA.crossover(partnerB);
			}
			rockets = roc;
			lifeP = 0;
		}
	}
}