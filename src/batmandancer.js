var makeBatmanDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = makeDancer.prototype.step;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="batmanDancer"></span>');
};

makeBatmanDancer.prototype = Object.create(makeDancer.prototype);
makeBatmanDancer.prototype.constructor = makeBatmanDancer;
makeBatmanDancer.prototype.step = function() {
  this.oldStep();
  this.$node.toggle();
};
