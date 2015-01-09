function Distance (five){
  this.detector = new five.Sensor('A1');
}
Distance.prototype.see = function(){
  return this.detector.value
}
module.exports = Distance