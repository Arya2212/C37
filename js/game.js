class Game {
     constructor(){
    

     }
     getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
        gameState = data.val();
    })
  }
update(state){
database.ref('/').update({ gameState: state
});
}
async start(){
    if(gameState === 0){
      
        player = new Player()
        var playerCountref=await database.ref("playerCount").once("value")
        if(playerCountref.exists()){
          playerCount=playerCountref.val();
          player.getCount();
        }
        
        form = new Form();
        form.display();
    }

   }
   play()
   {
     form.hideForm(1)
     textSize(30);
     text("gameStart",150,100);
     Player.getPlayerInfo();
     if(allPlayers!==undefined){
       var displayPosition=200;
       for(var i in allPlayers){
         if(i==="player"+player.index){
           fill("red");
         }
         else{
           fill ("black")
         }
         displayPosition=displayPosition+20;
         textSize(15);
         text(allPlayers[i].name+":"+allPlayers[i].distance,120,displayPosition);
       }
     }
        if(keyIsDown(UP_ARROW)&& player.index!==null){
          player.distance=player.distance+20;
          player.update();
        }
  }
}