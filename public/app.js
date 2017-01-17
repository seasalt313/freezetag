(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// 1) Player constructor
//- name
//
// 2) Team constructor
//- name
//
// 3) Sample code that should work

let Player = require('./player');
let Team = require('./team');

window.addEventListener("load", function(){
  let chaserNames = ['Janet', 'Jeb', 'Joce'];
  let runnerNames = ['Mariam', 'Mike', 'Isabel'];

  let r = new Team('runners');
  let c = new Team('chasers');
  // console.log(t.name);
  // c.add(p); // add Mr. T to the chasers team
  // console.log(p);
  console.log(c);

  for (let i = 0; i < 5; i++) {
    let next = new Player(chaserNames[i]);
    c.add(next); //add a chaser
  }

  for (var i = 0; i < runnerNames.length; i++) {
    let next = new Player(runnerNames[i]);
    r.add(next); //add a runner
  }


  // let p = new Player('Mr. Thomas');
  // console.log(p.name);



  console.log(r);
  console.log(c);

  //first chaser tags first runner
  c.roster[0].tag(r.roster[0]);//freeze
  r.roster[0].tag(c.roster[0]);//nada
  r.roster[1].tag(r.roster[0]);//unfreeze
  c.roster[2].tag(r.roster[2]);//freeze
  c.roster[3].tag(r.roster[3]);//freeze
  c.roster[0].tag(c.roster[0]);//attempted freeze
})

},{"./player":2,"./team":3}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
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

},{}]},{},[1]);
