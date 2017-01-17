module.exports = function Player(name){
  //this object name should be set to the first parameter

  this.name = name;
  this.team = null; //team
  this.frozen = false;
  this.hasFlag = false;

  //'this' is the tagger
  //'target' is the taggee
  this.tag = function(target){
    if (this.team = 'chasers' && target.frozen === false) {
      console.log(this.name + ' froze ' + target.name);
      target.frozen = true
    } else if (this.team = 'runners' && this.team === 'runners' ) {
      console.log(this.name + ' thawed ' + target.name);
      target.frozen = false;
    }
  };


  return this;

}
