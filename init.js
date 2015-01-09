var five = require('johnny-five');
var events = require('events');
var board = new five.Board();

var Socket   = require('./Contact/socket');
var Distance = require('./Contact/distance')
var Piezo    = require('./Intent/piezo');
var Motor    = require('./Intent/motor');
var Servo    = require('./Intent/servo');
var Mode     = require('./Attention/mode');

board.on('ready',function(){
  var move   = new Motor(five);
  var socket = new Socket('http://localhost:3000');
  var piezo  = new Piezo(five);
  var eyes   = new Distance(five);
  // var sensor  = new Sensor(five);
  // var feeling = new events.EventEmitter();
  
  // socket.msg('ready');
  // socket.connection.on('motor', function(data){
  //   console.log(data)
  //   motor[data.fn]()
  // });
  
  // INIT FUNCTION FOR LATER
  piezo.note();
  setTimeout(function(){
    move.stop()
  }, 1000);
  move.forward(50);

  board.repl.inject({
    eyes: eyes
  });
  board.repl.inject({
    move: move
  });

});
