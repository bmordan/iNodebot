var five = require('johnny-five');
var board = new five.Board();

var Contact = require('./Contact/socket');
var Piezo   = require('./Intent/piezo');
var Motor   = require('./Intent/motor');
var Servo   = require('./Intent/servo');
var Sensor  = require('./Feeling/sensor');

board.on('ready',function(){
  var contact = new Contact('http://192.168.0.4:3000');
  var piezo   = new Piezo(five);
  var motor   = new Motor(five);
  var eyes   = new Servo(five); 
  var sensor  = new Sensor(five);
  contact.socket.on('motor', function(data){motor[data.fn]()});
  // sensor.readFoot();
  // sensor.readHead();
  board.repl.inject({
    eyes: eyes
  });
});
