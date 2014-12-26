var five = require('johnny-five');
var board = new five.Board();
var Contact = require('./Contact/socket');
var Piezo = require('./Intent/piezo');
var Motor = require('./Intent/motor');

board.on('ready',function(){
  var contact = new Contact();
  var piezo = new Piezo(five);
  var motor = new Motor(five);
  contact.msg('I\m ready!')
  contact.socket.on('motor', function(data){
    console.log(data.fn)
    motor[data.fn]()
  });
  
});
