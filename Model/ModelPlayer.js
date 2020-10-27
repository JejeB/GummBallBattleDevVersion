class ModelPlayer extends Player{
  constructor(numPlayer,player) {
    super(numPlayer)
    //Set active Touch for each player
    this.numPlayer=numPlayer;
    this.leftKey=player.getLeftKey()
    this.rightKey=player.getRightKey()
    this.colorm=player.getColor();
    this.score=player.getScore()
    //Setup your own variable here


  }
  //Function call when the player press is right key
  rightPressed(){
    print("J"+this.numPlayer +"pressed right")
  }
  //Function call when the player press is left key
  leftPressed(){
    print("J"+this.numPlayer +"pressed left")
  }
}
