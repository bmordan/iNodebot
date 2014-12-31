var five = require('johnny-five');
var board = new five.Board();
var Contact = require('./Contact/socket');
var Piezo   = require('./Intent/piezo');
var Motor   = require('./Intent/motor');
var Sensor  = require('./Feeling/sensor');
board.on('ready',function(){
  var contact = new Contact();
  var piezo = new Piezo(five);
  var motor = new Motor(five);
  var sensor = new Sensor(five);
  contact.msg('I\m ready!');
  //piezo.awaken();
  sensor.array.on('data', function(err, data){
    console.log("L:%s |%s| %s:R", data[0],data[1],data[2])
  });
  contact.socket.on('motor', function(data){motor[data.fn]()});
});
