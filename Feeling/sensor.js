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
Sensors.prototype.sharpDistanceStream = function(){
  this.sharpDistanceSensor.on('data', function(){
    if(mode.is !== 'Track') return
    if(this.value > 200 && this.value < 300){
      if(mode.focus !== 'Follow')
        mode.setFocus('Follow')
    }else{
      if(mode.focus !== 'Search')
        mode.setFocus('Search')
    }
  });
}
module.exports = Sensors;