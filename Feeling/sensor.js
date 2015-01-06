function Sensors(five) {
  this.IRReflect = new five.IR.Reflect.Array({
    emitter: 'A4',
    pins: ['A2','A3']
  });
  this.sharpDistanceSensor = new five.Sensor('A1');
}
Sensors.prototype.reflectorArrayStream = function(){
  this.IRReflect.on('data', function(err, data){
    console.log(data[0],data[1])
  });
}
Sensors.prototype.sharpDistanceStream = function(feeling){
  this.sharpDistanceSensor.on('data', function(){
    if(this.value > 200 && this.value < 250)
      feeling.emit('startTracking')
  });
}
module.exports = Sensors;