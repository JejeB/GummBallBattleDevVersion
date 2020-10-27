var game;
var players;
// Preload function before the game start
function setup() {
  createCanvas(1280, 720);

  players=[]
  initPlayers()
  presentation()
  game = new ModelGame(players)
}
function initPlayers(){
    // Declaration of player 1
    var player1 = new Player ();
    player1.setLeftKey('a')
    player1.setRightKey('z')
    player1.setColor(color(250,0,0))
    players.push(new ModelPlayer(0,player1)) // Add player1 in the players array
    //Declaration of player 2
    var player2 = new Player ();
    player2.setLeftKey('q')
    player2.setRightKey('s')
    player2.setColor(color(0,0,250))
    players.push(new ModelPlayer(1,player2)) // Add player1 in the players array
  }
  function presentation(){
    print("This is a dev program use to dev quicker miniGame")
      print("There are " + players.length +"player already set :")
      for (var i = 0; i < players.length; i++) {

        print("- Player"+ players[i].getNum()+ "  "+players[i].getLeftKey()+" <-      ->"+ players[i].getRightKey() )
      }
  }
// If any key is typed
function keyTyped() {
  game.keyGestion();
}
// Loop program
function draw() {
  background(220);
  game.show();

}
//If mouse is pressed
function mousePressed() {
}
