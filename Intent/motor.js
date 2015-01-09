function Motor (five){
  this.L     = new five.Motor([9, 7]);
  this.R     = new five.Motor([10,8]);
  this.speed = 50;
};
Motor.prototype.forward = function(){
  this.L.forward(this.speed);
  this.R.forward(this.speed);
};
Motor.prototype.reverse = function(){
  this.L.reverse(this.speed);
  this.R.reverse(this.speed);
};
Motor.prototype.stop = function(){
  this.L.stop();
  this.R.stop();
};
Motor.prototype.leftForward = function(){
  this.L.forward(this.speed);
};
Motor.prototype.leftReverse = function(){
  this.L.reverse(this.speed);
};
Motor.prototype.leftStop = function(){
  this.L.stop();
};
Motor.prototype.rightForward = function(){
  this.R.forward(this.speed);
};
Motor.prototype.rightReverse = function(){
  this.R.reverse(this.speed);
};
Motor.prototype.rightStop = function(){
  this.R.stop();
};
module.exports = Motor;