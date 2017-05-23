var makeHulkDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('hulkDancer');
};

makeHulkDancer.prototype = Object.create(makeDancer.prototype);
makeHulkDancer.prototype.constructor = makeHulkDancer;
makeHulkDancer.prototype.oldStep = makeDancer.prototype.step;

makeHulkDancer.prototype.step = function() {
  this.oldStep();
  this.$node.toggle();
};
