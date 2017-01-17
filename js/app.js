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
