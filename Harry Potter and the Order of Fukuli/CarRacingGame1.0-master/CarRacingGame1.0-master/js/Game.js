class Game {
  constructor(){

  }
 //there are two types of functions- getters and setters;
 //this is a getter function
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  //this is a setter function
  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }

    }

    harry = createSprite(1500,1400);
    harry.addImage("Harry", harryImg);
    harry.scale = 0.3;
    draco = createSprite(1500,1600);
    draco.addImage("Draco", dracoImg);
    draco.scale = 0.3;
    players = [harry, draco];

  }

  play(){
    
    
   /* Player.getPlayersInfo();

    player.getPlayersAtEnd();
    */
    
    if(players !== undefined){
      background(rgb(198,135,103));
      image(ciel, -displayWidth*2, 0, displayWidth*3, displayHeight - 50);
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

    

      //x and y position of the cars
      var y = 1500 ;
      var x = 1300;

      // this (in) is called for each loop
      //The for/in statement loops through the properties of an object.
      //The block of code inside the loop will be executed once for each property.

      for(var plr in players){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        y = y + 1200;
        //use data form the database to display the cars in y direction
        x = displayWidth - players[plr].distance;
        players[index-1].x = x;
        players[index-1].y = y;

        if (index === player.index){
          /*
          stroke(10);
          fill("tomato");
          ellipse(x, y, 60, 60);
          */
          players[index-1].shapeColor = "red";
          camera.position.y = displayHeight/2;
          camera.position.x = players[index-1].x;
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

    if(player.distance > 3860){
      gameState = 2;
      player.rank+=1;
      Player.updatePlayersAtEnd(player.rank);
    }
   
    drawSprites();
  }

  end(){
    console.log("Game Ended");
    console.log(player.rank)
  }
}
