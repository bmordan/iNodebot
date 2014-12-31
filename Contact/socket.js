function Contact (){
  this.socket = require('socket.io-client')('http://192.168.0.4');
}
Contact.prototype.msg = function(msg){
  this.socket.emit('msg',{msg: msg});
}
module.exports = Contact