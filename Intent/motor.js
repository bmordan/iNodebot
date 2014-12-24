function Motor (five){
  this.L     = new five.Motor([9, 7])
  this.R     = new five.Motor([10,8])
  this.speed = 100
};
Motor.prototype.drive = function(){
  this.L.start(this.speed)
  this.R.start(this.speed)
};
Motor.prototype.halt = function(){
  this.L.stop()
  this.R.stop()
}
module.exports = Motor;