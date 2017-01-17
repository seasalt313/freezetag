module.exports = function Team (name){
this.name = name;
this.roster = [];

  this.add = function (recruit){
    //'this' is the current team

    this.roster.push(recruit);
    //set the players team to be this team
    recruit.team = this.name;
  };

    //return true if this team has won, false if not yet
    this.won = function(enemy){ //pass runners roster in as parameter
      if (this.name === "chaser") {
        for (let i = 0; i < enemy.roster.length; i++) {
          if (enemy.roster[i].frozen === false) {
            return false;
          }
        }
        return true;

      } else if (this.name === "runner") {
        //if weve got the flag, return true
        for (let i = 0; i < this.roster.length; i++) {
          if (this.roster[i].hasFlag === true) {
            return true; //this will stop the loop
          }
        }
        return false;
      }
    };

  return this;
}
