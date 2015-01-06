function Socket (server){
  this.socket = require('socket.io-client')(server);
}
Socket.prototype.msg = function(msg){
  this.socket.emit('msg',{msg: msg});
}
module.exports = Socket
