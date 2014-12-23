var five = require('johnny-five');
var io   = require('socket.io')();
var Piezo = require('./Piezo');
var socket = require('socket.io-client')('http://192.168.0.13');
var board = new five.Board();


board.on('ready',function(){
  
  var piezo = new Piezo(five);
  piezo.awaken();

  socket.on('connect', function(){
    console.log('THREE LAWS SAFE iNodebot at your service')
  })

})
