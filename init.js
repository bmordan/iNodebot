var five = require('johnny-five');
var socket = require('socket.io-client')('http://192.168.0.13:3000');

var board = new five.Board();
var Piezo = require('./Intent/piezo');
var Motor = require('./Intent/motor');

board.on('ready',function(){

  var piezo = new Piezo(five);
  var motor = new Motor(five);

  socket.emit('ready', {msg: 'Ready'});

  board.repl.inject({
    m: motor
  })

})
