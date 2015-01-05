function Servo (five){
  this.sharpDistanceSensor = new five.Servo(11)
}
Servo.prototype.left  = function(){
  this.sharpDistanceSensor.to(120)
}
Servo.prototype.right = function(){
  this.sharpDistanceSensor.to(45)
}
Servo.prototype.center = function(){
  this.sharpDistanceSensor.to(90)
}
module.exports = Servo