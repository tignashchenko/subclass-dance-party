var makeBatmanDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('batmanDancer');
};

makeBatmanDancer.prototype = Object.create(makeDancer.prototype);
makeBatmanDancer.prototype.constructor = makeBatmanDancer;
makeBatmanDancer.prototype.oldStep = makeDancer.prototype.step;
makeBatmanDancer.prototype.step = function() {
  this.oldStep();
};
