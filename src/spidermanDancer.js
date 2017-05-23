var makeSpidermanDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('spidermanDancer');
};

makeSpidermanDancer.prototype = Object.create(makeDancer.prototype);
makeSpidermanDancer.prototype.constructor = makeSpidermanDancer;
makeSpidermanDancer.prototype.oldStep = makeDancer.prototype.step;

makeSpidermanDancer.prototype.step = function() {
  this.oldStep();
  //this.$node.toggle();
};
