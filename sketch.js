var playercount,form;
var gamestate=0;
var database;
var game;

function setup(){
    var canvas = createCanvas(400,400)
    
    database = firebase.database();

    game = new Game();
    game.getstate();
    game.start();
}


function draw(){
    //background("white");
   

}
