function Mode (feeling){
  this.is    = 'Track';
  this.mood  = feeling;
  this.focus = undefined;
}
Mode.prototype.setMode = function(newMode){
  this.is = newMode;
  this.mood.emit(newMode);
}
Mode.prototype.setFocus = function(newFocus){
  this.focus = newFocus;
  this.mood.emit(newFocus);
}
module.exports = Mode;