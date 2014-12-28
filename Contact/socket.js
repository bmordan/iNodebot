function Contact (server){
  this.socket = require('socket.io-client')(server);
}
Contact.prototype.msg = function(msg){
  this.socket.emit('msg',{msg: msg});
}
module.exports = Contact
