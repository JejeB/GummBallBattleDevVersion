class ModelGame extends Game{
  constructor(players){
    super(players) // The game need th players list to be created to setup the key handler

  }
// This function is call in the infinite loop, is where all the display will be done
  show(){
    background(200,0,200)
    fill(0,0,0)
    text("THIS IS A MODEL FOR GAME AND ITS DOING NOTHING ",400,400)
  }
}
