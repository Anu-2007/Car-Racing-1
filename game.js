class Game{
constructor(){}


getState(){
    var gsr = database.ref('gameState');
    gsr.on ("value", function(data){
             gameState = data.val();
    })
}

update(State){
    database.ref("/").update({
    gameState:state 
    })
}

start(){
if(gameState === 0){
   player = new Player();
   player.getCount();

   form = new Form();
   form.display();
}
}

}