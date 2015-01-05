function Sensors(five) {
  this.foot = new five.IR.Reflect.Array({
    emitter: 'A4',
    pins: ['A2','A3']
  });
  this.head = new five.Sensor('A1');
}
Sensors.prototype.readFoot = function(){
  this.foot.on('data', function(err, data){
    console.log(data[0],data[1])
  });
}
Sensors.prototype.readHead = function(){
  this.head.on('data', function(){
    console.log(this.value)
  });
}
module.exports = Sensors;