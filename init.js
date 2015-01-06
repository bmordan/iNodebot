var five = require('johnny-five');
var events = require('events');
var board = new five.Board();

var Socket = require('./Contact/socket');
var Piezo  = require('./Intent/piezo');
var Motor  = require('./Intent/motor');
var Servo  = require('./Intent/servo');
var Sensor = require('./Feeling/sensor');

board.on('ready',function(){

  var socket = new Socket('http://192.168.0.4:3000');
  var piezo  = new Piezo(five);
  var motor  = new Motor(five);
  var eyes   = new Servo(five); 
  var sensor = new Sensor(five);
  var feeling = new events.EventEmitter();
  
  socket.socket.on('motor', function(data){motor[data.fn]()});
  board.repl.inject({
    eyes: eyes
  });
  sensor.sharpDistanceStream(feeling);
  feeling.on('startTracking', function(){
    console.log('Caught Finger');
  });

});
