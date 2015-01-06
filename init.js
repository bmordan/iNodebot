var five = require('johnny-five');
var events = require('events');
var board = new five.Board();

var Socket = require('./Contact/socket');
var Piezo  = require('./Intent/piezo');
var Motor  = require('./Intent/motor');
var Servo  = require('./Intent/servo');
var Sensor = require('./Feeling/sensor');
var Mode   = require('./Attention/mode');

board.on('ready',function(){

  var socket  = new Socket('http://192.168.50.35:3000');
  var piezo   = new Piezo(five);
  var motor   = new Motor(five);
  var eyes    = new Servo(five); 
  var sensor  = new Sensor(five);
  var feeling = new events.EventEmitter();
  mode = new Mode(feeling);
  
  socket.connection.on('motor', function(data){
    console.log(data)
    motor[data.fn]()
  });
  
  board.repl.inject({
    eyes: eyes
  });
  // board.repl.inject({
  //   mode: mode
  // });

  // sensor.sharpDistanceStream(feeling);

  // feeling.on('Follow', function(){
  //   eyes.stop();
  // });

  // feeling.on('Search', function(){
  //   console.log(eyes.position)
  // });

});
