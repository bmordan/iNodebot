function Motor (five){
  this.L     = new five.Motor([9, 7])
  this.R     = new five.Motor([10,8])
  this.speed = 150
};
Motor.prototype.halt = function(){
  this.L.stop()
  this.R.stop()
};
Motor.prototype.both = function(){
  this.halt()
  this.L.start(this.speed)
  this.R.start(this.speed)
};
Motor.prototype.bothReverse = function(){
  this.halt()
  this.L.reverse(this.speed)
  this.R.reverse(this.speed)
};
Motor.prototype.leftForward = function(){
  this.L.forward(this.speed)
};
Motor.prototype.rightForward = function(){
  this.R.forward(this.speed)
};
Motor.prototype.leftReverse = function(){
  this.L.reverse(this.speed)
};
Motor.prototype.rightReverse = function(){
  this.R.reverse(this.speed)
};
Motor.prototype.leftStop = function(){
  this.L.stop()
};
Motor.prototype.rightStop = function(){
  this.R.stop()
};
module.exports = Motor;