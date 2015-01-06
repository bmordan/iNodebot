function Mode (feeling){
  this.is = 'Basic';
  this.mood = feeling;
}
Mode.prototype.changeTo = function(newMode){
  this.is = newMode;
  this.mood.emit(newMode);
  console.log(newMode);
}
module.exports = Mode;