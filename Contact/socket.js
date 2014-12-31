<<<<<<< HEAD
function Contact (){
  this.socket = require('socket.io-client')('http://192.168.0.4');
=======
function Contact (server){
  this.socket = require('socket.io-client')(server);
>>>>>>> 8a09144ab508bd3e33362479d1093439a60b5bbf
}
Contact.prototype.msg = function(msg){
  this.socket.emit('msg',{msg: msg});
}
module.exports = Contact
