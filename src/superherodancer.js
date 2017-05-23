var makeSuperHeroDancer = function(top, left, timeBetweenSteps) {
//  this.oldStep = makeDancer.prototype.step;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('superHeroDancer');
};

makeSuperHeroDancer.prototype = Object.create(makeDancer.prototype);
makeSuperHeroDancer.prototype.constructor = makeSuperHeroDancer;
makeSuperHeroDancer.prototype.oldStep = makeDancer.prototype.step;

makeSuperHeroDancer.prototype.step = function() {
  this.oldStep();
  this.$node.toggle();
};
