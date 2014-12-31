function FrontSensor(five) {
  this.array = new five.IR.Reflect.Array({
    emitter: 'A4',
    pins: ['A2','A0','A3']
  });
  this.led = new five.Led('A4');
}
module.exports = FrontSensor;