var five = require('johnny-five');
var board = new five.Board();
var Contact = require('./Contact/socket');
var Piezo = require('./Intent/piezo');
var Motor = require('./Intent/motor');
board.on('ready',function(){
  var contact = new Contact('http://192.168.0.4:3000');
  var piezo = new Piezo(five);
  var motor = new Motor(five);
  contact.msg('I\m ready!');
  piezo.awaken();
  contact.socket.on('motor', function(data){
    console.log(data.fn)
    motor[data.fn]()
  });
});
